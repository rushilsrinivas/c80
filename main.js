student_array=[];
function Submit(){
    var one=document.getElementById("student_1").value;
    student_array.push(one);
    var two=document.getElementById("student_2").value;
    student_array.push(two);
    var three=document.getElementById("student_3").value;
    student_array.push(three);
    var four=document.getElementById("student_4").value;
    student_array.push(four);
    var five=document.getElementById("student_5").value;
    student_array.push(five);
    console.log(student_array);
    document.getElementById("display").innerHTML=student_array;
}
function sorting(){
    student_array.sort();
    document.getElementById("display").innerHTML=student_array;
}