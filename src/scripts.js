document.querySelector('#button-little').addEventListener('click', () => {
    document.querySelector('#phone-size').classList.remove('size-small')
    document.querySelector('#phone-size').classList.remove('size-big')
    document.querySelector('#phone-size').classList.add('size-little')
  });

document.querySelector('#button-small').addEventListener('click', () => {
    document.querySelector('#phone-size').classList.remove('size-little')
    document.querySelector('#phone-size').classList.remove('size-big')
    document.querySelector('#phone-size').classList.add('size-small');
});

document.querySelector('#button-big').addEventListener('click', () => {
    document.querySelector('#phone-size').classList.remove('size-little')
    document.querySelector('#phone-size').classList.remove('size-small')
    document.querySelector('#phone-size').classList.add('size-big');
});


document.querySelector('#like-heard').addEventListener('click', () => {
    document.querySelector('#heard-like').classList.remove('select_like-1')
    document.querySelector('#heard-like').classList.add('select_like-1');
});
