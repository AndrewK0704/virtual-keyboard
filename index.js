let h1=document.createElement('h1');
h1.className='h1';
h1.innerHTML='Virtual Keyboard';
document.body.append(h1);

let textarea=document.createElement('textarea');
textarea.className='textarea';
textarea.innerHTML='Virtual Keyboard';
document.body.append(textarea);

let divkeyboard=document.createElement('div');
divkeyboard.className='keyboard';
divkeyboard.innerHTML='';
document.body.append(divkeyboard);

let div1=document.createElement('div');
div1.className='info';
div1.innerHTML='Клавиатура создана в операционной системе Windows';
document.body.append(div1);

let div2=document.createElement('div');
div2.className='info';
div2.innerHTML='Для переключения языка комбинация клавиш: Ctrl+Alt';
document.body.append(div2);

let arr1=['ё','1','2','3','4','5','6','7','8','9','0','-','=','й','ц','у','к','е','н','г','ш','щ','з','х','ъ','\\','ф','ы','в','а','п','р','о','л','д','ж','э','я','ч','с','м','и','т','ь','б','ю','.'];

function init(){
    let out='';
    for (let i=0; i<13; i++){
        out+='<div class="key">'+arr1[i]+'</div>';
    }
    out+='<div class="backspace">'+'Backspace'+'</div>';
    out+='<div class="tab">'+'Tab'+'</div>';
    for (let i=13; i<26; i++){
        out+='<div class="key">'+arr1[i]+'</div>';
    }
    out+='<div class="del">'+'Del'+'</div>';
    out+='<div class="capslock">'+'CapsLock'+'</div>'
    for (let i=26; i<37; i++){
        out+='<div class="key">'+arr1[i]+'</div>';
    }
    out+='<div class="enter">'+'Enter'+'</div>';
    out+='<div class="capslock">'+'Shift'+'</div>';
    for (let i=37; i<arr1.length; i++){
        out+='<div class="key">'+arr1[i]+'</div>';
    }
    out+='<div class="key">'+'▲'+'</div>';
    out+='<div class="enter">'+'Shift'+'</div>';
    out+='<div class="key">'+'CtrL'+'</div>';
    out+='<div class="key">'+'Win'+'</div>';
    out+='<div class="key">'+'Alt'+'</div>';
    out+='<div class="space">'+''+'</div>';
    out+='<div class="key">'+'Alt'+'</div>';
    out+='<div class="key">'+'◄'+'</div>';
    out+='<div class="key">'+'▼'+'</div>';
    out+='<div class="key">'+'►'+'</div>';
    out+='<div class="key">'+'CtrL'+'</div>';

    document.querySelector('.keyboard').innerHTML=out;

}

init();

document.querySelector('textarea').onkeydown = function (event) {
    console.log(event);
}