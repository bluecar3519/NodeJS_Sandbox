const fs = require('fs');

const content = 'Some new content!';

fs.writeFile('./NodeJSLearn/Write/test.html', content, err => {
  if (err) {
    console.error(err);
  }else{
    console.log( "File written successfully" );
  }
  
});