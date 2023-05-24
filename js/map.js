// получаем данные сервера 
let jsonData = {
    "start": "старт",
    "data": "10.06.23",
    "cont": {
        "key1": "значение1",
        "key2": "значение2"
    }
};

// определяем место вставки
const mainMap = document.getElementById("main__map");

// создаем данные для вставки
let width_map = 300
let height_map = 300
let element_color = "#035859"
let font_size = 15
let words = `${jsonData.start} ${jsonData.data}`
let len_words = words.length * font_size
let x_words = 150
let y_words = 150

// оформляем данные и отправляем в html 
mainMap.innerHTML = `
<svg width="${width_map}" height="${height_map}">
    <g>
        <rect  x="${x_words - (len_words /2.5)}" y="${y_words - (font_size + 2)}" width="${len_words - 40}px" height="30px" rx="10px" ry="10px" fill="${element_color}"></rect>
        <text x="${x_words}" y="${y_words}" fill="white" text-anchor="middle" font-size="${font_size}px">${words}</text>
    </g>
</svg>`;


// for (let i = 0; i< Object.keys(jsonData).length; i++){
//     let struktura = i
// }

// {/* <svg width="500" height="500">
//      <g>
//          <circle cx="50" cy="50" r="20" fill="black" />
//          <line x1="50" y1="50" x2="150" y2="50" stroke="black" />
//          <text x="50" y="50" text-anchor="middle" fill="white">Надпись</text>
//          <rect  x="50" y="50" width="30px" height="30px" rx="10px" ry="10px" fill="#838585"></rect>
//      </g>
//  </svg> */}