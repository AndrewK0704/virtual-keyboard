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