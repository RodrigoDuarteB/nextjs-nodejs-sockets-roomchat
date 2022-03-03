/* 
    returns true if both dates are equals just by date
*/
export function areEqualsByDate(d1: Date, d2: Date) {
    return new Date(d1.getFullYear(), d1.getMonth(), d1.getDay()).getTime() === 
    new Date(d2.getFullYear(), d2.getMonth(), d2.getDay()).getTime()
}


/* 
    return string time on format HH:ss 
*/

export function getFormattedTime(date: Date): string {
    var hours: any = date.getHours()
    var minutes: any = date.getMinutes()
    if(hours < 10){
        hours = `0${hours}`
    }
    if(minutes < 10){
        minutes = `0${minutes}`
    }
    return `${hours}:${minutes}`
}