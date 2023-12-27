const textInput = document.querySelector('#text-input')
const checkBtn = document.querySelector('#check-btn')
const result = document.querySelector('#result')

checkBtn.addEventListener('click', checkResult)

function checkResult(){
    const regex = /[a-zA-Z0-9]+/g
    const inputValue = textInput.value
    if(inputValue ===""){
        alert('Please input a value')
    }
    const originalValue = Array.from(inputValue.match(regex)).join('').toLocaleLowerCase()
    const reverseValue = originalValue.split('').reverse().join('').toLocaleLowerCase()
    if(originalValue === reverseValue){
        return result.innerHTML = `<span class = "input-span">${inputValue} </span> is a palindrome `
    }else{
        return result.innerHTML = `<span class = "input-span">${inputValue} </span> is not a palindrome `
    }
    
}