const newPostFunc = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#newTitle').value.trim();
    
    
    if(title && post_content){
        console.log("INSIDE FRONT END FETCH")
        const response = await fetch("/api/items/createItem", {
            method: 'POST',
            body: JSON.stringify({title}),
            headers: {
              'Content-Type': 'application/json',
            },
        });
    
        console.log(response);
      
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create post');
        }
    }    
};

  document
  .querySelector('.newpostForm')
  .addEventListener('submit', newPostFunc);