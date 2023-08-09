/**
 * This postbuild script adds "./" to every path starting with "/" in the compiled build.
 * This is necessary for electron to find the correct paths relative to the index folder.
 */

const fs = require("fs");
const { globSync } = require("glob");

let indexHtml = fs.readFileSync("./www/index.html").toString();
indexHtml = indexHtml.replaceAll(`"/`, `"./`);
fs.writeFileSync("./www/index.html", indexHtml);

let jsFiles = globSync("./www/assets/*.js");
jsFiles.forEach(f => {
    let jsText = fs.readFileSync(f).toString();
    jsText = jsText.replaceAll(`"/assets`, `"./assets`);
    fs.writeFileSync(f, jsText);
})  