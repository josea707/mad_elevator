/**
 *
 * @param {String} date
 * @returns {Boolean} true if today is the user's birthday.
 */
const isBirthday = (date) => {
  var dateToday = new Date();
  dateToday = dateToday.toLocaleDateString();
  var correctDateFormat = dateToday.split('/');
  correctDateFormat =
    correctDateFormat[2] +
    '-' +
    (correctDateFormat[0] < 10
      ? '0' + correctDateFormat[0]
      : correctDateFormat[0]) +
    '-' +
    (correctDateFormat[1] < 10
      ? '0' + correctDateFormat[1]
      : correctDateFormat[1]);
  // This makes it work for Safari, Chrome and Firefox.
  return correctDateFormat.includes(date);
};

export default isBirthday;
