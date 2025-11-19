export function getCurrentUnixTime(date) {
  const d = date ? new Date(date) : new Date();
  return Math.floor(d.getTime()); 
}