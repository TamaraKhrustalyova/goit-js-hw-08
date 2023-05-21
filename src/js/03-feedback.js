import throttle from "lodash.throttle";

const formRef = document.querySelector('.feedback-form');
formRef.addEventListener('input', throttle(onInput, 500));
formRef.addEventListener('submit', onSubmit);

const STORAGE_KEY = "feedback-form-state";

function onInput(e){
    e.preventDefault();
    const localData = getLocalStorageData();
    localData[e.target.name] = e.target.value;
    saveFormData(localData);
}

function getLocalStorageData(){
    let localData = localStorage.getItem(STORAGE_KEY);
    if(!localData) {
        localData = {
            email: "", 
            message: "",
        };
        saveFormData(localData);
        return localData;
    }
    return JSON.parse(localData);
}

function saveFormData(formData){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function initFormData(){
    const savedData = getLocalStorageData();
    const emailRef = document.querySelector('input');
    emailRef.value = savedData.email;
    const messageRef = document.querySelector('textarea');
    messageRef.value = savedData.message;
}

initFormData();

function onSubmit(){
    if(validateFormData()){
        console.log(getLocalStorageData());
        formRef.reset();
        localStorage.removeItem(STORAGE_KEY);
    }
    return;
}

function validateFormData(){
    const formData = getLocalStorageData();
    if(formData.email.trim() === ""){
        alert("Будь ласка, заповніть поле email!")
        return;
    }
    if(formData.message.trim() ===""){
        alert("Будь даска, введіть повідомлення");
        return;
    }
    return true;
}