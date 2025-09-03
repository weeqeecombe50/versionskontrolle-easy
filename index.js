// Entry point of the application
const VersionskontrolleEasy = require('./vce');

const vce = new VersionskontrolleEasy();

// Example commands to demonstrate version control functionalities
vce.init('mein-projekt');
vce.track('meine-datei.txt');
vce.commit('Meine erste Änderung');