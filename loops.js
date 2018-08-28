var i = 0
function whileLoop(n){
  while (n > 0){
    n = n -1
    console.log(n)
  }
  return "done"
}

function doWhileLoop(array){
  do{
    array.splice( array.indexOf(i))
  }while(array.length > 0 && incrementVariable())
  return array
}

function incrementVariable() {
  i = i + 1;
}