const fs = require('fs')
const csv = require('csv-parser')
const data = {}
fs.createReadStream('items.csv')
  .pipe(csv())
  .on('data', (row) => {
    data['pr' + row.id] = row
    data['pr' + row.id].tags = row.tags.split(',')
  })
  .on('end', () => {
    fs.writeFileSync('items.json', JSON.stringify(data))
  })
