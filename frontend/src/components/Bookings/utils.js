export const dateFormatter = (date) => {
    let newDate = date.split('');
    let year = '';
    let month = '';
    let day = '';
    for (let i = 0; i < 5; i++) {
        if (i === 4) {
            newDate.shift();
            continue;
        }
        year += newDate.shift();
    };
    for (let i = 0; i < 3; i++) {
        if (i === 2) {
            newDate.shift();
            continue;
        }
        month += newDate.shift();
    };
    for (let i = 0; i < 2; i++) {
        day += newDate.shift();
    };
    let textMonth = monthFormatter(month);
    return `${textMonth} ${day}, ${year}`
}

export const monthFormatter = (month) => {
    if (month === '01') {
        return 'January'
    } else if (month === '02') {
        return 'February'
    } else if (month === '03') {
        return 'March'
    } else if (month === '04') {
        return 'April'
    } else if (month === '05') {
        return 'May'
    } else if (month === '06') {
        return 'June'
    } else if (month === '07') {
        return 'July'
    } else if (month === '08') {
        return 'August'
    } else if (month === '09') {
        return 'September'
    } else if (month === '10') {
        return 'October'
    } else if (month === '11') {
        return 'November'
    } else if (month === '12') {
        return 'December'
    } else {
        return 'Invalid Month'
    }
}
