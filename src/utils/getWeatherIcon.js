import { weatherIcons } from "./iconMap.js"

export function getWeatherIcon(code) {
  return weatherIcons[code] || "/weather/cloudy.png"
}