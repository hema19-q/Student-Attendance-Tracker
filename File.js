let students = [
  { name: "Rahul", present: true },
  { name: "Priya", present: true },
  { name: "Arun", present: false }
];

const list = document.getElementById("studentList");

function displayStudents() {
  list.innerHTML = "";

  students.forEach((student, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      ${student.name} - ${student.present ? "Present" : "Absent"}
      <button onclick="toggleAttendance(${index})">
        Change Status
      </button>
    `;

    list.appendChild(li);
  });

  document.getElementById("total").textContent = students.length;
  document.getElementById("present").textContent =
    students.filter(s => s.present).length;
  document.getElementById("absent").textContent =
    students.filter(s => !s.present).length;
}

function toggleAttendance(index) {
  students[index].present = !students[index].present;
  displayStudents();
}

document.getElementById("addStudent").addEventListener("click", () => {
  const input = document.getElementById("studentName");
  const name = input.value.trim();

  if (name === "") {
    alert("Please enter a student name");
    return;
  }

  students.push({ name, present: false });
  input.value = "";
  displayStudents();
});

displayStudents();