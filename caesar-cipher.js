function rot13(str) {
    let letters = {
        a: 'n', b: 'o', c: 'p',
        d: 'q', e: 'r', f: 's',
        g: 't', h: 'u', i: 'v',
        j: 'w', k: 'x', l: 'y',
        m: 'z', n: 'a', o: 'b',
        p: 'c', q: 'd', r: 'e',
        s: 'f', t: 'g', u: 'h',
        v: 'i', w: 'j', x: 'k',
        y: 'l', z: 'm', ' ': ' '
    };
    str = str.toLowerCase();
    let decode = '';

    for (var i = 0; i < str.length; i++) {
        if (str[i] in letters) {
            decode += letters[str[i]].toUpperCase();
        } else {
            decode += str[i];
        }


    }

    return decode;
}

result = rot13("SERR PBQR PNZC!");

console.log(result);