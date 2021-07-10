const editProfile = async (event) => {
    event.preventDefault();

    const editBtn = document.querySelector('#edit-profile');
    const profileLi = document.querySelector('.profile-info');
    const usernameLi = document.querySelector('#dashboard-username');
    const locationLi = document.querySelector('#dashboard-location')

    let username = await usernameLi.textContent;
    let userLocation = await locationLi.textContent;


    editBtn.setAttribute("class","hide");
    usernameLi.setAttribute("class","hide");
    locationLi.setAttribute("class","hide");

    const profileForm = document.createElement('form');

    const userInput = document.createElement('input');
    userInput.setAttribute("type","text")
    userInput.setAttribute("class","profile-input")
    userInput.value = username;

    const locationInputDiv = document.createElement('div');
    const locationInputLabel = document.createElement('label');
    locationInputDiv.appendChild(locationInputLabel);
    locationInputLabel.setAttribute("for","location-edit");
    locationInputLabel.textContent = "Location";
    const locationInputSelect = document.createElement('select');
    locationInputSelect.setAttribute("id","location-edit");
    locationInputSelect.setAttribute("name","location-edit");
    locationInputLabel.appendChild(locationInputSelect);

    const locationOption1 = document.createElement('option');
    locationOption1.setAttribute("value","downtown");
    locationOption1.textContent = "Downtown Sacramento";
    locationInputSelect.appendChild(locationOption1);

    const locationOption2 = document.createElement('option');
    locationOption2.setAttribute("value","westSac");
    locationOption2.textContent = "West Sacramento";
    locationInputSelect.appendChild(locationOption2);
    
    const locationOption3 = document.createElement('option');
    locationOption3.setAttribute("value","eastSac");
    locationOption3.textContent = "East Sacramento";
    locationInputSelect.appendChild(locationOption3);
    
    const locationOption4 = document.createElement('option');
    locationOption4.setAttribute("value","northSac");
    locationOption4.textContent = "North Sacramento";
    locationInputSelect.appendChild(locationOption4);
    
    const locationOption5 = document.createElement('option');
    locationOption5.setAttribute("value","southSac");
    locationOption5.textContent = "South Sacramento";
    locationInputSelect.appendChild(locationOption5);
    
    // locationInput.setAttribute("type","text")
    // locationInput.setAttribute("class","profile-input")
    // locationInput.value = userLocation;

    const saveBtn = document.createElement('button');
    saveBtn.setAttribute("class","submit");
    saveBtn.setAttribute("class", "btn save-btn");
    saveBtn.textContent = "Save"

    profileForm.appendChild(userInput)
    profileForm.appendChild(locationInputDiv)
    profileForm.appendChild(saveBtn);
    profileLi.appendChild(profileForm);



}

document.querySelector('#edit-profile').addEventListener('click', editProfile)