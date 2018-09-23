/**
 *
 * @param {String} text
 * @param {String} maxLength
 */
const shortenText = (text, maxLength) => {
  if (text.length < maxLength) return text

  let returnString = text.slice(0, maxLength) + "..."
  return returnString
}

export default shortenText