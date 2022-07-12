const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

//Hier wird das Netzwerk Solana aufgrund der Variabel ausgewählt
const network = NETWORK.sol;

// Der Kollektion einen Namen geben und diese Beschreiben
const namePrefix = "rf test";
const description = "thats a test";
// nicht relevant für Solana const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "RF", //Abkürzung der Kollektion
  seller_fee_basis_points: 700, // Hier auswählen, wie viel % Royalties (Lizenzgebühren) vom Sekundärmarktverkauf verlangt werden soll 1000 = 10 %
  external_url: "https://www.youtube.com/c/hashlipsnft", // Hier kann auf externer Link verlinkt werden
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC", // Hier wird der Creator angegeben, welche Wallet wie viel der Royalties erhalten soll
      share: 100, //dient der prozentuallen Angabe 100 = 100% der Royalties
    },
  ],
};

/* Solana beginnt beim Erstellen der NFTs bei der Zahl 0
Hier werden die Layers gelistet - so werden auch die Metadaten strukturiert */
const layerConfigurations = [
  {
    growEditionSizeTo: 5, // Angabe wie viele Bilder für die NFT Kollektion erstellt werden sollen
    layersOrder: [
      { name: "Background" },
      { name: "Eyeball" },
      { name: "Eye color" },
      { name: "Iris" },
      { name: "Shine" },
      { name: "Bottom lid" },
      { name: "Top lid" },
    ],
  },
];

// Mit der Funktion werden die verschiedenen Traits der Layers zufällig gewürfelt um ein Bild zu erstellen
const shuffleLayerConfigurations = false;

const debugLogs = false;

// Hier wird die Grösse des Formats eingestellt in Pixel
const format = {
  width: 512,
  height: 512,
  smoothing: false,
};

/* Funktion zur GIF Erstellung wird nicht benutzt
const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};
*/

/* Hiermit können Bilder aus den Metadaten erstellt werden - wird jedoch hierfür nicht verwendet.
const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};


/* Hiermit können die Bilder auch als wenige Pixel dargestellt werden - wird hier jedoch nicht verwendet.
const pixelFormat = {
  ratio: 2 / 128,
}; 

Hier würde der Hintergrund für die Metadaten als Bild eingestellt werden.
const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};
*/

// Hier können zusätzliche Angaben wie der Name des Künstlers unten angegeben werden.
const extraMetadata = {
  //creator: "Robin Fuchs", erst nach Pretest hinzugefügt
}; 

//Mit dem # und einer Zahl im Namen des Bildes wird die Rarity angegeben - wie oft das Bild im Verhältnis vorkommen soll
const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

// Gibt eine Vorschau der Bilder aus
const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

/* Diese Funktion erstellt ein GIF als Vorschau wird nicht verwendet in dieser Arbeit
const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};
*/

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
