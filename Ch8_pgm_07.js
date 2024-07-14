// Iterating over an array with forEach

/*var items;
var showInfo;

items = [
  "The Pyramids",
  "The Grand Canyon",
  "Bondi Beach"
];

showInfo = function (itemToShow) {
    console.log(itemToShow);
};

items.forEach(showInfo);*/

var items;
var showInfo;

items = [
  "The Pyramids",
  "The Grand Canyon",
  "Bondi Beach",
  "Machu Picchu",
  "The Great Wall",
  "Mount Everest"
];

items.push("Machu Picchu");
items.push("The Great Wall");
items[4] = "Mount Everest";

showInfo = function (itemToShow) {
  console.log(itemToShow + " - " + itemToShow.length + " letters");
};

items.forEach(showInfo);



var items;

items = [
  "The Pyramids",
  "The Grand Canyon",
  "Bondi Beach",
  "Machu Picchu",
  "The Great Wall",
  "Mount Everest"
];

var getTotalLetters = function() {
    var totalLetters = 0;
    items.forEach(function(item) {
        totalLetters += item.length;
    });
    return totalLetters;
};

var totalLetters = getTotalLetters();
console.log("Total number of letters in all items: " + totalLetters);








/* Further Adventures
 *
 * 1) Add a few extra items to the array, some
 *    using push and some using square brackets.
 *    Run the program.
 *
 * Strings also have a length property
 * which gives the number of characters in the string.
 *
 * 2) Update the showInfo function to also
 *    display the number of letters in each item.
 *
 * 3) Write a new function that finds the total
 *    number of letters of the elements in
 *    the items array.
 *
 */