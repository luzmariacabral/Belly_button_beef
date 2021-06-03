// Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

// Part 2: Bar charts
// var trace = {
//     x: ["burrito", "pizza", "chicken"],
//     y: [10, 18, 5],
//     type: "bar"
// };

// var layout = {
//     title: "Luncheon Survey",
//     xaxis: {title: "Food Option"},
//     yaxis: {title: "Number of Respondents"}
// }

// Plotly.newPlot("plotArea", [trace], layout);

// Alcoholic 'Bar' Chart
// var trace = {
//     x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: "bar"
// };

// var layout = {
//     title: "'Bar' Chart",
//     xaxis: {title: "Drinks"},
//     yaxis: {title: "% of Drinks Ordered"}
// };

// Plotly.newPlot("plotArea", [trace], layout);

// Part 3: Pie Charts
// var trace = {
//     labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: "pie"
// };
// var data = [trace];
// var layout = {
//     title: "Pie Chart",
// };
// Plotly.newPlot("plotArea", data, layout);

// Functional JS, transforming data with map() method
// var numbers = [1, 2, 3, 4, 5];
// var doubled = numbers.map(function(num){
//     return num * 2;
// });
// console.log(doubled);
// var numbers = [0, 2, 4, 6, 8];
// var integers = numbers.map(function(num){
//     return num + 5;
// });
// console.log(integers)
// Map() can also be used with other information
// var cities = [
//     {
//         "Rank": 1,
//         "City": "San Antonio ",
//         "State": "Texas",
//         "Increase_from_2016": "24208",
//         "population": "1511946"
//       },
//       {
//         "Rank": 2,
//         "City": "Phoenix ",
//         "State": "Arizona",
//         "Increase_from_2016": "24036",
//         "population": "1626078"
//       },
//       {
//         "Rank": 3,
//         "City": "Dallas",
//         "State": "Texas",
//         "Increase_from_2016": "18935",
//         "population": "1341075"
//       }
// ];

// var cityNames = cities.map(function(city){
//     return city.City;
// });
// console.log(cityNames);
// var populations = cities.map(function(population){
//     return population.manyPeople
// });
// console.log(populations)
// var numbers = [1, 2, 3, 4, 5];
// var larger = numbers.filter(function(num){
//     return num > 1;
// });
// console.log(larger);

// Arrow functions
// var numbers = [1, 2, 3, 4, 5];
// var doubled = numbers.map(num => num * 2);
// console.log(doubled);
// var familyAge = [3,2,39,37,9];
// var sortedAge = familyAge.sort((a,b) => b -a);
// console.log(sortedAge);

// Slice() Method
// var integers = [0,1,2,3,4,5];
// var slice1 = integers.slice(0,2);
// console.log(slice1);
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
// var animalSlice = words.slice(0,3);
words.slice(3, );
