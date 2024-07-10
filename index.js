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
const createEmployeeRecords = (arrayOfArrays) => {
    return arrayOfArrays.map(createEmployeeRecord);
};

//Adds an Object with keys to the timeInEvents Array on the record 
const createTimeInEvent = (employee, timeStamp) => {
    const timeIn = {
        type: "TimeIn",
        hour: parseInt(timeStamp.slice(-4)),
        date: timeStamp.slice(0, 10)
    };
    employee.timeInEvents.push(timeIn);
    return employee;
};

//Adds an Object with keys to the timeOutEvents Array on the record
const createTimeOutEvent = (employee, timeStamp) => {
    const timeOut = {
        type: "TimeOut",
        hour: parseInt(timeStamp.slice(-4)),
        date: timeStamp.slice(0, 10)
    };
    employee.timeOutEvents.push(timeOut);
    return employee;
};

//finds the number of hours elapsed between a given date timeInEvent and timeOutEvent
const hoursWorkedOnDate = (employee, date)=> {
   const { timeInEvents, timeOutEvents } = employee;

    const timeInEvent = timeInEvents.find(event => event.date === date);
    const timeOutEvent = timeOutEvents.find(event => event.date === date);

    if (!timeInEvent || !timeOutEvent) {
        throw new Error(`Missing time events for date: ${date}`);
}
 const timeIn = timeInEvent.hour;
    const timeOut = timeOutEvent.hour;

    // Calculate hours worked
    const hoursWorked = (timeOut - timeIn) / 100;
    return hoursWorked;
}

// Function: wagesEarnedOnDate
const wagesEarnedOnDate = (employee, date) => {
    const hoursWorked = hoursWorkedOnDate(employee, date);
    return hoursWorked * employee.payPerHour;
};

// Function: allWagesFor
const allWagesFor = (employee) => {
    const datesWorked = employee.timeInEvents.map(event => event.date);
    return datesWorked.reduce((totalWages, date) => totalWages + wagesEarnedOnDate(employee, date), 0);
};

// accumulates the value of all dates worked by an employee
const calculatePayroll = (employees) => {
    return employees.reduce((totalPayroll, employee) => totalPayroll + allWagesFor(employee), 0);
};
