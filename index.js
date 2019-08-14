function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0) {
    let temp = katzDeliLine.shift()
    return temp
  }
  return "There's is nobody waiting to be served!"
}