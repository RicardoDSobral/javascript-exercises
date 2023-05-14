const removeFromArray = function(inputArray, ...elementsToRemove) {
    for (let i = 0; i < elementsToRemove.length; i++){
        let indexToBeRemoved = inputArray.indexOf(elementsToRemove[i]);
        if (indexToBeRemoved >= 0){
            inputArray.splice(indexToBeRemoved,1);
        }
    }
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
