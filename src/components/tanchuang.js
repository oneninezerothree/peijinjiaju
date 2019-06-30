import $ from 'jquery';

const creatDiv = (data) => {
    let $mask = $('<div></div>');
    //插入传入的值
    $mask.text(data);
    $mask.css({
        'position': 'fixed',
        'top': '50%',
        'left': '50%',
        'transform': 'translate(-50%, -50%)',
        'width': '7.692308rem',
        'background': 'rgba(0, 0, 0, .8)',
        'font-size': '0.615385rem',
        'color': 'white',
        'text-align': 'center',
        'padding': '0.576923rem 0.769231rem',
        'border-radius': '10px',
        'z-index': '9999999'
    })
    $mask.appendTo('body').fadeOut(0).fadeIn(300);
    setTimeout(() => {
        $mask.fadeOut(300, () => {
            $mask.remove();
        })
    }, 800)
}

export default creatDiv;