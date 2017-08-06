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
    if (!max) max = 2048
    if (!min) min = 1
    return min + Math.floor(Math.random() * (max - min)) + 1
  }
}
