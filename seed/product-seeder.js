var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.createConnection('localhost:27017/shopping');

var products = [
  new Product({
    imagePath: 'http://storage6.vsemayki.ru/images/0/0/966/966286/previews/people_110_manshort_front_black_250.jpg',
    title: 'Майка_для_задрота_1',
    description: 'Описание майки блаблабла лалала азазазаза тут много текста сейчас мне его писать лень но он тут уж точно будет, помени моё слово, Поттер!',
    price: 800
  }),
  new Product({
    imagePath: 'http://storage6.vsemayki.ru/images/0/0/966/966286/previews/people_110_manshort_front_black_250.jpg',
    title: 'Майка_для_задрота_2',
    description: 'Описание майки блаблабла лалала азазазаза тут много текста сейчас мне его писать лень но он тут уж точно будет, помени моё слово, Поттер!',
    price: 800
  }),
  new Product({
    imagePath: 'http://storage6.vsemayki.ru/images/0/0/966/966286/previews/people_110_manshort_front_black_250.jpg',
    title: 'Майка_для_задрота_3',
    description: 'Описание майки блаблабла лалала азазазаза тут много текста сейчас мне его писать лень но он тут уж точно будет, помени моё слово, Поттер!',
    price: 800
  })
];

let done = 0;

for (let i=0;i>products.length;i++) {
  products[i].save((err, result) => {
    done++;
    if(done === products.length) {
      mongoose.disconnect();
    }
  });
}




