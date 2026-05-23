function formatJSON() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");

  try {
    const parsed = JSON.parse(input);
    output.textContent = JSON.stringify(parsed, null, 2);
  } catch (e) {
    output.textContent = "Invalid JSON: " + e.message;
  }
}

function clearAll() {
  document.getElementById("input").value = "";
  document.getElementById("output").textContent =
    "Formatted JSON will appear here...";
}
