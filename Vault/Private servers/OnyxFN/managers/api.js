const axios = require('axios');
const path = require('path');
const crypto = require("crypto");
const fs = require('fs')
var custom_event_flag = false
module.exports = (app) => {
  //lightswitch
  app.get('/lightswitch/api/service/bulk/status', (req, res) => {
    res.json([{
      "serviceInstanceId": "fortnite",
      "status": "UP",
      "message": "GO AWAY KID",
      "maintenanceUri": null,
      "allowedActions": ["PLAY", "DOWNLOAD"],
      "banned": false
    }]);
  });

  app.get('/Kairos/portraits/:filename', (req, res) => {
    res.setHeader("content-type", "image/png")
    res.sendFile(path.join(__dirname, '../public/IconSmall.png'));
  })

  //external auth
  app.get('/account/api/public/account/:accountId/externalAuths', (req, res) => {
    res.json([])
  });

  //version check
  app.get('/fortnite/api/v2/versioncheck/:version', (req, res) => {
    res.json({ "type": "NO_UPDATE" })
  });

  //Matchmaking error
  //app.all("/fortnite/api/game/v2/matchmakingservice/ticket/player/:accountId", (req, res) => {
  //  res.json([{ "errorCode": "Due to Epic TOS, we are not able to support matchmaking. Sorry for any inconvenience.", "errorMessage": "Hey, Plz stop looking at those file or in fiddler please", "messageVars": [], "numericErrorCode": 1032, "originatingService": "fortnite", "intent": "prod-live" }])
  //})

  //privacy
  app.get('/fortnite/api/game/v2/privacy/account/:accountId', (req, res) => {
    res.json({
      "accountId": req.params.accountId,
      "optOutOfPublicLeaderboards": false
    })
  });

  //waiting room
  app.get('/waitingroom/api/waitingroom', (req, res) => {
    res.status(204).end();
  });

  //grant access
  app.post('/fortnite/api/game/v2/grant_access/:accountId', (req, res) => {
    res.status(204).end();
  });

  //enabled features
  app.get('/fortnite/api/game/v2/enabled_features', (req, res) => {
    res.json([])
  });

  //so kids dont freak out over the error every 5secs :/
  app.get('/fortnite/api/receipts/v1/account/:accountId/receipts', (req, res) => {
    res.json([])
  });

  //blocklist
  app.get('/friends/api/public/blocklist/:accountId', (req, res) => {
    res.json({
      blockedUsers: []
    })
  });

  //recent players
  app.get('/friends/api/public/list/fortnite/:accountId/recentPlayers', (req, res) => {
    res.json([]);
  });

  //datarouter
  app.post('/datarouter/api/v1/public/*', (req, res) => {
    res.status(204).end();
  });

  //presence ?
  app.get('/presence/api/v1/_/:accountId/settings/subscriptions', (req, res) => { res.status(204).end(); });
  app.get('/party/api/v1/Fortnite/user/:accountId/notifications/undelivered/count', (req, res) => { res.status(204).end(); });

  app.get('/socialban/api/public/v1/:accountId', (req, res) => {
    res.status(204).end();
  });

  app.get('/content-controls/:accountId', function(req, res) {
    res.status(204).end();
  });

  //platform
  app.post('/fortnite/api/game/v2/tryPlayOnPlatform/account/:accountId', (req, res) => {
    res.set('Content-Type', 'text/plain');
    res.send(true);
  });

  //sac
  app.get('/affiliate/api/public/affiliates/slug/:affiliateName', (req, res) => {
    res.json({
      id: "aabbccddeeff11223344556677889900",
      slug: req.params.affiliateName,
      displayName: req.params.affiliateName,
      status: "ACTIVE",
      verified: true
    })
  });

  app.get('/', (req, res) => {
    res.json("Mymod server is running  " + new Date())
  });

  //cloudstorage
  app.get('/fortnite/api/cloudstorage/system', async (req, res) => {

    let engine = fs.readFileSync(path.join(__dirname, '../hotfixes/DefaultEngine.ini'));
    let runtime = fs.readFileSync(path.join(__dirname, '../hotfixes/DefaultRuntimeOptions.ini'));
    let game = fs.readFileSync(path.join(__dirname, '../hotfixes/DefaultGame.ini'));
    res.json([
      {
        "uniqueFilename": "3460cbe1c57d4a838ace32951a4d7171",
        "filename": "DefaultEngine.ini",
        "hash": crypto.createHash("sha1").update(engine).digest("hex"),
        "hash256": crypto.createHash("sha256").update(engine).digest("hex"),
        "length": engine.length,
        "contentType": "application/octet-stream",
        "uploaded": fs.statSync(path.join(__dirname, '../hotfixes/DefaultEngine.ini')).mtime,
        "storageType": "S3",
        "doNotCache": false
      },
      {
        "uniqueFilename": "DefaultGame.ini",
        "filename": "DefaultGame.ini",
        "hash": crypto.createHash("sha1").update(game).digest("hex"),
        "hash256": crypto.createHash("sha256").update(game).digest("hex"),
        "length": game.length,
        "contentType": "application/octet-stream",
        "uploaded": fs.statSync(path.join(__dirname, '../hotfixes/DefaultGame.ini')).mtime,
        "storageType": "S3",
        "doNotCache": false
      },
      {
        "uniqueFilename": "c52c1f9246eb48ce9dade87be5a66f29",
        "filename": "DefaultRuntimeOptions.ini",
        "hash": crypto.createHash("sha1").update(runtime).digest("hex"),
        "hash256": crypto.createHash("sha256").update(runtime).digest("hex"),
        "length": runtime.length,
        "contentType": "application/octet-stream",
        "uploaded": fs.statSync(path.join(__dirname, '../hotfixes/DefaultRuntimeOptions.ini')).mtime,
        "storageType": "S3",
        "doNotCache": false
      }])
  });

  //cba adding more
  app.get('/fortnite/api/cloudstorage/system/DefaultGame.ini', (req, res) => {
    res.setHeader("content-type", "application/octet-stream")
    res.sendFile(path.join(__dirname, '../hotfixes/DefaultGame.ini'));
  });

  app.get('/fortnite/api/cloudstorage/system/3460cbe1c57d4a838ace32951a4d7171', (req, res) => {
    res.setHeader("content-type", "application/octet-stream")
    res.sendFile(path.join(__dirname, '../hotfixes/DefaultEngine.ini'));
  });

  app.get('/fortnite/api/cloudstorage/system/c52c1f9246eb48ce9dade87be5a66f29', (req, res) => {
    res.setHeader("content-type", "application/octet-stream")
    res.sendFile(path.join(__dirname, '../hotfixes/DefaultRuntimeOptions.ini'));
  });

  app.get('/fortnite/api/cloudstorage/user/:accountId', (req, res) => {
    res.json([])
  });
  app.get('/fortnite/api/cloudstorage/user/:accountId/:fileName', (req, res) => {
    res.set('Content-Type', 'application/octet-stream').send("")
  });
  app.put('/fortnite/api/cloudstorage/user/:accountId/:fileName', (req, res) => {
    res.status(204).end();
  });

  //keychain
  app.get('/fortnite/api/storefront/v2/keychain', (req, res) => {
    axios.get("https://api.nitestats.com/v1/epic/keychain").then(response => {
      res.json(response.data);
    })
  })
  //party
  app.get('/party/api/v1/Fortnite/user/:accountId', (req, res) => {
    res.json({
      current: [],
      pending: [],
      invites: [],
      pings: []
    });
  });

  app.get('/fortnite/api/calendar/v1/timeline', function(req, res) {

    var season
    if (req.headers["user-agent"]) {
      try {
        season = req.headers["user-agent"].split("-")[1].split(".")[0]
      } catch {
        season = 45
      }
    } else season = 45

      res.json({
        channels: {
          "standalone-store": {},
          "client-matchmaking": {},
          tk: {},
          "featured-islands": {},
          "community-votes": {},
          "client-events": {
            states: [{
              validFrom: "2020-05-21T18:36:38.383Z",
              activeEvents: [
                {
                  eventType: `EventFlag.LobbySeason${season}`,
                  activeUntil: "9999-12-31T23:59:59.999Z",
                  activeSince: "2019-12-31T23:59:59.999Z"
                },
                {
                  eventType: `EventFlag.WorldCupBattleBus`,
                  activeUntil: "9999-12-31T23:59:59.999Z",
                  activeSince: "2019-12-31T23:59:59.999Z"
                }
              ],
              state: {
                activeStorefronts: [],
                eventNamedWeights: {},
                activeEvents: [],
                seasonNumber: season,
                seasonTemplateId: `AthenaSeason:athenaseason${season}`,
                matchXpBonusPoints: 0,
                eventPunchCardTemplateId: "",
                seasonBegin: "9999-12-31T23:59:59.999Z",
                seasonEnd: "9999-12-31T23:59:59.999Z",
                seasonDisplayedEnd: "9999-12-31T23:59:59.999Z",
                weeklyStoreEnd: "9999-12-31T23:59:59.999Z",
                stwEventStoreEnd: "9999-12-31T23:59:59.999Z",
                stwWeeklyStoreEnd: "9999-12-31T23:59:59.999Z",
                dailyStoreEnd: "9999-12-31T23:59:59.999Z"
              }
            }],
            cacheExpire: "9999-12-31T23:59:59.999Z"
          }
        },
        cacheIntervalMins: 15,
        currentTime: new Date()
      })
    })

  //sigh
  app.get("/fortnite/api/matchmaking/session/findPlayer/:id", (req, res) => {
    res.json([{ "errorCode": "errors.com.epicgames.common.authentication.authentication_failed", "errorMessage": "Authentication failed for /api/cloudstorage/system", "messageVars": ["/api/cloudstorage/system"], "numericErrorCode": 1032, "originatingService": "fortnite", "intent": "prod-live" }])
  })
}