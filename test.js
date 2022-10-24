//Делегування подій
//1. Коли користувач клікає на будь-яку комірку із таблиці, потрібно її зробити активною - добавити клас .active
//2. Коли користувач клікає на іншу комірку, вона робиться активною, а всі інші стають неактивними
//3. Після перезавантаження сторінки активна комірка зберігається

const board = document.querySelector('.board');
board.addEventListener('click', onClickBoard);

// делегування подій

function onClickBoard(event){
    console.log('onClonClickBoard');
    if(event.target.tagName === 'TD'){
        event.target.style.background = 'green';
    }
    //console.dir(event.target);
    //console.log(event.currentTarget);
}

// спливання подій event.stopPropagation();

const activeTd = document.querySelector('.active');
activeTd.addEventListener('click', onClickActiveTd);

function onClickActiveTd(event){
    event.stopPropagation();
    console.log('onClickActiveTd');
    event.target.style.background = 'red';
}