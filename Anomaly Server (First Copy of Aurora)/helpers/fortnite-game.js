module.exports = (app) => {
    app.get("/content/api/pages/fortnite-game", (req, res) => {
        res.json({
            _title: 'Fortnite Game',
            _activeDate: new Date(),
            lastModified: new Date(),
            _locale: 'en-US',
            battleroyalenews: {
                news: {
                    motds: [
                        {
                            entryType: "Website",
                            image: "https://cdn.discordapp.com/attachments/727376051587776533/735206947296641104/Blue_2_Green_-_1080.png",
                        tileImage: "https://cdn.discordapp.com/attachments/727376051587776533/735206949884526702/Blue_2_Green_-_1024.png",
                            hidden: false,
                            tabTitleOverride: "AnomalyFN",
                            _type: "CommonUI Simple Message MOTD",
                            title: "Welcome To AnomalyFN",
                            body: "Made by Midas (@MidasLeaks). If you find/have any issues, you can join our Discord by clicking the button below.",
                            videoStreamingEnabled: false,
                            sortingPriority: 20,
                            id: "Anomaly-Welcome",
                            videoFullscreen: false,
                            spotlight: false,
                            websiteURL: "https://discord.com/invite/kgb3rt4",
                            websiteButtonText: "Join our Discord!"
                        }
                    ]
                },
                "jcr:isCheckedOut": true,
                _title: "battleroyalenews",
                header: "",
                style: "None",
                _noIndex: false,
                alwaysShow: false,
                "jcr:baseVersion": "a7ca237317f1e74e4b8154-226a-4450-a3cd-c77af841e798",
                _activeDate: "2020-01-21T14:00:00.000Z",
                lastModified: new Date(),
                _locale: "en-US"
            },
            emergencynotice: {
                news: {
                    platform_messages: [],
                    _type: 'Battle Royale News',
                    messages: [
                        {
                            hidden: false,
                            _type: 'CommonUI Simple Message Base',
                            subgame: 'br',
                            title: "AnomalyFN - Private Server",
                            body: "Made by MidasLeaks (@MidasLeaks) & (@AcNono_).\nDiscord: https://discord.com/invite/kgb3rt4",
                            spotlight: true
                        }
                    ]
                },
                _title: 'emergencynotice',
                _activeDate: "2019-12-03T00:51:35.524Z",
                lastModified: new Date(),
                _locale: 'en-US'
            }
        })
    })
}