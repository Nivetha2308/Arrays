// Passing an array to a function

/*var getVisitorReport = function (visitorArray, dayInWeek) {
	var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday"
  ];
	var index = dayInWeek - 1;
	var visitorReport;

	visitorReport = "There were ";
  visitorReport += visitorArray[index];
  visitorReport += " visitors ";
	visitorReport += "on " + days[index];

	return visitorReport;
};

var visitors = [ 354, 132, 210, 221, 481 ];

var report = getVisitorReport(visitors, 2);

console.log(report);*/

var getVisitorReport = function (visitorArray, dayInWeek) {
  var days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
  ];
  var index = dayInWeek - 1;
  var visitorReport;

  visitorReport = "There were ";
  visitorReport += visitorArray[index];
  visitorReport += " visitors ";
  visitorReport += "on " + days[index];

  return visitorReport;
};

var getMonthlyVisitorReport = function (monthArray, weekNumber, dayNumber) {
  var weekIndex = weekNumber - 1;
  var dayIndex = dayNumber - 1;
  var visitorArray = monthArray[weekIndex];
  return getVisitorReport(visitorArray, dayNumber);
};

var week1 = [354, 132, 210, 221, 481, 111, 99];
var week2 = [400, 150, 220, 200, 500, 120, 80];
var week3 = [380, 140, 230, 210, 490, 130, 90];
var week4 = [370, 160, 240, 240, 510, 110, 100];
var monthArray = [week1, week2, week3, week4];

var reportWeek2Wednesday = getMonthlyVisitorReport(monthArray, 2, 3);  
var reportWeek4Sunday = getMonthlyVisitorReport(monthArray, 4, 7);     

console.log(reportWeek2Wednesday); 
console.log(reportWeek4Sunday);     




/* Further Adventures
 *
 * 1) Run the report for Friday.
 *
 * 2) Update the function to include Saturday and Sunday.
 *
 * A month of visitor info could be represented as an
 * array of arrays: [ week1, week2, week3, week4 ]
 * where each week could be an array of visitor numbers.
 *
 * 3) Write a new function with three parameters,
 *    the month array, the week wanted and the day wanted.
 *    The new function should return the visitor report specified.
 *    You can call getVisitorReport from your function if you want.
 *
 * 4) Create four arrays of week visitor numbers
 *    and a month array of the four weeks.
 *    Test your function from 3) for different weeks and days.
 *
 */