function convertToRoman(num) {
    // break the number and convert //
    var thousand = 0;
    var hundred = 0;
    var ten = 0;
    var unit = 0;
    var romanNumber = '';

    function converter(first, second, third, number) { //letters//
        let result = '';
        if (number < 4) {
            result = first.repeat(number);
        } else if (number == 4) {
            result = first + second;
        } else if (number == 5) {
            result = second;
        } else if (number > 5 && number < 9) {
            result = second + first.repeat(number - 5);
        } else if (number == 9) {
            result = first + third;
        }
        return result;
    }

    if (num / 1000 >= 1) {
        thousand = Math.floor(num / 1000);
        num = num - thousand * 1000;
        romanNumber += 'M'.repeat(thousand);
    }

    if (num / 100 >= 1) {
        hundred = Math.floor(num / 100);
        num = num - hundred * 100;
        romanNumber += converter('C', 'D', 'M', hundred);

    }

    if (num / 10 >= 1) {
        ten = Math.floor(num / 10);
        num = num - ten * 10;
        romanNumber += converter('X', 'L', 'C', ten);
    }

    if (num <= 9) {
        unit = num;
        romanNumber += converter('I', 'V', 'X', unit);
    }

    // console.log(thousand);
    //console.log(hundred);
    //console.log(ten);
    // console.log(unit);

    return romanNumber;
}

c = convertToRoman(3675);
// console.log(c);