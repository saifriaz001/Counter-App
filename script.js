const countValue = document.getElementById('counter');

function increment() {
    let value = parseInt(countValue.innerText);
    value = value + 1;
    countValue.innerText = value;
};


function decrement() {
    let value = parseInt(countValue.innerText);
    value = value-1;
    countValue.innerText = value;
    
};

function ReSet(){
    let value = parseInt(countValue.innerText);
    value = 0;
    countValue.innerText =value;
};