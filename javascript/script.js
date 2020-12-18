// let name, admin;
// let age =25
// name = "oleg";
// admin = name;
// alert ( admin );
// alert (age);

//задача 2
// let name = "jlia"
//  alert(`hello ${1}`);
//  alert( `hello ${"name"}`);
//  alert( `hello ${name}`);

/* задача 3
let name = prompt("userName");
alert(name);//возвращает текст в поле ввода
let isBoss =confirm("кто ты?");
alert(isBoss);//модальное окно с двумя кнопками ALERT выводит true ili false*/

//задача 4 преобразование в строки
//  let value = true;
//  alert(typeof value);//boolean
//  value = String(value);//теперь value строка "true"
//    alert(typeof value);//string

 //let str ="123";
// alert(typeof str);//string
// let num = Number(str);//становиться числом 123
//alert(typeof num);//number  

/*function calulateArea(width,height) {
    //let area=width*height;
    return width*height; 
    //alert();
}
let wallOne=calulateArea(3,5);
alert(wallOne +  name);*/

/*let num = (a=10,b=2);
alert (a+b);
alert (a-b);   
alert (a*b);
alert (a/b);*/
/*let sum = (c=15,d=2);
sum= c+d;
let result =sum;
alert (sum);*/
//let sum = (a=1,b=1,c=1);
//sum = a+b+c;
//alert (sum);
//sum = a*b*c;
//alert (sum);

/*let a=17,b=10;
let c =(a-b);
let d=7;
let result = (c+d)
alert(result);*/

//let str ='привет,';
//let str1 ='world!';
/*let name = "oleg";
alert (`hello ${name}!`);
let age =40;
alert (`мне, ${age}лет!`)*/

//let name = prompt ('Ваше имя');
//alert(`ваше имя ${name}!`);

/*let num = prompt ('назовите число');
num  *=num;
alert (num);*/

/*let str ='abcde';
alert(str[0]);
alert(str[2]);
alert(str[4]);*/

//let num='12345';
//num =[1]*[2]*[3]*[4]*[5];
//alert(num);  

//let num=8;
//num *= num;
//alert(num);

/*let num =47;
num += 7;
num -=18;
num *=10;
num /=15;
alert(num);*/

//let num =10;
//num++;
//num++;
//num--;
// alert(num);

//let arr =[2,5,3,9];
//   let result=arr[0] *arr[1]+arr[2]*arr[3];
//alert(result);

//let obj ={'a': 1, 'b': 2, 'c': 3};
//alert(obj['c']);
//alert(obj.c);

//let obj = {Коля: '1000', Вася: '500', Петя: '200'};
//alert(obj.Коля);
//alert(obj.Петя);

//let obj = {1:'пн', 2:'вт', 3: 'ср', 4: 'чт',5: 'пн', 6: 'сб', 7: 'вс'};
//let day = obj[2];
//alert(day)

//let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
//alert(arr [1] [0]);
//выводим 4

//let obj = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'};
//alert (obj.js [0])
//выводим jQuery

/*let obj ={
    'ru':['пн','вт','ср','чт','пт','сб','вс'],
    'en':['pn','vt','sr','cht','pt','sb','vs'],
} 
alert(obj['ru'] [0]);
alert(obj['en'] [2]);*/

/*let a = 0;
if (a == -3) {
	alert('Верно');
} else {
	alert('Неверно');
}*/

/*let a = 0;
if (a > -3) {
    alert('true');
} else {
    alert('false');
}*/

/*let a = 0;
if (a<-3) {
    alert('true');
} else {
    alert('false');
}*/

/*let a = 0;
if (a >= 0) {
    alert('true');
}else {
    alert('false');
}*/

/*let a = 0;
if (a <= -3) {
    alert('true');
} else {
    alert('false');
}*/

/* let a = 0;
 if (a != -3) {
     alert('true');
 } else {
     alert('false');
 }*/

 /*let a ='test';
 if (a = 3) {
     alert('true');
 } else {
     alert('false');
 }*/

 /*let a = 3;
 if (a == '1') {
     alert('true');
 } else {
     alert('false');
 }*/

 //let test = true;
 //if (test = false) alert('true'); else alert('false');
