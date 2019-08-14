function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0) {
    let temp = katzDeliLine.shift()
    return `Currently serving ${temp}.`
  }
  return "There is nobody waiting to be served!"
}

function takeANumber (list, name) {
  list.push (name)
  return `Welcome, ${name}. You are number ${list.length} in line.`
}

function currentLine(katzDeliLine) {
  let x = "The line is currently: "
  for(let i = 0; i < katzDeliLine.length; i++) {
    x = `${x} ${i + 2}. ${katzDeliLine[i]
    if(i != katzDeliLine.length - 1) {
      x = `${x},`
    }
  }
  return x
}