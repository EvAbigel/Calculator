//CALCULATOR PROGRAM

const display = document.getElementById("display") //display nevű id-t tartalmazó elementet egyenlővé tettük a constans változóval

function appendToDisplay(input){  //input-ba csak ezzel a függvénnyel tudunk írni, stringeket fűz össze
    display.value += input;
}

function clearDisplay(){ //input string empty lesz (vagy üres string)
    display.value = "";
}

function calculate(){ //egy beéített függvényt használunk, tök cuki
    try{ //de ezzel még beleeshetünk hibákba (nem írunk '+" mögé"), ezért kell hibakezelés
        display.value = eval(display.value); 
    }
    catch(error){
        display.value = "Error";
    }
}