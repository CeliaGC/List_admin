<<<<<<< HEAD
let dataCollection = document.querySelector('#dataForm');

dataCollection.addEventListener("submit", function(event){
    event.preventDefault();
    let studentFormData = new FormData(dataCollection);
=======
 
let dataCollection = document.getElementById('dataForm');
let aver = document.querySelector('body');
let launch = document.createElement('img');


aver.appendChild(dataCollection);


launch.src = "Archivos/Rocketlaunch.png";
launch.id = "rocketLaunch";

dataCollection.addEventListener("submit", function(event){
    event.preventDefault();

    aver.appendChild(launch);
    aver.replaceChild(launch,dataCollection);
   
    let start = Date.now(); 
    let timer = setInterval(function() {
    let timePassed = Date.now() - start;

    if (timePassed >= 500) {
        clearInterval(timer);
        return;
    }
    draw(timePassed);

    },20);

    function draw(timePassed) {
    
        launch.style.marginTop = timePassed / -5 + '%';
        if (timePassed >= 300){
            aver.removeChild(launch);
            aver.appendChild(dataCollection);
        
        }
    }


    studentFormData = new FormData(dataCollection);
>>>>>>> dev
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
<<<<<<< HEAD
    let imgCell = newStudent.insertCell(4);
    imgCell.textContent = studentFormData.get('inFoto');
    let graveYard = newStudent.insertCell(5);
    graveYard.id = "angelOfDeath";
    let gonnaDie = document.createElement('button');
    gonnaDie.textContent = "ELIMINAR";
    gonnaDie.className = 'waitForIt';
=======
    let graveYard = newStudent.insertCell(4);
    graveYard.id = "angelOfDeath";
    graveYard.style.border = "none";
    let gonnaDie = document.createElement('button');
    gonnaDie.textContent = "X";
    gonnaDie.style.textAlign = "center";
    gonnaDie.id = "killBt";
    dataCollection.reset();


>>>>>>> dev
    let gonnaKill = document.querySelector('#angelOfDeath');
    gonnaKill.appendChild(gonnaDie);

    gonnaDie.addEventListener("click", erase);

    function erase(){
        gonnaDie.closest('tr').remove();
    }
<<<<<<< HEAD
    
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
=======

} )

// resetLaunch();

// function resetLaunch() {
//     aver.removeChild(launch);
//     aver.appendChild(dataCollection);
    
// }


    // $(document).ready(function() {
    //     $('#rocketLaunch')
    //       .attr({
    //         marginTop: "0%"
    //       })
    //       .animate({
    //        marginTop: "-150"
    //     }, 3000);
    //   });
>>>>>>> dev