/*let test =true;
if (test = true) {
    alert('true');
} else {
    alert('false');
}*/

//let test =true;
//if (test != true) alert('true'); else alert('false');
/*let test =true;
if (test !=false) {
    alert('true');
} else {
    alert('false');
}*/

//let a = 2;
//if (a > 0 && a < 5) alert('true'); else alert('false');
//let a = 2;
//if (a==0 || a==2) alert(a + 7); else alert( a / 10);

//let a = -1;
//let b = 5;
// if (a <= 1, b >=3) alert( a+b); else alert(a-b);

//let a = 3 ;
//let b = 7;
//if (a >2 && a < 11 || b >= 6 && b < 14) alert('true'); else alert('false');

/*let num = prompt("введите число");
let result;
switch (num) {
   case '1':
       result ='зима';
       break;
    case '2':
        result ='весна';
        break;
    case '3':
        result = 'лето';
        break;
    case '4':
        result = 'осень';
        break;
    default:
        result = 'нет таких значений';
        break;
}
alert(result);*/

/*let day = 30;
if (day >= 1 && day <= 10) {
	alert('В первую декаду');
}
if (day >=11 && day <= 20) {
    alert('во вторую декаду');
}
if (day >=21 && day <= 31) {
    alert('в третью декаду');
}*/

/*let month = 10;
if (month >=1 && month <= 3) {
    alert('зима');
}
if (month >=4 && month <= 6) {
    alert('весна');
}
if (month >=7 && month <= 9) {
    alert('лето');
}
if (month >=10 && month <= 12) {
    alert('осень');
}*/

//let str = 'abcde';
//if (str[0] == 'c') alert(true); else alert('false');
//СЛОЖЕНИЕ СТРОК КАК ЧИСЕЛ!!!!!!!!!!!!!!
//let str = '123';
// str = (+str[0])+(+str[1])+(+str[2]);
//alert(str); 

//let str = '123456';
//    str1 = (+str[0])+(+str[1])+(+str[2]);
//    str2 = (+str[3])+(+str[4])+(+str[5]);
//    if (str1 == str2) alert('true'); else alert('false');

/*let i = 10;
while (i <= 50) {
	document.write(i + '<br>');
	i++;
}*/
/*let i =11;
while (i <= 33) {
    document.write(i + '<br>');
    i++;
} */
//!!!ВЫВОДИМ ЧЕТНЫЕ ЧИСЛА!!!!!
/*let i = 1;
while (i++ <=100) {
    document.write(i + '<br>');
    i++;
}*/
//С помощью цикла найдите сумму чисел от 1 до 100.
// let sum = 0;
 //for (let i=0; i<=100; i++) {
 //    sum = sum + i;
// }
 //console.log(sum);
// Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.
//let arr = [1,2,3,4,5];
//for (let i=0; i<arr.length; i++) {
 //   console.log(arr[i]);
//}
//выводим ключи
/*let obj = {green: 'зеленый', red: 'красный', blue: 'голубой'};
for (let key in obj) {
    alert(key);
}*/
//выводим значение
/*let obj = {gren:'зеленый',red:'красный',blue: 'голубой'};
 for (let key in obj) {
     alert(obj [key]);
 }*/
// Дан объект obj с ключами Коля, Вася, Петя с элементами '200', '300', '400'. С помощью цикла for-in выведите на экран строки такого формата: 'Коля - зарплата 200 долларов.'.
/*let obj ={коля:'200',вася:'300',петя:'400'};
for (let key in obj) {
    alert(key+ ' -зарплата '+obj[key]+' долларов');
}*/
//????
/*let arr =[2,5,9,15,0,4];
for (let i=0; i<arr.length; i++)
if (i>3 && i<10) {
    alert(i);
}*/
//Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.
//положительн или отрецательные надо поменять знак > на противоположный (arr[i]>0)
/*let arr = [1,-2,3,-4];
let sum =0;
for (let i=0; i<arr.length; i++) {
    if (arr[i] > 0) {
        sum += arr[i];
    }
}
alert(sum) */
//С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4.
/* let arr =[1,2,5,9,4,13,4,10];
 let num = 0;
 for (let i=0; i<arr.length; i++) {
     if (arr[i] === 4) {
         alert(true); break;
     } 
 }*/ //если убрать break прерывание выведет 2 4ки
// Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
/*let arr =['10','20','30','50','235','3000'];
for (let i in arr) {
    let num = Math.abs(arr[i]).toString() [0];
    if (num ==='1' || num ==='2' ||num ==='5') {
        console.log(arr[i]);
    }
}*/ 
 //Math.abs возращает модуль числа.из отрицательного делает положительное
 
 //Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.
/*let arr = [1,2,3,4,5,6,7,8,9];
let str = arr.join("-"); //метод join
    alert(str); */
 /*let str = '123456789';
 let arr1 = str.split('');//split разбиваем строку в массив
 let arr2 = arr1.reverse();//reverse перевернем этот массив
 let result = arr2.join('');//сольем перевернутый массив в строку
 console.log(result);*/
// Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным
/*let arr =['пн','вт','ср','чт','пт','сб','вс'];
for (let i in arr) {
    if (arr[i] ==='сб'|| arr[i] ==='вс');

console.log(arr[i].bold())
}*/
//Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом
/*let day = 'вт';
let arr =['пн',day,'ср','чт','пт','сб','вс'];
for (let key in arr) {
    if (arr[key]==day) {
        document.write('<i>'+arr[key]+'</i>'+'<br>')
    } else {
        document.write(arr[key]+'<br>')
    }
}*/
//let a=10;
//let b=3;
//alert(a%b);
//Даны переменные a и b. Проверьте, что a делится без остатка на b. Если это так - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком' и остаток от деления
/*let a =10;
let b =2;
let rest = a%b;
if (rest !=0) {
    alert("делится с остатком"+ rest);
} else {
    alert("делится"+(a/b));
}*/
//Math.pow возводит число в заданную степень.
// первым параметром передается число.вторым в какую степень его возвести.
//Метод Math.sqrt возвращает квадратный корень числа. Math.sqrt(положительное число);
//let a=2;
//let b=10;
//let st=Math.pow(2,10);
//console.log(st);
//Найдите квадратный корень из 245.
//let st=245;
//console.log(Math.sqrt(245));
//Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.
/*let arr=[4,2,5,19,13,0,10];
let sum=0;
for (let i=0; i<arr.length; i++) {
sum += arr[i];}
 let num = (Math.pow(sum,3));
console.log(Math.sqrt(num));*/

//Math.round выполняет округление до ближайшего целого числа по правилам математического округления. Math.round(число)
//Math.ceil производит округление дробного числа до целого всегда в большую сторону. Math.ceil(число);
//Math.floor производит округление числа до целых всегда в меньшую сторону. Math.floor(число);
//toFixed производит округление числа до указанного знака в дробной части.
//Количество знаков указывается параметром.
//Если число знаков не указано, то по умолчанию берется 0 знаков, то есть округление до целого числа. число.toFixed([количество знаков в дробной части]);
//Метод toPrecision округляет число до заданного знака. В отличие от Math.round округление можно проводить не только в дробной части.
//Параметром метода указывается сколько цифр должно остаться в числе. число.toPrecision(длина);

//Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых
//let num = Math.sqrt(379);
//console.log(Math.round(num))
//console.log(num.toFixed([1]))
//console.log(num.toFixed([2]))

//Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'.
/*let num = (Math.sqrt(587));
let a = (Math.ceil(num));
let b = (Math.floor(num));
let obj = {'ceil':a,'floor':b};
alert(obj['ceil']);
alert(obj['floor']);*/

//Метод Math.max возвращает максимальное число из группы чисел, переданных в функцию.
//Метод Math.min возвращает минимальное число из группы чисел, переданных параметрами.
//По умолчанию метод не работает с массивами, однако с помощью хитрого приема можно найти минимальное значение массива: Math.min.apply(null, arr), где arr - произвольный массив.
//Math.min(число, число, число...);

//Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
/*let max = Math.max(4, -2, 5, 19, -130, 0, 10);
let min = Math.min(4, -2, 5, 19, -130, 0, 10);
console.log(max)
console.log(min)*/

