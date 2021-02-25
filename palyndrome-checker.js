function palindrome(str) {
    // remove non alpha numerical and white spaces + convert to lower
    str = str.replace(/\W/g, '').replace(/_/g, '');
    str = str.toLowerCase();
    // console.log(str);

    // check 

    let wordSize = str.length;
    if (wordSize % 2 == 0) {
        let first = str.slice(0, wordSize / 2);
        let second = str.slice(wordSize / 2, str.length);
        second = second.split("").reverse().join("");;
        console.log(first, second);

        if (first === second) {
            return true;
        } else {
            return false;
        }

    } else {
        let newSize = wordSize - 1;
        let first = str.slice(0, wordSize / 2);
        let second = str.slice((wordSize + 2) / 2, str.length);
        second = second.split("").reverse().join("");;
        console.log(first, second);

        if (first === second) {
            return true;
        } else {
            return false;
        }
    }

}

palindrome("_eye");


