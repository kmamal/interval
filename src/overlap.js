
const overlap = ([ aStart, aEnd ], [ bStart, bEnd ]) => false
	|| (aStart < bEnd && bStart <= aEnd)
	|| (bStart < aEnd && aStart <= bEnd)

module.exports = { overlap }
