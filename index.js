//loads array elements to corresponding object properties
//initializes empty arrays on 2 properties
const createEmployeeRecord = (arr) => {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    };
};

//Converts each nested Array into an employee record
// using createEmployeeRecord and accumulates it to a new Array
const createEmployeeRecords = (arrOfArrays) => {
    return arrOfArrays.map(createEmployeeRecord);
};

//