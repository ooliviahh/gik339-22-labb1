//Uppgift 4:

//Variabel 1: Här hämtar vi upp vår checkbox som har klassen checkbox.  
const checkBox  = document.querySelector('.checkbox');
console.log(checkBox);
//Variabel 2: Här hämtar vi upp alla textfält
const textField = document.querySelectorAll('.textfield');
console.log(textField);
//Variabel 3: Här hämtar vi upp knappen. 
const deleteButton = document.querySelector('.delete-button')
console.log(deleteButton)
//Variabel 4: Här hämtar vi upp div elementet. 
const divElement = document.getElementById('empty-box')
console.log(divElement)

// Uppgift 5:
// Här skapar vi en function där det skrivs ut i consolen när användaren klickar ur input fields. 
function handleInputFields(e){
    console.log('handleInputFields, eventobjekt', e);
    const name = e.target.name;
    const value = e.target.value;
    const html = `<p style="margin-top: 1rem;
    text-align: center;" "onclick="handleClick(event) class="test">Fältet ${name} har värdet: ${value}</p>`;
    divElement.insertAdjacentHTML('afterbegin', html);  
    console.log('Fältet ' + name + ' har värdet: ' + value);

}; 


//Uppgift 6:
//Eventlyssnare till kopplad till checkboxen. 
checkBox.addEventListener('change', function () {
const colorInput = document.getElementById('color');
         if (checkBox.checked) {
            // Spara ursprungsfärgen om checkboxen är markerad
            noColor = divElement.style.backgroundColor;
            divElement.style.backgroundColor = colorInput.value;
            } 
        else {
            // Om man bockar ur checkboxen så försvinner färgen man skrivit in. 
            // Div elementen återgår till att ha ingen färg. 
            divElement.style.backgroundColor = noColor;
            }
}); 

// Eventlyssnare kopplad till textfälten i uppgift 5. 
textField.forEach((field) => field.addEventListener('blur', handleInputFields));


//Koppla en anonym function till knappen i uppgift 6, 
// vid klick på knappen försvinner div elementet. 
deleteButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (deleteButton.click) {
        console.log('Du har tryckt på Ta bort-knappen!'); 
        divElement.remove();
        }
}); 
