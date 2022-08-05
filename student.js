var id=0;
const students=[];
const name_inp=document.getElementById('name');
const address_inp=document.getElementById('address');
const score_inp=document.getElementById('score');
function Student(name, address, score) {
    this.id=++id;
    this.name=name;
    this.address=address;
    this.score=score;
}


function display(){
    var table=document.getElementById('table');

    $("#table").find("tr:not(:first)").remove();
    

    for(student of students){

        var row=table.insertRow();
        var col0=row.insertCell(0);
        var col1=row.insertCell(1);
        var col2=row.insertCell(2);
        var col3=row.insertCell(3);
        var col4=row.insertCell(4);
        var col5=row.insertCell(5);
        
        
        col0.innerHTML=student.id;
        col1.innerHTML=student.name;
        col2.innerHTML=student.address; 
        col3.innerHTML=student.score;
        col4.innerHTML = '<button onclick="removeStudent(this)">Remove</button>'
        col5.innerHTML = '<button onclick="editStudent(this)">Edit</button>'
        
    }
    var rows=table.getElementsByTagName('tr');
    for( i=1;i<rows.length;i++)
        rows[i].addEventListener('click',createClickHandler(table.rows[i]));    
        
    
        
}

function createClickHandler(row){
    return function(){
        name_inp.value=row.getElementsByTagName("td")[1].innerHTML;
        address_inp.value= row.getElementsByTagName("td")[2].innerHTML;
        score_inp.value= row.getElementsByTagName("td")[3].innerHTML;
    };
}

function resetForm() {
    name_inp.value="";
    address_inp.value="";
    score_inp.value="";
}

function createStudent() {
    var name=document.getElementById('name').value;
    var address=document.getElementById('address').value;
    var score=document.getElementById('score').value;
    var s=new Student(name,address,score);
    students.push(s);
    display();
    resetForm();
    
    
    
}

function removeStudent(btn){
    var student=btn.parentElement.parentElement;
    var index=students.findIndex(x=> x.id==student.id);
    students.splice(index,1);
    display();
}

function editStudent(btn){
    var student=btn.parentElement.parentElement;
    var index=students.findIndex(x=> x.id==student.id);
    
}
