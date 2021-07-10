const imgClassSelector = document.querySelector("#hero-image")

const heroPicture = () => {
    // console.log(document.location.pathname)
    if(document.location.pathname !== "/"){
    //     imgClassSelector.setAttribute("class","image")
    // } else {
        imgClassSelector.setAttribute("class","no-hero-image")
    }
}

heroPicture();