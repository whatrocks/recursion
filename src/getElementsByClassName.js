// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node){

  var nodes = [];
  node = node || document.body;

  // compare node's classname with className
  var parts = node.className.split(' ');
  if ( parts.indexOf(className) >= 0 ) {
    nodes.push(node);
  }

  // iterate over children
  for ( var i = 0; i < node.children.length; i++ ) {
    // for each child, invoke getElementsByClassName
    var childResults = getElementsByClassName(className, node.children[i]);
    nodes = nodes.concat(childResults);
  }

  return nodes;

  /*
  // Charlie's original solution
  var result = [];

  var currentNode = document.body;

  function checkClass(current, targetClass) {

    // Need to first check if there is a classList for current element
    if (current.classList) {

      //Check current element for a match
      for (var i = 0; i < current.classList.length; i++) {
        if (current.classList[i] === targetClass){
          result.push(current);
        }
      }
    }

    // Now check the children of the current element
    var children = current.childNodes;

    if (children.length > 0) {
      for (var j = 0; j < children.length; j++) {
        // run function recursively on the children
        checkClass(children[j], targetClass);
      }
    }
  }

  // initial function call
  checkClass(currentNode, className);

  return result;
  */

};

