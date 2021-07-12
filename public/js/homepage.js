const imgClassSelector = document.querySelector("#hero-image")
// const bodySelector = document.querySelector("#background")


const heroPicture = () => {
    // console.log(document.location.pathname)
    if(document.location.pathname !== "/"){
    //     imgClassSelector.setAttribute("class","image")
    // } else {
        imgClassSelector.setAttribute("class","no-hero-image")
        // bodySelector.setAttribute("class","background")

        // headerSelector.setAttribute("class","nav-color")
    }
}

heroPicture();