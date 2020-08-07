// selectors
const addButton = document.querySelector("#add-time");

//eventListeners
addButton.addEventListener('click', addTime)

//functions
function addTime() {
    const item = document.querySelector(".schedule-item").cloneNode(true);

    const fields = item.querySelectorAll('input');

    fields.forEach(function(field){
        field.value = "";
    })

    // for (let i = 0; i < fields.length; i++) {
    //     fields[i].value = ""        
    // }


    document.querySelector('#schedule-items').appendChild(item);    
}