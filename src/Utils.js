export default {
  COLORS: {
    pink: '#ee7fae',
    blue: '#b1cee4',
    orange: '#ffa689',
    purple: '#b884c6',
    green: '#97d657',
    gray: '#bcbcbc'
  },
  getRandomInt: function (max, min) {
    if (max === null || max === undefined) max = 2048
    if (min === null || min === undefined) min = 1
    return min + Math.floor(Math.random() * (max - min))
  },
  getRandomIntUnique (count) {
    let generated = []
    let generatedCount = generated.length
    for (let i = 0; i < count; i++) {
      let candidate = Math.floor(Math.random() * count) + 1
      for (let j = 0; j < generatedCount; j++) {
        if (candidate === generated[j]) {
          candidate = Math.floor(Math.random() * count) + 1
          j = -1
        }
      }
      candidate = ('000' + candidate).slice(-3)
      generated[i] = candidate
      generatedCount++
    }
    return generated
  }
}
