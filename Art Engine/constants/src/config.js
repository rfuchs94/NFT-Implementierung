const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

//Hier wird das Netzwerk Solana aufgrund der Variabel ausgewählt
const network = NETWORK.sol;

// Der Kollektion einen Namen geben und diese Beschreiben
const namePrefix = "Smart Foxes";
const description = "99 Foxes explore the space of web 3.0";
const baseUri = "ipfs://NewUriToReplace"; //nicht relevant für Solana

const solanaMetadata = {
  symbol: "SF", //Abkürzung der Kollektion
  seller_fee_basis_points: 700, // Hier auswählen, wie viel % Royalties (Lizenzgebühren) vom Sekundärmarktverkauf verlangt werden soll 1000 = 10 %
  /* In dem Programm wurde für die Erfassung der Metadaten die Eigenschaft "name" nicht definiert - deshalb enthält die NFT Overview auf Solscan.io und auf Phantom als Name NFT Collection und die Abkürzukung SF aus Symbol Zeile 15.*/ 
  external_url: "https://twitter.com/FoxesSmart", // Hier kann auf externer Link verlinkt werden
  creators: [
    {
      address: "6XqGqTfGKJNKuqhLW9bt93LT5684gZoCY45n4PtXGyGX", // Hier wird der Creator angegeben, welche Wallet wie viel der Royalties erhalten soll
      share: 100, //dient der prozentuallen Angabe 100 = 100% der Royalties
    },
  ],
};

/*Hier werden die Layers konfiguriert in der Funktion - so werden auch die Metadaten strukturiert */
const layerConfigurations = [
  {
    growEditionSizeTo: 50, // Angabe wie viele Bilder für die NFT Kollektion erstellt werden sollen
    layersOrder: [ //Es werden 50 Bilder aus drei Layers und dessen Traits erstellt.
      { name: "Background" },
      { name: "Face" },
      { name: "Initials" },
    ],
  },
  {
    growEditionSizeTo: 99, // Angabe wie viele Bilder für die NFT Kollektion erstellt werden sollen
    layersOrder: [ //Es werden 49 zusätzliche Bilder kreiert, hier aus den vier Layern - neu mit Message
      { name: "Background" },
      { name: "Face" },
      { name: "Initials" },
      { name: "Message" },
    ],
  },
  
];

/* Mit der Funktion werden die verschiedenen Traits der Layers und in der Reihenfolge der Bildnummer gewürfelt um ein Bild zu erstellen.
um die Reihenfolge zufällig zu erhalten kann die Variabel auf true umgestellt werden*/
const shuffleLayerConfigurations = false;

const debugLogs = false;

// Hier wird die Grösse des Formats eingestellt in Pixel
const format = {
  width: 1000,
  height: 1000,
  smoothing: false,
};

// Funktion zur GIF Erstellung wird nicht benutzt
const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};


// Hiermit können Bilder aus den Metadaten erstellt werden - wird jedoch hierfür nicht verwendet.
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


// Hiermit können die Bilder auch als wenige Pixel dargestellt werden - wird hier jedoch nicht verwendet.
const pixelFormat = {
  ratio: 2 / 128,
}; 

// Hier kann der Hintergrund konfiguriert werden
const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};


// Hier werden zusätzliche Angaben wie der Name des Künstlers unten angegeben.
const extraMetadata = {
  creator: "Robin Fuchs", //Angabe des Autors
}; 

//Mit dem # und einer Zahl im Namen des Bildes wird die Rarity angegeben - wie oft das Bild im Verhältnis vorkommen soll
const rarityDelimiter = "#";

//Definiert wie viele dna's ausgegebenen werden soll, bevor die Erstellung gestopped wird (nur zutreffend wenn auch Editionsize so hoch angegeben wird)
const uniqueDnaTorrance = 10000;

// Gibt eine Vorschau der Bilder aus
const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

// Diese Funktion erstellt ein GIF als Vorschau wird nicht verwendet in dieser Arbeit
const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};


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
