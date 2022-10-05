const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result");

buttons.forEach((button) => {
    button.addEventListener('click',(e)=>{
        result.textContent += e.target.id;
    });

});

equal.addEventListener('click',() => {
    // la méthode eval permet de faire tous les caluls
    result.textContent = eval(result.textContent);
});

clear.addEventListener('click',() => {
    result.textContent = "";
});