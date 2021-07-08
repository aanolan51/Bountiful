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

    const locationInput = document.createElement('input');
    locationInput.setAttribute("type","text")
    locationInput.setAttribute("class","profile-input")
    locationInput.value = location;

    const saveBtn = document.createElement('button');
    saveBtn.setAttribute("class","submit");
    saveBtn.setAttribute("class", "btn save-btn");
    saveBtn.textContent = "Save"

    profileForm.appendChild(userInput)
    profileForm.appendChild(locationInput)
    profileForm.appendChild(saveBtn);
    profileLi.appendChild(profileForm);



}

document.querySelector('#edit-profile').addEventListener('click', editProfile)