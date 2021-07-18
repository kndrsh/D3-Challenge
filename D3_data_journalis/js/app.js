
var svgWidth = 960;
var svgHeight = 700;

var margin = {
    topp:20.5,
    right:40,
    bottom:60,
    left:100
};


var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

var svg = d3.select("#scatter")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

d3.csv("assets/data/data.csv").then(function (stateData) {
    console.log(stateData);
    
    // ==============================
    stateData.forEach(function (data) {
          data.poverty = +data.poverty;
          data.healthcare = +data.healthcare;
      });
 
  // ==============================
  var xLinearScale = d3.scaleLinear()
    .domain([0, d3.max(stateData, d => d.poverty)])
    .range([0, width]);

  var yLinearScale = d3.scaleLinear()
    .domain([0, d3.max(stateData, d => d.healthcare)])
    .range([height, 0]);

 