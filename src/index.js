document.addEventListener("DOMContentLoaded", () => {
fetch("http://localhost:3000/dogs")
.then(resp => resp.json())
.then(data => { 
     console.log(data)
     data.forEach(dogs => renderList(dogs))
     });
function renderList(dogs){
     const select = document.querySelector("#table-body")
     const tr = document.createElement("tr")
     const td1 = document.createElement("td")
     const td2 = document.createElement("td")
     const td3 = document.createElement("td")
     const td4 = document.createElement("td")
     const btn = document.createElement("button")
     btn.innerHTML = "edit"
     td1.innerHTML = dogs.name
     td2.innerHTML = dogs.breed
     td3.innerHTML = dogs.sex
     td4.append(btn)
     // fetch("http://localhost:3000/dogs/:id")`${dogs.id}`,{
     //           method: 'Patch',
     //           headers: {
     //                'Content-Type': 'application/json'
     //           },
     //           body: Json.stringify()
     //      }
     // btn.addEventListener("click", (e) => {
          
     // }) 
 
     
     select.append(tr)
     select.append(td1)
     select.append(td2)
     select.append(td3)
     select.append(td4)
    
     console.log(td2)
}
   })    

