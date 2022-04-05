var data = [
{date: '02/11/2019', measurement: 20.735, meterType: 'hot water'},
{date: '02/11/2019', measurement: 20.801, meterType: 'hot water'},
{date: '03/11/2019', measurement: 20.801, meterType: 'hot water'},
{date: '03/11/2019', measurement: 20.879, meterType: 'hot water'},
{date: '03/11/2019', measurement: 20.879, meterType: 'hot water'},
{date: '05/11/2019', measurement: 20.939, meterType: 'hot water'}
],
    grouped = [];

data.forEach(function (hash) {
    return function (o) {
        if (!hash[o.date]) {
            hash[o.date] = { date: o.date, price: null, price2: o.meterType };
            grouped.push(hash[o.date]);
        }
        Object.keys(o).forEach(function (k) {
            if (k === 'date') {
                return;
            }
            hash[o.date][k] = o[k];
        });
    };
}(Object.create(null)));

console.log(grouped);