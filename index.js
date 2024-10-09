import {checkIfOdd} from "blazingly-fast-is-odd";

function checkIfEven(number){
    return !checkIfOdd(number);
}

module.exports = { checkIfEven };


