import moment from 'moment';

export const TIME_DEFAULT = {
  MIN_TIME: 0,
  MAX_TIMES: 59,
  MAX_HOURS: 23,

  RANGE_MONTH: 'RANGE_MONTH',
  RANGE_LAST_MONTH: 'RANGE_LAST_MONTH',
  RANGE_WEEK: 'RANGE_WEEK',

  TIME_UNIT_WEEK: 'week',
  TIME_UNIT_MONTH: 'month',

  FULL_TIME_FORMAT: 'YYYY-MM-DD HH:mm:ss',
};


export const formatDDMMYY = (isoTime, gap = '/') => {
  if (isoTime) {
    return moment(isoTime).format(`DD${gap}MM${gap}YYYY`);
  }
  return '';
};

export const TIME_COMPUTE = {
  isInValidTime: (time) => !time || !moment(time).isValid(),

  getMinTime: (time) => {
    if (TIME_COMPUTE.isInValidTime(time)) return '';

    const result = moment(time).toDate();

    result.setHours(TIME_DEFAULT.MIN_TIME);
    result.setMinutes(TIME_DEFAULT.MIN_TIME);
    result.setSeconds(TIME_DEFAULT.MIN_TIME);
    result.setMilliseconds(TIME_DEFAULT.MIN_TIME);
    return result.toISOString();
  },

  getMaxTime: (time) => {
    if (TIME_COMPUTE.isInValidTime(time)) return '';

    const result = moment(time).toDate();

    result.setHours(TIME_DEFAULT.MAX_HOURS);
    result.setMinutes(TIME_DEFAULT.MAX_TIMES);
    result.setSeconds(TIME_DEFAULT.MAX_TIMES);
    result.setMilliseconds(TIME_DEFAULT.MAX_TIMES);
    return result.toISOString();
  },

  getRangeDateByUnitTime: (unitTime = TIME_DEFAULT.TIME_UNIT_MONTH) => [
    TIME_COMPUTE.getMinTime(moment().startOf(unitTime)),
    TIME_COMPUTE.getMaxTime(moment().endOf(unitTime)),
  ],

  getPrevRangeDateByUnitTime: (unitTime = TIME_DEFAULT.TIME_UNIT_MONTH) => {
    const regularUnit = `${unitTime}s`;
    const fromDate = moment().subtract(1, regularUnit).startOf(unitTime);
    const toDate = moment().subtract(1, regularUnit).endOf(unitTime);
    return [TIME_COMPUTE.getMinTime(fromDate), TIME_COMPUTE.getMaxTime(toDate)];
  },

  isToDayInRangeDate: (startDate, endDate) => {
    const todayFormat = moment().format(TIME_DEFAULT.FULL_TIME_FORMAT);
    const startDateFormat = moment(startDate)
      .utc()
      .format(TIME_DEFAULT.FULL_TIME_FORMAT);
    const endDateFormat = moment(endDate)
      .utc()
      .format(TIME_DEFAULT.FULL_TIME_FORMAT);

    return moment(todayFormat).isBetween(startDateFormat, endDateFormat);
  },

  toDayIsAfterDay: (date) => {
    const dateFormat = moment(date).utc().format(TIME_DEFAULT.FULL_TIME_FORMAT);
    const toDayFormat = moment();
    return toDayFormat.isAfter(dateFormat);
  },

  toDayBeforeDay: (date) => {
    const dateFormat = moment(date).utc().format(TIME_DEFAULT.FULL_TIME_FORMAT);
    const toDayFormat = moment();
    return toDayFormat.isBefore(dateFormat);
  },
};
