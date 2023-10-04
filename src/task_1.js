
function Student (name, surname, birthday, course) {
  this.name = name;
  this.surname = surname;
  this.birthday = birthday;
  this.marks = [];
  this.attendance = [];
  this.course = course
}

Student.prototype.addMark = function (mark) {
  this.marks.push(mark) 
}

Student.prototype.addAttendance = function (isPres) {
  this.attendance.push(isPres)
} 

Student.prototype.getAvgSuccessRate = function () {
  let sumMark = 0;
  
  for (item of this.marks) {
    sumMark += item 
  }
  return sumMark / this.marks.length
}

Student.prototype.getAvgAttendance = function () {
  let presentCount = this.attendance.filter(isPresent => isPresent)
  return (presentCount.length / this.attendance.length) * 100
}

Student.prototype.getCountAttendances = function () {
  return this.attendance.length
}

Student.prototype.changeCourse = function (newCourse) {
  this.course = newCourse
}

Student.prototype.getAllInfo = function () {
 
  return `
    Ім'я: ${this.name}
    Прізвище: ${this.surname}
    Рік народження: ${this.birthday}
    Назва курсу: ${this.course}
    Отримані оцінки: ${this.marks.join(', ')}, успішність: ${this.getAvgSuccessRate()}%
    Пройдених занять: ${this.getCountAttendances()}
    Середня відвідуваність: ${this.getAvgAttendance()}%
    `
}

const student_L = new Student('Любомир', 'Любомирович', 1994, 'Математика');

student_L.addMark(87);
student_L.addMark(97);
student_L.addAttendance(true);
student_L.addAttendance(false);
student_L.addAttendance(true);
student_L.addAttendance(false);

console.log('Середня успішність: ' + student_L.getAvgSuccessRate());
console.log('Середня відвідуваність: ' + student_L.getAvgAttendance() + '%');
console.log('Кількість пройдених занять: ' + student_L.getCountAttendances());
console.log('-----------------------------')
console.log('інформація про студента: ' + student_L.getAllInfo());