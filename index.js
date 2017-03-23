function iterativeLog(array) {
  array.forEach(function(element, index){
    console.log( `${index}: ${element}`)
  })
}

function iterate(callback) {
  var array = [5, 10, 15, 20, 25, 30]
  array.forEach(callback)
  return array
}

function doToArray(array, callback){
  array.forEach(callback)
}