// console.log(document.querySelector('#colorPicker').value);
// document.querySelector('#colorText').textContent = `カラーコード: ${document.querySelector('#colorPicker').value}`;
const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');


const showColor = () => {
    //documentのbodyのスタイルのbバックグラウンドをcolorの値に変更する
    document.body.style.backgroundColor = color.value

    //カラーコードを表示
    if (color.value === '#ffffff') {
        text.textContent = `カラーコード: ${color.value} (white) いい色を選んだな！！`
    } else {
    text.textContent = `カラーコード: ${color.value}`;
    }
};

//カラーピッカーにインプットがあったらshowColorを発動する
color.addEventListener('input', showColor)

/*
const 関数名 = () => {
    ここに実行内容を書く
}
*/