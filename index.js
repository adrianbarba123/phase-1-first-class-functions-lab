//Deliverable 1.
const returnFirstTwoDrivers = function(scubersDrivers) {
    let answer = [];
    answer[0] = scubersDrivers[0];
    answer[1] = scubersDrivers[1];
    return answer;
};

//Deliverable 2.
const returnLastTwoDrivers = function(scubersDrivers) {
    let answer = [];
    answer[0] = scubersDrivers[scubersDrivers.length-2];
    answer[1] = scubersDrivers[scubersDrivers.length-1];
    return answer;
};

//Deliverables 3-5.
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//Deliverables 6-7.
function createFareMultiplier(integer) {
    return function (fare) {
        integer *= fare;
        return integer;
    };
};

//Deliverables 8-9.
const fareDoubler = function(fare) {
    return fare*2
};

//Deliverables 10-11.
const fareTripler = function(fare) {
    return fare*3;
};

//Deliverables 12-13.
function selectDifferentDrivers(scubersDrivers, xFunction){
    return xFunction(scubersDrivers);
}