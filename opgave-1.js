// Importerer Node.js' filsystem-modul (fs)
// Bruges til at læse mapper, filer og hente information om dem
const fs = require("fs");

// Opretter en variabel til at tælle det samlede antal bytes i alle filer
let totalbytes = 0;

// Funktion, der skal beregne den samlede størrelse af alle filer i den aktuelle mappe
function getFileSize() {
  // Læser indholdet af den aktuelle mappe (angivet med __dirname)
  // readdir returnerer et array med filnavne i mappen
  fs.readdir(__dirname, (err, files) => {
    // Hvis der opstår en fejl, fx manglende adgang, udskrives fejlen
    if (err) console.log(err);
    // Ellers, hvis det lykkes at læse mappen:
    else {
      // For hver fil i mappen...
      files.forEach((file) => {
        // Henter detaljer (metadata) om filen, fx størrelse, type, dato mv.
        // statSync betyder "synkron version" → koden venter, indtil info er hentet
        let s = fs.statSync(__dirname + "/" + file);

        // Lægger filens størrelse (i bytes) til totalen
        totalbytes += s.size;
      });

      // Når alle filer er gennemgået, udskrives det samlede antal bytes
      console.log(totalbytes);
    }
  });
}

// Kalder funktionen, så koden bliver kørt
getFileSize();
