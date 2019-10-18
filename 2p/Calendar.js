/*Calendar*/

function isLeapYear(y){
    if(y % 4 === 0){
        if((y % 100 === 0) && (y % 400 != 0)){
            return false;
        }else {
            return true
        }
    }
}

class Calendar {
    constructor() {
        
    }

    printCalendar(month, year) {
        let century = Math.floor(year / 100);
        year = year - (century * 100);
        let longMonths = [ 1, 3, 5, 7, 8, 10, 12];
        let shortMonths = [ 4, 6, 9, 11]
        let monthDays = 1;

        if(longMonths.includes(month)) {
            monthDays = 31;
        }else {
            if(shortMonths.includes(month)) {
                monthDays = 30;
            }else {
                if(month == 2){
                    if(isLeapYear(year)){
                        monthDays = 29;
                    }else{
                        monthDays = 28;
                    }
                }
            }
        }

        let calendar = [];


        let day = 1;
        let dayweek = (Math.round(day + ((2.6 * month) - 0.2) - (2 * century) + year + (year / 4) + (century / 4))) % 7;
        
        for(let week = 0; week < 6 || day < monthDays; week++) {
            calendar[week] = [];

            do{
                calendar[week][dayweek] = day;
                day++;
                dayweek ++;
                if(day == monthDays)
                    break;
            }while(((dayweek % 7) != 0));
        }

        return calendar;
    }
}

let calendar = new Calendar();