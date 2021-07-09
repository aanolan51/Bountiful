// const e = require("express");


const editItemFunc = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#itemTitle').value.trim();
    const name = document.querySelector("#item-name").value.trim();
    const description = document.querySelector("#item-description").value.trim();
    const unit = document.querySelector("#item-unit").value.trim();
    const quantity = document.querySelector("#item-quantity").value.trim();
    const price = document.querySelector("#item-price").value.trim();
    const category = document.querySelector("#item-categories").value.trim();

      
    // console.log("EDIT EDIT ------------------------------------------------------------ ")
    
  
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        // console.log(id);

      const response = await fetch(`/api/items/edititem/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, name, description, unit, quantity, price, category }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response)
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to edit item');
      }
    }
  };

  const FEeditProfile = (event) => {
    // event.preventDefault();


    if(event.target !== event.currentTarget) {
      //gets the information for the item from the card
      const itemTitle = event.currentTarget.querySelector(".title").textContent.trim();
      const itemName = event.currentTarget.querySelector(".item-name").textContent.trim();
      const itemDescpt = event.currentTarget.querySelector(".item-description").textContent.trim();
      const itemUnit = event.currentTarget.querySelector(".item-unit").textContent.trim();
      const itemQunty = event.currentTarget.querySelector(".item-quantity").textContent.trim();
      const itemPrice = event.currentTarget.querySelector(".item-price").textContent.trim();
      const itemCat = event.currentTarget.querySelector(".item-categories").textContent.trim();

      //selects the inputs in the modal for each feild
      const submitBtn = document.querySelector("#create-edit-btn");
      const titleInpt = document.querySelector("#item-title");
      const nameInpt = document.querySelector("#item-name");
      const descptInpt = document.querySelector("#item-description");
      const unitInpt = document.querySelector("#item-unit");
      const quntyInpt = document.querySelector("#item-quantity");
      const priceInpt = document.querySelector("#item-price");
      const catInpt = document.querySelector("#item-categories");
      
      //inputs the values of the card into the modal for editing
      titleInpt.value = itemTitle;
      nameInpt.value = itemName;
      descptInpt.value = itemDescpt;
      unitInpt.value = itemUnit;
      quntyInpt.value = itemQunty;
      priceInpt.value = itemPrice;
      catInpt.value = itemCat;
      submitBtn.textContent = "Save Changes"
  

    }
}

//selects all card with item card class, puts them into an array and adds an event listener
[...document.querySelectorAll('.item-card')].forEach(function(item) {
  item.addEventListener('click', FEeditProfile);
})

const openModal = () => {

  //opens the modal with the edit button is clicked
  clearForm();

  const modal = document.getElementById("id03");
  modal.setAttribute("style","display:block; width:auto")

  console.log("YOU ARE IN FUNCTION")

  const formSelector = document.querySelector('#create-edit-form');
  formSelector.setAttribute("class","modal-content animate editItemForm")

  document.querySelector('.editItemForm').addEventListener('submit', editItemFunc);


}

// document.querySelector('.item-card').addEventListener('click', FEeditProfile);

//selects all buttons with edit item class, puts them into an array and adds an event listener
[...document.querySelectorAll('.edit-item')].forEach(function(item) {
  item.addEventListener('click', openModal);
})




// document.querySelector('.editItemForm').addEventListener('submit', editItemFunc);