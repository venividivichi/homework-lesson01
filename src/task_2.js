
function Student (name, surname, birthday) {
  this.name = name;
  this.surname = surname;
  this.birthday = birthday;
  this.marks = {};
  this.attendance = {};
  this.courses = [];
}

Student.prototype.addMark = function (mark, course) {

  if (!this.marks[course]) {
    this.marks[course] = [];
  }
  
  this.marks[course].push(mark);
}

Student.prototype.addAttendance = function (isPres, course) {
  
  if (!this.attendance[course]) {
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
    Назва курсу: ${course}
    Отримані оцінки: ${student.marks[course].join(', ')}; середня успішність: ${student.getAvgSuccessRate(course)}%
    Кількість пройдених занять: ${student.getCountAttendances(course)}
    Середня відвідуваність: ${student.getAvgAttendance(course).toFixed(2)}%
    `
  }).join('\n');
}

Student.prototype.getAllInfo = function () {

  return `
    Ім'я: ${this.name}
    Прізвище: ${this.surname}
    Рік народження: ${this.birthday}
  
    Курси:
    ${getCourseInfo(this)}
  `
}

const student_L = new Student('Любомир', 'Любомирович', 1994);

student_L.changeCourse('Математика');
student_L.changeCourse('Англійська');

student_L.addMark(87, 'Математика');
student_L.addMark(97, 'Англійська');
student_L.addMark(70, 'Математика');

student_L.addAttendance(true, 'Математика');
student_L.addAttendance(false, 'Математика');
student_L.addAttendance(false, 'Математика');
student_L.addAttendance(true, 'Англійська');
student_L.addAttendance(false, 'Англійська');

//student_L.removeCourse('bla2') - якщо треба видалити курс

//  окремо методи студента 
//  console.log('Середня успішність: ' + student_L.getAvgSuccessRate('bla1'));
//  console.log('Середня відвідуваність: ' + student_L.getAvgAttendance('bla1').toFixed(2) + '%');
//  console.log('Кількість пройдених занять: ' + student_L.getCountAttendances('bla1'));
 
console.log('-----------------------------');
console.log('інформація про студента: ' + student_L.getAllInfo());