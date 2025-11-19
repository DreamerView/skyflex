export function getCurrentTime(date) {
    const currentDate = !date? new Date() : date;
    const d = new Date(currentDate);
    const time = `${d.getHours()}:${String(d.getMinutes()).padStart(2, '0')}`
    return time;
}