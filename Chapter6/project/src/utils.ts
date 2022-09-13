export function formatDate(date) {
  return date.toLocalDateString("en-US", {
    dateStyle: "medium"
  })
}