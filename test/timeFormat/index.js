const timeFormat = (value, formatType, full) => {
  if (!value) return '';
  var timestamp = new Date(Number(value))
  var now = new Date()
  var Y = timestamp.getFullYear();
  var M = (timestamp.getMonth() + 1 < 10 ? '0' + (timestamp.getMonth() + 1) : timestamp.getMonth() + 1)
  var D = (timestamp.getDate() < 10 ? '0' + timestamp.getDate() : timestamp.getDate())
  var h = (timestamp.getHours() < 10 ? '0' + timestamp.getHours() : timestamp.getHours());
  var m = (timestamp.getMinutes() < 10 ? '0' + timestamp.getMinutes() : timestamp.getMinutes());
  var s = (timestamp.getSeconds() < 10 ? '0' + timestamp.getSeconds() : timestamp.getSeconds());
  var nowY = now.getFullYear();
  var nowM = (now.getMonth() + 1 < 10 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1)
  var nowD = (now.getDate() < 10 ? '0' + now.getDate() : now.getDate())
  var date
  date = Y + '-' + M + '-' + D + '  ' + h + ':' + m + ':' + s

  if (formatType === 'Y-M-D') {
    if (full) { // 不区分今日/昨日
      date = Y + '-' + M + '-' + D
    } else {
      if (Y == nowY && M == nowM && D == nowD) {
        date = '今日'
      } else if (Y == nowY && M == nowM && D == nowD - 1) {
        date = '昨日'
      } else {
        date = Y + '-' + M + '-' + D
      }
    }
  } else if (formatType === 'Y-M') {
    date = Y + '-' + M
  } else if (formatType === 'h-m') {
    date = h + ':' + m
  } else if (formatType === 'h-m-s') {
    date = h + ':' + m + ':' + s
  } else if (formatType === 'M-D') {
    date = M + '-' + D
  } else if (formatType === 'Y-M-D-h-m') {
    date = Y + '-' + M + '-' + D + '  ' + h + ':' + m
  } else if (formatType === 'Y/M/D') {
    date = Y + '/' + M + '/' + D
  }
  return date
}



console.log(timeFormat(1649692800000, 'M-D'));
