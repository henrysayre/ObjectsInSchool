function addStudent(){
    var firstName = document.getElementById("studentFirst").value;
    var lastName = document.getElementById("studentLast").value;
    var grade = document.getElementById("studentGrade").value;
    allStudents.push(new Student(firstName,lastName,grade));
    buildSelectLists();
}

function addTeacher(){
    var firstName = document.getElementById("teacherFirst").value;
    var lastName = document.getElementById("teacherLast").value;
    var subject = document.getElementById("teacherSubject").value;
    allTeachers.push(new Teacher(firstName, lastName, subject));
    buildSelectLists();
}

function addSection(){
    var name = document.getElementById("sectionName").value;
    var count = document.getElementById("sectionCount").value;
    allSections.push(new Section(name, count));
    buildSelectLists();
}

function listTeachers(){
    var html = "<table border = '1'>";
    for (var i = 0; i < allTeachers.length; i++) {
        html += "<tr>";
        html += "<td>" + allTeachers[i].firstName + "</td>";
        html += "<td>" + allTeachers[i].lastName + "</td>";
        html += "<td>" + allTeachers[i].subject + "</td>";
        html += "</tr>";
    }
    html += "</table>";
    document.getElementById("teacherList").innerHTML = html;
}

function listStudents(){
    var html2 = "<table border = '1'>";
    for (var i = 0; i < allStudents.length; i++) {
        html2 += "<tr>";
        html2 += "<td>" + allStudents[i].firstName + "</td>";
        html2 += "<td>" + allStudents[i].lastName + "</td>";
        html2 += "<td>" + allStudents[i].grade + "</td>";
        html2 += "</tr>";
    }
    html2 += "</table>";
    document.getElementById("studentList").innerHTML = html2;
}

function listSections(){
    var html3 = "<table border = '1'>";
    for (var i = 0; i < allSections.length; i++){
        html3 += "<tr>";
        html3 += "<td>" + allSections[i].name + "</td>";
        html3 += "<td>" + allSections[i].count + "</td>";
        html3 += "</tr>";
    }
    html3 += "</table>";
    document.getElementById("sectionList").innerHTML = html3;
}

function buildSelectLists(){
    var sSelectList = "";
    for(var i = 0; i < allStudents.length; i ++){
        sSelectList += "<option value = " + allStudents[i].id + ">" + allStudents[i].firstName + " " + allStudents[i].lastName + "</option>";
    }
    document.getElementById("sSelectList").innerHTML += sSelectList;
    console.log(sSelectList);

    var tSelectList = "";
    for (var x = 0; x < allTeachers.length; x ++) {
        tSelectList += "<option value = " + allTeachers[x].id + ">" + allTeachers[x].firstName + " " + allTeachers[x].lastName + "</option>";
    }
     document.getElementById("tSelectList").innerHTML += tSelectList;
     console.log(tSelectList);

    var secSelectList = "";
    for (var s = 0; s < allSections.length; s ++){
        secSelectList += "<option value = " + allSections[s].id + ">" + allSections[s].name + " " + "</option>";
    }
    document.getElementById("secSelectList").innerHTML += secSelectList;
    document.getElementById("secSelectList2").innerHTML += secSelectList;
    document.getElementById("sectionSelectList").innerHTML += secSelectList;
    console.log(secSelectList);
}

function getSectionById(secID){
    for(var i = 0; i < allSections.length; i ++){
        if (allSections[i].id == secID) {
            return allSections[i];
        }
    }
}

function getTeacherById(teacherID){
    for(var i = 0; i < allTeachers.length; i ++){
        if (allTeachers[i].id == teacherID) {
            return allTeachers[i];
        }
    }
}

function getStudentsById(studentID){
    for(var i = 0; i < allStudents.length; i ++){
        if (allStudents[i].id == studentID) {
            return allStudents[i];
        }
    }
}

function addStudentToSection(){
    var stud = getStudentsById(document.getElementById("sSelectList").value);
    var sec = getSectionById(document.getElementById("secSelectList").value);
    sec.addStudent(stud);
}

function addTeacherToSection(){
    var teach = getTeacherById(document.getElementById("tSelectList").value);
    var sec = getSectionById(document.getElementById("secSelectList").value);
    sec.addTeacher(teach);
}

function listStudentsInSections(){
    var html = "<table border = '5'>";
    var section = getSectionById(document.getElementById("secSelectList2").value);
    for (var a = 0; a < section.students.length; a++ ){
        html += "<tr>";
        html += "<td>" + "Student:" + "</td>";
        html += "<td>" + section.students[a].firstName + "</td>";
        html += "<td>" + section.students[a].lastName + "</td>";
        html += "<td>" + section.students[a].grade + "</td>";
        html += "</td>";
    }
    document.getElementById("output").innerHTML = html;
    console.log(section);
}
function listTeachersInSection() {
    var section = getSectionById(document.getElementById("secSelectList").value);
    document.getElementById("output2").innerHTML = section.teacher.firstName + " " + section.teacher.lastName;

}

