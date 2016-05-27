var testUrl = "http://www.fantasyfootballnerd.com/service/draft-projections/json/test/QB/";
var ctx = document.querySelector('#doughnut');
var selected = null;

$('#rushYards').on('click', function(event){
  selected = "rushYards";
  makeChart(selected);
});

function makeChart(key) {
  $.get(testUrl).then(function(response){
    var projections = response.DraftProjections;
    console.log(projections);
    var first = projections[0][key];
    var second = projections[3][key];
    comparePlayers(first, second);
  });
}

function comparePlayers(first, second) {
  var data = {
      labels: [
          "Red",
          "Green"
      ],
      datasets: [
          {
              data: [first, second],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB"            ]
          }]
  };

  var myPieChart = new Chart(ctx,{
      type: 'pie',
      data: data
  });
}
