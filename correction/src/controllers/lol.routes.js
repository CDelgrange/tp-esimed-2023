const express = require('express');
const router = express.Router();
const { readFile, stat } = require('node:fs/promises');
const { dirname } = require('path');
const appDir = dirname(require.main.filename);

router.get('/champion-names', async (req, res) => {
  const champStatsStr = await readFile(`${appDir}/lol/champ-stats.json`, { encoding: 'utf8' });
  const champs = JSON.parse(champStatsStr).champions;
  const champNames = champs.map((c) => c.name);

  res.send(champNames);
});

router.get('/champion-lore/:champName', async (req, res) => {
  const champName = req.params.champName;
  const filePath = `${appDir}/lol/champions/${champName}.json`;

  const fileExists = await stat(filePath).catch((err) => console.log(`File do not exists. Reason = ${err}`));
  if (!fileExists) {
    res.status(404).end();

    return;
  }

  const champDataStr = await readFile(filePath, { encoding: 'utf8' });
  const champLore = JSON.parse(champDataStr).data[champName].lore;

  res.send({ champLore });
});

exports.initializeRoutes = () => router;
