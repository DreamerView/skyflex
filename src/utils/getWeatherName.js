import { weatherCodes } from "./weatherCodes.js"

export function getWeatherName(code) {
  return weatherCodes[code]?.en || "Неизвестно"
}