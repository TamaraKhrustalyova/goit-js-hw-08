import throttle from "lodash.throttle";
// const throttle = require("lodash.throttle");

// const formRef = document.querySelector('.feedback-form');
// formRef.addEventListener('input', throttle(onInput, 500));
// formRef.addEventListener('submit', onSubmit);

const STORAGE_KEY = "feedback-form-state";

// function getLocalStorageData(){
//     let localData = localStorage.getItem(STORAGE_KEY);
//     if(!localData) {
//         localData = {
//             email: "", 
//             message: "",
//         };
//         saveFormData(localData);
//         return localData;
//     }
//     return JSON.parse(localData);
// }
// function onInput(e){
//     const localData = getLocalStorageData();
//     localData[e.target.name] = e.target.value;
//     saveFormData(localData);
// }

// function saveFormData(formData){
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// }

// function initFormData(){
//     const savedData = getLocalStorageData();
//     const emailRef = document.querySelector('input');
//     emailRef.value = savedData.email;
//     const messageRef = document.querySelector('textarea');
//     messageRef.value = savedData.message;
// }

// initFormData();

// function onSubmit(){
        // e.preventDefault();
//     if(validateFormData()){
//         console.log(getLocalStorageData());
//         e.currentTarget.reset();
//         localStorage.removeItem(STORAGE_KEY);
//     }
//     return;
// }

// function validateFormData(){
//     const formData = getLocalStorageData();
//     if(formData.email.trim() === ""){
//         alert("Будь ласка, заповніть поле email!")
//         return;
//     }
//     if(formData.message.trim() ===""){
//         alert("Будь даска, введіть повідомлення");
//         return;
//     }
//     return true;
// }

// // Simple form

// const formRef = document.querySelector('.feedback-form');
// const textareaRef = document.querySelector('textarea');

// formRef.addEventListener('submit', onSubmt);
// textareaRef.addEventListener('input', throttle(onInput, 500));

// reloadPage();

// function onInput(e){
//     const message = e.target.value;
//     localStorage.setItem(STORAGE_KEY, message);
// }

// function onSubmt(e){
//     e.preventDefault();
//     e.target.reset();
//     localStorage.removeItem(STORAGE_KEY);
// }

// function reloadPage(){
//     const storageData = localStorage.getItem(STORAGE_KEY);

//     if(storageData){
//         textareaRef.value = storageData;
//     }
// }

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input'),
    message: document.querySelector('textarea'),
}


refs.form.addEventListener('submit', onFormSubmt);
refs.form.addEventListener('input', throttle(onInput, 500));

const formData = {};

getDataFromStorage()

function onInput(e){
    const savedData = localStorage.getItem(STORAGE_KEY);
    console.log(savedData);
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


