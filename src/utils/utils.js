
// 金钱数量 没有小数点
export function parseMoney(str) {
    if (str) {
      str = str.toString()
      let arr = str.split('.');
      str = arr[0]
      var dian = '';
      let i = str.length
      if (i <= 3) {
        return str + dian;
      } else if (i > 3 && i <= 6) {
        return str.substring(0, i - 3) + "," + str.substring(i - 3) + dian
      } else if (i > 6 && i <= 9) {
        return str.substring(0, i - 6) + "," + str.substring(i - 6, i - 3) + "," + str.substring(i - 3) + dian
      } else if (i > 9 && i <= 12) {
        return str.substring(0, i - 9) + "," + str.substring(0, i - 6) + "," + str.substring(i - 6, i - 3) + "," + str.substring(i - 3) + dian
      } else {
        return str + dian
      }
    } else {
      return str;
    }
  
  }
  // 金钱数量 有小数点
  export function parseMoneyD(str) {
    if (str) {
      str = str.toString()
      let arr = str.split('.');
      str = arr[0]
      var dian = '';
      if (arr[1]) {
        dian = '.' + arr[1];
      }
      let i = str.length
      if (i <= 3) {
        return str + dian;
      } else if (i > 3 && i <= 6) {
        return str.substring(0, i - 3) + "," + str.substring(i - 3) + dian
      } else if (i > 6 && i <= 9) {
        return str.substring(0, i - 6) + "," + str.substring(i - 6, i - 3) + "," + str.substring(i - 3) + dian
      } else if (i > 9 && i <= 12) {
        return str.substring(0, i - 9) + "," + str.substring(0, i - 6) + "," + str.substring(i - 6, i - 3) + "," + str.substring(i - 3) + dian
      } else {
        return str + dian
      }
    } else {
      return str;
    }
  
  }
  
  export function moneyFormatD(str) {
      str = (parseFloat(str) / 100).toFixed(2);
      return parseMoneyD(str);
  }


// 时间转为毫秒
export function timeToSec(time) {
    var hour = time.split(':')[0]
    var min = time.split(':')[1]
    var sec = time.split(':')[2]
    var s = Number(hour * 3600) + Number(min * 60) + Number(sec)
    return s * 1000
}

// 将秒转化成时分秒
export function sec2time(s) {
    var t
    if (s > -1) {
        var hour = Math.floor(s / 3600)
        var min = Math.floor(s / 60) % 60
        var sec = s % 60
        if (hour < 10) {
            t = '0' + hour + ":"
        } else {
            t = hour + ":"
        }
        if (min < 10) {
            t += "0"
        }
        t += min + ":"
        if (sec < 10) {
            t += "0"
        }
        t += sec
        //   t += sec.toFixed(2)
    }
    return t
}


// 时间格式化
export function formatDate(date, fmt) {
    date = date.split('.')[0];
    date = new Date(date.replace(/-/g, "/"))
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    }
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + ''
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
        }
    }
    return fmt
}

function padLeftZero(str) {
    return ('00' + str).substr(str.length)
}

