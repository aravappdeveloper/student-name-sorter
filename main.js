var name_of_the_student_array = [];

function submit(){

var display_student_array = [];
for(var i = 1; i <= 4; i++){
    var name_of_the_student = document.getElementById("name_of_the_student_" + i).value;
    console.log(name_of_the_student);
    name_of_the_student_array.push(name_of_the_student);
}

var length_of_name_of_the_student_array = name_of_the_student_array.length;
console.log(length_of_name_of_the_student_array);
console.log(name_of_the_student_array);

for(var j = 0; j < length_of_name_of_the_student_array; j++){
    display_student_array.push("<h4>NAME: " + name_of_the_student_array[j] + "</h4>");
    console.log(display_student_array);
}
console.log("TOTAL NAMES: " + display_student_array);
document.getElementById("display_name_with_commas").innerHTML = display_student_array;

var removecommas = display_student_array.join(" ");
console.log(removecommas);
document.getElementById("display_name_without_commas").innerHTML = removecommas;

document.getElementById("submit_button").style.display = "none";
document.getElementById("sort_button").style.display = "inline-block";
}

function sorting(){
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);

    var display_student_array_sorting = [];

    var length_of_name_of_student_array = name_of_the_student_array.length;
    console.log(length_of_name_of_student_array);

    for(var k = 0; k < length_of_name_of_student_array; k++){
        display_student_array_sorting.push("<h4>NAME: " + name_of_the_student_array[k] + "</h4>");
        console.log(display_student_array_sorting);
    }
    var removecommas = display_student_array_sorting.join(" ");
    console.log(removecommas);

    document.getElementById("display_name_without_commas").innerHTML = removecommas;
}

function new_update() {
    document.getElementById("display_name_without_commas").innerHTML = "<h1>" + name_of_the_student_array + "</h1>";
}