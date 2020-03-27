





//delete button 



let itemId = itemEndPoint.id

//const itemP = 

let deleteItemButton = document.createElement("button")

deleteItemButton.textContent = "x";
deleteItemButton.className = "deleteItem";
deleteItemButton.addEventListener("click", function(){
    deleteItemP(itemP);
    deleteItem(itemId);
})

function deleteItem(itemId){
    fetch(`${itemEndPoint}/${itemId}`,{
        method: "DELETE"
    })
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
    })
}

function deleteItemP(p){
    parentCard = div.querySelector("card-body")
    parentCard.removeChild(p);
}


///item edit form 

  const editItemForm = document.createElement('form')
  const inputEditItemName = document.createElement("input");
  inputEditItemName.placeholder = `Change item's name...`;
  inputEditItemName.type = "text";
  inputEditItemName.name = "targetItemName";

  const inputEditItemCategory = document.createElement

  const editItemBtn = document.createElement("input");
  inputBtn.type = "submit";



///HTML edit item form 

/* <form action = "http://localhost:3000/api/v1/items" method = PUT>
<h1>Item Category</h1>
<fieldset>
<select id = "itemCategory">
 <option value = "targetItemCategory">Clothes</option>
 <option value = "targetItemCategory">Books</option>
 <option value = "targetItemCategory">Papers</option>
 <option value = "targetItemCategory">Komono (Misc)</option>
 <option value = "targetItemCategory">Memento</option>
</select>
<input type = "button"
  value = "change color"
  onclick = "changeColor()" />
</fieldset>
</form> */