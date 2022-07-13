## NFT Deployment Mainnet Solana

Innerhalb diesem Deployment wird die Smart Foxes Collection auf dem Mainnet von Solana angelegt.
Die Erstellung und Mint erfolgten mit der Candymachine v2 und den Dateien von Metaplex (2022).
Die Anwendung erfolgte alleine aufgrund der Ausführung der bestehenden Projekte und werden aufgrund dessen Lizenzrechte genutzt.


Für die Anwendung werden gemäss Metaplex (2022) die aktuellen Versionen der folgenden Tools benötigt:

```bash
git: to clone the repository
node: JavaScript runtime
yarn: package manager to install the required dependencies
ts-node: TypeScript execution environment
```
Zur Anwendung ist es notwendig die Candy Machine im upload-config.js File zu konfigurieren wie im folgenden Beispiel:

```json
  {
  "price": 0.01,
  "number": 99,
  "gatekeeper": null,
  "solTreasuryAccount": "6XqGqTfGKJNKuqhLW9bt93LT5684gZoCY45n4PtXGyGX",
  "splTokenAccount": null,
  "splToken": null,
  "goLiveDate": "23 May 2022 20:45:00 GMT",
  "endSettings": null,
  "whitelistMintSettings": null,
  "hiddenSettings": null,
  "storage": "arweave-sol",
  "ipfsInfuraProjectId": null,
  "ipfsInfuraSecret": null,
  "awsS3Bucket": null,
  "nftStorageKey": null,
  "noRetainAuthority": false,
  "noMutable": false
  }
```

Nach der entsprechenden Konfiguration kann folgender Befehl ausgeführt werden für das Deployment auf der Blockchain wie in folgendem Beispiel:

```shell
ts-node ~\src\candy-machine-v2-cli.ts upload
-e mainnet-beta --rpc-url https://ssc-dao.genesysgo.net/
-k C:\.config\solana\keypair.json
-cp \cli\fox-candy-machine-upload-config.json ~\nft master\metaplex master\assets

```
Sobald der Smart Contract generiert wurde mit der Candy Machine V2 kann eine Mint Page mit der Candy Machine ui aufgerufen werden mit der folgenden Konfiguration:

```env
EACT_APP_CANDY_MACHINE_ID=F9HoCNmzHadoPMgB4bfPzqJ2zbEFByVPATH3tZV65FUk

REACT_APP_SOLANA_NETWORK=mainnet-beta
REACT_APP_SOLANA_RPC_HOST=https://ssc-dao.genesysgo.net/
SKIP_PREFLIGHT_CHECK=true

```
Zum Start des Programmes wird folgender Befehl ausgeführt:
```shell
yarn start
```

Der Mint wurde anschliessend in einem separaten Repo als Public Mint gehostet über 4EVERLAND unter dieser Domain: <br>
[Mint Page der Smart Fox Collection](https://mint-hosting-vh6c5224-rfuchs94.4everland.app/) <br>
[Repository für das Mint Hosting](https://github.com/rfuchs94/Mint-Hosting)

Quelle: https://docs.metaplex.com/candy-machine-v2/getting-started
