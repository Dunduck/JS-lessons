/* Задачник:

https://code.mu/ru/javascript/tasker/stager/1/1/

*/

/* 1 задача

Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.

let nomber = -123

function numberPosOrNeg(number) {
    if (number > 0) {
        console.log(`Number ${number} is positive`)
    } if (number < 0){
        console.log(`Number ${number} is negative`)
    } if (number === 0){
        console.log(`Number ${number} is zero`)
    }
}

console.log(numberPosOrNeg(nomber))

*/

/* 2 задача

Дана строка. Выведите в консоль длину этой строки.

let string = "Кот"

console.log(`Длина строки: ${string.length}`)

*/

/* 3 задача

Дана строка. Выведите в консоль последний символ строки.

let string = "Котикич"

console.log(`Последний символ строки: ${string[string.length - 1]}`)

*/

/* 4 задача

Дано число. Проверьте, четное оно или нет.

let nomber = 122

function numberEvenOrOdd(number) {
    if (number % 2 === 0) {
        console.log(`Number ${number} is even`)
    }
    if (number % 2 === 1) {
        console.log(`Number ${number} is odd`)
    }
}

console.log(numberEvenOrOdd(nomber))

*/

/* 5 задача

Даны два слова. Проверьте, что первые буквы этих слов совпадают.

let string1 = "Потикич"
let string2 = "Кисыч"

function equalFirstLatterOfString(string1, string2){
    if (string1[0] === string2[0]){
        console.log(`Первые буквы слов ${string1} и ${string2} совпадают`)
    }
    if (string1[0] !== string2[0]){
        console.log(`Первые буквы слов ${string1} и ${string2} НЕ совпадают`)
    }
}

console.log(`${equalFirstLatterOfString(string1, string2)}`)

*/

/* 6 задача

let string = "Котикичь"

Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.

function lastSymbOfString(string) {
    if (string[string.length-1] === 'ь')
    {
        return string[string.length-2]
    }
    else return string[string.length-1]
}

console.log(`Последний символ строки: ${lastSymbOfString(string)}`)

*/


// Уровень 1.2 задачника JavaScript

/* 1 задача

Дано число. Выведите в консоль первую цифру этого числа.

let nomber = 823

// The Number function will take any strong character and will convert it into a number eg: Number('1'); will return 1.
let arrayNomber = Array.from(String(nomber), Number)

console.log(arrayNomber[0])

*/

/* 2 задача

Дано число. Выведите в консоль последнюю цифру этого числа.

let nomber = 823

// The Number function will take any strong character and will convert it into a number eg: Number('1'); will return 1.
let arrayNomber = Array.from(String(nomber), Number)

console.log(arrayNomber[arrayNomber.length - 1])

*/

/* 3 задача

Дано число. Выведите в консоль сумму первой и последней цифры этого числа.

let nomber = 823

// The Number function will take any strong character and will convert it into a number eg: Number('1'); will return 1.
let arrayNomber = Array.from(String(nomber), Number)

let nombeer = arrayNomber[0] + arrayNomber[arrayNomber.length - 1]

console.log(nombeer)

*/

/* 4 задача

Дано число. Выведите количество цифр в этом числе.

let nomber = 823

// The Number function will take any strong character and will convert it into a number eg: Number('1'); will return 1.
let arrayNomber = Array.from(String(nomber), Number)

console.log(`Количество символов в числе ${nomber} - ${arrayNomber.length}`)

*/

/* 5 задача

Даны два числа. Проверьте, что первые цифры этих чисел совпадают.

let nomber1 = 823
let nomber2 = 456

function firstSymbOfTwoNumbers(nomber1, nomber2)
{
    // The Number function will take any strong character and will convert it into a number eg: Number('1'); will return 1.
    let arrayNomber1 = Array.from(String(nomber1), Number)
    let arrayNomber2 = Array.from(String(nomber2), Number)

    if (arrayNomber1[0] === arrayNomber2[0]) return "совпадают"
    if (arrayNomber1[0] !== arrayNomber2[0]) return "не совпадают"
}

console.log(`Первые цифры чисел ${nomber1} и ${nomber2} ${firstSymbOfTwoNumbers(nomber1, nomber2)}`)

*/


