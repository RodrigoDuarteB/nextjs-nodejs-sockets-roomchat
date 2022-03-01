/* 
    returns true if both dates are equals just by date
*/
export function areEqualsByDate(d1: Date, d2: Date) {
    return new Date(d1.getFullYear(), d1.getMonth(), d1.getDay()).getTime() === 
    new Date(d2.getFullYear(), d2.getMonth(), d2.getDay()).getTime()
}