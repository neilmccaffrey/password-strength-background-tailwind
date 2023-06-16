const pw = document.getElementById('password')
const bg = document.getElementById('background')

pw.addEventListener('input', (e) => {
    const input = e.target.value
    const length = input.length
    const blur = 20 - length * 2
    bg.style.filter = `blur(${blur}px)`
})