let h1=document.createElement('h1');
h1.className='h1';
h1.innerHTML='Virtual Keyboard';
document.body.append(h1);

let textarea=document.createElement('textarea');
textarea.className='textarea';
textarea.innerHTML='';
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
div2.innerHTML='Для переключения языка комбинация клавиш: Ctrl+Shift';
document.body.append(div2);

let arrru=['ё','1','2','3','4','5','6','7','8','9','0','-','=','й','ц','у','к','е','н','г','ш','щ','з','х','ъ','ф','ы','в','а','п','р','о','л','д','ж','э','я','ч','с','м','и','т','ь','б','ю','.'];
let arrru2=['Ё','1','2','3','4','5','6','7','8','9','0','-','=','Й','Ц','У','К','Е','Н','Г','Ш','Щ','З','Х','Ъ','Ф','Ы','В','А','П','Р','О','Л','Д','Ж','Э','Я','Ч','С','М','И','Т','Ь','Б','Ю','.'];
let arren=['`','1','2','3','4','5','6','7','8','9','0','-','=','q','w','e','r','t','y','u','i','o','p','[',']','a','s','d','f','g','h','j','k','l',';','\'','z','x','c','v','b','n','m',',','.','/'];
let arren2=['`','1','2','3','4','5','6','7','8','9','0','-','=','Q','W','E','R','T','Y','U','I','O','P','[',']','A','S','D','F','G','H','J','K','L',';','\'','Z','X','C','V','B','N','M',',','.','/'];

let flag=false;
let flag1=0;
let flag3=0;
let arr1=[];

if (flag1===0){
    arr1=arrru;
} else{
    arr1=arrru2;
}

addEventListener('load', (event)=>{


})
function init(){
    let out='';
    for (let i=0; i<13; i++){
        out+='<div class="key" data="'+ arr1[i] +'">'+arr1[i]+'</div>';
    }
    out+='<div class="key backspace" data="'+ 'Backspace' +'">'+'Backspace'+'</div>';
    out+='<div class="key tab" data="'+ 'Tab'+'">'+'Tab'+'</div>';
    for (let i=13; i<25; i++){
        out+='<div class="key" data="'+ arr1[i] +'">'+arr1[i]+'</div>';
    }
    out+='<div class="key" data="'+ 'Backslash' +'">'+'\\'+'</div>';
    out+='<div class="key tab" data="'+ 'Delete' +'">'+'Del'+'</div>';
    out+='<div class="key capslock" data="'+ 'CapsLock' +'">'+'CapsLock'+'</div>'
    for (let i=25; i<36; i++){
        out+='<div class="key" data="'+ arr1[i] +'">'+arr1[i]+'</div>';
    }
    out+='<div class="key enter" data="'+'Enter'+'">'+'Enter'+'</div>';
    out+='<div class="key capslock" data="'+'ShiftLeft'+'">'+'Shift'+'</div>';
    for (let i=36; i<arr1.length; i++){
        out+='<div class="key" data="'+ arr1[i] +'">'+arr1[i]+'</div>';
    }
    out+='<div class="key" data="'+'ArrowUp'+'">'+'▲'+'</div>';
    out+='<div class="key enter" data="'+'ShiftRight' +'">'+'Shift'+'</div>';
    out+='<div class="key" data="'+'ControlLeft'+'">'+'CtrL'+'</div>';
    out+='<div class="key" data="'+ 'Meta' +'">'+'Win'+'</div>';
    out+='<div class="key" data="'+ 'AltLeft' +'">'+'Alt'+'</div>';
    out+='<div class="key space" data="'+ ' ' +'">'+''+'</div>';
    out+='<div class="key" data="'+ 'AltRight' +'">'+'Alt'+'</div>';
    out+='<div class="key" data="'+ 'ArrowLeft' +'">'+'◄'+'</div>';
    out+='<div class="key" data="'+ 'ArrowDown' +'">'+'▼'+'</div>';
    out+='<div class="key" data="'+ 'ArrowRight' +'">'+'►'+'</div>';
    out+='<div class="key" data="'+'ControlRight'+'">'+'CtrL'+'</div>';

    document.querySelector('.keyboard').innerHTML=out;
}

