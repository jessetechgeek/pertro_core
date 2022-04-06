import moment from 'moment';
export var TIME_DEFAULT = {
  MIN_TIME: 0,
  MAX_TIMES: 59,
  MAX_HOURS: 23,
  RANGE_MONTH: 'RANGE_MONTH',
  RANGE_LAST_MONTH: 'RANGE_LAST_MONTH',
  RANGE_WEEK: 'RANGE_WEEK',
  TIME_UNIT_WEEK: 'week',
  TIME_UNIT_MONTH: 'month',
  FULL_TIME_FORMAT: 'YYYY-MM-DD HH:mm:ss'
};
export var formatDDMMYY = function formatDDMMYY(isoTime) {
  var gap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/';

  if (isoTime) {
    return moment(isoTime).format("DD".concat(gap, "MM").concat(gap, "YYYY"));
  }

  return '';
};
export var TIME_COMPUTE = {
  isInValidTime: function isInValidTime(time) {
    return !time || !moment(time).isValid();
  },
  getMinTime: function getMinTime(time) {
    if (TIME_COMPUTE.isInValidTime(time)) return '';
    var result = moment(time).toDate();
    result.setHours(TIME_DEFAULT.MIN_TIME);
    result.setMinutes(TIME_DEFAULT.MIN_TIME);
    result.setSeconds(TIME_DEFAULT.MIN_TIME);
    result.setMilliseconds(TIME_DEFAULT.MIN_TIME);
    return result.toISOString();
  },
  getMaxTime: function getMaxTime(time) {
    if (TIME_COMPUTE.isInValidTime(time)) return '';
    var result = moment(time).toDate();
    result.setHours(TIME_DEFAULT.MAX_HOURS);
    result.setMinutes(TIME_DEFAULT.MAX_TIMES);
    result.setSeconds(TIME_DEFAULT.MAX_TIMES);
    result.setMilliseconds(TIME_DEFAULT.MAX_TIMES);
    return result.toISOString();
  },
  getRangeDateByUnitTime: function getRangeDateByUnitTime() {
    var unitTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : TIME_DEFAULT.TIME_UNIT_MONTH;
    return [TIME_COMPUTE.getMinTime(moment().startOf(unitTime)), TIME_COMPUTE.getMaxTime(moment().endOf(unitTime))];
  },
  getPrevRangeDateByUnitTime: function getPrevRangeDateByUnitTime() {
    var unitTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : TIME_DEFAULT.TIME_UNIT_MONTH;
    var regularUnit = "".concat(unitTime, "s");
    var fromDate = moment().subtract(1, regularUnit).startOf(unitTime);
    var toDate = moment().subtract(1, regularUnit).endOf(unitTime);
    return [TIME_COMPUTE.getMinTime(fromDate), TIME_COMPUTE.getMaxTime(toDate)];
  },
  isToDayInRangeDate: function isToDayInRangeDate(startDate, endDate) {
    var todayFormat = moment().format(TIME_DEFAULT.FULL_TIME_FORMAT);
    var startDateFormat = moment(startDate).utc().format(TIME_DEFAULT.FULL_TIME_FORMAT);
    var endDateFormat = moment(endDate).utc().format(TIME_DEFAULT.FULL_TIME_FORMAT);
    return moment(todayFormat).isBetween(startDateFormat, endDateFormat);
  },
  toDayIsAfterDay: function toDayIsAfterDay(date) {
    var dateFormat = moment(date).utc().format(TIME_DEFAULT.FULL_TIME_FORMAT);
    var toDayFormat = moment();
    return toDayFormat.isAfter(dateFormat);
  },
  toDayBeforeDay: function toDayBeforeDay(date) {
    var dateFormat = moment(date).utc().format(TIME_DEFAULT.FULL_TIME_FORMAT);
    var toDayFormat = moment();
    return toDayFormat.isBefore(dateFormat);
  }
};