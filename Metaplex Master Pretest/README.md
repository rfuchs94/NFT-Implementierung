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
REACT_APP_CANDY_MACHINE_ID=PFFAeSJuuvkREsEAUXy3NFT884FTuW4QR9NL6a7D7fR

REACT_APP_SOLANA_NETWORK=devnet
REACT_APP_SOLANA_RPC_HOST=https://metaplex.devnet.rpcpool.com/
SKIP_PREFLIGHT_CHECK=true
```

Zum Start des Programmes wird folgender Befehl ausgeführt:
```shell
yarn start
```

Quelle: https://docs.metaplex.com/candy-machine-v2/getting-started