//Метод Math.random() возвращает случайное дробное число от 0 до 1.
//Выведите на экран случайное целое число от 1 до 100.
/*function getRandomInt(min,max) {
    return Math.floor(Math.random()*(max-min+1))+min;
    }
    console.log(getRandomInt(0,100))*/
// Заполните массив 10-ю случайными целыми числами.
/*let arr = [];
for (let i=0; i<10; i++) {
    arr[i]= Math.floor(Math.random()*100);
}
alert(arr);*/   //100 отвечает за числа каторыми заполняется масив тоесть 1до9 будет заполняться 0 ми.
//от10 до20 будут однозначные.100 до 999 двузначные и тд

//Math.abs(число)  Метод Math.abs возвращает модуль числа, то есть из отрицательного числа делает положительное.
//Даны переменные a и b. Найдите найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b.
//let a=4;
//let b=31;
//alert(Math.abs(a-b));
//Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c. Сделайте так, чтобы в любом
// случае в переменную c записалось положительное значение. Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.
/*let a=6;
let b=1;
let c= Math.abs(a-b);
alert(c);*/
// Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
/*let arr=[12, 15, 20, 25, 59, 79];
let sum = 0;
for (let i=0; i<arr.length; i++) {
    sum += arr[i];
}
let result = sum;
alert(result);*/

//Напишите скрипт, который будет находить факториал числа. Факториал (обозначается !) - это произведение (умножение) всех целых чисел, меньше данного, и его самого.
/*function factorial(n) {
    return n ? n * factorial(n-1) : 1;
}
alert(factorial(5));*/

//Метод toUpperCase производит преобразование строки в верхний регистр (из маленьких букв делает большие).
// При этом возвращается новая строка, а исходная строка не меняется. строка.toUpperCase()
//Метод toLowerCase производит преобразование строки в нижний регистр (из больших букв делает маленькие).
// При этом возвращается новая строка, а исходная строка не меняется. строка.toLowerCase()
//Дана строка 'js'. Сделайте из нее строку 'JS'.
//let str = 'js';
// document.write(str.toUpperCase());
//Дана строка 'JS'. Сделайте из нее строку 'js'.
//let str = 'JS';
 //document.write(str.toLowerCase());

// Свойство length позволяет узнать длину строки. Под длиной понимается количество символов в ней. строка.length
//Метод substr возвращает подстроку из строки (исходная строка при этом не изменяется).строка.substr(откуда отрезать, [сколько символов отрезать])
//Метод substring возвращает подстроку из строки (исходная строка при этом не изменяется). строка.substring(откуда начать отрезать, [докуда отрезать])
//Метод slice возвращает подстроку из строки (исходная строка при этом не изменяется). строка.slice(откуда отрезать, [докуда отрезать])
//Метод indexOf осуществляет поиск подстроки (указывается первым параметром) в строке. строка.indexOf(что ищем, [откуда начинать поиск]);

//Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.
//let str = 'я учу javascript!';
//document.write(str.length);

//Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).
/*let str = 'я учу javascript!';
let sub = str.substr(2,4);
let sub1 = str.substr(6,);
alert(sub1);
alert(sub);*/

//Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.
/*let str = 'я учу javascript!'
let sub = str.indexOf('учу',[2]);
alert(sub);*/

//Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены
//let str = 'Я-учу-javascript!';
//alert(str.replace(/-/g,'!'));

//Метод split осуществляет разбиение строки в массив по указанному разделителю.
//строка.split([разделитель], [максимальное количество элементов]
// Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.
//let str = 'я учу javascript!';
//let arr = str.split('-');
//console.log(arr);
//Дана строка 'я учу javascript!'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.
//let str = 'я учу javascript!';
//let arr = str.split('') ;
//console.log(arr);

//В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.
/*let str = '2025-12-31';
let arr = str.split('-');
 let arr1 = arr[2]+'.'+ arr[1]+'.'+arr[0];
 console.log(arr1);
 let date = '2025-12-31';
 let result = date.split('-').reverse().join('.');
 console.log(result);*/

 //Метод join объединяет элементы массива в строку с указанным разделителем let str = arr.join('-')
 //Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!
 /*let arr = ['я', 'учу', 'javascript', '!'];
 let result = arr.join('+');
 alert(result);*/

 //Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.
 /*let str = 'var_test_text';
let arr = str.split('_'); 
let newStr ="";
for (let i=0; i<arr.length; i++) {
    newStr +=arr[i][0].toUpperCase()+arr[i].slice(1)
}
console.log(newStr);*/

//Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
/*let arr =[1,2,3];
let arr1 =[4,5,6];
let result = arr.concat(arr1);
console.log(result);*/

//Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
/*let arr =[1,2,3];
let result = arr.reverse();
console.log(result);*/

//Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
/*let arr = [1,2,3];
 arr.push('4','5','6');
alert(arr);
let lenght = arr;
console.log(lenght);*/

//Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
/*let arr = [1,2,3];
arr.unshift(4,5,6);
alert(arr);
let lenght = arr;
console.log(lenght);*/

//Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
/*let arr = ['js', 'css', 'jq'];
let elem = arr.shift();
console.log(elem);*/
//Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
/*let arr = ['js', 'css', 'jq'];
let elem = arr.pop();
console.log(elem);*/

//Пример . Применение
//Пусть дан массив ['1', '2', '3', '4', '5', '6']. Давайте сделаем из него строку '16-25-34'.
// Для решения задачи используем комбинацию методов pop, shift, push и join:
/*let arr = ['1','2','3','4','5','6'];
let result = [];
while (arr.length > 0)  { // массив уменьшается в цикле пока не достигнет нуля 
   let first = arr.shift();//уменшает массив на первый элемент "1" потом "2" потом "3"
   let last = arr.pop();//уменьшает массив на последний элемент "6" потом "5" потом "4"
   let str = first + last;//сложение элементов массива тут будет строка '16', потом ' 25', потом '34' 
   result.push(str);
}// После цикла в result лежит массив ['16', '25', '34']. Сольем его в строку: 
result = result.join('-');
console.log(result);*/

//Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3]
/*let arr = [1,2,3,4,5,];
let sub = arr.slice(0,3);
console.log(sub);*/

//Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
/*let arr = [1,2,3,4,5,];
let sub = arr.slice(3);
console.log(sub);*/

//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
/*let arr = [1,2,3,4,5];
 arr.splice(1,2);
alert(arr);*/

//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
/*let arr =[1, 2, 3, 4, 5];
let sub = arr.splice(1,3);
console.log(sub);*/

//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
/*let arr =[1, 2, 3, 4, 5];
arr.splice(3,0,'a','b','c');
console.log(arr);*/

//Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
//let arr = [3, 4, 1, 2, 7];
// console.log(arr.sort());

//Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
//let obj = {js:'test', jq: 'hello', css: 'world'};
//console.log(Object.keys(obj));

//Дана строка, например, '123456'. Переверните эту строку (сделайте из нее '654321') не используя цикл.
//let str ='123456';
//let result =str.split('').reverse().join('');
//console.log(result);

//Дана строка. Сделайте заглавным первый символ этой строки не используя цикл.
/*let str ='hello';
str = str.split('');//осуществляет разделение строки в массив
str[0] = str[0].toUpperCase();//первый элемент массива str[0] делаем заглавным
let result = str.join('');//преоброзование в строку
alert(result);*/

//Проверьте, что строка начинается на http://
/*let str = 'http://google.com'
if(str.substr(0,7) =='http://') {
    alert(true);
} else {
    alert(false);
}*/

//Проверьте, что строка заканчивается на .html.
/*let str ='index.html'
if (str.substr(6,10) =='html') {
    alert(true)
} else {
    alert(false)
}*/

//Сделайте функцию, которая возвращает квадрат числа. Число передается параметром
/*function num (a) {
    return a*a
}
document.write(num(4));*/

//Сделайте функцию, которая возвращает сумму двух чисел.
/*function num (a,b) {
    return a+b
}
document.write(num(4,5));*/

//Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
/*function num (a,b,c) {
    return (a-b)/c
}
document.write(num(10,1,3));*/

//Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
/*function numA (num) {
    switch (num) {
        case 1: return 'понедельник';
        case 2: return 'вторник';
        case 3: return 'среда';
        case 4: return 'четверг';
        case 5: return 'пятница';
        case 6: return 'субота';
        case 7: return 'воскресение';
        default:return 'неконкретное число';
    } 
}
  document.write(numA(5));*/

  //Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы.
  // То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30. Если число не делится - выведите 'false',
  // а если делится - выведите 'true'.
  /*let num = 31;
  for (i=2;i<=30; i++) {
      if(num % i===0) {
          alert(true);
          break;
      } else {
          alert(false);
          break;
      }
  }*/

 // Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'.
/*let arr =[1,2,3,4,4,5];
let a;
for(let i=1; i<arr.length; i++) {
    if(arr[i]===arr[i-1]) {
        a=true;
        break;
    }
}
 a? console.log(true) : console.log(false);*/

// Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.
/*function fan (a,b) {
    if (a==b) {
        alert(true);
    } else {
        alert(false);
    }
}
document.write(fan(5,5));*/

//Сделайте функцию, которая параметрами принимает 2 числа.
// Если их сумма больше 10 - пусть функция вернет true, а если нет - false.
/*function num (a,b) {
    if((a+b)>10) {
        alert(true);
    } else {
        alert(false)
    }
}
document.write(num(4,15));*/

//Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет.
// Если отрицательное - пусть функция вернет true, а если нет - false.
/*function num (a) {
    if(a<0) {
     alert(true);
    } else {
     alert (false);
    } 
}
document.write(num(-1));*/

//С помощью цикла for сформируйте строку '123456789' и запишите ее в переменную str
/*let str ='';
for( i=1; i<10; i++) {
    str =str+i
}
console.log(str);*/

//С помощью цикла for сформируйте строку '987654321' и запишите ее в переменную str.
/*let str ='';
for(i=9;i>=1; i--) {
    str = str + i;
}
console.log(str);*/

//С помощью цикла for сформируйте строку '-1-2-3-4-5-6-7-8-9-' и запишите ее в переменную str.
/*let str='';
for(i=1;i<10; i++) {
    str= str+'-'+i;
}
console.log(str+'-');*/

//Давайте теперь выведем на экран следующую пирамидку:
/*let str ='';
for(i=0; i<15; i++) {
    str +='x';
    document.write(str+'<br>');
}*/

//Выведем теперь следующую пирамидку:
/*for(let i=1; i<=9; i++) {
    for (let j=1; j<=i; j++) {
        document.write(i);
    }
    document.write('<br>');
}*/

//дано число, нужно делить его на 2 столько раз,
// пока результат не станет меньше 10. Нужно вывести число, которое при этом получится.
/*let num=500;
while (num > 10) {
    num = num/2;
}
alert(num);*/
//Можно использовать и цикл for - в этом случае он будет без тела (без {} и в конце ставим точку с запятой):
//Если забыть про точку с запятой в конце цикла - 
//следующая строчка попадет под цикл и повторится много раз: столько, сколько итераций в цикле.
//for(let num=500; num>10; num=num/2);
 //console.log(num);

// Нарисуйте пирамиду, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
/*let str = '';
for ( i=0; i<20; i++) {
    str +='x';
     document.write(str+'<br>');
}*/
//С помощью двух вложенных циклов нарисуйте следующую пирамидку:
/*for(let i=0; i<=9; i++) {
    for(let j=1; j<=i; j++) {
        document.write(i);
    }
    document.write('<br>');
}*/
//Нарисуйте пирамиду, как показано на рисунке, воспользовавшись циклом for:
/*let str ='';
for (i=1; i<6; i++) {
    str +='xx';
    document.write(str+'<br>');
}*/
//Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, 
//что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.
/*function isNumberInRange (num) {
    if(num>0 && num<10) {
        return (true)
    } else{
        return(false)
    }
} document.write(isNumberInRange(3));*/

//Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти.
// Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.
/*let arr =[1,2,3,4,15];
function isNumberInRange (num) {
    if(num>0 && num<10) {
        return(true)
    } else {
        return(false)
    }
}
let newArr = [];
for (let i=0; i<=arr.length; i++) {
     if(isNumberInRange(arr[i])) {
         newArr.push(arr[i]);
     }
} console.log(newArr);*/
//Сделайте функцию getDigitsSum (digit - это цифра), 
//которая параметром принимает целое число и возвращает сумму его цифр.
/* function getDigitsSum (num) {
      let sum=0;
      let str = String(num);
      for (let i=0; i<str.length; i++) {
          sum =(+str[i])+(+str[i]);
          return sum;//????работает с однозначными
      }
 }*/ // let num = +prompt('введите число');
