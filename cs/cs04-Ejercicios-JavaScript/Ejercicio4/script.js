
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

function cursos() {
  let cursosComunes = student1Courses.filter(curso => student2Courses.includes(curso));
  console.log(cursosComunes);
}
cursos();