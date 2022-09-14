function makeArray(firstArray, secondArray, maxLength) {
    // Change code below this line

    const allArray = firstArray.concat(secondArray);

    if (allArray) {
      allArray.length > maxLength;
      return allArray.slice(0, maxLength);
    }
   
    // return newArry;
    

    // Change code above this line
  }
  console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
  console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
  console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
  console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));