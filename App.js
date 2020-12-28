const correctAnswers = ['B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result= document.querySelector('.result');

form.addEventListener('submit', e=> {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q2.value];

    //check answers
    userAnswers.forEach((answer, index) => {
     if(answer === correctAnswers[index]){
       score += 33;  
     }
    });

    //show result on page
    scrollTo(0,0);
    result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');

});

//window object (global object)

// setTimeout(()=> {
//   alert('hello, ninjas')
// }, 3000)