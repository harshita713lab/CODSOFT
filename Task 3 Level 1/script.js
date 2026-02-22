const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click' , () =>{
        let value = button.getAttribute('data-val');

        if(value === 'C'){
            display.value = '';
        }
        else if(value === 'DEL'){
            display.value = display.value.slice(0, -1);
        }
        else if(value === '='){
            try{
                if(display.value !== ''){
                    display.value = eval(display.value);
                }
            }catch(error){
                display.value = 'Error';
            }
        }else{
            display.value += value;
        }

    });
});