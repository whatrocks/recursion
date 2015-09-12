// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  console.log(obj);

  if (typeof obj === "string") {
    return '\"' + obj + '\"';
  }

  if (typeof obj === "number") {
    return obj.toString();
  }

  if (obj === null) {
    return "null";
  }

  if (typeof obj === "boolean") {
    return obj.toString();
  }

  if (obj instanceof Array && obj.length === 0) {
    return "[]";
  }

  if (obj instanceof Array) {

    var str = "[";

    for (var i = 0; i < obj.length; i++) {
      str = str + stringifyJSON(obj[i]) + ",";
    }

    return str.slice(0, str.lastIndexOf(",")) + "]";

  }

  if (obj === undefined) {
    return "";
  }

  if (typeof obj === "function") {
    return "";
  }

  if (typeof obj === "object") {

    var str = "{";

    for (var thing in obj) {
      if (obj[thing] === undefined || typeof obj[thing] === "function") {
        str = str;
      } else {
        str = str + stringifyJSON(thing) + ":" + stringifyJSON(obj[thing]) + ",";
      }
    }

    if (str.lastIndexOf(',') > -1 ) {
      return str.slice(0, str.lastIndexOf(",")) + "}";
    } else  {
      return str + "}";
    }
  }


};
