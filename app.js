const reader = require('xlsx')

const file = reader.readFile('sample.xlsx')

let data = [];
let sheet = file.SheetNames;

for (let i = 0; i < sheet.length; i++) {
    const temp = reader.utils.sheet_to_json(
        file.Sheets[file.SheetNames[i]])
   temp.forEach((res) => {
      data.push(res)
   })
}
console.log(data)