let dateLogic = {}

dateLogic.UnixConversion = (date) => {
    let unixDate = new Date(date)
    var unixFormatted = ''
        + (unixDate.getDate("DD") < 10 ? '0' + (unixDate.getDate()) : (unixDate.getDate())) + '-'
        + (unixDate.getMonth("MM") < 10 ? '0' + (unixDate.getMonth()+1) : (unixDate.getMonth()+1)) + '-'
        + unixDate.getFullYear() + ' '
        + (unixDate.getHours("hh") < 10 ? '0' + unixDate.getHours() : unixDate.getHours()) + ':'
        + (unixDate.getMinutes('mm') < 10 ? '0' + unixDate.getMinutes() : unixDate.getMinutes())
    return unixFormatted;
}

dateLogic.ConvDayMonYeaHouMin = (date) => {
    var dateObj = new Date(date)
    var dateFormat = "" 
        + (dateObj.getUTCDate() < 10 ? '0' + (dateObj.getUTCDate()) : dateObj.getUTCDate()) + "-"
        + (dateObj.getUTCMonth() < 10 ? '0' + (dateObj.getUTCMonth()+1) : (dateObj.getUTCMonth()+1)) + "-" 
        + dateObj.getUTCFullYear() + " "
        + (dateObj.getUTCHours() < 10 ? '0' + (dateObj.getUTCHours()) : dateObj.getUTCHours() )+ ":"
        + (dateObj.getUTCMinutes() < 10 ? '0' + (dateObj.getUTCMinutes()) : dateObj.getUTCMinutes())
    return dateFormat;
}

export default dateLogic