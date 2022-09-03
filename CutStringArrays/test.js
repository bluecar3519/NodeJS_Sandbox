var Html = require('./html');

var html = new Html('<tr>','<th>');

var data = ['x1', 'x2', 'x3'];

var newArray = html.toArray(data);

for(var i = 0; i < newArray.length; i++){
    console.log(newArray[i]);
