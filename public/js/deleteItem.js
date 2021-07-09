const deleteButtonFunc = async (event) => {
    console.log("In delete javascript")
    const id = event.target.getAttribute('data-id');
    // console.log(id);
  
      //Data-id is from the button, where the attribute is set as the id for the current post being clicked on:
      if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        // console.log(id);
    
        const response = await fetch(`/api/items/${id}`, {
          method: 'DELETE',
        });
        // console.log(response);
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert('Failed to delete item');
        }
      }
    };
  
    document
    .querySelector('#delete-item')
    .addEventListener('click', deleteButtonFunc);