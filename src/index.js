const app = document.querySelector('#app')


const div1 = document.createElement('div')
div1.innerHTML = '1'
const view1 = document.createElement('div')
div1.appendChild(view1)
view1.style.height = '50px'
view1.style.background = 'red'


const div2 = document.createElement('div')
div2.innerHTML = '2'
const div3 = document.createElement('div')
div3.innerHTML = '3'
const div4 = document.createElement('div')
div4.innerHTML = '4'

const routeTable = {
    '1': div1,
    '2': div2,
    '3': div3,
    '4': div4,
}
const div11 = document.createElement('div')
div11.innerHTML = '1.1'
const div12 = document.createElement('div')
div12.innerHTML = '1.2'
const div13 = document.createElement('div')
div13.innerHTML = '1.3'
const route1Table = {
    '1/1': div11,
    '1/2': div12,
    '1/3': div13,
}


function route(container) {
    let number = window.location.hash.substr(1).split('/')
    console.log(number)
    number = number || 1

    let div = routeTable[number[0].toString()]

    if (!div) div = document.querySelector('#div404')
    div.style.display = 'block'

    container.innerHTML = ''
    container.appendChild(div)
}

route(app)



window.addEventListener('hashchange', () => {
    console.log('hash 变了')
    route(app)
})