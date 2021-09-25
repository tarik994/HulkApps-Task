
var arrayProduct = [{ title: 'ESPRO COFFEE FRENCH PRESS P7', price: '$109.95 - $139.95', img: './images/product1.jpg' },
{ title: 'ESPRO COFFEE FRENCH PRESS P6', price: '$89.95 - $99.95', img: './images/product2.jpg' },
{ title: 'BLOOM POUR OVER COFFEE BREWING KIT, 18 OZ', price: '$44.95', img: './images/product3.jpg' },
{ title: 'ESPRO ULTRALIGHT COFFEE PRESS P0', price: '$109.97', img: './images/product4.jpg' }
];


function showProduct(products) {
    var show = document.querySelector('.head');
    var sec = document.querySelector('.section');
    var cont = document.querySelector('.container');


    for (let i = 0; i <= products.length; i++) {
        var element = products[i];
        console.log(products.length)
        console.log(products[i])
        var wrapper = document.createElement('div');
        wrapper.classList.add('product')
        var title = document.createElement('p');
        title.innerHTML = element.title;
        title.classList.add('productTitle')
        var img = document.createElement('img');
        img.classList.add('productImg')
        img.src = element.img;
        var p = document.createElement('p');
        p.innerHTML = element.price;
        p.classList.add('productPrice');



        wrapper.appendChild(title);
        wrapper.appendChild(img);
        wrapper.appendChild(p);
        show.appendChild(wrapper);
    }
    sec.appendChild(show);
    cont.appendChild(sec);

}


showProduct(arrayProduct)

console.log('tarik')