
const overlap = ([ aStart, aEnd ], [ bStart, bEnd ]) => aStart <= bEnd && bStart <= aEnd

module.exports = { overlap }