// Уровень 1.3 задачника JavaScript

/* 1 задача

Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.

let string = ""

const charString = string => {
    if (string.length === 1) return "строка состоит из одного символа"
    if (string.length === 0) return "строка пустая"
    if (string.length > 1) return string[string.length-2]
}

console.log(`Предпоследний символ строки: ${charString(string)}`)

*/

/* 2 задача

Даны два целых числа. Проверьте, что первое число без остатка делится на второе.

let nomber1 = 32
let nomber2 = 33

const divRemain = (num1, num2) => {return (num1%num2 === 0) ?  " " :  " не "}

console.log(`Число ${nomber1}${divRemain(nomber1, nomber2)}делится без остатка на число ${nomber2} `)
*/


// Уровень 1.4 задачника JavaScript

/* 1 задача

Выведите в консоль все целые числа от 1 до 100.

const nomberStart = 1
const nomberEnd = 100


for (i = nomberStart; i <= nomberEnd; i++)
    console.log(i)

*/

/* 2 задача

Выведите в консоль все целые числа от -100 до 0.

const nomberStart = -100
const nomberEnd = 0


for (i = nomberStart; i <= nomberEnd; i++)
    console.log(i)

*/

/* 3 задача

Выведите в консоль все целые числа от 100 до 1.

const nomberStart = 100
const nomberEnd = 1

function countNombersForward(num1, num2) {
    if (num2 > num1) {
        for (i = num1; i >= num2; i++)
            console.log(i)
    }
    if (num1 > num2) {
        for (i = num2; i >= num1; i++)
            console.log(i)
    }
}

function countNombersBackward(num1, num2) {
    if (num2 > num1) {
        for (i = num2; i <= num1; i--)
            console.log(i)
    }
    if (num1 > num2) {
        for (i = num1; i >= num2; i--)
            console.log(i)
    }
}

console.log(countNombersBackward(nomberStart, nomberEnd))

*/

/* 4 задача

Выведите в консоль все четные числа из промежутка от 1 до 100.

const nomberStart = 1
const nomberEnd = 100

function countNombersForward(num1, num2) {
    if (num2 > num1) {
        for (i = num1; i <= num2; i++)
            console.log(i)
    }
    if (num1 > num2) {
        for (i = num2; i >= num1; i++)
            console.log(i)
    }
}

function countNombersBackward(num1, num2) {
    if (num2 > num1) {
        for (i = num2; i <= num1; i--)
            console.log(i)
    }
    if (num1 > num2) {
        for (i = num1; i >= num2; i--)
            console.log(i)
    }
}

function countEvenNombersForward(num1, num2) {
    if (num2 > num1) {
        for (i = num1; i >= num2; i++) {
            if (i % 2 === 0) console.log(i)
        }

    }

    if (num1 > num2) {
        for (i = num2; i <= num1; i++) {
            if (i % 2 === 0) console.log(i)
        }
    }
}

countNombersForward(nomberStart, nomberEnd)

*/

/* 5 задача

Выведите в консоль все числа кратные трем в промежутке от 1 до 100.

const nomberStart = 100
const nomberEnd = 1

function countNombersForward(num1, num2) {
    if (num2 > num1) {
        for (i = num1; i >= num2; i++)
            console.log(i)
    }
    if (num1 > num2) {
        for (i = num2; i >= num1; i++)
            console.log(i)
    }
}

function countNombersBackward(num1, num2) {
    if (num2 > num1) {
        for (i = num2; i <= num1; i--)
            console.log(i)
    }
    if (num1 > num2) {
        for (i = num1; i >= num2; i--)
            console.log(i)
    }
}

function countEvenNombersForward(num1, num2) {
    if (num2 > num1) {
        for (i = num1; i >= num2; i++) {
            if (i % 2 === 0) console.log(i)
        }

    }

    if (num1 > num2) {
        for (i = num2; i <= num1; i++) {
            if (i % 2 === 0) console.log(i)
        }
    }
}

function countDiv3NombersForward(num1, num2) {
    if (num2 > num1) {
        for (i = num1; i >= num2; i++) {
            if (i % 3 === 0) console.log(i)
        }

    }

    if (num1 > num2) {
        for (i = num2; i <= num1; i++) {
            if (i % 3 === 0) console.log(i)
        }
    }
}

countDiv3NombersForward(nomberStart, nomberEnd)

*/


