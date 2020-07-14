//initiate
let count=0;
//select
const value =document.querySelector("#value");
const btns =document.querySelectorAll(".btn"); 
//console.log(btns)
btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('increase')){
            count++;
        }
        else{
            count = 0;
        }
        if (count<0){
            value.style.color='teal';
        }
        if (count>0){
            value.style.color='purple';
            
            if (count==0){
                value.style.color='indigo';
            }
        }
        value.textContent = count;

    })
})