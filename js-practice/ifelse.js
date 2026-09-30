function browserFactory(browser){
    if(browser=="chrome"){
        console.log("Launch chrome");
    }
    else if(browser=="firefox"){
        console.log("Launch firefox");
    }
    else if(browser=="edge"){
        console.log("Launch edge");
    }
    else{
        console.log("Please enter a valid browser name");
    }
}
let browser="chrome";
browserFactory(browser);