// Уровень 1.5 задачника JavaScript

/* 1 задача

Найдите сумму всех целых чисел от 1 до 100.

const nomberStart = 100
const nomberEnd = 1


function sumOfCountNumbers(num1, num2) {
    let sumOfCount = 0

    if (num2 > num1) {
        for (let i = num1; i <= num2; i++)
            sumOfCount += i
    }
    if (num1 > num2) {
        for (i = num2; i <= num1; i++)
            sumOfCount += i
    }

    return sumOfCount
}

console.log(`Сумма числе от ${nomberStart} до ${nomberEnd} равна ${sumOfCountNumbers(nomberStart, nomberEnd)}`)


*/

/* 2 задача

Найдите сумму всех целых четных чисел в промежутке от 1 до 100.

const nomberStart = 100
const nomberEnd = 1

function sumOfCountEvenNumbers(num1, num2) {
    let sumOfCount = 0

    if (num2 > num1) {
        for (let i = num1; i <= num2; i++)
            if (i%2 === 0)
            sumOfCount += i
    }
    if (num1 > num2) {
        for (i = num2; i <= num1; i++)
            if (i%2 === 0)
                sumOfCount += i
    }

    return sumOfCount
}

console.log(`Сумма четных чисел от ${nomberStart} до ${nomberEnd} равна ${sumOfCountEvenNumbers(nomberStart, nomberEnd)}`)

*/

/* 3 задача

Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.

let nomberStart = 100
let nomberEnd = 1

function sumOfCountEvenNumbers(num1, num2) {
    let sumOfCount = 0

    if (num2 > num1) {
        for (let i = num1; i <= num2; i++)
            if (i%2 === 1)
                sumOfCount += i
    }
    if (num1 > num2) {
        for (i = num2; i <= num1; i++)
            if (i%2 === 1)
                sumOfCount += i
    }

    return sumOfCount
}

console.log(`Сумма четных чисел от ${nomberStart} до ${nomberEnd} равна ${sumOfCountEvenNumbers(nomberStart, nomberEnd)}`)

*/

/* 4 задача

Даны два целых числа. Найдите остаток от деления первого числа на второе.

let nomber1 = 23
let nomber2 = 8

function divRemain(num1, num2){
    return num1 % num2
}

console.log(`Остаток от деления числа ${nomber1} на ${nomber2} равен ${divRemain(nomber1, nomber2)}`)

*/

/* 5 задача

Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.

let string = "Котикич"

console.log(string.split('').reverse().join(', '))

*/

// Уровень 1.6 задачника JavaScript


/* 1 задача

Дан массив с числами. Найдите сумму квадратов элементов этого массива.

let arr = [1, 2, 3, 4, 5]

function sumArraySquares(array){
    let sum = 0
    array.forEach((element) => {
        sum += (element*element)
    })
    return sum
}

console.log(sumArraySquares(arr))

*/

/* 2 задача

let arr = [1, 4, 9, 16, 25, 36]

function sumArraySquareRoot(array) {
    let sum = 0
    array.forEach((element) => sum += (Math.sqrt(element)))
    return sum
}

console.log(sumArraySquareRoot(arr))

*/

/* 3 задача

Дан массив с числами. Найдите сумму положительных элементов этого массива.

let arr = [-2, 3, 1, -5, 1, 6]

function sumArrayPosNum(array) {
    let sum = 0
    array.forEach((element) => sum += element > 0 ? element: 0)
    return sum
}

console.log(sumArrayPosNum(arr))

*/

