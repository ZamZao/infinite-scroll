// Unsplash PI
const imgContainer = document.getElementById('img-container');
const loader = document.getElementById('loader');
const accKey = 'Fxe7Z9u1BA-6O-2fmCDWWopIE_5r2zLzUMO7j60GYEw';
const secKey = '0TWCbJJ11wAKQxEWThSpyJK0qO8tUYTtj4DLJoh9zgg';
const count = 30;
const apiUrl2 = `https://api.unsplash.com/photos/random/?client_id=${accKey}&count=${count}`;

let okForLoad = 0;
let apiPicturesArray = [];
let imgLoaded = 0;

//
function stopload() {
    okForLoad = 0;
}

function readyToload() {
    okForLoad = 1;
}

// check if image is loaded 
function imageLoaded() {
    console.log("loaded");
}

function displayPictures() {
    apiPicturesArray.forEach((pictures) => {
        // create link
        const linkImg = document.createElement('a');
        linkImg.setAttribute('href', pictures.links.html);
        linkImg.setAttribute('target', '_blank');
        // create img
        const imgSplash = document.createElement('img');
        imgSplash.setAttribute('src', pictures.urls.small);
        imgSplash.setAttribute('alt', pictures.description);
        imgSplash.setAttribute('title', pictures.description);
        // add image inside link, add link inside img container
        linkImg.appendChild(imgSplash);
        imgContainer.appendChild(linkImg);
        imgLoaded++;
        console.log("imageloaded", imgLoaded)
        // check if images are loaded 
        imgSplash.addEventListener('load', imageLoaded);
        // my solution
        // imgContainer.innerHTML = imgContainer.innerHTML +`
        // <a href='${pictures.links.html}' target='_blank'>
        // <img src="${pictures.urls.small}" alt="${pictures.description}" title="${pictures.description}">
        // </a>
        // `
    });
    setTimeout('', 2000);
    readyToload();
}

async function getPictures() {

    try {
        const response = await fetch(apiUrl2);
        apiPicturesArray = await response.json();
        // console.log(apiPicturesArray);
        displayPictures();
    } catch (error) {
        console.log(error);
    }
}
// const apiPictures = apiPicturesjson.foreach(e =>{
//     console.log(e.urls.small);
// })

// check to see if scrolling near bottom of page, load more photos

window.addEventListener('DOMContentLoaded', (event) => {

    console.log("DOM Loaded");
    

    window.addEventListener('scroll', () => {

        // console.log('scroll');
        // console.log('WINDOW INNER HEIGHT',window.innerHeight);
        // console.log('BODY OFFSET HEIGHT',document.body.offsetHeight);
        // console.log('SCROLL Y',window.scrollY);
        // console.log('Body Offset HeightT-SCROLL Y',document.body.offsetHeight-window.scrollY);

        if (document.body.offsetHeight - window.scrollY <= window.innerHeight * 6 && okForLoad) {

           
            console.log("ready to load more");
        
            getPictures();
            stopload();
        }

        // if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {

        //     console.log('window.innerHeight',window.innerHeight)
        //     console.log('window.scrollY',window.scrollY)
        //     console.log('window.innerHeight+window.scrollY',window.innerHeight+window.scrollY)
        //     console.log('document.body.offsetHeight-1000',document.body.offsetHeight-1000)
        //     console.log('loadmore')

        // }

    });
});

// OnLoad
getPictures();