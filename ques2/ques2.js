const form = document.forms[0];
const ques = document.querySelectorAll('.ques');
const output = document.querySelector('.output');
const submit = document.querySelector('.submit');
const correctAns = [
    "yes",
    "yes",
    "yes",
    "75"
];

let score = 0;

form.addEventListener('click', (e) => {
    e.preventDefault();
    let form_data = new FormData(form);
    let index = 0;
    for (let value of form_data) {
        
        if (value[1] == correctAns[index]) {
            ques[index].style.color = "green";
            score++;
            console.log(score);
        } else {
            ques[index].style.color = "red";
            score--;
        }
        index++;
        console.log(value);
    }
    output.innerText = score;
});