export function formatedTime(time) {
  const dateObj = new Date(time);
  return dateObj.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

export function formatedDate(date) {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
