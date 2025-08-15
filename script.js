const submitbtn=document.querySelector("#submit")
const password=document.querySelector("#password")
const confirmpassword=document.querySelector("#confirm-password")
const validationMessage= document.querySelector(".output")
const fname=document.querySelector("#first-name")
const lastname=document.querySelector("#last-name")


submitbtn.addEventListener("click",(e)=>{
    if(password.value!==confirmpassword.value){
        validationMessage.textContent="Password is not match"
        e.preventDefault()
    }

    
});






