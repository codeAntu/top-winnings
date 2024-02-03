const elementWithDataEnd = document.querySelector('[data-timer]')

const endTime = new Date(elementWithDataEnd.getAttribute('data-timer')).getTime()

const day = document.getElementById('day')
const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second')

function updateTimer() {
  const currentTime = new Date().getTime()
  const remainingTime = endTime - currentTime

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24))
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000)

  day.innerHTML = days
  hour.innerHTML = hours
  minute.innerHTML = minutes
  second.innerHTML = seconds

  if (remainingTime < 0) {
    clearInterval(countDown)
    day.innerHTML = 0
    hour.innerHTML = 0
    minute.innerHTML = 0
    second.innerHTML = 0
  }
}

const countDown = setInterval(updateTimer, 1000)

updateTimer()
