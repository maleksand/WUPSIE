import moment from "moment";

// const jsonData = require('./Data/Data.json');

export const reMap = data => {

  let temp = 0
  let temp2 = {}
  let temp3 = {}
  let tempMeasure = 0
  let tempMeasTwo = 0

  return data.map(row => {

    temp = row.value;
    temp2 = row.metadata.meterType;
    temp3 = row.timestamp;

    if (tempMeasure < temp) {
      tempMeasTwo = temp - tempMeasure; tempMeasure = temp;

    }
    else if (tempMeasure > temp) {
      tempMeasure = tempMeasure - temp; tempMeasTwo = tempMeasure - temp

    }
    else if (temp === tempMeasure) {
      tempMeasTwo = tempMeasure - temp
    }

    //A blatant cheat to make the first one not count, because there is nothing to compare it to.
    if (temp === tempMeasTwo) { tempMeasTwo = 0 }



    
    row.date = moment(temp3).format('HH:MM, DD/MM/YYYY')
    row.measurement = temp
    row.meterType = temp2
    delete (row.metadata)
    delete (row.timestamp)
    delete (row.value)


    return row
  })
};

// const data = reMap(jsonData);