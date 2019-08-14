function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0) {
    let temp = katzDeliLine.shift()
    return `Currently serving ${temp}.`
  }
  return "There is nobody waiting to be served!"
}