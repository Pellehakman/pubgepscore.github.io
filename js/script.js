const playerSearchBtn = document.querySelector('#player-search-btn')

const searchInput = document.querySelector('#input-player')

const gameModeSelect = document.querySelector('#gamemode')


const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJjMGUwMGM2MC01ODUzLTAxM2EtY2FjYi0zNWM2YWU1NzY4MmIiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNjQyMjY2NTM5LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6InNxdGF0In0.cSGggAHy9gLhqW2Z5AZdUTreFQZfLxFZKa7-UK1iFxU';
const ListElem = document.querySelector('#track-list')
// const searchButton = document.querySelector('#search-btn')
const matchListElem = document.querySelector('#matches-list');
const alsoChat = document.querySelector('h1')
let platform = `steam`
const playerSearchElement = document.querySelector('[data-player-search')


const nameElement = document.querySelector('[data-player-id]')
const assistsElement = document.querySelector('[data-assists]')
const killsElement = document.querySelector('[data-kills]')
const dBNOsElement = document.querySelector('[data-dBNOs]')
const damageElement = document.querySelector('[data-damage]')
const boostsElement = document.querySelector('[data-boosts]')
const dailyKillsElement = document.querySelector('[data-dailyKills]')
const dailyWinsElement = document.querySelector('[data-dailyWins]') 
const headshotKillsElement = document.querySelector('[data-headshotKills]') 
const healsElement = document.querySelector('[data-heals]') 
const killPointsElement = document.querySelector('[data-killPoints]') 
const longestKillElement = document.querySelector('[data-longestKill]') 
const longestTimeSurvivedElement = document.querySelector('[data-longestTimeSurvived]') 
const lossesElement = document.querySelector('[data-losses]') 
const maxKillStreaksElement = document.querySelector('[data-maxKillStreaks]') 
const revivesElement = document.querySelector('[data-revives]') 
const rideDistanceElement = document.querySelector('[data-rideDistance]') 
const roadKillsElement = document.querySelector('[data-roadKills]') 
const roundMostKillsElement = document.querySelector('[data-roundMostKills]') 
const roundsPlayedElement = document.querySelector('[data-roundsPlayed]') 
const suicidesElement = document.querySelector('[data-suicides]') 
const swimDistanceElement = document.querySelector('[data-swimDistance]') 
const teamKillsElement = document.querySelector('[data-teamKills]') 
const timeSurvivedElement = document.querySelector('[data-timeSurvived]') 
const top10sElement = document.querySelector('[data-top10s]') 
const vehicleDestroysElement = document.querySelector('[data-vehicleDestroys]') 
const walkDistanceElement = document.querySelector('[data-walkDistance]') 
const weaponsAcquiredElement = document.querySelector('[data-weaponsAcquired]') 
const weeklyKillsElement = document.querySelector('[data-weeklyKill]') 
const weeklyWinsElement = document.querySelector('[data-weeklyWins]') 
const winPointsElement = document.querySelector('[data-winPoints]') 
const winsElement = document.querySelector('[data-wins]') 
















let player = `players?filter[playerNames]=`;  
const player_url = `${player}`
const api_url = `https://api.pubg.com/shards/${platform}/`
let matchId = `0f5eb52e-1a48-40d3-962d-d63b30cffbf7`
const matchId_url = `matches/${matchId}`



function displayName(playerName){ 
    console.log('this is your in game name', playerName)
}

function displayMatches(fetchMatches){
    console.log('this is a players all matches', fetchMatches)
}




playerSearchBtn.addEventListener('click', async () => {
    let playerName = searchInput.value;
    
    // const query = inputElem.value;
    
    playerData(playerName)
    // displayTracks(result);
});




// --------- PLAYERDATA START --------- //

async function playerData(playerName){
    const response = await fetch(`${api_url}${player_url}${playerName}`, 
    {"headers": {"authorization": `Bearer ${TOKEN} `, "Accept": "application/vnd.api+json"}});
    const getPlayerData = await response.json();  
     

// find name //
    // const namePath = Object.entries(getPlayerData.data[0].attributes)
    // const getName = namePath.filter((playerName) => {
    //         return playerName[0] === 'name'});
    // const playerName = (getName[0].splice(1)[0])
    //        displayName(playerName)
// FIND NAME END //

    const namePath = getPlayerData.data[0].attributes
    nameElement.textContent = namePath.name
    console.log(namePath)


// FIND ID START //
    const fetchId = getPlayerData.data[0].id
    getId(fetchId)
// FIND ID END //


// FIND MATCH START //
const fetchMatches = getPlayerData.data[0].relationships.matches.data.filter((playerMatches) =>{
    return playerMatches.type === 'match'})
displayMatches(fetchMatches)
// FIND MATCH END //        
};







