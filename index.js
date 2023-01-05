let dataCollection = document.querySelector('#dataForm');

dataCollection.addEventListener("submit", function(event){
    event.preventDefault();
    let studentFormData = new FormData(dataCollection);
    let studentTable = document.getElementById('studentRecord');
    let newStudent = studentTable.insertRow(2);
    let nameCell = newStudent.insertCell(0);

    nameCell.textContent = studentFormData.get('inName');
    let sur1Cell = newStudent.insertCell(1);
    sur1Cell.textContent = studentFormData.get('inSur1');
    let sur2Cell = newStudent.insertCell(2);
    sur2Cell.textContent = studentFormData.get('inSur2');
    let gradeCell = newStudent.insertCell(3);
    gradeCell.textContent = studentFormData.get('inGrade');
    let imgCell = newStudent.insertCell(4);
    imgCell.textContent = studentFormData.get('inFoto');
    let graveYard = newStudent.insertCell(5);
    graveYard.id = "angelOfDeath";
    let gonnaDie = document.createElement('button');
    gonnaDie.textContent = "ELIMINAR";
    gonnaDie.className = 'waitForIt';
    let gonnaKill = document.querySelector('#angelOfDeath');
    gonnaKill.appendChild(gonnaDie);

    gonnaDie.addEventListener("click", erase);

    function erase(){
        gonnaDie.closest('tr').remove();
    }
    
} )



/*
$('#table').on('click','.delete-row',function(){
    $(this).closest('tr').remove();
    // $(this) is the button
    
});
let gonnaDie = document.querySelector('#waitForIt');
gonnaDie.addEventListener("click", deleition());
function deleition(){
    gonnaDie.closest('tr').remove();
}

let gonnaDie = document.createElement('button');
gonnaDie.addEventListener("click", deleition());
function deleition(){
gonnaDie.closest('tr').remove();
}
*/