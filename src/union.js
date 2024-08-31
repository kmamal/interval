const { overlap } = require('./overlap')

const union = (a, b) => {
	if (!overlap(a, b)) { return null }

	const [ aStart, aEnd ] = a
	const [ bStart, bEnd ] = b
	const start = Math.min(aStart, bStart)
	const end = Math.max(aEnd, bEnd)
	return [ start, end ]
}

module.exports = { union }
