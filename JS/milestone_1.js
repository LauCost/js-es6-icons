//Array of objects
const post = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    }
];

//Select the container in which it will print the content
const container = document.querySelector(".row");

//ForEach that will read the array and print the objects in DOM
post.forEach(post => {




    //  ************ Milestone 2  ************
    //Empty array of colors
    let color = [];

    //An if that will check the type of icon and assign the color
    if (post.type == "animal") {

        color = "#0000FF"

    } else if (post.type == "vegetable") {

        color = "#FFA500"

    } else if (post.type == "user") {

        color = "#800080"

    }
    //  ************ /Milestone 2  ************





    //Print the objects of array in DOM
    const cardPost = `
    
        <div class="col">
            <div class="post" type="${post.type}" >
                <i class="${post.family} ${post.prefix}${post.name}" style="color: ${color};"></i>
                <p>${post.name.toUpperCase()}</p>
            </div>
        </div>
    `

    container.innerHTML += cardPost
});