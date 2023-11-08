export const parseDate = (date) => {

    const yearNumber = parseInt(date.substring(0, 5))
    const monthNumber = parseInt(date.substring(5, 7)) - 1
    const dayNumber = parseInt(date.substring(8, 10))

    const formatter = new Intl.DateTimeFormat('ru', {month: 'long'})
    const monthName = formatter.format(new Date(yearNumber, monthNumber, dayNumber))

    const validMonthName = monthName.substring(0, monthName.length - 1)
        .concat(monthNumber !== 2 || monthNumber !== 7 ? 'я' : 'a')

    return {day: dayNumber, month: validMonthName}

}