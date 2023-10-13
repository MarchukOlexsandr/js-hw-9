const textForm = document.getElementById("text-form");
const textOutput = document.getElementById("text-output");

textForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const text = document.getElementById("text").value;
  const textColor = document.getElementById("text-color").value;
  const fontSize = document.getElementById("font-size").value + "px";
  const fontFamily = document.getElementById("font-family").value;

  textOutput.innerHTML = `<div style="color: ${textColor}; font-size: ${fontSize}; font-family: ${fontFamily};">${text}</div>`;
});
