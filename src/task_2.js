
function Student (firstName, lastName, birthday) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = birthday;
  this.marks = {};
  this.attendance = {};
  this.courses = [];
}

Student.prototype.addMark = function (mark, course) {

  if (!Object.hasOwn(this.marks, course)) {
    this.marks[course] = [];
  }
  
  this.marks[course].push(mark);
}

Student.prototype.addAttendance = function (isPres, course) {
  
  if (!Object.hasOwn(this.attendance, course)) {
    this.attendance[course] = [];
  }

  this.attendance[course].push(isPres)
} 

Student.prototype.getAvgSuccessRate = function (course) {
  let sumMark = 0;
      
  for (item of this.marks[course]) {
      sumMark += item 
  } 

  return sumMark / this.marks[course].length
}

Student.prototype.getAvgAttendance = function (course) {
  let presentCount = this.attendance[course].filter(isPresent => isPresent)
  return (presentCount.length / this.attendance[course].length) * 100
}

Student.prototype.getCountAttendances = function (course) {
  if (this.attendance[course])
    return this.attendance[course].length;
}

Student.prototype.changeCourse = function (newCourse) {
  this.courses.push(newCourse);
}

Student.prototype.removeCourse = function (courseRmv) {
  
  let index = this.courses.indexOf(courseRmv);
  
  if (index !== -1) {
    this.courses.splice(index, 1);
  }

  delete this.marks[courseRmv];
  delete this.attendance[courseRmv];
}

function getCourseInfo(student) {
 
  return student.courses.map(course => {
   
    return `
    Course name: ${course}
    Get marks: ${student.marks[course].join(', ')}; середня успішність: ${student.getAvgSuccessRate(course)}%
    Count attendances: ${student.getCountAttendances(course)}
    Average attendances: ${student.getAvgAttendance(course).toFixed(2)}%
    `
  }).join('\n');
}

Student.prototype.getAllInfo = function () {

  return `
    Firstname: ${this.firstName}
    Lastname: ${this.lastName}
    Birthday: ${this.birthday}
  
    Course:
    ${getCourseInfo(this)}
  `
}

const student_L = new Student('Любомир', 'Любомирович', 1994);

student_L.changeCourse('Math');
student_L.changeCourse('English');

student_L.addMark(87, 'Math');
student_L.addMark(97, 'English');
student_L.addMark(70, 'Math');

student_L.addAttendance(true, 'Math');
student_L.addAttendance(false, 'Math');
student_L.addAttendance(false, 'Math');
student_L.addAttendance(true, 'English');
student_L.addAttendance(false, 'English');

//student_L.removeCourse('bla2') - якщо треба видалити курс

//  окремо методи студента 
//  console.log('Середня успішність: ' + student_L.getAvgSuccessRate('bla1'));
//  console.log('Середня відвідуваність: ' + student_L.getAvgAttendance('bla1').toFixed(2) + '%');
//  console.log('Кількість пройдених занять: ' + student_L.getCountAttendances('bla1'));
 
console.log('-----------------------------');
console.log('Info about student: ' + student_L.getAllInfo());