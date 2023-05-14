const sumAll = function(range1, range2) {
    if (!Number.isInteger(range1) || !Number.isInteger(range2)){
        return "ERROR";
    }
    let sum = 0;

    if (range1 < 0 || range2 < 0){
        return "ERROR";
    }
    else if (range1 < range2){
        for (let i = range1; i <= range2; i++){
            sum += i;
        }
        return sum;
    }
    else if (range1 > range2){
        for (let i = range2; i <= range1; i++){
            sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
