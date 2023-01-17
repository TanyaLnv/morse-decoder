const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here

    let doz = (expr.length / 10);
    let str = "";
    let word = "";
    for(let i = 0; i <= doz; i++){
        if(expr[i*10] === '*'){
            str = `${str}${word} `; 
            word = "";
        }
        else{
            let l = "";
            for(let j = 10*i + 1; j < 10 * (i+1); j+=2)
            {
                let bin = `${expr[j-1]}${expr[j]}`;
                if(bin === '10')
                {
                l = `${l}.`;
             }
             else if(bin === '11'){
                l= `${l}-`;
            }
            }
            let lett = "";
            for(let letter in MORSE_TABLE){
                if(letter === l){
                  lett = `${MORSE_TABLE[letter]}`;
             }
        }
        word = `${word}${lett}`;
    }
}

    str = `${str}${word}`;
    return str;
}

module.exports = {
    decode
}
