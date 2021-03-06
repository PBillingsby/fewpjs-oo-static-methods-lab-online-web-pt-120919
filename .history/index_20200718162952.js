class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }
  static titleize(string) {
    let excluded = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let newString = string.split(" ") 
    let newerString = [Formatter.capitalize(newString[0])]
    newString.map(word => {
      if (!excluded.includes(word)) {
        newerString.push(Formatter.capitalize(word))
      }
      else {
        newerString.push(word)
      }
    })
    return newerString.join(" ")
  }
}