init();

document.onkeydown = function (event){
    console.log(event);
    textarea.focus();
    if (event.getModifierState('CapsLock')){

        if(flag3===0){
            arr1=arrru2;
            init();
        } else {
            arr1=arren2;
            init();
        }
    } else {
        if(flag3===0){
            arr1=arrru;
            init();
        } else {
            arr1=arren;
            init();
        }
    }

    if (event.key!=='Control'&&event.key!=='Alt'&&event.key!=='Shift'&&event.key!=='AltGraph'&&event.key!=='\\'&&event.key!=='CapsLock'){
        document.querySelector('.keyboard .key[data="'+event.key+'"]').classList.add('active');
    } else if (event.code==='ControlLeft')
    {
        document.querySelector('.keyboard .key[data="'+event.code+'"]').classList.add('active');
    } else if (event.code==='ControlRight')
    {
        document.querySelector('.keyboard .key[data="'+event.code+'"]').classList.add('active');
    } else if (event.code==='AltLeft')
    {
        document.querySelector('.keyboard .key[data="'+event.code+'"]').classList.add('active');
    } else if (event.code==='AltRight')
    {
        document.querySelector('.keyboard .key[data="'+event.code+'"]').classList.add('active');
    } else if (event.code==='ShiftLeft')
    {
        document.querySelector('.keyboard .key[data="'+event.code+'"]').classList.add('active');
    } else if (event.code==='ShiftRight')
    {
        document.querySelector('.keyboard .key[data="'+event.code+'"]').classList.add('active');
    } else if (event.code==='Backslash')
    {
        document.querySelector('.keyboard .key[data="'+event.code+'"]').classList.add('active');
    } else if (event.code==='CapsLock')
    {
        document.querySelector('.keyboard .key[data="'+event.code+'"]').classList.add('active');
    }

    if(event.key==='Control'){
        flag=true;
    }
    if(event.key==='Shift' && flag){
        flag=false;
        if(flag3===0 && event.getModifierState('CapsLock')!==true){
            flag3=1;
            arr1=arren;
            init();
        } else if (flag3===1 && event.getModifierState('CapsLock')!==true) {
            flag3=0;
            arr1=arrru;
            init();
        } else if (flag3===0 && event.getModifierState('CapsLock')===true) {
            flag3=1;
            arr1=arren2;
            init();
        } else if (flag3===1 && event.getModifierState('CapsLock')===true) {
            flag3=0;
            arr1=arrru2;
            init();
        }
    }

    textarea.focus();

}

document.onkeyup = function (event){
    textarea.focus();

    if (event.key!=='Control'&&event.key!=='Alt'&&event.key!=='Shift'&&event.key!=='\\'){
        document.querySelector('.keyboard .key[data="'+event.key+'"]').classList.remove('active');
    } else if (event.code==='ControlLeft')
    {
        document.querySelector('.keyboard .key[data="'+event.code+'"]').classList.remove('active');
    } else if (event.code==='ControlRight')
    {
        document.querySelector('.keyboard .key[data="'+event.code+'"]').classList.remove('active');
    } else if (event.code==='AltLeft')
    {
        document.querySelector('.keyboard .key[data="'+event.code+'"]').classList.remove('active');
    } else if (event.code==='AltRight')
    {
        document.querySelector('.keyboard .key[data="'+event.code+'"]').classList.remove('active');
    } else if (event.code==='ShiftLeft')
    {
        document.querySelector('.keyboard .key[data="'+event.code+'"]').classList.remove('active');
    } else if (event.code==='ShiftRight')
    {
        document.querySelector('.keyboard .key[data="'+event.code+'"]').classList.remove('active');
    } else if (event.code==='Backslash')
    {
        document.querySelector('.keyboard .key[data="'+event.code+'"]').classList.remove('active');
    }
    textarea.focus();

    
}

/*
function keyClick() {
    console.log(this);
}

document.querySelector('.keyboard').addEventListener('click', keyClick);
*/


/*
let activeKey=document.querySelector('.keyboard .key2');

activeKey.addEventListener('click', (element)=>{
activeKey.classList.toggle('active');
})
*/