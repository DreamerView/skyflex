const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const daysRu = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]

export function getCurrentDay(date) {
    if(!date) return "Неизвестно";
    const todayName = days[new Date(date).getDay()];
    return todayName;
}