// document.write(getDigitsSum(num));
 //Найдите все года от 1 до 2020, сумма цифр которых равна 13.
 // Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.
 /*let arr =[];
for(i=1; i<=2020; i++) {
    if(getDigitsSum(i)===13){
        arr.push(i);//заполняем массив 
    }
} console.log(arr);
function getDigitsSum(num) {
    let sum =0;
    let digits = String(num).split('');//метод split() разбивает обьект String на массив строк
    //путем разделения строки указаной подстрокой  
    for (let digit of digits) {
        sum+=Number(digit);
    }
    return sum;
}*/

//Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет:
// четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.
/*function isEven(i) {
    if (i%2 ==0) { //%взятие остатка от деления 2 четное (1 не чет) (==0 без этой записи не работает)
        return(true);
    } else {return(false);}
} */
//isEven(57);

//Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел.
// Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
/*let arr=[1,2,3,4];
let arr1=[];
for (i=0; i<arr.length; i++) {
    if(isEven(arr[i]))
    arr1.push(arr[i])
}
console.log(arr1);*/

//Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей 
//(чисел, на которое делится данное число).
/* function checkDivisors(num) {
     let newArr=[];
     for( let i=1; i<=num; i++) {//i<=num это не массив это число + опред делитель
      if(num%i ===0) {
          newArr.push(i);
          console.log(newArr);
      }
     } return newArr;
 }

function getDivisors(num) {
    let numb = checkDivisors(num);
    for (let i=0; i<numb.length; i++) {
       // console.log(numb[i]);
    }
}
getDivisors(45);*/
//реализуйте функцию inArray, которая будет проверять,
// есть ли в массиве элемент с таким значением или нет. Первым параметром функция должна принимать значение,
 // а вторым - массив. Если такой элемент есть - функция должна вернуть true, а если нет - false.
 /*function inArray(num,arr) {
     for(i=0; i < arr.length; i++) {
         if(arr[i] == num) {
             return true;
         }
     } 
     return false;
 }*/

//let arr=[1,2,3,4];
//alert(inArray(5,arr));

//реализуйте функцию isSimple, которая параметром будет принимать число и проверять, простое оно или нет.
// Простое число - это число, которое не делится ни на одно другое число (кроме как на 1 и на само себя - на это делятся все числа).
// Если число простое - функция должна вернуть true, в противном случае false.

//Решение: самый простой способ проверить число на простоту - попробовать поделить его на все числа от 2 до самого числа
// (на само число не делим). Если ни на одно из этих чисел наше число не поделится - оно простое,
 // а если хотя бы на одно поделится - вернем false и выйдем из функции:
/*function isSimple(num) {
    for(i=2; i<num; i++) {
        if(num%i ==0) {
            return false;
        }
    } return true;
}
//alert(isSimple(12));*/

//реализуйте функцию getDivisors, которая параметром будет принимать число и возвращать массив его делителей,
// то есть чисел, на которое делится наше число. К примеру, если мы передадим число 24 - мы должны получить массив [1, 2, 3, 4, 6, 12, 24].
/*function getDivisors(num) {
    let result = [];//пушим в этот массив
    for(let i=1; i<=num; i++) {//i<=num делим также и на наше число
       if(num%i ==0) {
           result.push(i);
       }
    }
     return result;
}*/
//alert(getDivisors(24));

