// Calling SpaceX, first URL and the API
const url = "https://api.spacexdata.com/v2/launchpads";
d3.json(url).then();

// Syntax used retireve data from external data instead of API
// Extracting metadata of the first person in the dataset and indicated by the 0 position
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
        {console.log(key + ': ' + value);});
});