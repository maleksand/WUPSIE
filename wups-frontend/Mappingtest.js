import moment from 'moment';
const jsonData = require('./Data/Data.json');


   export const initialReformat = data => {
        
        let temp = {}
        let temp2 = {}
        let temp3 = {}
        

        
        
        return data.map(row => {


            temp = row.measurement;
            temp2 = row.metadata.meterType;
            temp3 = row.timestamp.$date;
            


            row = row.timestamp
            row.date = moment(temp3).format('HH:MM, DD/MM/YYYY')
            row.measurement = temp
            row.meterType = temp2
            delete(row.$date)
            
            

          return row
        })
      };


        




export const formatJson = initialReformat(jsonData);

console.log(formatJson)