var fs = require('fs');

var lyric = fs.readFileSync('./text.txt', {encoding:'utf8'});
console.log(lyric);

fs.writeFileSync('./newlyric.txt', 'mot hai ba bon....');