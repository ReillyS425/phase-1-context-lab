
let employeeRecord = {};

function createEmployeeRecord(array) { 
      function record() { 
        this.firstName = array[0];
        this.familyName = array[1];
        this.title = array[2];
        this.payPerHour = array[3];
        this.timeInEvents = [];
        this.timeOutEvents = [];
    }
      return new record();
  }





  function createEmployeeRecords(array) {
    let employeeRecords = [];
    for (let i = 0; i < array.length; i++) {
      let employeeRecord = createEmployeeRecord.call({}, array[i]);
      employeeRecords.push(employeeRecord);
    }
    return employeeRecords;
  }

  function createTimeInEvent(dateAndTime) {
    let timeInEvent = {
        type: "TimeIn",
        date: dateAndTime.split(" ")[0],
        hour: parseInt(dateAndTime.split(" ")[1])
    };
    this.timeInEvents.push(timeInEvent);
    return this;
    
    
    }
    

    function createTimeOutEvent(dateAndTime) {
        let timeOutEvent = {
            type: "TimeOut",
            date: dateAndTime.split(" ")[0],
            hour: parseInt(dateAndTime.split(" ")[1])
        };
        this.timeOutEvents.push(timeOutEvent);
        return this;
    }
    
  
 

   

 

    function hoursWorkedOnDate(date) {
        let timeInEvent = this.timeInEvents.find(event => event.date === date);
        let timeOutEvent = this.timeOutEvents.find(event => event.date === date);
      
        if (timeInEvent && timeOutEvent) {
          let hoursWorked = timeOutEvent.hour - timeInEvent.hour;
          let deMilitaryTimed = hoursWorked / 100;
          return deMilitaryTimed;
        } else {
          console.log("No time in or time out event found for the specified date.");
          return 0;
        }
      }
     
      function wagesEarnedOnDate(date) {
        let hoursWorked = hoursWorkedOnDate.call(this, date);
        let hourlyWage = this.payPerHour;
        if (hoursWorked) {
          let wageEarned = hourlyWage * hoursWorked;
          return wageEarned;
        } else {
          console.log("No Hours Found. Ask a supervisor if you believe this is a mistake!");
          return 0;
        }
      }
      const allWagesFor = function () {
        const eligibleDates = this.timeInEvents.map(function (e) {
            return e.date
        })
    
        const payable = eligibleDates.reduce(function (memo, d) {
            return memo + wagesEarnedOnDate.call(this, d)
        }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!
    
        return payable
    }
    
      allWagesFor();

     

      function findEmployeeByFirstName(srcArray, firstName) 
      {
        return srcArray.find(function (employee) {
        return employee.firstName === firstName;
      })

    }
        
function calculatePayroll(array) {
    let totalPayroll = 0;
    array.forEach(() => {
        totalPayroll += allWagesFor.call()
    });
    return totalPayroll;
}


const createStatsCollector = require("mocha/lib/stats-collector")

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */




