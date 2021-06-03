//console.log(cityGrowths)
// Sorting cities by growth
var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse();

// Slice the top five cities
var topFiveCities = sortedCities.slice(0,7);

// Using map() create separate arrays of top 5 city names and growth figures
var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));
console.log(topFiveCityGrowths);

// Use Plotly to create a bar chart with these arrays.
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
};
var data = [trace];
var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: { title: "City"},
    yaxis: { title: "Population Growth, 2016-20117"}
};
Plotly.newPlot("bar-plot", data, layout);