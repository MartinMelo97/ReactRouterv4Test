const PlayerAPI = {

    players: [
        { number: 1, name: "Ben Blocker", position: "Goalkeeper" },
        { number: 2, name: "Dave Defender", position: "Defense" },
        { number: 3, name: "Sam Sweeper", position: "Defense" },
        { number: 4, name: "Matt Midfielder", position: "Middle" },
        { number: 5, name: "William Winger", position: "Middle" },
        { number: 6, name: "Fillipe Forward", position: "Front Player" }
    ],

    all: function() { return this.players},

    get: function(id) {
        const isPlayer = p => p.number === id
        return this.players.find(isPlayer)
    }
}

export default PlayerAPI;