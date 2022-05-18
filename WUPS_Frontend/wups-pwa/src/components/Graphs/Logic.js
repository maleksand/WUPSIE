//This whole thing is for linechart example to work and 
//should be abstracted out from here or fixed inline in the linechart
let logic = {}


logic.formatDateDayMonYeaHouMin = (tickFormat) => {
    var unix = new Date(tickFormat)
    // console.log(unix)
    var yearStr = unix.getFullYear().toString().slice(2)
    var formatted = unix.getDate() + "-"+ unix.getMonth() +
                    "-" + yearStr + " " + unix.getHours() + 
                    ":" + unix.getMinutes()
    return formatted;
  }
   logic.formatDateDayMonthYear = (tickFormat) => {
    var unix = new Date(tickFormat)
    // console.log(unix)
    var yearStr = unix.getFullYear().toString().slice(2)
    var formatted = unix.getDate() + "-" + unix.getMonth() + "-" + yearStr
    return formatted;
  };
  export default logic
