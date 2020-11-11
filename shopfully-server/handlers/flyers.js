
const { readDataFromCsv } = require("../utils/readDataFromCsv");
let flyers = [];
const flyersCSV = "../flyers_data.csv";

exports.getFlyers = async(req, res) => {
    const pageNumber = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.limit) || 12; 

    try {
        if(flyers.length <= 0)
            flyers = await readDataFromCsv(flyersCSV);
            
        const pageFlyers = flyers.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
        return res.status(200).json(pageFlyers);
        
    } catch (e) {
        return res.status(500).json({ error: "Found this error: " + e });
    }
    
};
