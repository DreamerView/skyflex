// /src/stores/weather.js
import { defineStore } from 'pinia'

export const useWeatherStore = defineStore('weather', {
  state: () => ({
    loading: false,
    error: null,

    cityName: "Loading",

    // данные
    current: null,
    hourly: null,
    daily: null,

    // координаты (fallback)
    latitude: 43.25,
    longitude: 76.91
  }),

  actions: {

    // -----------------------------
    // 1) NEW: Определение локации по IP (ipwho.is)
    // -----------------------------
    async detectLocation() {
      this.loading = true
      this.error = null

      try {
        const res = await fetch('https://ipwho.is/')
        const data = await res.json()

        if (data.success && data.latitude && data.longitude) {
          this.latitude = data.latitude
          this.longitude = data.longitude
          this.cityName = `${data.city}, ${data.country}`;
        } else {
          console.warn('IP lookup failed, using fallback coords')
        }

      } catch (err) {
        console.warn('IP lookup error, using fallback coords', err)
      }

      // После определения — грузим погоду
      await this.fetchWeather()
    },

    // -----------------------------
    // 2) Загрузка погоды OpenMeteo
    // -----------------------------
    async fetchWeather() {
      this.loading = true
      this.error = null

      const url = `
        https://api.open-meteo.com/v1/forecast
          ?latitude=${this.latitude}
          &longitude=${this.longitude}
          &current_weather=true
          &hourly=temperature_2m,weathercode
          &daily=weathercode,temperature_2m_max,temperature_2m_min
          &timezone=auto
      `.replace(/\s+/g, '')

      try {
        const res = await fetch(url)
        if (!res.ok) throw new Error('API error')

        const data = await res.json()

        this.current = data.current_weather
        this.hourly = data.hourly
        this.daily = data.daily
      } catch (err) {
        this.error = 'Не получилось загрузить данные'
      } finally {
        this.loading = false
      }
    },

    // -----------------------------
    // 3) Смена координат вручную
    // -----------------------------
    setCoords(lat, lon) {
      this.latitude = lat
      this.longitude = lon
      this.fetchWeather()
    }
  }
})