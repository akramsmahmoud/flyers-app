const fs = require("fs");
const csv = require("csv-parser");

exports.readDataFromCsv = async (fileCSV) => {

    return new Promise(function(resolve, reject){
        let rows = [];

        if (!fs.existsSync(fileCSV)) reject("File Not Found");

        fs.createReadStream(fileCSV)
        .pipe(csv())
        .on("data", (data) => rows.push(data))
        .on("end", () => {
            resolve(rows);
        })
        .on("error", reject);

    });

};