/* 4 задача

Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.

let arr = [-2, 3, 1, -5, 1, 6, 11, 12, 9]

function sumArrayPosNum10(array) {
    let sum = 0
    array.forEach((element) => sum += element > 0 && element < 10 ? element: 0)
    return sum
}

console.log(sumArrayPosNum10(arr))

*/

// Уровень 1.7 задачника JavaScript

/* 1 задача

Дана строка. Получите массив букв этой строки.

let string = 'abcde'
let arrStr = string.split('', 5)

console.log(arrStr)

let arrStr = Array.from(string)

console.log(arrStr)

*/

/* 2 задача

Дано некоторое число. Получите массив цифр этого числа.

let num = 12345

// Не работает, потому что num - не массивоподобный объект
// и не строка, а вообще примитив, который можно преобразовать в строку
// let arr = Array.from(num)

// Преобразование преобразованного в строку числа num в массив из чисел - Number
let arr = Array.from(String(num), Number)

console.log(arr)

*/

/* 3 задача

Дано некоторое число. Переверните его:

let num = 12345

// Преобразование преобразованного в строку числа num в массив из чисел - Number. Затем применение функции reverse
let arr = Array.from(String(num), Number).reverse()

console.log(arr)

*/

/* 4 задача

Дано некоторое число. Найдите сумму цифр этого числа.

let num = 12345
let sum = 0
let arr = Array.from(String(num), Number)

arr.forEach((e) => sum += e)

console.log(arr, `\nСумма элементов массива: ${sum}`)

*/

// Уровень 1.8 задачника JavaScript

/* 1 задача

Заполните массив целыми числами от 1 до 10.

let arr = []
let start = 1
let end = 10

for (let i = start; i <= end; i++)
    arr.push(i)

console.log(arr)

*/

/* 2 задача

Заполните массив четными числами из промежутка от 1 до 100.

let arr = []
let start = 1
let end = 100

for (let i = start; i <= end; i++)
    if (i%2===0){
        arr.push(i)
    }

console.log(arr)

*/

/* 3 задача

Дан массив с дробями. Округлите эти дроби до одного знака в дробной части.

let arr = [1.456, 2.125, 3.32, 4.1, 5.34]

arr.forEach((e,i,a)=> a[i] = e.toFixed(1))

console.log(arr)
*/


// Уровень 1.9 задачника JavaScript

/* 1 задача

Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.

let arr = ['https://doka-guide.vercel.app/js/var-let/', 'https://doka-guide.vercel.a', 'мышь', 'кот']

arr = arr.filter(function (e) {
    return e.startsWith("http://") || e.startsWith("https://") === true})

console.log((arr))

*/

/* 2 задача

Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.

let arr = ['https://doka-guide.vercel.app/js/var-let.html', 'https://doka-guide.vercel.html', 'мышь', 'кот']

arr = arr.filter(function (e) {
    return e.endsWith(".html") === true})

console.log((arr))
*/

/* 3 задача

Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.

let arr = [10, 20, 30, 40, 50, 14, 155]

arr = arr.map(function (e){
    return Math.round(e*1.1)
})

console.log(arr)

*/


// Уровень 1.10 задачника JavaScript


/* 1 задача

Заполните массив случайными числами из промежутка от 1 до 100.

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
let arr = []
let arrLength = 8

for (let i=0; i<=arrLength-1; i++)
    arr.push(getRandomInt(1,100))

console.log(arr)

*/


/* 2 задача

Дано некоторое число. Выведите в консоль все его символы с конца.

let nomber = 12345
let arr = Array.from(String(nomber), String).reverse()

console.log(arr)

*/



/* 3 задача

Дан некоторый массив. По очереди выведите в консоль подмассивы из двух элементов нашего массива:

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array_size = 2;
const sliced_array = [];

for (let i = 0; i <array.length; i += array_size) {
    sliced_array.push(array.slice(i, i + array_size));
}

console.log(sliced_array);

*/


/* 4 задача

Даны два массива. Слейте эти массивы в новый массив:

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1,...arr2]

console.log(arr3)
*/
cvdcvdsd
sdss


