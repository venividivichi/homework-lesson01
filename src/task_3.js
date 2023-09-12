
const students = [
	{ name: "Alice", age: 20, grade: 4.5 },
	{ name: "Bob", age: 21, grade: 3.9 },
	{ name: "Charlie", age: 19, grade: 4.8 }
];

sumGrade = 0;

function calculateAverageGrade(students) {
  
   let result = 0;

   for (item of students) {
      sumGrade += item.grade;
      result = sumGrade / students.length;
   }
   return result.toFixed(1)
}

console.log(calculateAverageGrade(students));