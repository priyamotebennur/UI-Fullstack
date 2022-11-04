function display_fare(){
const ac=500, sleeper=1000, seater=600,semi=850;

let total = 0;
let source=document.getElementById("from_place").value;
let destination = document.getElementById("to_place").value;
let selected_date =document.getElementById("from_date").value;
let return_date = document.getElementById("to_place").value;
let num_person = document.getElementById("person_num").value

/** types of seater */
let sleeper_seat = document.getElementById("rb1").checked;
let semi_sleeper = document.getElementById("rb2").checked;
let sitter_seat = document.getElementById("rb3").checked;

/**selection of Ac or non-Ac */
let AC = document.getElementById("facility_option_ac").checked;
let non_ac = document.getElementById("facility_option_non").checked;


if(source==''){
alert("Please Enter Source location");
/* document.getElementById("from_place").style.borderColor="red";
document.getElementById("from_place").style.border="2px solid red";*/
return false;
}

if(destination==''){
    alert("Please Enter Destination location");
    return false;
}

if(selected_date==''){
    alert("Please Select travelling date");
    return false;
}

if(num_person==''){
    alert("Please enter number of person travelling");
    return false;
}

if(!(sleeper_seat||sitter_seat||semi_sleeper)){
alert("Please select type of seats");
return false;
}

if(!(AC||non_ac)){
    alert("Please select AC or Non-AC");
    return false;
    }

  //  const ac=500, sleeper=1000, seater=600,semi=850;
    if(sleeper_seat && AC){
        total+= sleeper +ac;
    }
    else if(sitter_seat && AC){
        total+=seater +ac;
    }
    else if(semi_sleeper && AC){
        total+=semi +ac;
    } 
    else if(sleeper_seat && non_ac){
        total+= sleeper;
    }
    else if(sitter_seat && non_ac){
        total+=seater;
    }
    else if(semi_sleeper && non_ac){
        total+=semi;
    }

    total = total* num_person;
    alert("Your total fare is "+total);
}

function reload(){
    let source=document.getElementById("from_place").value='';
let destination = document.getElementById("to_place").value='';
let selected_date =document.getElementById("from_date").value='';
let return_date = document.getElementById("to_place").value='';
let num_person = document.getElementById("person_num").value='';

/** types of seater */
let sleeper_seat = document.getElementById("rb1").checked=false;
let semi_sleeper = document.getElementById("rb2").checked=false;
let sitter_seat = document.getElementById("rb3").checked=false;

/**selection of Ac or non-Ac */
let AC = document.getElementById("facility_option_ac").checked =false;
let non_ac = document.getElementById("facility_option_non").checked=false;
}