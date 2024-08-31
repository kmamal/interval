const { clamp: clampNumber } = require('@kmamal/util/number/clamp')

const clamp = ([ start, end ], x) => clampNumber(x, start, end)

module.exports = { clamp }
