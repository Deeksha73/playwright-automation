function checkDayOfTheWeek(dayNumber){
    let day;
    switch (dayNumber) {
        case 1 :
            day="Monday";
            break;
        case 2 :
            day="Tuesday";
            break;
        case 3 :
            day="Wednesday";
            break;
        case 4 :
            day="Thursday";
            break;
        case 5 :
            day="Friday";
            break;
        case 6 :
            day="Saturday";
            break;
        case 7 :
            day="Sunday";
            break;
        default:
            console.log("Incorrect value entered");
            day="invalid day";
            break;
    }
    return day;
}

// console.log(checkDayOfTheWeek(2));



function launchBrowser(browser){
    switch(browser){
        case "chrome":
            console.log("chrome browser");
            break;
        case "edge":
            console.log("edge browser");
            break;
        case "firefox":
            console.log("firefox browser");
            break;
        default:
            console.log("Invalid browser name");
            break;
    }
}

launchBrowser("firefox");



