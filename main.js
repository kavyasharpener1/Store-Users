const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
//call event to be performed after clinking on submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === ''){
        msg.innerHTML = 'Please enter fileds';
        setTimeout(()=>msg.remove, 3000);
    }else{
        //create person object
        let person = {
            name: nameInput.value,
            email: emailInput.value
        }
        //reset the form
        document.forms[0].reset();
        //store the array in local storage
        localStorage.setItem('Persons', JSON.stringify(person));
    }   
}