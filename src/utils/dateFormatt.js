/**
 * 
 * @param {String} dateString 
 * @returns {String}
 */
function fromNow(dateString, monthString=false){

    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    const date = new Date();

    const today = {
        day: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear()
    }
    
    const ogDate = new Date(dateString);

    const past = {
        day: ogDate.getDate(),
        month: ogDate.getMonth(),
        year: ogDate.getFullYear()
    }

    if(today.year == past.year && today.month == past.month && today.day - past.day == 1){
        return 'Yesterday';
    }

    if(today.year != past.year || today.month != past.month || today.day != past.day ){
       if(monthString){
        return `${past.day}-${months[past.month]}-${past.year}`
       }else{
        return `${past.day}/${past.month + 1}/${past.year}`
       }
    }else{
        return `${ogDate.getHours()}:${ogDate.getMinutes()}`
    }
}

export default fromNow;