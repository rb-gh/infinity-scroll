const imageContainer = document.getElementById('image-container');    
const loader = document.getElementById('loader');
let photosArray = [];

// Refer https://unsplash.com/documentation
const count = 10;
const accessKey = `6XvL682LgRw12augB26tABdhEpjfpdhqC9u54KzblKY`
const secretKey = `WclVFUPxbK383WW_4XnAlRnBxxemplmS4Wm3DBBbDlY`
const apiURL = `https://api.unsplash.com/photos/?client_id=${accessKey}&count=${count}`

//Helper function to set attributes on DOM elements. This is to improve the code, i.e. DRY-Dont Repeat Yourself
function setAttributes(element, attributes){
    for (const key in attributes){
        element.setAttribute(key, attributes[key])
    }
}
//Create elements for links & photos and Add to DOM
function displayPhotos(){
    // Run function for each object in photosArray
    photosArray.forEach((photo)=>{
        //Create an anchor <a> element to link to unSplash
        const item = document.createElement('a');
        // item.setAttribute('href', photo.links.html)
        // item.setAttribute('target', 'blank')
        setAttributes(item,{
            href: photo.links.html,
            target: '_bank',
        });
        //Create image for photo
        const img = document.createElement('img');
        // img.setAttribute('src', photo.urls.regular);
        // img.setAttribute('alt', photo.alt_description);
        // img.setAttribute('title', photo.alt_description);
        setAttributes(img,{
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        });
        console.log("Image Tag: ", img);
        //Put image inside the anchor element and both inside the img container element
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}


// Fetch photos from UnSplash API
async function getPhotos(){
    try{
        const response = await fetch(apiURL);
        photosArray = await response.json();
        displayPhotos();
    }catch(error){
        //catch error here

    }
}

getPhotos();