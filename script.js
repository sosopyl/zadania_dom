// задание 1
// let text = document.querySelector('p')
// let inp = document.querySelector('input')
// inp.addEventListener('blur', func)
// function func(){
//     text.textContent = text.textContent + ' ' + inp.value
// }

// задание 2
// elems = document.querySelectorAll('.aaa')
// let text = document.querySelector('p')
// let btn = document.querySelector('#button')

// btn.addEventListener('click', func)

// function func(){
// let sum = 0;
// for(let elem of elems){
//     sum += +elem.value
// }
// text.textContent = sum
// }


// задание 3
//  let elem = document.querySelector('input')
//  elem.addEventListener('blur', function(){
//     let arr = elem.value.split('');
//     let sum = 0;
//     for(let num of arr){
//         sum += +num
//     }
//     elem.value = sum
//  })

// задание 4

// let inp = document.querySelector('input')
// inp.addEventListener('blur', function(){
//     let arr = inp.value.split(',')
//     let sum = 0;
//     for(let elem of arr){
//         sum += +elem
//     }
//     let res = sum / arr.length
//     inp.value = res
// })

// задание 5
// let fio = document.querySelector('#fio')
// let name = document.querySelector('#name')
// let surname = document.querySelector('#surname')
// let otch = document.querySelector('#otch')
// fio.addEventListener('blur', func)
// function func(){
//     let arr = fio.value.split(" ")
//     name.value = arr[0];
//     surname.value = arr[1]
//     otch.value = arr[2]
// }

// задание 6
// let inp = document.querySelector('input')
// inp.addEventListener('blur', func)
// function func(){
// let arr = inp.value.split(' ')
// let str = ''
// for ( let elem of arr){
//     let elem1 = elem[0].toUpperCase() + elem.slice(1)
//     str += elem1
//     str += " "
// }
// inp.value = str
// }

// задание 7
// let inp = document.querySelector('input')
// let text = document.querySelector('p')
// inp.addEventListener('blur', func)
// function func(){
// let arr = inp.value.split('')
// let res = arr.length
// console.log(res)
// text.textContent = res
// }

// задание 8
// let inp = document.querySelector('input')
// inp.addEventListener('blur', function(){
//     let date = inp.value.split('.')
//     let ndate = date.reverse()
//     let res = ndate.join('-')
//     inp.value = res
// })

// задание 9
// let btn = document.querySelector('#btn')
// let elem = document.querySelector('#elem')
//  btn.addEventListener('click', function(){
//     let text1 = elem.value
//     let arr = text1.split('')
//     let arr2 = arr.reverse();
//     let text2 = arr2.join('')
//     if( text1 == text2){
//         console.log('yes')
//     } else (console.log('no'))
//  })


// задание 10
// let elem = document.querySelector('input')
// elem.addEventListener('blur', function(){
//     let str = elem.value
//     let a = str.indexOf('3', 0)
//     if(a == '-1'){console.log('no')} else(console.log('yes'))
// })

// задание 11
// let elems = document.querySelectorAll('p')
// let btn = document.querySelector('#btn')

// btn.addEventListener('click', function(){
//     for(let i =0;  i < elems.length; ){
//         let elem = elems[i++]
//         elem.textContent = elem.textContent + ' ' + i
//     }
// })

// задание 12
// let as = document.querySelectorAll('a')
// let btn = document.querySelector('#btn')
// btn.addEventListener('click', function(){
//     for(let elem of as){
//         elem.textContent = elem.textContent + "(" + elem.href +")"
//     }
// } )

// задание 13
//let elems = document.querySelectorAll('a');

// function func() {
// 	for (let i = 0; i < elems.length; i++) {
// 		if ( (elems[i].startsWith('http://') == true)) {
//  			elems[i].textContent += '!';
// 		}
// 	}
//  }    

// задание 14
// let elems = document.querySelectorAll('p')
// for(let elem of elems){
//     elem.addEventListener('click', function(){
//         elem.textContent = elem.textContent * elem.textContent
//     })
// }

// задание 15
// let elem = document.querySelector('input')
// elem.addEventListener('blur', func)

// function func() {
// 	let dayWeak = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
//     let str = elem.value;
// 	let arr = str.split('.');
// 	let arr2 = arr.reverse();
// 	let str1 = arr2.join(',')
// 	let date = new Date(str1);
// 	let day = date.getDay();
// 	let p = document.getElementById('text');
// 	elem.value = dayWeak[day];
// }

// задание 16
// let elem = document.querySelector('#elem')
// let btn1 = document.querySelector('#btn1')
// let btn2 = document.querySelector('#btn2')

// btn1.addEventListener('click', function(){
//     if(elem.value >= 0){
//         elem.value =  +elem.value + 1
//     }
// })
// btn2.addEventListener('click', function(){
//         elem.value =  +elem.value - 1
// })

// задание 17
//  let elem = document.querySelectorAll('p')
//  let itog = document.querySelector('input')

//  for(let part of elem){
//     part.addEventListener('click', function(){
//         itog.value = +itog.value + 1
//     })
//  }

// задание 18
//  let texts = document.querySelectorAll('div')
// for(let elem of texts){
//     elem.textContent = elem.textContent.slice(0, 10) + '...'
// }

// задание 19
// let elem = document.querySelector('input')
//  elem.addEventListener('blur', function(){
//     if(+elem.value > 0 & +elem.value < 100){
//     elem.style.color = 'green'
//  } else { elem.style.color = 'red'}})

// задание 20
// let elem = document.querySelector('#elem')
// let btn = document.querySelector('#btn')
// btn.addEventListener('click', function(){
//     let str = ''
//     let letters = "1234567890qwertyuiopasdfghjklzxcvbnm"
//     for(let i = 0; i < 8; i++){
//         str += letters.charAt(Math.floor(Math.random()*letters.length))
//         elem.value = str
//     }
// })

// задание 21
// let elem = document.querySelector('#elem')
// let btn = document.querySelector('#btn')

// btn.addEventListener('click', function(){
//     let text2 = ''
//     let text = elem.value
//     for(let i = 0; i < text.length; i++){
//         text2 += text.charAt(Math.floor(Math.random()*text.length))
//                 elem.value = text2
//             }
// })
// задание 22
// let elem = document.querySelector('#elem')
// let btn = document.querySelector('#btn')
// let text = document.querySelector('p')
//  btn.addEventListener('click', function(){
//     text.textContent = (+elem.value - 32) * (5/9)
//  })

// задание 23
let elem = document.querySelector('#elem')
let btn = document.querySelector('#btn')
let text = document.querySelector('p')

btn.addEventListener('click', function(){
let arr = 1
for(let i = 1; i <=  +elem.value; i++)
{
arr *= i
}
let res = arr
text.textContent = res
})
// })

// задание 24

let elema = document.querySelector('#a')
let elemb = document.querySelector('#b')
let elemc = document.querySelector('#c')
let btn = document.querySelector('#btn')
let text = document.querySelector('p')

btn.addEventListener('click', function(){
    let a = +elema.value
    let b = +elemb.value
    let c = +elemc.value

    if (a == 0)
    return false
    let res = []
    let d = b*b - 4*a*c
    console.log(d)

    if(d < 0)
    return false;

    if(d == 0)
        res["quadratic roots"] = (-b + Math.sqrt(d)) / (2 * a);

     else if(d > 0){
        let tmp = [];
        tmp.push((-b + Math.sqrt(d)) / (2 * a));
        tmp.push((-b - Math.sqrt(d)) / (2 * a));
        res["quadratic roots"] = tmp;
        console.log(tmp)
        let roots = tmp.join(';')
        text.textContent = roots
        }


})
