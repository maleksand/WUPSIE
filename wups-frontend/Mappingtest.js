// import moment from 'moment';


// const jsonData = require('./Data/Data.json');


//    export const initialReformat = data => {
        
//         let temp = 0
//         let temp2 = {}
//         let temp3 = {}
//         let tempMeasure = 0
//         let tempMeasTwo = 0

//         return data.map(row => {

//             temp = row.measurement;
//             temp2 = row.metadata.meterType;
//             temp3 = row.timestamp.$date;

  

// if (tempMeasure < temp)
// {
// tempMeasTwo = temp - tempMeasure; tempMeasure = temp;

//  }
//    else if (tempMeasure > temp)
//  {
//   tempMeasure = tempMeasure - temp; tempMeasTwo = tempMeasure - temp

//  }
//   else if (temp === tempMeasure)
//    {
//     tempMeasTwo = tempMeasure - temp
//  } 

// //A blatant cheat to make the first one not count, because there is nothing to compare it to.
//  if (temp === tempMeasTwo)
// {tempMeasTwo = 0}   

// // console.log(Object.keys(temp)[0])

// // console.log (temp + ", " + tempMeasure + ", " + tempMeasTwo)

//             row = row.timestamp
//             row.date = moment(temp3).format('HH:MM, DD/MM/YYYY')
//             row.measurement = tempMeasTwo * 1000
//             row.meterType = temp2
//             delete(row.$date)
            
            

//           return row
//         })
//       };


        




// export const data = initialReformat(jsonData);

// // console.log(formatJson)