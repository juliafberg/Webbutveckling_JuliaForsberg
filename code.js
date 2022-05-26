const addButton = document.querySelector("#add");
const todo = document.querySelector("#todo");

// Lägg till eventlyssnare på knappen - vad händer när man klickar på den?
addButton.addEventListener("click", function () {
  text = todo.value;
  todoList.appendChild(getNewElement(text));
});

// Vad ska hända när någon dubbelklickar på den tillagda texten?
listContent.addEventListener("dblclick", function (event) {
  console.log(event.target);
  if (event.target === listContent) return;
  event.target.remove();
});

// skapa element och lägg till på sidan baserat på vad användaren skriver in
function getNewElement(text) {
  let inskrivet = document.createElement("li");
  let textNode = document.createTextNode(text);
  inskrivet.appendChild(textNode);
  if (text.length === 0) {
    return;
  }
  return inskrivet;
}
