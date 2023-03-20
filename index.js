const returnFirstTwoDrivers = (arg) => {
    return arg.slice(0,2);
}

const returnLastTwoDrivers = (arg) => {
    return arg.slice(arg.length-2, arg.length);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(arg) {
    return function(fare) {
        return fare * arg;
    }
}

function fareDoubler(fare) {
    return fare*2;
}

function fareTripler(fare) {
    return fare*3;
}

function selectDifferentDrivers(names, selectingDrivers) {
    return selectingDrivers(names);
}