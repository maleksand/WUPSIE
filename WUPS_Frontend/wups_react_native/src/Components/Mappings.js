import moment from "moment";

// const jsonData = require('./Data/Data.json');

export const reMap = data => {

  let temp = {}
  let temp2 = {}
  let temp3 = {}
  let temp4 = {}
  let temp5 = {}
  let temp6 = {}

  return data.map(row => {

    temp = row.value;
    temp2 = row.metadata.meterType;
    temp3 = row.timestamp;
    temp4 = moment(row.timestamp).format('DD/MM/YYYY')
    temp5 = 

    // if (temp4 === temp5){console.log("test")}

    
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