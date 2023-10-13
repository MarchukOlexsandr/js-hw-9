const attendanceForm = document.getElementById("attendance-form");
const attendanceList = document.getElementById("attendance-list");
const groups = [];
const pairs = [];
const attendanceRecords = [];

attendanceForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const group = document.getElementById("group").value;
  const pair = document.getElementById("pair").value;
  const topic = document.getElementById("topic").value;
  const presentStudents = [];

  const checkboxes = document.querySelectorAll(".student-checkbox");
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      presentStudents.push(checkbox.id);
    }
  });

  const presentStudentsText =
    presentStudents.length > 0
      ? `Присутні: ${presentStudents.join(", ")}`
      : "Ніхто не відмічений";

  const record = `(${group}), Пара: ${pair}, Тема заняття: ${topic}, ${presentStudentsText}`;
  attendanceRecords.push(record);

  updateAttendanceList();
});

function updateAttendanceList() {
  attendanceList.innerHTML = attendanceRecords.join("<br>");
}
