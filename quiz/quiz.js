const correctAns = [
    "yes",
    "yes",
    "yes",
    "75",
    "option2"
];
const ques = document.querySelectorAll('.ques');
const form1 = document.querySelector('form');
const output = document.querySelector('.output');


form1.addEventListener('submit', (e) => {
    e.preventDefault();
    let form_data = new FormData(form1);
    let score = 0;
    let index = 0;
    for (let value of form_data) {
        
        if (value[1] == correctAns[index]) {
            
            score++;
            
        } else {
            
            score--;
            
        }
        
        index++;
               
    }
    
    
     output.innerText = score;
});
