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

  document
  .querySelector('.editButton')
  .addEventListener('submit', editItemFunc);