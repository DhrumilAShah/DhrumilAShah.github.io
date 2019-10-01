"use strict"

const sleep = delay => new Promise(resolve => setTimeout(resolve, delay))
const humanize = speed => Math.round(Math.random() * (100 - 30)) + speed
async function typed(opts) {
	let {
		strings,
		elm,
		backDelay = 500,
		eraseSpeed = 10,
		typeSpeed = 30,
		loop = false
	} = opts

	do {
		let last = strings.length
		let index = 0

		for (let string of strings) {
			index++

			for (let character of string) {
				await sleep(humanize(typeSpeed))
				elm.innerText += character
			}

			if (!loop && last == index) return

			await sleep(backDelay)

			while (string) {
				await sleep(humanize(eraseSpeed))
				elm.innerText = string = string.slice(0, -1)
			}
		}
	} while (loop)
}

typed({
	elm: document.querySelector(".element"),
	strings: ["BACKEND DEVELOPER", "FRONTEND DEVELOPER", "FULLSTACK DEVELOPER"],
	// loop: false <-- default
}).then(() => console.log('done with animation'))
