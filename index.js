// Einstiegspunkt der Anwendung
const VersionskontrolleEasy = require('./vce');

const vce = new VersionskontrolleEasy();

// Beispielbefehle
vce.init('mein-projekt');
vce.track('meine-datei.txt');
vce.commit('Meine erste Änderung');
