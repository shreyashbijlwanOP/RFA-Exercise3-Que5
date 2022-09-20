let page = document.getElementById('page')
let table = document.querySelector('table')

addOption(10)

function addOption(number)
{
    for(let i = 1; i<=number; i++)
    {
        let option = document.createElement('option')
        option.textContent = `${i}`
        option.value = `{i}`
        page.append(option)
    }
} 
