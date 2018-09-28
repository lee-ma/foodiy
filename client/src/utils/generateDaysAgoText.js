const generateDaysAgoText = timeInMilliseconds => {
  const timeInSeconds = Math.floor(timeInMilliseconds / 1000)
  if (timeInSeconds < 30) return "Just now"
  else if (timeInSeconds < 60) return "<1 minute ago"
  else if (timeInSeconds < 3599) return `${Math.floor(timeInSeconds / 60)} minute${timeInSeconds > 120 ? "s" : ""} ago`
  else if (timeInSeconds < 86399) return `${Math.floor(timeInSeconds / 3600)} hour${timeInSeconds > 7200 ? "s" : ""} ago`
  else if (timeInSeconds < 604799) return `${Math.floor(timeInSeconds / 86400)} day${timeInSeconds > 172800 ? "s" : ""} ago`
  else return "A long time ago"
}

export default generateDaysAgoText