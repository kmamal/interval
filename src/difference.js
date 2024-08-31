const { covers } = require('./covers')
const { nextToward } = require('@kmamal/util/ieee-float/double')

const difference = (a, b) => {
	const [ aStart, aEnd ] = a
	const [ bStart, bEnd ] = b

	if (covers(b, a) || (aStart < bStart && bEnd < aEnd)) { return null }

	return aStart < bStart
		? [ aStart, Math.min(nextToward(bStart, -Infinity), aEnd) ]
		: [ Math.max(nextToward(bEnd, Infinity), aStart), aEnd ]
}

module.exports = { difference }
