exports.invertNumber = receivedNumber =>{
    return receivedNumber.toString().split('').reverse().join('');
}

exports.orderNumber = receivedNumber =>{
    return receivedNumber.toString().split('').sort().join ('');
}

exports.difference = (numberDifferenceOne, numberDifferenceTwo) =>{
    if (this.numberLength(numberDifferenceOne - numberDifferenceTwo)<4) {
        return '0'+ (numberDifferenceOne - numberDifferenceTwo).toString();
    } else 
        return numberDifferenceOne - numberDifferenceTwo;
}

exports.isRepeatDigit = receivedNumber =>{
    if ([...new Set(receivedNumber.toString().split(''))].length === 1) {
        return true
    }else
        return  false;
}

exports.numberLength = receivedNumber =>{
    return receivedNumber.toString().length;
}

exports.iterationKaprekar = receivedNumber =>{
    var orderedNumber = this.orderNumber(receivedNumber.toString());
    var reverseNumber = this.invertNumber(this.orderNumber(receivedNumber.toString()).toString());
    var totalNumber = receivedNumber;
    var iterationKaprekarCount = 0;
    while (totalNumber != 6174) {
        totalNumber = this.difference(reverseNumber,orderedNumber);
        orderedNumber = this.orderNumber(totalNumber.toString());
        reverseNumber = this.invertNumber(this.orderNumber(totalNumber.toString()).toString());
        iterationKaprekarCount +=1; 
    }
    return iterationKaprekarCount;
}

exports.validationFunction = receivedNumber =>{
    if( this.numberLength(receivedNumber)!= 4)
        return false;   
    else{
        return this.iterationKaprekar(receivedNumber);
    }
}
