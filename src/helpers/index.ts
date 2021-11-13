export function convertStringToDate(
  dateString: string,
  time: "start" | "end" = "start"
) {
  const dateArray = dateString.split("-").map((date) => Number(date))
  if (time === "start") {
    return new Date(dateArray[2], dateArray[1] - 1, dateArray[0])
  }
  return new Date(dateArray[2], dateArray[1] - 1, dateArray[0], 23, 59, 59)
}

export function getTimestamp(date: Date) {
  return date.getTime() / 1000
}