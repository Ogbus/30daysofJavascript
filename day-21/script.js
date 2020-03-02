// Exercise: Level 1
// Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
let paragraph = document.querySelector('p')
console.log(paragraph)

// Get get each of the the paragraph using document.querySelector('#id') and by their id
let paragraphs = document.getElementById('fox')
console.log(paragraphs)

// Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
let allParagraph = document.querySelectorAll('p')
console.log(allParagraph)

// Loop through the nodeList and get the text content of each paragraph
for(let i = 0; i < allParagraph.length; i++){
    // console.log(allParagraph[i])
}
// Set a text content to paragraph the fourth paragraph,Fourth Paragraph
allParagraph[3].textContent = 'Fourth Paragraph'

// Set id and class attribute for all the paragraphs using different attribute setting methods
for(let i = 0; i<allParagraph.length; i++){
    allParagraph[i].setAttribute('class', 'p-tags')
    // allParagraph[i].className = 'garri'
    // console.log(allParagraph[i])
}

// Exercise: Level 2
// Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
for(let i = 0; i < allParagraph.length; i++){
    if(i == 0){
        allParagraph[i].style.color = 'pink'
        allParagraph[i].style.fontSize = '25px'
        allParagraph[i].style.fontFamily = 'sarif'
        allParagraph[i].style.background = 'blue'
        allParagraph[i].style.border = '1px solid red'
        console.log(allParagraph[i])
    }

    if(i == 1){
        allParagraph[i].style.color = 'white'
        allParagraph[i].style.fontSize = '25px'
        allParagraph[i].style.fontFamily = 'monospace'
        allParagraph[i].style.background = 'black'
        allParagraph[i].style.border = '1px solid orange'
        console.log(allParagraph[i])
    }

    if(i == 2){
        allParagraph[i].style.color = 'orange'
        allParagraph[i].style.fontSize = '25px'
        allParagraph[i].style.fontFamily = 'monospace'
        allParagraph[i].style.background = 'gray'
        allParagraph[i].style.border = '1px solid purple'
        console.log(allParagraph[i])
    }

    if(i == 3){
        allParagraph[i].style.color = 'yellow'
        allParagraph[i].style.fontSize = '25px'
        allParagraph[i].style.fontFamily = 'monospace'
        allParagraph[i].style.background = 'black'
        allParagraph[i].style.border = '1px solid blue'
        console.log(allParagraph[i])
    }
}
// Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
// Set text content, id and class to each paragraph
