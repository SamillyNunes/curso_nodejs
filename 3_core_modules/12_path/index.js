const path = require('path');

const customPath = '/insights/sami/insigh1.pdf';

// vai mostrar /insights/sami
console.log(path.dirname(customPath));
// vai mostrar insigh1
console.log(path.basename(customPath));
// vai mostrar .pdf
console.log(path.extname(customPath));