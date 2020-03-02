// Exercise: Level 3
// DOM: Mini project 1
// Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.

// The year color is changing every 1 second
// The date and time background color is changing every on seconds
// Completed challenge has background green
// Ongoing challenge has background yellow
// Coming challenges have background red

let centerContent = document.querySelectorAll('.wrapper')
console.log(centerContent)

let allH1 = document.getElementById('h1')
let allH2 = document.querySelectorAll('h2')
let allUl = document.getElementById('list').childNodes
let allLi = document.querySelectorAll('li')









let colorArr = ['blue', 'purple', 'pink'] 
function colors(){
    let text = document.getElementById('his')
    let diffColors = Math.floor(Math.random() * colorArr.length + 1)
    // console.log(diffColors)
    return text.style.color = diffColor
}
// colors()
setInterval(colors(), 2000)
// function timer(){
//     setInterval(colors(), 2000)
// }
// timer()

// let indextof = /2020/gi
// let arrString = text.match(indextof)
// console.log(arrString)

// let arrayToString = String(arrString)
// console.log(arrayToString)
// let firstText = ''
// for(let i=0; i<allH1.length; i++){
//     let curNode = allH1.childNodes[i]
//     if(curNode.nodeName === '#text'){
//         firstText = curNode.nodeValue
//         break
//     }
// }

// $('.h1')[0].childNodes[0].nodeValues
// console.log(allUl[0].style.color = '')
// console.log(allUl[0].style.background = 'green')

// function timer(){
//     let colorArr = ['blue', 'purple', 'pink']
//     for(let i = 0; i < textToAarry.length; 1++){
//         if(textToAarry == '2020'){
//             for(let u = 0; u<colorArr.length; u++){
//                 textToAarry[i].style.color = colorArr[u]
//             }
//         }
//     }
// }
// let myTimer = setInterval(timer, 2000)
// console.log(myTimer)



// function timer(){
//     let myTimer = setInterval(colors(), 2000)
//     return myTimer
// }
// timer()

// This is the main div
for(let i = 0; i < centerContent.length; i++){
    centerContent[i].style.textAlign = 'center'
    centerContent[i].style.marginLeft = '100px'
    centerContent[i].style.marginRight = '100px'
}

// This is for the h2 element
for(let i = 0; i<allH2.length; i++){
    allH2[i].style.textDecoration = 'underline'
}



// This is for the list items
for(let i = 0; i<allLi.length; i++){
    allLi[i].style.listStyle = 'none'
    allLi[i].style.textAlign = 'left'
    allLi[i].style.paddingLeft = '10px'
    allLi[i].style.paddingTop = '10px'
    allLi[i].style.paddingBottom = '10px'
    allLi[i].style.marginBottom = '5px'
}

// This is for the unordered list element
for(let i = 0; i<allUl.length; i++){
    allUl[0].style.background = 'green'
    allUl[1].style.background = 'yellow'
    // if(i == 2 && i == 3 && i == 4 && i == 5 && i == 6){
    //     console.log(allUl[i])
    // }
    allUl[2].style.background = 'red'
    allUl[3].style.background = 'red'
    allUl[4].style.background = 'red'
    allUl[5].style.background = 'red'
    allUl[6].style.background = 'red'
    // console.log(allUl[i])
}