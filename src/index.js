document.addEventListener("DOMContentLoaded", () => {
fetch("http://localhost:3000/dogs")
.then(resp => resp.json())
.then(data => { data.forEach(dogs => renderList(dogs))
});
})    
function renderList(dogs){
    const className = document.querySelector(".padding")
    const tr = document.querySelector("tr[1]")
    
  }
