

function Witaj(){

    let a = prompt("Jak masz na imie?");

    alert(a + " Czesc!");


}

function Dodaj() {

    form1.wynik.value = parseFloat(form1.przycisk1.value) + parseFloat(form1.przycisk2.value);

}

function Odejmij() {

    form1.wynik.value = parseFloat(form1.przycisk1.value) - parseFloat(form1.przycisk2.value);

}

function Pomnoz() {

    form1.wynik.value = parseFloat(form1.przycisk1.value) * parseFloat(form1.przycisk2.value);

}



function Podziel() {

    form1.wynik.value = parseFloat(form1.przycisk1.value) / parseFloat(form1.przycisk2.value);

}




function Pierw () {

    

    form1.wynik.value =  Math.sqrt(form1.przycisk1.value);

}


function Silnia() {
    let liczba = parseFloat(form1.przycisk1.value);

    if (liczba >= 0) {
        let wynik = 1;
        for (let i = 2; i <= liczba; i++) {
            wynik *= i;
        }
        form1.wynik.value = wynik;
    } else {
        alert("Silnia może być liczona tylko dla wartości nieujemnych");
    }
}

function Poteguj() {

    let liczba = parseFloat(form1.przycisk1.value);
    let potega = parseFloat(form1.przycisk2.value);
    
    let z = 1;
    for(let i = 0; i < potega; i++){
        z*=liczba;
    }

    form1.wynik.value = z;



}





function Zmiana() {
    const topValue = form2.a1.value + "px";
    const leftValue = form2.a2.value + "px";
    const rightValue = form2.a3.value + "px";
    const widthValue = form2.a4.value + "px";
    const heightValue = form2.a5.value + "px";
    const colorValue = document.getElementById("colorPicker").value;
    const fontSizeValue = form2.a8.value + "px";
    

    div1.style.top = topValue;
    div1.style.left = leftValue;
    div1.style.right = rightValue;
    div1.style.width = widthValue;
    div1.style.height = heightValue;
    div1.style.backgroundColor = colorValue;
    div1.style.fontSize = fontSizeValue;
    






}




