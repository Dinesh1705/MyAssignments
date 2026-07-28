function launchBrowser(browser) {
    if (browser === "Chrome") {
        console.log("Launching Chrome browser...");
    }else {
        console.log("Launching Firefox browser...");
    }}

function runTests(testType) {
    switch (testType) {
        case "unit":
            console.log("Running unit tests");
            break;
        case "Integration":
            console.log("Running integration tests");
            break;
        case "Functional":
            console.log("Running functional tests");
            break;
        default:
            console.log("Running smoke tests");

    }}

launchBrowser("Firefox");
launchBrowser("Chrome");


runTests("Integration");
runTests("Functional");
runTests("unit");
runTests("Regression");
