/*******************
*     Functions    *
********************/

// This is a test

// Render Entries For Tools and Resources
const renderEntries = (targetEl, entries) => {
    for (const entry of entries) {
        let newEntry = document.createElement('li')
        let link = document.createElement('a')
        let linkText = document.createTextNode(entry.name)
        link.href = entry.href
        link.appendChild(linkText)
        if (entry.icon) {
            let icon
            if (entry.icon.includes("fa")) {
                icon = document.createElement('i')
                icon.className = entry.icon
            } else {
                icon = document.createElement('img')
                icon.src = entry.icon
                icon.classList.add('icon')
            }
            newEntry.appendChild(icon)
        }
        newEntry.appendChild(link)
        targetEl.appendChild(newEntry)
    }
}

/*******************
*      Primary     *
********************/

// Set Page Title
document.title = configuration.general.title

// Set Primary Background Color
const body = document.querySelector('body')
body.style.backgroundColor = configuration.general.backgroundColor

// Set Primary Font Color
body.style.color = configuration.general.fontColor

// Set Primary Headings Color
const headingEls = document.querySelectorAll('body h2')
for (const headingEl of headingEls) {
    headingEl.style.color = configuration.general.headingColor
}

// Set Link Color
const linkEls = document.querySelectorAll('a')
for (const linkEl of linkEls) {
    linkEl.classList.add('hoverColor')
}

// Set Link Hover Color
const style = document.createElement('style')
const css = `a:hover {color: ${configuration.general.linkHoverColor}`
style.appendChild(document.createTextNode(css))
document.querySelector('head').appendChild(style)

// Set Brand Image
const brand = document.querySelector('#brand')
if (configuration.general.brand) {    
    brand.src = configuration.general.brand
} else {
    brand.style.display = 'none'
}

// Render Tools
const toolsEl = document.querySelector('#tools')
renderEntries(toolsEl, configuration.tools)

// Render Resources
const resourcesEl = document.querySelector('#resources')
renderEntries(resourcesEl, configuration.resources)

/******************
*   To-Do List    *
*******************/

// Set Background Color
const todoWindow = document.getElementById('todo')
todoWindow.style.backgroundColor = configuration.general.todoBackgroundColor

// Set Font Color
todoWindow.style.color = configuration.general.todoFontColor

// Set Heading Color
const todoWindowHeading = document.querySelector('#todo h2')
todoWindowHeading.style.color = configuration.general.todoHeadingColor

// Set Input Border Color
const todoInput = document.getElementById('todo-input')
todoInput.style.borderBottom.color = configuration.general.todoFontColor

// Set Button Font Color
const addTodoButton = document.getElementById('add-todo')
addTodoButton.style.color = configuration.general.todoButtonFontColor

// Set Button Background Color
addTodoButton.style.backgroundColor = configuration.general.todoButtonBackgroundColor






