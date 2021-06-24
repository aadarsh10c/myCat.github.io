//Change user name
let myButton = document.querySelector('button');
let myTitle = document.querySelector('h1');

function setUsername() {
    let myname = prompt("enter name of your cat: ");
    if(!myname){
        setUsername();
    }else{
        localStorage.setItem('name',myname);
        myTitle.textContent = 'My Cat '+ myname;
    }

}

if(!localStorage.getItem('name')){
    setUsername();
}else{
   let myname = localStorage.getItem('name');
   myTitle.textContent = 'My Cat '+ myname;

}


myButton.onclick = function(){
    alert('button clicked');
    setUsername();
}

//Change image on click
let myimg = document.querySelector('img');
myimg.onclick = function(){
    let mysrc = myimg.getAttribute('src');
    if (mysrc === 'images/mintu.jpg'){
        myimg.setAttribute('src','images/tenor.gif');
    }else{
        myimg.setAttribute('src','images/mintu.jpg');
    }
}