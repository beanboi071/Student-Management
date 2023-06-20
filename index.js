function Student(name, age, gender, faculty) {
  var self = this;
  self.name = ko.observable(name);
  self.age = ko.observable(age);
  self.gender = ko.observable(gender);
  self.faculty = ko.observable(faculty);
}
function AppViewModel() {
  var self = this;
  self.faculties = ["Science", "Arts", "Commerce"];
  self.students = ko.observableArray([
    new Student("Rojan Shakya", 20, "Male", "Science"),
    new Student("Sita", 22, "Female", "Arts"),
    new Student("Rajesh", 19, "Male", "Commerce")
  ]);
  self.newStudent = {
    name: ko.observable(''),
    age: ko.observable(''),
    gender: ko.observable(''),
    faculty: ko.observable('')
  };
  self.editedStudent = {
    name: ko.observable(''),
    age: ko.observable(''),
    gender: ko.observable(''),
    faculty: ko.observable('')
  };
  self.addStudent = function() {
    var name = self.newStudent.name();
    var age = self.newStudent.age();
    var gender = self.newStudent.gender();
    var faculty = self.newStudent.faculty();
      self.students.push(new Student(name, age, gender, faculty));
      self.newStudent.name('');
      self.newStudent.age('');
      self.newStudent.gender('');
      self.newStudent.faculty('');
  };
  self.editStudent = function(student) {
    console.log("function called");
    document.getElementById("editForm").style.display = "block";
      self.editedStudent.name(student.name());
      self.editedStudent.age(student.age());
      self.editedStudent.gender(student.gender());
      self.editedStudent.faculty(student.faculty());
    };
    self.applyChanges = function() {
      console.log("apply function called");
      console.log(self.editedStudent.name());
      console.log(self.editedStudent.faculty());
      var editedName = self.editedStudent.name();
      var editedAge = self.editedStudent.age();
      var editedGender = self.editedStudent.gender();
      var editedFaculty = self.editedStudent.faculty();``
        var student = self.students().forEach((element) => {
          if(element.name()===self.editStudent.name()){
            return element;
          }});
  console.log(student);
      if (student) {
        student.name(editedName);
        student.age(editedAge);
        student.gender(editedGender);
        student.faculty(editedFaculty);
      }
      self.editedStudent.name('');
      self.editedStudent.age('');
      self.editedStudent.gender('');
      self.editedStudent.faculty('');
      document.getElementById('editForm').style.display = 'none';
    };
  self.deleteStudent = function(student) {
      self.students.remove(student);
  };
}
ko.applyBindings(new AppViewModel());