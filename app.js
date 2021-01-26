function show(num){
    var input = document.getElementById("calculator-input");
    input.value += num;
}

function showResult(){
    var input = document.getElementById("calculator-input");
    input.value = eval(input.value);
}

function clearResult(){
    var input = document.getElementById("calculator-input");
    input.value = "";
}