
/**
 * 时间转化器
 */
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
/**
 * 剩余时间
 */
 const surplusTime = (time) => {
	if (time == 0) {
		return '-'
	}
	var now = new Date().getTime()
	var diffTime = parseInt(time) - now
	var result = '';
	// 定义变量 d,h,m,s保存倒计时的时间
	var d, h, m;
	if (diffTime > 0) {
		d = Math.floor(diffTime / 1000 / 60 / 60 / 24);
		h = Math.floor(diffTime / 1000 / 60 / 60 % 24);
		m = Math.floor(diffTime / 1000 / 60 % 60);
		// s = Math.floor(diffTime / 1000 % 60);
	}
	if (d > 0) {
		result += d + '天';
	}
	if (h > 0) {
		result += h + '小时';
	}
	if (m > 0) {
		result += m + '分';
	}
	return result;
}


/**
 * 
 * @param {*} fmt 
 * @returns 
 */
 Date.prototype.format = function (fmt) {
  const o = {
    'M+': this.getMonth() + 1, // 月份
    'D+': this.getDate(), // 日
    'H+': this.getHours(), // 小时
    'm+': this.getMinutes(), // 分
    's+': this.getSeconds(), // 秒
    'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
    S: this.getMilliseconds() // 毫秒
  };
  if (/(Y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
    }
  }
  return fmt;
};

