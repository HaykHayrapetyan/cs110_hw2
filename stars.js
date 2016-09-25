const space = function(numberofspaces){
  if(numberofspaces===0){
    return "";
  }
  return " " + space(numberofspaces-1);
};

const star = function(numberofstars){
  if(numberofstars===0){
    return "";
  }
  return "*" + star(numberofstars-1);
};


const triangleStars = function(linecounter){
  if (linecounter===0) {
    return "";
  }
  return triangleStars(linecounter-1) + "\n" + space(numberofrows-linecounter) + star(2 * linecounter - 1);
};

const numberofrows = prompt("Please, enter number of star lines" + "\n");
console.log(triangleStars(numberofrows));