function score(assists){
    console.log(assists)
}



function displayLifeTimeStats(pathAllStats){
    
    assistsElement.textContent = pathAllStats.assists
    boostsElement.textContent = pathAllStats.boosts
    dBNOsElement.textContent = pathAllStats.dBNOs
    killsElement.textContent = pathAllStats.kills    
    damageElement.textContent = pathAllStats.damageDealt   
    headshotKillsElement.textContent = pathAllStats.headshotKills
    healsElement.textContent = pathAllStats.heals
    longestKillElement.textContent = pathAllStats.longestKill
    longestTimeSurvivedElement.textContent = pathAllStats.longestTimeSurvived
    lossesElement.textContent = pathAllStats.losses
    maxKillStreaksElement.textContent = pathAllStats.maxKillStreaks
    revivesElement.textContent = pathAllStats.revives
    rideDistanceElement.textContent = pathAllStats.rideDistance
    roadKillsElement.textContent = pathAllStats.roadKills
    roundMostKillsElement.textContent = pathAllStats.roundMostKills
    roundsPlayedElement.textContent = pathAllStats.roundsPlayed
    suicidesElement.textContent = pathAllStats.suicides
    swimDistanceElement.textContent = pathAllStats.swimDistance
    teamKillsElement.textContent = pathAllStats.teamKills
    timeSurvivedElement.textContent = pathAllStats.timeSurvived
    top10sElement.textContent = pathAllStats.top10s
    vehicleDestroysElement.textContent = pathAllStats.vehicleDestroys
    walkDistanceElement.textContent = pathAllStats.walkDistance
    weaponsAcquiredElement.textContent = pathAllStats.weaponsAcquired    
    winPointsElement.textContent = pathAllStats.winPoints
    winsElement.textContent = pathAllStats.wins

    assists = pathAllStats.assists

    score(assists )

// boosts
// dailyKills
// dailyWins
// days
// headshotKills
// heals
// killPoints
// longestKill
// longestTimeSurvived
// losses
// maxKillStreaks
// revives
// rideDistance
// roadKills
// roundMostKills
// roundsPlayed
// suicides
// swimDistance
// teamKills
// timeSurvived
// top10s
// vehicleDestroys
// walkDistance
// weaponsAcquired
// weeklyKills
// weeklyWins
// winPoints
// wins
     
}
let gamemode = `squad-fpp`


// gameModeSelect.addEventListener('change', function() {
//     let selectGameMode = this.value

//     gamemode.push(selectGameMode);
    

   
// }) 


        
       


async function getId(fetchId){
    const lifetime_url = `players/${fetchId}/seasons/lifetime`
    const secondResponse = await fetch(`${api_url}${lifetime_url}`, 
    {"headers": {"authorization": `Bearer ${TOKEN} `, "Accept": "application/vnd.api+json"}});
    const lifetimeData = await secondResponse.json()    
    
    console.log('this is your id', fetchId)

    let pathAllStats = (lifetimeData.data.attributes.gameModeStats[`${gamemode}`])

    displayLifeTimeStats(pathAllStats) 
    console.log(pathAllStats)
}

 

// TELEMETRY DATA START //



async function matchTelemetry(telemetryURL){
    const forthResponse = await fetch(`${telemetryURL}`,
    {"headers": {"Accept": "application/vnd.api+json" }});
    const telemetricData = await forthResponse.json()
    console.log(telemetricData)   
}

function displayTelemetry(telemetrydata){   
    let telemetryURL = telemetrydata[0].attributes.URL
    matchTelemetry(telemetryURL)
}
// TELEMETRY DATA END //






// GET MATCH DATA START //
async function matchData(){     
    const thirdResponse = await fetch(`${api_url}${matchId_url}`,
    {"headers": {"authorization": `Bearer ${TOKEN} `, "Accept": "application/vnd.api+json"}});
    const matchIdData = await thirdResponse.json()

    const participants = matchIdData.included.filter((participant) => {
        return participant.type === 'participant'});
    const rosters = matchIdData.included.filter((roster) => {
        return roster.type === 'roster'});
    const telemetrydata = matchIdData.included.filter((telemetry) => {
        return telemetry.type === 'asset'});

       displayTelemetry(telemetrydata)
       console.log('this is participants', participants)
       console.log('this is rosters', rosters) 
       
}
// GET MATCH DATA END //


// searchButton.addEventListener('click', () => {    
//     playerData()
//     matchData()   
    
// });



   