import Vue from 'vue'

import {
    sec2time,
    parseMoney,
    parseMoneyD
} from "@/utils/utils";

// 将秒转化成时分秒
Vue.filter('secTotime', function (value) {
    return sec2time(value)
})

// 金钱数量 没有小数点
Vue.filter('numFormat', function (value) {
    return parseMoney(value)
})

// 金钱数量 没有小数点
Vue.filter('numFormatD', function (str) {
    str = (parseFloat(str) / 100).toFixed(2);
    return parseMoneyD(str);
})