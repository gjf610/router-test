let number = window.location.hash.substr(1)

let div = document.querySelector(`#div${number}`)

let app = document.querySelector('#app')

div.style.display = 'block'
app.appendChild(div)

window.addEventListener('hashchange', () => {
    console.log('hash 变了')
    const number2 = window.location.hash.substr(1)

    const div2 = document.querySelector(`#div${number2}`)

    const app2 = document.querySelector('#app')



    div2.style.display = 'block'
    app2.children[0].style.display = 'none'
    document.body.appendChild(app2.children[0])
    app2.appendChild(div2)
})