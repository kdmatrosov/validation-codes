# validation-codes
Проверка ИНН/СНИЛС/ОГРН/ОГРНИП/БИК

# install
```npm i --save ru-validation-codes```

# functions

checkINN(value) - проверка, что это 10/12и цифровой код ИНН с [вычислением контрольной суммы](https://ru.wikipedia.org/wiki/%D0%98%D0%B4%D0%B5%D0%BD%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B9_%D0%BD%D0%BE%D0%BC%D0%B5%D1%80_%D0%BD%D0%B0%D0%BB%D0%BE%D0%B3%D0%BE%D0%BF%D0%BB%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%89%D0%B8%D0%BA%D0%B0)

checkSnils(value) - проверка, что это цифровой код формата ```123-456-789 01``` с [вычислением контрольной суммы](http://www.consultant.ru/document/cons_doc_LAW_124607/68ac3b2d1745f9cc7d4332b63c2818ca5d5d20d0/)

checkOgrn(value) - проверка, что это 13и цифровой код ОГРН с [вычислением контрольной суммы](https://ru.wikipedia.org/wiki/%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B9_%D0%B3%D0%BE%D1%81%D1%83%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D1%80%D0%B5%D0%B3%D0%B8%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B9_%D0%BD%D0%BE%D0%BC%D0%B5%D1%80)

checkOgrnip(value) - проверка, что это 15 цифровой код ОГРНИП с [вычислением контрольной суммы](http://www.temabiz.com/terminy/chto-takoe-ogrnip.html)

checkBik(value) - проверка, что это 9 цифровой код [БИК](https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D0%BD%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9_%D0%B8%D0%B4%D0%B5%D0%BD%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B9_%D0%BA%D0%BE%D0%B4)

# how to use

```js
import {checkINN, checkSnils, checkOgrn, checkOgrnip, checkBik} from 'ru-validation-codes';
console.log(checkINN('617547302703')); //false
console.log(checkSnils('642-709-548 07')); //true
console.log(checkOgrn('4057910142110')); //true
console.log(checkOgrnip('313242342342332')); //false
console.log(checkBik('044525225')); //true

```
