// Unsplash PI
const imgContainer = document.getElementById('img-container');
const loader = document.getElementById('loader');


const accKey = 'Fxe7Z9u1BA-6O-2fmCDWWopIE_5r2zLzUMO7j60GYEw';
const secKey = '0TWCbJJ11wAKQxEWThSpyJK0qO8tUYTtj4DLJoh9zgg';
const count = 10;
const apiUrl2 = `https://api.unsplash.com/photos/random/?client_id=${accKey}&count=${count}`;
let apiPicturesArray = [];

function displayPictures(){

    apiPicturesArray.forEach((pictures) => {

        // create link
        const linkImg = document.createElement('a');
        linkImg.setAttribute('href',pictures.links.html);
        linkImg.setAttribute('target','_blank');
        // create img

        const imgSplash = document.createElement('img');
        imgSplash.setAttribute('src',pictures.urls.small);
        imgSplash.setAttribute('alt',pictures.description);
        imgSplash.setAttribute('title',pictures.description);

        // add image inside link, add link inside img container
        linkImg.appendChild(imgSplash);
        imgContainer.appendChild(linkImg);

        // my solution
        // imgContainer.innerHTML = imgContainer.innerHTML +`
        // <a href='${pictures.links.html}' target='_blank'>
        // <img src="${pictures.urls.small}" alt="${pictures.description}" title="${pictures.description}">
        // </a>
        // `
    });



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

window.addEventListener('scroll', () => {

    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {

        console.log('window.innerHeight',window.innerHeight)
        console.log('window.scrollY',window.scrollY)
        console.log('window.innerHeight+window.scrollY',window.innerHeight+window.scrollY)
        console.log('document.body.offsetHeight-1000',document.body.offsetHeight-1000)
        console.log('loadmore')

    }

});

// OnLoad
getPictures();