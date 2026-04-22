document.getElementById("studentForm").addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let city = document.getElementById("city").value;
    let address = document.getElementById("address").value;

    let skills = [];
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(function(skill){
        skills.push(skill.value);
    });

    let student = {
        name:name,
        email:email,
        gender:gender,
        city:city,
        skills:skills,
        address:address
    };

    let students = JSON.parse(localStorage.getItem("students")) || [];

    students.push(student);

    localStorage.setItem("students", JSON.stringify(students));

    alert("Student Registered");

    window.location.href = "student_list.html";

});