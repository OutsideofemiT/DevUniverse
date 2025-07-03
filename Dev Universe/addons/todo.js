function showTodoModal() {
  const modal = document.getElementById("todo-modal");
  modal.classList.add("show");
  modal.classList.remove("hidden");
}

function hideTodoModal() {
  const modal = document.getElementById("todo-modal");
  modal.classList.remove("show");
  modal.classList.add("hidden");
}

function extractTodos(text) {
  return text.split("\n").filter(line => line.trim().toLowerCase().startsWith("todo:"));
}

function renderTodoList() {
  const todos = extractTodos(document.getElementById("notepad").value);
  const list = document.getElementById("todo-list");
  list.innerHTML = todos.map(t => `<li>✅ ${t.replace(/^todo:\s*/i, "")}</li>`).join("");
}

document.getElementById("notepad").addEventListener("input", () => {
  const text = document.getElementById("notepad").value.toLowerCase();
  if (text.includes("::todo")) {
    renderTodoList();
    showTodoModal();
  }
});
