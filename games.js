const games = [
  {
    name: "Terraforming Mars",
    level: "🧠🤯",
    players: [true, true, true, true, true, false, false, false, false],
  },
  {
    name: "Wingspan",
    level: "🧠🤯",
    players: [true, true, true, true, true, false, false, false, false],
  },
  {
    name: "Rebellion",
    level: "🧠🤯👩‍👩‍👦‍👦",
    players: [false, true, false, false, false, false, false, false, false],
  },
  {
    name: "7 Wonders Duel",
    level: "🧠🤯",
    players: [false, true, false, false, false, false, false, false, false],
  },
  {
    name: "Dominion (Base, Intrigue, Seaside, Prosperity)",
    level: "🧠🤯",
    players: [false, true, true, true, false, false, false, false, false],
  },
  {
    name: "Innovation (Base, Artifacts, Echoes)",
    level: "🧠🤯",
    players: [false, true, true, true, false, false, false, false, false],
  },
  {
    name: "Root (Base, Riverfolk)",
    level: "🧠🤯",
    players: [false, true, true, true, true, true, true, false, false],
  },
  {
    name: "7 Wonders",
    level: "🧠🤯",
    players: [false, true, true, true, true, true, true, false, false],
  },
  {
    name: "Revolution (Base, Anarchy)",
    level: "🧠🤯",
    players: [false, false, true, true, true, true, false, false, false],
  },
  {
    name: "Game of Thrones (Base, Mother of Dragons)",
    level: "🧠🤯",
    players: [false, false, true, true, true, true, true, false, false],
  },
  {
    name: "Splendor",
    level: "🧠",
    players: [false, true, true, true, false, false, false, false, false],
  },
  {
    name: "Azul",
    level: "🧠",
    players: [false, true, true, true, false, false, false, false, false],
  },
  {
    name: "Photosynthesis",
    level: "🧠",
    players: [false, true, true, true, false, false, false, false, false],
  },
  {
    name: "Codinca",
    level: "🧠",
    players: [false, true, true, true, false, false, false, false, false],
  },
  {
    name: "Tokaido",
    level: "🧠",
    players: [false, true, true, true, true, false, false, false, false],
  },
  {
    name: "Avalon (up to 10)",
    level: "🧠",
    players: [false, false, false, false, true, true, true, true, true],
  },
  {
    name: "Scrabble",
    level: "🎉",
    players: [false, true, true, true, false, false, false, false, false],
  },
  {
    name: "Monopoly & Aggieopoly",
    level: "🎉",
    players: [false, true, true, true, false, false, false, false, false],
  },
  {
    name: "Exploding Kittens (Base, Streaking, Imploding)",
    level: "🎉",
    players: [false, true, true, true, true, false, false, false, false],
  },
  {
    name: "Bears vs Babies",
    level: "🎉",
    players: [false, true, true, true, true, false, false, false, false],
  },
  {
    name: "Sushi Go Party",
    level: "🎉",
    players: [false, true, true, true, true, true, false, false, false],
  },
  {
    name: "Scattergories",
    level: "🎉",
    players: [false, true, true, true, true, true, false, false, false],
  },
  {
    name: "Codenames (best with 4+)",
    level: "🎉👩‍👩‍👦‍👦",
    players: [false, true, true, true, true, true, true, true, false],
  },
  {
    name: "Space Team",
    level: "🎉👐",
    players: [false, true, true, true, true, true, false, false, false],
  },
  {
    name: "Pictionary (up to 16)",
    level: "🎉👩‍👩‍👦‍👦",
    players: [false, true, true, true, true, true, true, true, true],
  },
  {
    name: "Mad Gab",
    level: "🎉👩‍👩‍👦‍👦",
    players: [false, false, false, true, true, true, true, true, true],
  },
]

document.addEventListener('DOMContentLoaded', function(){
  const tableBody = document.getElementById('table-body')
  for ( game of games) {
    const row = document.createElement('tr')

    const nameNode =  document.createElement('td')
    const levelNode =  document.createElement('td')

    nameNode.innerHTML = game.name
    levelNode.innerHTML = game.level

    row.append(nameNode)
    row.append(levelNode)

    for (player of game.players) {
      const playerNode = document.createElement('td')
      playerNode.innerHTML = player ? "x" : ""
      row.append(playerNode)
    }

    tableBody.append(row)
  }
})