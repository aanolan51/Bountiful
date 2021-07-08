const editItemFunc = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#itemTitle').value.trim();
    
    
    // console.log("EDIT EDIT ------------------------------------------------------------ ")
    
  
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        // console.log(id);

      const response = await fetch(`/api/items/edititem/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to edit item');
      }
    }
  };

  const FEeditProfile = (event) => {
    event.preventDefault();

    const editBtn = document.querySelector("#edit-item");
    const submitBtn = document.querySelector("#create-edit-btn");
    const titleInpt = document.querySelector("#item-title");
    const nameInpt = document.querySelector("#item-name");
    const descptInpt = document.querySelector("#item-description");
    const unitInpt = document.querySelector("#item-unit");
    const quntyInpt = document.querySelector("#item-quantity");
    const priceInpt = document.querySelector("#item-price");
    const catInpt = document.querySelector("#item-categories");
    
    titleInpt.value = "Something"
    submitBtn.textContent = "Save Changes"
 
    
}

const openModal = () => {
  const modal = document.getElementById("id03");
  modal.setAttribute("style","display:block; width:auto")

  console.log("YOU ARE IN FUNCTION")


}

document.querySelector('#edit-item').addEventListener('click', FEeditProfile);

document.querySelector('#edit-item').addEventListener('click', openModal);

  // document
  // .querySelector('.editButton')
  // .addEventListener('submit', editItemFunc);