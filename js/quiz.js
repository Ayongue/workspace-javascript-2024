// Generate random integers
function randInt(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
    
}

// get the numbers

var M = randInt(300,600);
var N = randInt(200, 300);
var K = randInt(100, 200);


// update the numbers

document.querySelector('#total').textContent = M.toString();
document.querySelector('#giveout').textContent = N.toString();
document.querySelector('#takeback').textContent = K.toString();

// update the answers
// m-n+k
//m-n-k
//m-(n+k)
//m-(n-k)

document.querySelector('[value="1"]').nextSibling.nodeValue=M.toString() +  "-" + N.toString()+"+"+K.toString();
document.querySelector('[value="2"]').nextSibling.nodeValue=M.toString() + "-"+ N.toString()+ "-" +K.toString();
document.querySelector('[value="3"]').nextSibling.nodeValue= M.toString() + "-(" + N.toString()+"+"+ K.toString() + ")";
document.querySelector('[value="4"]').nextSibling.nodeValue= M.toString() + "-(" + N.toString()+"-"+ K.toString() + ")";

// pick the answer
function changeStyle(e) {
    e.preventDefault(); // prevent the checkbok be clicked-- otherwise 2 clicks
    var classname = this.getAttribute("class")
    
    if (classname == "answer"){
        this.setAttribute("class", "answer selected");
    } else {
        this.setAttribute("class", "answer");
    }

    // testing an animation

    this.animate([{transform:'rotate(0deg)'}, {transform:'rotate(360deg)'}], {duration:2000, fill: 'forwards'});
}




//add event listener
var answerlist = document.getElementsByClassName('answer');
for(var i=0; i<4; i++){
    answerlist[i].addEventListener('click', changeStyle, false);
}