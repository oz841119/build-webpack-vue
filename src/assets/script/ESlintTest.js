const a = 100
function checkNum() {
  if(a = 100) { // no-cond-assign
    return true
  }
}
checkNum()