const list = document.getElementById("infi-list");

let itemCount = 1;

// function to add items
function addItems(count) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement("li");
    li.innerText = `Item ${itemCount}`;
    list.appendChild(li);
    itemCount++;
  }
}

// add 10 items initially
addItems(10);

// infinite scroll logic
list.addEventListener("scroll", () => {
  // check if scrolled to bottom
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addItems(2);
  }
});

