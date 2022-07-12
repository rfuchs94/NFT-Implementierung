const basePath = process.cwd();
const fs = require("fs");
const layersDir = `${basePath}/layers`;

const { layerConfigurations } = require(`${basePath}/src/config.js`);

const { getElements } = require("../src/main.js");

// lesen der json Daten
let rawdata = fs.readFileSync(`${basePath}/build/json/_metadata.json`);
let data = JSON.parse(rawdata);
let editionSize = data.length;

let rarityData = [];

// Ebenen werden in Chart eingefügt
layerConfigurations.forEach((config) => {
  let layers = config.layersOrder;

  layers.forEach((layer) => {
    // Iteration aller Attribute der Layer
    let elementsForLayer = [];
    let elements = getElements(`${layersDir}/${layer.name}/`);
    elements.forEach((element) => {
      // Abfrage aller Elemente und Gewichtungen
      let rarityDataElement = {
        trait: element.name,
        weight: element.weight.toFixed(0),
        occurrence: 0, // startet / beginnt zu zählen bei 0
      };
      elementsForLayer.push(rarityDataElement);
    });
    let layerName =
      layer.options?.["displayName"] != undefined
        ? layer.options?.["displayName"]
        : layer.name;
    // inkludiert keine Duplikate der Layer - jede Ebene kommt nur einmal vor im Bild
    if (!rarityData.includes(layer.name)) {
      // addiert alle Elemente der Layers für das generierte Bild
      rarityData[layerName] = elementsForLayer;
    }
  });
});

// Raritychart mit Vorkommen aus den Metadaten auffüllen
data.forEach((element) => {
  let attributes = element.attributes;
  attributes.forEach((attribute) => {
    let traitType = attribute.trait_type;
    let value = attribute.value;

    let rarityDataTraits = rarityData[traitType];
    rarityDataTraits.forEach((rarityDataTrait) => {
      if (rarityDataTrait.trait == value) {
        // Prüfung der Vorkommnisse eines Traits in der Kollektion
        rarityDataTrait.occurrence++;
      }
    });
  });
});

// Vorkommnisse werden als String ausgegeben
for (var layer in rarityData) {
  for (var attribute in rarityData[layer]) {
    // Berechnung der Wahrscheinlichkeit der Anzahl Vorkommnisse in der Kollektion
    let chance =
      ((rarityData[layer][attribute].occurrence / editionSize) * 100).toFixed(2);

    // Angabe der Rarity in Prozent
    rarityData[layer][attribute].occurrence =
      `${rarityData[layer][attribute].occurrence} in ${editionSize} editions (${chance} %)`;
  }
}

// Ausgabe der Rarity Daten
for (var layer in rarityData) {
  console.log(`Trait type: ${layer}`);
  for (var trait in rarityData[layer]) {
    console.log(rarityData[layer][trait]);
  }
  console.log();
}
