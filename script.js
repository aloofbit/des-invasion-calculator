const htmlInput = document.querySelector('.soul-level')
const htmlOutput = document.querySelector('.output')
htmlInput.addEventListener('input', updateMinMax)

function updateMinMax(e) {
  const soulLevel = Number(e.target.value)
  
  if (isNaN(soulLevel)) {
    return showError('Soul level must be a number')
  }
  
  if (soulLevel <= 0) {
    showError('Soul level must be greater than 0')
  }
  
  showRange(soulLevel)
}

function showRange(soulLevel) {
  // Current formula for DeS R Invasions
  // Max upwards: Sl+10+0.2*sl
  // Max downwards: Sl*.96
  // Let's say you're a sl 40. This means your range is so 39-58
  // Tested with Adam Barker and Dangitjm
  const min = Math.ceil(soulLevel * 0.96)
  const max = Math.ceil(soulLevel + 10 + (soulLevel * 0.2))
  
  htmlOutput.classList.remove('error')
  htmlOutput.innerHTML = `Invasion range is <span>${min}</span> - <span>${max}</span>`
}

function showError(message) {
  htmlOutput.classList.add('error')
  htmlOutput.innerHTML = message
}