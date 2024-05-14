import { format, formatDistanceStrict, compareDesc, add, sub, getYear, getMonth, getDate, set, intervalToDuration } from 'date-fns'

export class LaundryTimerService {

  constructor(timeBuffer) {
    this.timeBuffer = timeBuffer;
  }

  calculateTimers(washDuration, finishTime) {
    const now = new Date()

    const finishDate = this.determineNextDateOfTimeAfterReferenceDate(finishTime, now);
    const durationTillFinished = intervalToDuration({start: now, end: finishDate});

    const startDate = sub(finishDate, {minutes: washDuration + this.timeBuffer});
    const durationUntilStart = intervalToDuration({start: now, end: startDate});

    return {
      startTimeAsString: format(startDate, "p"),
      durationUntilStartAsString: this.formatDuration(durationUntilStart),
      finishTimeAsString: format(finishDate, "p"),
      durationUntilFinishAsString: this.formatDuration(durationTillFinished)
    };
  }

  determineNextDateOfTimeAfterReferenceDate(time, referenceDate) {
    var date = set(time, { year: getYear(referenceDate), month: getMonth(referenceDate), date: getDate(referenceDate) })
    if (compareDesc(referenceDate, time) < 0) {
      date = add(date, {days: 1});
    }
    return date;
  }

  formatDuration(duration) {
    var durationAsString = "";
    if (duration.hours) {
      durationAsString += duration.hours + " hours";
    }
    if (duration.minutes) {
      if (durationAsString) {
        durationAsString += " and ";
      }
      durationAsString += duration.minutes + " minutes";
    }
    return durationAsString;
  } 

}