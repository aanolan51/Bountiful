const newItemFunc = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#item-title').value.trim();
    const item_name= document.querySelector('#item-name').value.trim();
    const item_description = document.querySelector('#item-description').value.trim();
    const item_quantity = document.querySelector('#item-quantity').value.trim();
    const item_price = document.querySelector('#item-price').value.trim();
    const item_categories = document.querySelector('#item-categories').value.trim();
    
    
    if(title && item_name && item_description && item_quantity && item_price && item_categories){
        console.log("INSIDE FRONT END FETCH")
        const response = await fetch("/api/items/createItem", {
            method: 'POST',
            body: JSON.stringify({title, item_name, item_description, item_quantity, item_price, item_categories}),
            headers: {
              'Content-Type': 'application/json',
            },
        });
    
        console.log(response);
      
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create item');
        }
    }    
};

  document
  .querySelector('.newItemForm')
  .addEventListener('submit', newItemFunc);