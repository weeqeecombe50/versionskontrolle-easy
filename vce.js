// Hauptfunktionalität des Versionskontrollsystems Easy

class VersionskontrolleEasy {
    constructor() {
        this.projekte = {};
    }

    init(projektName) {
        if (this.projekte[projektName]) {
            console.log(`Projekt '${projektName}' existiert bereits.`);
        } else {
            this.projekte[projektName] = { dateien: [], änderungen: [] };
            console.log(`Projekt '${projektName}' erfolgreich initialisiert.`);
        }
    }

    track(datei) {
        // Logik zum Verfolgen von Dateien
        console.log(`Überwachung der Datei: ${datei}`);
    }

    commit(message) {
        // Logik zum Speichern von Änderungen
        console.log(`Änderungen mit der Nachricht '${message}' gespeichert.`);
    }
}

module.exports = VersionskontrolleEasy;