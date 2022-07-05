const dateEl = document.getElementById('date')
const timeEl = document.getElementById('time')

const setTime = () => {
    let dateTimeNow = new Date(Date.now())

    let year = dateTimeNow.toLocaleString('en-US', { year: 'numeric' })
    let month = dateTimeNow.toLocaleString('en-US', { month: 'long' })
    let date = dateTimeNow.toLocaleString('en-US', { day: 'numeric' })
    let day = dateTimeNow.toLocaleString('en-US', { weekday: 'long' })
    let time = dateTimeNow.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric' })

    dateEl.textContent = `${day} ${month} ${date}, ${year}`
    timeEl.textContent = `${time}`
}

setTime()
const interval = setInterval(() => { setTime() }, 5000)



