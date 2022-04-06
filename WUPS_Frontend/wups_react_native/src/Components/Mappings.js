import moment from "moment";

// const jsonData = require('./Data/Data.json');

export const reMapByHour = data => {

  let temp = {}
  let temp2 = {}
  let temp3 = {}


  return data.map(row => {

    temp = row.value;
    temp2 = row.metadata.meterType;
    temp3 = row.timestamp;
    

    row.date = moment(temp3).format('HH:MM, DD/MM/YYYY')
    row.measurement = temp
    row.meterType = temp2
    delete (row.metadata)
    delete (row.timestamp)
    delete (row.value)

// console.log(row)
    return row
  })
};

    //sort into days



export const reMapByDay = data => {

  let temp = {}
  let temp2 = {}
  let temp3 = {}
  let temp4 = {}
  let temp5 = {}


  return data.map(row => {

    temp = row.value;
    temp2 = row.metadata.meterType;
    temp3 = row.timestamp;

    temp4 = moment(row.timestamp).format('DD/MM/YYYY')
    temp5 = moment.max(temp4)
    // console.log(temp5)
    temp3 = temp5
    

    row.date = temp3
    row.measurement = temp
    row.meterType = temp2
    delete (row.metadata)
    delete (row.timestamp)
    delete (row.value)
    delete (row.id)

// console.log(row)
    return row
  })
};

export const reMapByMonth = data => {

  let temp = {}
  let temp2 = {}
  let temp3 = {}
  let temp4 = {}
  let temp5 = {}


  return data.map(row => {

    temp = row.value;
    temp2 = row.metadata.meterType;
    temp3 = row.timestamp;

    temp4 = moment(row.timestamp).format('MM/YYYY')
    temp5 = moment.max(temp4)
    // console.log(temp5)
    temp3 = temp5
    

    row.date = temp3
    row.measurement = temp
    row.meterType = temp2
    delete (row.metadata)
    delete (row.timestamp)
    delete (row.value)
    delete (row.id)

// console.log(row)
    return row
  })
};





// var data = [
//   {date: '02/11/2019', measurement: 200, meterType: 'hot water'},
//   {date: '02/11/2019', measurement: 10, meterType: 'hot water'},
//   {date: '03/11/2019', measurement: 200, meterType: 'hot water'},
//   {date: '03/11/2019', measurement: 300, meterType: 'hot water'},
//   {date: '03/11/2019', measurement: 10, meterType: 'hot water'},
//   {date: '05/11/2019', measurement: 40, meterType: 'hot water'}
//   ],
//       grouped = [];
  
//   data.forEach(function (hash) {
//       return function (o) {
//           if (!hash[o.date]) {
//               hash[o.date] = { date: o.date, measurement: null, MeterType: o.meterType };
//               grouped.push(hash[o.date]);
//           }
//           Object.keys(o).forEach(function (k) {
//               if (k === 'date') {
//                   return;
//               }
//               hash[o.date][k] = o[k];
//           });
//       };
//   }(Object.create(null)));
  
//   console.log(grouped);