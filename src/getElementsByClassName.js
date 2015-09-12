// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here

  var result = [];

  var currentNode = document.body;

  function checkClass(current, targetClass) {

    //Checks current level for a match in the class list
    for (var i = 0; i < current.classList.length; i++) {
      if (current.classList[i] === targetClass){
        // PROBLEM - push is not appending the actual element;
        // instead, it is appending something that looks like 'body.targetClassName'
        result.push(current);
      }
    }
  }

  checkClass(currentNode, className);

  console.log(result);
  return result;

};

