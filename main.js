var students = []


function submit(){
    for (var i = 1; i <=4; i++){
    var temp = document.getElementById("name_of_the_student_" + i).value
    students.push(temp)
}


    var display_students = []
    var length = students.length  
    console.log(length)  
    for (var i = 0; i < length; i++){
    display_students.push("<h2> Name of students " + students[i] + "</h2>")
    
    }
    console.log(display_students)
    document.getElementById("display_name_with_commas").innerHTML = display_students
    

    var remove = display_students.join("  ")
    document.getElementById("display_name_without_commas").innerHTML = remove
    console.log(remove)
}