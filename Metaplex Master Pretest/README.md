## NFT Deployment Pretest

Innerhalb diesem Deployment wurden die generierten Assets aus dem Pretest auf dem Devnet von Solana angelegt.
Die Erstellung und Mint erfolgten mit der Candymachine v2 und den Dateien von Metaplex (2022).
Die Anwendung erfolgte alleine aufgrund der Ausführung der bestehenden Projekte und werden aufgrund dessen Lizenzrechte genutzt.


Für die Anwendung werden gemäss Metaplex (2022) die aktuellen Versionen der folgenden Tools benötigt:

```bash
git: to clone the repository
node: JavaScript runtime
yarn: package manager to install the required dependencies
ts-node: TypeScript execution environment
```
Zur Anwendung ist es notwendig die Candy Machine im const.js File zu konfigurieren wie im folgenden Beispiel:

```json
{
  "price": 0.01,
  "number": 10000,
  "gatekeeper": {
    "gatekeeperNetwork": "ignREusXmGrscGNUesoU9mxfds9AiYTezUKex2PsZV6",
    "expireOnUse": true
  },
  "solTreasuryAccount": null,
  "splTokenAccount": null,
  "splToken": null,
  "goLiveDate": "11 Dec 2021 13:00:00 CST",
  "endSettings": null,
  "whitelistMintSettings": null,
  "hiddenSettings": null,
  "storage": "arweave",
  "ipfsInfuraProjectId": null,
  "ipfsInfuraSecret": null,
  "awsS3Bucket": null,
  "noRetainAuthority": false,
  "noMutable": false
}
```

Nach der entsprechenden Konfiguration kann folgender Befehl ausgeführt werden für das Deployment auf der Blockchain wie in folgendem Beispiel:

```shell
ts-node "C:\Users\Robin\Documents\HTW Chur\8. Semester\Bachelorarbeit\nft master\metaplex master\js\packages\cli\src\candy-machine-v2-cli.ts" upload -e devnet -k C:\.config\solana\devnet.json -cp "C:\Users\Robin\Documents\HTW Chur\8. Semester\Bachelorarbeit\nft master\metaplex master\js\packages\cli\example-candy-machine-upload-config.json" "C:\Users\Robin\Documents\HTW Chur\8. Semester\Bachelorarbeit\nft master\metaplex master\assets"
```