//реализуйте функцию getIntersection, которая параметрами будет принимать 
//два массива и возвращать массив элементов, которые есть и в одном, и во втором массиве 
//(это называется пересечение массивов). К примеру, getIntersection([1, 2, 3], [2, 3, 4]) должно вернуть [2, 3].
//Решение: переберем один из переданных массивов (не имеет значения какой) с помощью цикла.
// В цикле воспользуемся функцией inArray, которую мы с вами разработали выше. С ее помощью будем проверять,
// есть ли текущий элемент одного массива во втором. Если есть - записываем его в массив с результатом. 
/*function getIntersection (arr,arr1) {
   let result = [];
    for(let i=0; i<arr1.length; i++) {
        if (inArray (arr1[i],arr)) {
            result.push(arr1[i]);
        }
    } return result;
}*/
//alert(getIntersection([1,2,31],[2,31,4])); 
//Задача: реализуйте функцию getGreatestCommonDivisor,
 //которая параметрами будет принимать два числа и возвращать наибольший общий делитель (НОД) этих двух чисел.
 // К примеру, для чисел 12 и 18 НОД равен 6.
 /*function getGreatestCommonDivisor(num1, num2) {
	let divisors = getIntersection(getDivisors(num1), getDivisors(num2)); // ['2', '3', '6'] массив общих делителей
  return Number(Math.max.apply(null,divisors)); //выводим мах из общих делителей
}
alert(getGreatestCommonDivisor(12,18));*/

//Дана строка. Сделайте заглавным первый символ каждого слова этой строки.
//Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку, 
//делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой
/*let str = 'var test text';
let arr = str.split(' '); //разбивает на массив путем разделения строk через пробел
function ucFirst (str) {
     return (str.slice(0,1).toUpperCase()+ str.slice(1)); //slice(0,1) вырезаем 1элем массива toUpperCase верхний регистр
    }                                                     //slice(1) вырезаем со второй буквы и кантотинируем
     for (let i=0 ; i<arr.length; i++) {
     arr[i]=ucFirst(arr[i]); 
    }
     str=arr.join(" ") //соединяем в строку (строка пробел) без пробела будет вместе
console.log(str);*/
  
//Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.аналог пример выше.
/*let str = 'var_text_hello';
let arr = str.split('_');//делается через _ чтоб убрать из строки
function uccFirst (str) {
    return (str.slice(0,1).toUpperCase()+str.slice(1));
}
    for (let i=1; i<arr.length; i++) {//i=1 первый злем не выводим он будет с маленькой буквы.2 значит 1и2 с маленькой
        arr[i]=uccFirst(arr[i]);
    }
    str=arr.join('');
    console.log(str);*/
 
// Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет.
// Функция первым параметром должна принимать текст элемента,
// а вторым - массив, в котором делается поиск. Функция должна возвращать true или false.
/* let str ='Функция';
//let arr =['Функция','Функция','должна','возвращать'];
let arr =['принимать', 'текст', 'элемента,'];
function  inArray (str,arr) {
    for(let i=0; i<arr.length; i++) {
        if (arr[i] === str) {
            return true;
        } else {
 
        }
     } return false;
    } 
console.log(inArray(str,arr));*/
//????????????????Дана строка, например, '123456'. Сделайте из нее '214365'.
/*let str ='123456';
let arr = str.split('');
let result = [];
for (let i=0; i<arr.length; i++) {
    if(i%2==0) {
        result[i]=arr[i+1];
    } else {
        result[i]=arr[i-1]
    }
}
console.log(result);??????????????????????*/

//Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл.
/*let arr = [1,2,3,4];
function func (arr) {
    console.log(arr.shift());//метод shift отрезает первый елемент массива
    if (arr.length !=0) {//спрашваем если есть еще в массиве елемент func(arr);ЗАПУСКАЕТ цикл
        func(arr);
    }
}
func(arr);*/
//Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).
//if(99%9==0)проверка делимости если нет остатка значит делится
/*function reduceNum (num) {
    let sum = getDigitsSum(num);//вызываем фун reduceNum передаем нум в  getDigitsSum(num) получаем sum проверяем  if (sum >= 10) или рекурсия или выводим sum
    if (sum >= 10) {
        return reduceNum(sum);//рекурсия
    } else {
        return sum;
    }
}
function getSum(arr) {
    let sum = 0;
    for (let i=0; i<arr.length; i++) {
        sum += Number(arr[i]);//number приводит строку к числу
    }
    return sum;
}
function getDigits (num) {
    return String(num).split('');//получаем масив чисел num приход число разбив split('') чтоб он норм работал преобр к строке String
}                                // получим массив строк
function getDigitsSum (num) {
    return getSum(getDigits(num));//соединяем две вспомогательные функции
}
console.log(reduceNum(99));*/










































