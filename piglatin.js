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
    ////////////////////////////
    //This is a pen based off of Codewoofy's eyes follow mouse. It is just cleaned up, face removed, and then made to be a little more cartoony. https://codepen.io/Codewoofy/pen/VeBJEP

$(".move-area").mousemove(function(event) {
    var eye = $(".eye");
    console.log('eye', eye)
    var x = (eye.offset().left) + (eye.width() / 2);
    var y = (eye.offset().top) + (eye.height() / 2);
    var rad = Math.atan2(event.pageX - x, event.pageY - y);
    var rot = (rad * (180 / Math.PI) * -1) + 180;
    eye.css({
      '-webkit-transform': 'rotate(' + rot + 'deg)',
      '-moz-transform': 'rotate(' + rot + 'deg)',
      '-ms-transform': 'rotate(' + rot + 'deg)',
      'transform': 'rotate(' + rot + 'deg)'
    });
  });
    ///////////////////////////
    







