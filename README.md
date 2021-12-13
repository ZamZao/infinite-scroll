# infinite-scroll
https://zamzao.github.io/infinite-scroll/

# Source
training from ZTM course on javascript.



# App HTML Structure

    You have the header and the body. both are flex elements

# App Logic

## 1. Fetch data from unsplash api => 

    api key..
    api url..
    async const getData () => {
        try {
        const response = await fetch(apiUrl);
        const imgData = await response.json(); 
        }
        catch (error) {
            console.log("Oops there has been an error!",error)
        }
    }

## 2. Display the data
    the data is stored in an array => response.Json(); gives you an array.
    so for each element of the array
    when console.loging you know where your data is here, we wanted the description to use in title and alt, and we wanted the url image to display the image and we wanted the link to send to unsplash to download directly the link.

    so we are going to create two elements
        -a element, with an attribute of src
        -img element, with un attribute of src, title, and alt
    
    we are then going to put the img inside the a element and then the a element inside the appSection (div with the #appSection id)

## 3. Infinite loading


