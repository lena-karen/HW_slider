const imgEl = document.querySelector('.img-slider');
const leftArEl = document.querySelector('.left-arrow');
const rightArEl = document.querySelector('.right-arrow');
const btnEl = document.querySelector('.btn');

const img_arr = [
    'https://icdn.lenta.ru/images/2022/06/13/19/20220613193918938/square_320_606658bb7374481a05a664f151a8d888.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/African_Elephant_%28Loxodonta_africana%29_male_%2817289351322%29.jpg/1200px-African_Elephant_%28Loxodonta_africana%29_male_%2817289351322%29.jpg',
    'https://i.ytimg.com/vi/ViAath1B5WY/maxresdefault.jpg',
    'https://cdnn21.img.ria.ru/images/153009/29/1530092975_240:0:1680:1440_1920x0_80_0_0_9df118e773d0e9f5c788eabb7b6f2aad.jpg'
  ];

let current_index = 0;
leftArEl.innerText = '<';
rightArEl.innerText = '>';
imgEl.src = img_arr[0];
const changeImg = (index) => {
    imgEl.src = img_arr[index];
}
rightArEl.addEventListener('click', (event) => {
    
    current_index++;
    if (current_index > img_arr.length - 1) {
        current_index = 0;
    }
    changeImg(current_index);
//   imgEl.src = img_arr[symbols_index++ % img_arr.length]
});
leftArEl.addEventListener('click', (event) => {
    
    current_index--;
    if (current_index < 0) {
        current_index = img_arr.length - 1;
    }
    changeImg(current_index);
 });
 let size = 30;


 btnEl.addEventListener('click', () => {
    size+=10;
    btnEl.style.width = `${size}px`;
    btnEl.style.height = `${size}px`;
});