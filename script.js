var assaignment = 1,
 counter = 2, iteration = 4;

average = function() {
  var table = document.getElementById('GeneratedTable');
  var row = table.rows, col = table.rows[0].cells, sum = 0;
  for (var i = 1; i < row.length; i++) {
    sum = 0;
    for (var x = 2; x < col.length - 1; x++) {
      if (table.rows[i].cells[x].innerText != "-") {
        sum += parseInt(table.rows[i].cells[x].innerText);
      }
    }

    var a = Math.round(sum / assaignment);
    
    table.rows[i].cells[col.length - 1].innerText = a;
    
    if (a < 40) {
      var final = table.rows[i].cells[col.length - 1];
      final.setAttribute('class', 'td-result-fail');
    } 
   else {
      var final = table.rows[i].cells[col.length - 1];
      final.setAttribute('class', 'td-result-pass');
    }
  }
}

addRow = function() {
  var tab = document.getElementById("GeneratedTable");
  var len = tab.rows.length;
  var row = tab.insertRow(-1);
  var col = tab.rows[0].cells.length;

  for (var x = 0; x < col; x++) {
    var newCell = row.insertCell(x);

    if (x < 2) {
      newCell.className = 'td-left';
      newCell.setAttribute('contenteditable', 'true');
    }
    if (x == 2) {
      newCell.className = 'td-right';
      newCell.setAttribute('contenteditable', 'true');
      newCell.setAttribute('onblur', 'average()');
    }
    if (x == col - 1)
      newCell.className = 'td-result';
    newCell.innerHTML = "-";
    newCell.setAttribute('contenteditable', 'true');
    newCell.setAttribute('onblur', 'average()');
  }

}
addCol = function() {

  assaignment++;
  var tab = document.getElementById("GeneratedTable");
  var row = tab.rows.length,
    colunm = tab.rows[0].cells.length,
    head = 0;
    
  for (var i = 0; i < row; i++) {
    var newCell = tab.rows[i].insertCell(colunm - 1);
    if (i == 0) {

      newCell.innerHTML = "Assignment " + counter;
      newCell.setAttribute('class', 'heading'); // set DIV 
      counter++;
    } else{
      newCell.innerHTML = "-";
      newCell.className = 'td-right';}
      
    newCell.setAttribute('contenteditable', 'true');
    newCell.setAttribute('onblur', 'average()');
  }
  iteration++;
}

var defaultC = 2, defaultR = 4;
var colL = localStorage._colLength;
var rowL = localStorage._rowLength;


sortRows = function(){
	while(colL > defaultC){
  	addRow();
  	colL--;
  }

  while(rowL > defaultR){
  	addCol();
  	rowL--;
  }

  defaultC = colL;
  defaultR = rowL;

}

saveValue = function(){
  var tab = document.getElementById("GeneratedTable");
  var col = tab.rows.length;
  var row = tab.rows[0].cells.length;
  var table_array = new Array();
  

  localStorage._colLength = col;
  localStorage._rowLength = row;
 

 
 
  for(var x = 0; x<col; x++){
  	for(var y = 0; y<row; y++){
    		var newCell = tab.rows[x].cells[y].innerText;
        table_array.push(newCell);
			}
		}
   localStorage["table_array"] = JSON.stringify(table_array);
}


loadValue = function(){

  sortRows();

  var table_string = JSON.parse(localStorage["table_array"]);
  
  var table_Load = document.getElementById("GeneratedTable");
  var col_Load = table_Load.rows.length;;
  var row_Load = table_Load.rows[0].cells.length;
  
  
  

	for(var x = 1; x<col_Load; x++){ 
  		for(var y = 0; y<row_Load; y++){
  			var newCell_Load = table_Load.rows[x].cells[y];
  			newCell_Load.innerText = table_string[iteration];
  			iteration++;
  		}
  	}

}