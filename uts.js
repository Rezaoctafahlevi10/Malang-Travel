// function Boom(){
//     const boom = document.getElementById('home')
//     boom.style.backgroundColor="red"
// }
function Boom(){
    const boom = document.body
    boom.classList.toggle('dark-mode');
}
const btnShow = $ ("#show")
const btnHide = $ ("#hide")
const section = $ (".paragopinions")
btnShow.click(function(){
    section.show("slow")
})

btnHide.click(function(){
    section.hide("slow")
})
const pass_field = document.querySelector('.password');
const show_btn= document.querySelector('.password');
show_btn.addEventListener('click',function(){
    if(pass_field.type=="password"){
        pass_field.type="text";
        show_btn.style.color ="#222";
        show_btn.textContent = "HIDE";
    }else{
        pass_field.type="password";
        show_btn.style.color ="#red";
        show_btn.textContent = "SHOW";
    }
    });
function validateForm() {
    let x = document.forms['myFrom']['username']['password'].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    }