# validation-codes
Проверка ИНН/СНИЛС

# install
```npm i --save ru-validation-codes```

# functions

checkINN(value) - проверка, что это 10/12и цифровой код ИНН с [вычислением контрольной суммы](https://ru.wikipedia.org/wiki/%D0%98%D0%B4%D0%B5%D0%BD%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B9_%D0%BD%D0%BE%D0%BC%D0%B5%D1%80_%D0%BD%D0%B0%D0%BB%D0%BE%D0%B3%D0%BE%D0%BF%D0%BB%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%89%D0%B8%D0%BA%D0%B0)

checkSnils(value) - проверка, что это цифровой код формата ```123-456-789 01``` с [вычислением контрольной суммы](http://www.consultant.ru/document/cons_doc_LAW_124607/68ac3b2d1745f9cc7d4332b63c2818ca5d5d20d0/)

# how to use

```js
import {checkINN, checkSnils} from 'ru-validation-codes';
console.log(checkINN('617547302703')); //false
console.log(checkSnils('642-709-548 07')); //true

```
