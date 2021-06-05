const btn = document.querySelector('.btn');
const color = document.querySelector('.color'); 

const hex= [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","G","H","I"]; 

const randomNumberGenerator = (numberArray)=>{
    return Math.floor(Math.random()*numberArray.length); 
}


btn.addEventListener('click',function(){
    let hexNumber = '#';
    for( i=0;i<6;i++) { 
        hexNumber+=hex[randomNumberGenerator(hex)];
    }
    document.body.style.backgroundColor=hexNumber; 
    color.textContent=hexNumber;     
    console.log(hexNumber); 
    
})
