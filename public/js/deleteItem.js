const deleteButtonFunc = async (event) => {
    console.log("In delete javascript")
    const id = event.target.getAttribute('data-id');
    console.log(id);
  
      //Data-id is from the button, where the attribute is set as the id for the current post being clicked on:
      if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        console.log(id);
    
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


//Add event listner to the parent element containing all buttons:
// let itemButton= document.querySelectorAll(".deleteMe");

// parentItemContainer.addEventListener('click', deleteButtonFunc);


    document
    .querySelector(`#${id}`)
    .addEventListener('click', deleteButtonFunc);



// document.addEventListener('click', async function (event){
    
//         //Data-id is from the button, where the attribute is set as the id for the current item being clicked on:
//         if(event.target !== event.currentTarget){
//           const buttonID = event.target.id;
//           const id = event.target.getAttribute('data-id');
//           console.log(id);
//           console.log(buttonID);

//        if(buttonID == id){
//             const response = await fetch(`/api/items/${id}`, {
//               method: 'DELETE',
//             });
  
//              // console.log(response);
//              if (response.ok) {
//               document.location.replace('/dashboard');
//             } else {
//               alert('Failed to delete item');
//             } 
//       }
//     }
// });


// //SORTA Working:
// [...document.querySelectorAll('.deleteMe')].forEach(function (i) {
//   i.addEventListener('click', async function (event){
    
//     if(event.target !== event.currentTarget){
//     //Data-id is from the button, where the attribute is set as the id for the current item being clicked on:
    
//       const buttonID = event.target.id;
//       const id = event.target.getAttribute('data-id');
//       console.log(id);
//       console.log(buttonID);

//       if(buttonID == id){
//         const response = await fetch(`/api/items/${id}`, {
//           method: 'DELETE',
//         });

//          // console.log(response);
//          if (response.ok) {
//           document.location.replace('/dashboard');
//         } else {
//           alert('Failed to delete item');
//         } 
//     }
//   }
//   });
// });

  
var deletePost = async (event) => {
  if (event.target.hasAttribute('data-id')) {


      const id = event.target.getAttribute('data-id');
      const response = await fetch(`/api/posts/${id}`, {
          method: 'DELETE',
      })

      if (response.ok) {
          document.location.replace(`/dashboard`)
      } else {
          alert('Failed to delete item')
      }
  }
}


document.querySelector('.user-posts').addEventListener('click', deletePost)