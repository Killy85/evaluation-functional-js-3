const countSequence = (sequence, input) => {
    var length = sequence.length
    if(input != undefined){
      if(input.length<=0) return 0
      let res = input.slice(0,length) === sequence ? 1 : 0
      let sliceDist = res ===1 ? length : 1
      return (res  + countSequence(sequence, input.slice(sliceDist)))
    } else {
      return function(x) {
        if(x.length<=0) return 0
        let res = x.slice(0,length) === sequence ? 1 : 0
        let sliceDist = res ===1 ? length : 1
        return res + countSequence(sequence, x.slice(sliceDist))
      }
    }
  }

module.exports = {
  title: "Exercise 4",
  run: countSequence
};
