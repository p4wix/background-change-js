const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025']
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function () {
	//get random number between 0-3
	const random_number = getRandomNumber()
	console.log(random_number)
	document.body.style.backgroundColor = colors[random_number]
	color.textContent = colors[random_number]
})

const getRandomNumber = () => {
	return Math.floor(Math.random() * colors.length)
}