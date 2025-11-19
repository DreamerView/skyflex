export function windDirection(deg) {
    const directions = [
        "North",          // 0°
        "North-East",     // 45°
        "East",           // 90°
        "South-East",     // 135°
        "South",          // 180°
        "South-West",     // 225°
        "West",           // 270°
        "North-West"      // 315°
    ];
    return directions[Math.round(deg / 45) % 8];
}