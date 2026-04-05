const grid = document.getElementById("grid");
const queue = []; 

for (let i = 0; i < 25; i++) {
  const box = document.createElement("div");
  box.classList.add("box");

  box.addEventListener("click", () => {
    if (box.classList.contains("red")) return;
    if (queue.length === 3) {
      const oldest = queue.shift(); 
      oldest.classList.remove("red");
      oldest.style.backgroundColor = "blue";
    }
    box.classList.add("red");
    box.style.backgroundColor = "red";
    queue.push(box);
  });

  grid.appendChild(box);
}