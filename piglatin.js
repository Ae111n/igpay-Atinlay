const textInput = document.getElementById('textInput');
const textOutput = document.getElementById('textOutput');

const vowels = ['a','e','i','o','u'];
const ending = 'ay'

textInput.addEventListener('keyup' , (e)=> {
const input = e.target.value;
const words = input.toLowerCase().split(' ');
const output = words.map(word=> convert(word)).join(' ');
textOutput.innerText = output;

})

const convert = (input) => {
    if(vowels.includes(input[0])){
    output = input+ ending;
    }else {
        let consonants = '';
        for(let i=0 ; i<input.length ; i++){
            if (vowels.includes(input[i])){
              break;
           }
           consonants+=input[i]  
        }
        output = input.substring(consonants.length) + consonants + ending;
    }

    return output;
} 

    







