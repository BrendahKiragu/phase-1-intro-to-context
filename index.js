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

// Function: createTimeInEvent
const createTimeInEvent = (employee, timeStamp) => {
    const timeIn = {
        type: "TimeIn",
        hour: parseInt(timeStamp.slice(-4)),
        date: timeStamp.slice(0, 10)
    };
    employee.timeInEvents.push(timeIn);
    return employee;
};

// Function: createTimeOutEvent
const createTimeOutEvent = (employee, timeStamp) => {
    const timeOut = {
        type: "TimeOut",
        hour: parseInt(timeStamp.slice(-4)),
        date: timeStamp.slice(0, 10)
    };
    employee.timeOutEvents.push(timeOut);
    return employee;
};