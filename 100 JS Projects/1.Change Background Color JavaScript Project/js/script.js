// const button = document.getElementById("theButton")
// const button = document.getElementsByClassName('btn btn-outline-secondary')
const button = document.querySelector('button')

button.addEventListener('click', whenClick);

document.body.style.backgroundColor = 'White'



// function whenClick() {
//     let randomColor = Math.floor(Math.random()*16777215).toString(16);
//     document.body.style.backgroundColor = '#' + randomColor;
//     console.log('bri');
// }



function whenClick() {
    const arrOfColors = ['red','blue','green','Silver','Gray','Black','Red','Maroon','Yellow','Olive','Lime','Aqua','Teal','Blue','Navy','Fuchsia','Purple'];
    const random = Math.floor(Math.random()*(arrOfColors.length - 1));
    document.body.style.backgroundColor = arrOfColors[random];
    console.log(arrOfColors[random]);
}