let upYear = new Date().getFullYear();
document.getElementById('upYear').innerText = 'New Year Countdown ' + upYear;
let newYear = new Date('Jan 1 ' + upYear + ' 00:00:00').getTime();
let currentYearStart = new Date(`Jan 1 ${upYear - 1} 00:00:00`).getTime();
let yearDuration = newYear - currentYearStart;

function countdown() {

    const curDate = new Date().getTime();
    let spentTime =  newYear - curDate;

    if (spentTime < 0) {
        upYear += 1;
        newYear = new Date(`Jan 1 ${upYear} 00:00:00`).getTime();
        currentYearStart = new Date(`Jan 1 ${upYear - 1} 00:00:00`).getTime();
        yearDuration = newYear - currentYearStart;
        document.getElementById('upYear').innerText = 'New Year Countdown ' + upYear;
        spentTime = newYear - curDate;
    }

    let seconds= 1000;
    let minutes=seconds*60;
    let hours=minutes*60;
    let days = hours*24;
    let weeks= days*7;

    let week=Math.floor(spentTime/weeks);
    let day=Math.floor(spentTime/days);
    let hour=Math.floor((spentTime%days)/hours);
    let min=Math.floor((spentTime%hours)/minutes);
    let sec=Math.floor((spentTime%minutes)/seconds);

    document.getElementById('pers').innerText = ((spentTime / yearDuration) * 100).toFixed(2);
    document.getElementById('weeks').innerText = week;
    document.getElementById('days').innerText = day;
    document.getElementById('hours').innerText = hour;
    document.getElementById('minutes').innerText = min;
    document.getElementById('seconds').innerText= sec;
}

setInterval(countdown, 1000);

