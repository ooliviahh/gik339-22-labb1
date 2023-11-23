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
function handleInputFields(e){
    console.log('handleInputFields, eventobjekt', e);
    const name = e.target.name;
    const value = e.target.value;
    const html = `<p onclick="handleClick(event) class="test">Fältet ${name} har värdet ${value}</p>`;
    divElement.insertAdjacentHTML('afterbegin', html);
 
}

//Uppgift 6:
//Eventlyssnare till kopplad till checkboxen
checkBox.addEventListener('change', function () {
const colorInput = document.getElementById('color');
         if (checkBox.checked) {
            // Spara ursprungsfärgen om checkboxen är markerad
            originalColor = divElement.style.backgroundColor;
            divElement.style.backgroundColor = colorInput.value;
            } 
        else {
            // Om man bockar ur checkboxen så försvinner färgen man skrivit in. 
            // Div elementen återgår till sin ursprungliga färg. 
            divElement.style.backgroundColor = originalColor;
            }
}); 

// Eventlyssnare kopplad till uppgift 5, textfälten. 
 textField.forEach((field) => field.addEventListener('blur', handleInputFields));

// Eventlyssnare kopplad till knappen 
deleteButton.addEventListener('click', function (e) {
    // här tar vi bort defaultfunktionen som gör att sidan "skickas och laddas om" när vi har
    // knappen i tagen <form> 
     e.preventDefault();
    if (deleteButton.clicked) {
         divElement.style.display = 'none';
        } 
    else {
        divElement.style.display = 'color';
     }
   
 })

