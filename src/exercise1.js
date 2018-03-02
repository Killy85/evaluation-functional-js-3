const moment = require("moment");

const sortProduct = input => {
   let res = input.map(value => {
      var date = new Date(value.dateAdded)
      value.monthOfYear = date.getMonth()+1
      value.year = date.getFullYear()
      delete value.dateAdded
      return value
    })
    res =res.sort((a,b) => a.quantity < b.quantity).sort((a,b) => a.year < b.year).sort((a,b) => a.monthOfYear < b.monthOfYear).filter(value => value.year > 2000)
    res = res.reduce(function(acc, x) {
      (acc[x.name] = acc[x.name] || []).push(x);
      return acc;
    }, {})
    console.log(res)
    return(res)
};


module.exports = {
  title: "Exercise 1",
  run: sortProduct
};
