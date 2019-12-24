function getAllUrlParams(url) {

  // get query string from url (optional) or window
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

  // we'll store the parameters here
  var obj = {};

  // if query string exists
  if (queryString) {

    // stuff after # is not part of query string, so get rid of it
    queryString = queryString.split('#')[0];

    // split our query string into its component parts
    var arr = queryString.split('&');

    for (var i = 0; i < arr.length; i++) {
      // separate the keys and the values
      var a = arr[i].split('=');

      // set parameter name and value (use 'true' if empty)
      var paramName = a[0];
      var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];

      // (optional) keep case consistent
      paramName = paramName.toLowerCase();
      if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();

      // if the paramName ends with square brackets, e.g. colors[] or colors[2]
      if (paramName.match(/\[(\d+)?\]$/)) {

        // create key if it doesn't exist
        var key = paramName.replace(/\[(\d+)?\]/, '');
        if (!obj[key]) obj[key] = [];

        // if it's an indexed array e.g. colors[2]
        if (paramName.match(/\[\d+\]$/)) {
          // get the index value and add the entry at the appropriate position
          var index = /\[(\d+)\]/.exec(paramName)[1];
          obj[key][index] = paramValue;
        } else {
          // otherwise add the value to the end of the array
          obj[key].push(paramValue);
        }
      } else {
        // we're dealing with a string
        if (!obj[paramName]) {
          // if it doesn't exist, create property
          obj[paramName] = paramValue;
        } else if (obj[paramName] && typeof obj[paramName] === 'string'){
          // if property does exist and it's a string, convert it to an array
          obj[paramName] = [obj[paramName]];
          obj[paramName].push(paramValue);
        } else {
          // otherwise add the property
          obj[paramName].push(paramValue);
        }
      }
    }
  }

  return obj;
}

var namespace = document.getElementById("namespace");
var name = getAllUrlParams().name;

if (name == "undefined"){
namespace.innerHTML = "";
}
else{
  namespace.innerHTML = name;

}

// change color of body
var myArray = [
  "#eb4d55",
  "#111d5e",
  "#230444",
  "#f4b0c7",
  "#46185f",
  "#c72c41",
  "#cc6a87",
  "#42b883",
  "#543864",
  "#6384b3",
];

var color = myArray[Math.floor(Math.random()*myArray.length)];
document.body.style.backgroundColor = color;



//personal personalmessage
var pm = document.getElementById("personalmessage");
console.log(pm);

if(name == "koen"){
  pm.innerHTML = "twoasten in brugge ister doa een winkelke woa dak twuk konde kwopn dak peisde ti nog twadde da koentje gern zoe ein";
}
if(name == "joke"){
  pm.innerHTML = "ip nen regenachtigen dag in brugge passeerdigen we doa voorbie een winkelken die vre goe rook, ge zult miskien peizn tgoa allik geen zjippe zin zeker? nint nint gene zjip tis twuk hjil anders. Kzoe zegn doet ma zjirre opn en genietr van";
}
if(name == "maren"){
  pm.innerHTML = "der zin zodoanig veel dingen dak willen zeggen tegen joe dak geweune ni ip weurden kunnen komn, kziej ongelofelijk gern, en kgoan proberen u da voor de rest van me leven te loaten zien me dutje";
}
