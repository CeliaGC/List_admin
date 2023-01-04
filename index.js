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
    
} )