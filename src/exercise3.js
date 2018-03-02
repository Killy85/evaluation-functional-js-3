const _ = require("lodash");

const meeteek = input => {
  input.reduce(
    (acc,value) =>{
      acc[value.firstname] = input
      .filter(val => value.sexPartnerApproved.includes(val.sex))
      .map(x => {return { 'name': x.firstname, 'commonInterest' : common(value.interests, x.interests)} }
      )
    return acc
    }
  ,[])
};

function common(arr1, arr2) {
  var newArr = [];
  newArr = arr1.filter(function(v){ return arr2.indexOf(v) >= 0;})
  newArr.concat(arr2.filter(function(v){ return newArr.indexOf(v) >= 0;}));

  return newArr;
}
module.exports = {
  title: "Exercise 3",
  run: meeteek
};
