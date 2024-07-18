const fs = require('fs')
const poema = fs.readFileSync('promeses.txt','utf-8');
const poemamodif = poema.replace(/Megadeth/ig,'MEGADETH')
fs.writeFileSync('poema-modif.txt',poemamodif);
