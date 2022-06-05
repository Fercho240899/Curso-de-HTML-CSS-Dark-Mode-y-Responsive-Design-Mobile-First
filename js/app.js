
const checkbox = document.querySelector('#checkbox')
if(window.matchMedia('(prefers-color-scheme: dark)').matches){
    console.log()
    checkbox.setAttribute('checked', true)

}
/*document.body.style.setProperty('--cardgray', 'blue')*/
checkbox.addEventListener('change', function(event){
    /*console.log(this.checked)*/
    if (this.checked) {
        document.body.classList.remove('is-ligth-mode')   
        document.body.classList.add('is-dark-mode')
    }else{
        document.body.classList.remove('is-dark-mode')
        document.body.classList.add('is-ligth-mode')
    }
})
