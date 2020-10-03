const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    if(location==''){
        messageOne.textContent = "error"
    }
    else{

   fetch('/weather?address=' + location ).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                 return messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        
        })
    
    })
}
})