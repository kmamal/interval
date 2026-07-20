const { nextToward } = require('@kmamal/util/ieee-float/double')

const from = (start, end, { openStart = false, openEnd = false } = {}) => [
	openStart ? nextToward(start, Infinity) : start,
	openEnd ? nextToward(end, -Infinity) : end,
]

module.exports = { from }
