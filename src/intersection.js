const { overlap } = require('./overlap')

const intersection = (a, b) => {
	if (!overlap(a, b)) { return null }

	const [ aStart, aEnd ] = a
	const [ bStart, bEnd ] = b
	const start = Math.max(aStart, bStart)
	const end = Math.min(aEnd, bEnd)
	return [ start, end ]
}

module.exports = { intersection }
