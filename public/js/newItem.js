const newItemFunc = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#item-title').value.trim();
    const item_name= document.querySelector('#item-name').value.trim();
    const item_description = document.querySelector('#item-description').value.trim();
    const item_quantity = document.querySelector('#item-quantity').value.trim();
    const item_unit = document.querySelector('#item-unit').value.trim();
    const item_price = document.querySelector('#item-price').value.trim();
    const cat_name = document.querySelector('#item-categories').value.trim();
    const category_id = document.querySelector('.catOption').getAttribute('data-id');
    
    
    
    if(title && item_name && item_description && item_quantity && item_unit && item_price && cat_name){
        // console.log("INSIDE FRONT END FETCH")
        
        const response = await fetch("/api/items/createItem", {
            method: 'POST',
            body: JSON.stringify({title, item_name, item_description, item_quantity, item_unit, item_price, cat_name, category_id}),
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