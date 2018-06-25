document.addEventListener('DOMContentLoaded', () => {

console.log("loaded");

  const saveButton = document.querySelector('#main-form');

  const handleFormSubmit = function(event){
    console.dir(event.target);
    event.preventDefault();
    const title = event.target.title.value;
    const statistic = event.target.statistic.value;
    const selection = event.target.selection.value;
    const country = selectCountry();
    displayContent(title,statistic,selection,country);

    let newArray = [['Brand', 'Market Share'],];
    newArray.push([title, statistic]);
    //add piechart;
    createPieChart(newArray);

    this.reset();
  };


    const selectCountry = function(event){
      let selectedCountry = null;
      const country = document.getElementsByName('mobile');

      for (let i=0; i<country.length; i++){
        if (country[i].checked){
          selectedCountry = country[i].id;
        }
      }
      return selectedCountry;
    };


    const displayContent = function(title, statistic, selection, country){
      const mobileTable = document.querySelector('#mobile-table');
      const newMobileTableRow = document.createElement('tr');

      mobileTable.appendChild(newMobileTableRow);

      creatTableContent(title,newMobileTableRow);
      creatTableContent(statistic,newMobileTableRow);
      creatTableContent(selection,newMobileTableRow);
      creatTableContent(country,newMobileTableRow);
    };


    const creatTableContent = function(tableContent, tableRow){
      const tableData = document.createElement('td');
      tableRow.appendChild(tableData);
      tableData.textContent = `${tableContent}`;
    };

    var createPieChart = function(newArray){
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart(newArray));

      function drawChart(newArray) {
        let data = google.visualization.arrayToDataTable(newArray);
        let options = {'title':'Mobile Market Share 2018', 'width':550, 'height':400};
        let chart = new google.visualization.PieChart(document.getElementById('piechart'));
      chart.draw(data, options);
      }
    }


  saveButton.addEventListener('submit', handleFormSubmit);

});
