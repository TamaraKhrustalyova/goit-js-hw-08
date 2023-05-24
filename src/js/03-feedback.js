import throttle from "lodash.throttle";
const STORAGE_KEY = "feedback-form-state";

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input'),
    message: document.querySelector('textarea'),
}

refs.form.addEventListener('submit', onFormSubmt);
refs.form.addEventListener('input', throttle(onInput, 500));

const formData = {};

getDataFromStorage();

function onInput(e){
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmt(e){
        e.preventDefault();
        e.currentTarget.reset();
        console.log(formData);
        localStorage.removeItem(STORAGE_KEY);
}

function getDataFromStorage(){
    const data = localStorage.getItem(STORAGE_KEY) || '';
    console.log(data);
    if(data){
        let storageData = JSON.parse(data);
        
        console.log(storageData);

        refs.email.value = storageData.email.trim();
        refs.message.value = storageData.message.trim();
    }   
}


