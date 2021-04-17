const games = [
  {
    name: "Terraforming Mars (Base, Prelude, Hellas & Elysium, Colonies)",
    level: "🧠🤯",
    players: [true, true, true, true, true, false, false, false, false],
  },
  {
    name: "Wingspan (Base, European, Oceania)",
    level: "🧠🤯",
    players: [true, true, true, true, true, false, false, false, false],
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
    name: "Innovation (Base and all expansions)",
    level: "🧠🤯",
    players: [false, true, true, true, false, false, false, false, false],
  },
  {
    name: "Root (Base, Riverfolk)",
    level: "🧠🤯",
    players: [false, true, true, true, true, true, true, false, false],
  },
  {
    name: "7 Wonders (Base, Cities)",
    level: "🧠🤯",
    players: [false, true, true, true, true, true, true, true, false],
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
    name: "Carcasonne Big Box (11 expansions)",
    level: "🧠🤯",
    players: [false, true, true, true, true, true, false, false, false],
  },
  {
    name: "Welcome To",
    level: "🧠",
    players: [true, true, true, true, true, true, true, true, true],
  },
  {
    name: "Ticket to Ride Europe",
    level: "🧠",
    players: [false, true, true, true, true, false, false, false, false],
  },
  {
    name: "Dice Forge (Base, Rebellion)",
    level: "🧠",
    players: [false, true, true, true, false, false, false, false, false],
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
    name: "Monty Python Fluxx",
    level: "🎉",
    players: [false, true, true, true, true, true, false, false, false],
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
    name: "On a Scale of One to T-Rex",
    level: "🎉",
    players: [false, true, true, true, true, true, true, true, false],
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

function getMaxPlayers(playersArray) {
  let index = 8
  let notAtMax = true
  while(index > 0 && notAtMax) {
    if (playersArray[index]) {
      notAtMax = false
    } else {
      index = index - 1
    }
  }
  return index === 8 ? '9+' : index + 1
}

function playersText(playersArray) {
  const min = playersArray.findIndex(e => e) + 1
  const max = getMaxPlayers(playersArray)
  const phrase = min === max ? min : `${min} - ${max}`
  return `${phrase} players`
}

function renderRow(game, tableBody) {
  const row = document.createElement('tr')

  const nameNode =  document.createElement('td')
  const levelNode =  document.createElement('td')
  const playerNode =  document.createElement('td')

  nameNode.innerHTML = game.name
  levelNode.innerHTML = game.level
  playerNode.innerHTML = playersText(game.players)

  row.append(nameNode)
  row.append(levelNode)
  row.append(playerNode)

  tableBody.append(row)
}

function renderTable(numPlayers) {
  const tableBody = document.getElementById('table-body')
  tableBody.innerHTML = ""

  for ( game of games) {
    if (!!numPlayers) {
      if (game.players[numPlayers - 1]) {
        renderRow(game, tableBody)
      }
    } else {
      renderRow(game, tableBody)
    }
  }
}

function selectPlayers(event) {
  renderTable(parseInt(event.target.value, 10))
}

document.addEventListener('DOMContentLoaded', function(){
  renderTable()
  const select = document.getElementById('num-players')
  select.addEventListener('change', selectPlayers)
})
