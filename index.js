const fs = require("fs");
const path = require("path");

const inputPath = path.join(__dirname, "./inputs/");
const outputPath = path.join(__dirname, "./outputs/output.json");

console.log("Reading inputs now...")
let inputs;
try{
    inputs = fs.readdirSync(inputPath);
    console.log(inputs);
if(inputs.length===0){
    console.log("No input was found");
}
} catch (e) {
    console.log("Reading failed");
    console.log(e);
}

console.log("Writing outputs");
try{
    const output = {
        isOutput: true,
        inputs: inputs.length === 0 ? "No Input found" : inputs
    }
    const dataToBeWritten  = JSON.stringify(output, undefined, 4);
    fs.writeFileSync(outputPath, dataToBeWritten);
} catch (e) {
    console.log("Writing output failed");
    console.log(e);
}

console.log("reading output file");
try {
    const data = fs.readFileSync(outputPath);
    console.log(JSON.parse(data));
} catch (e) {
    console.log("Reading output file failed");
    console.log(e);
}

console.log("This is just working fine");