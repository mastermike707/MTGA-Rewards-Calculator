fs = require('fs');
const log = fs.readFileSync('log.txt', 'utf-8');

console.log('file read')
const LOG_LINE_PATTERN = /\[UnityCrossThreadLogger\](.*)\r\n([<=]=[=>]) (.*)\(.*\)\s*({\r\n(?:\s+.*,?\r\n)*})/g;
const PLAYER_INVENTORY_CLASS = 'PlayerInventory';
const PLAYER_CARDS_FUNCTION = 'GetPlayerCardsV3';
const PLAYER_INVENTORY_FUNCTION = 'GetPlayerInventory';
const EVENT_CLASS = 'Event'
const ACTIVE_EVENTS_FUNCTION = 'GetActiveEventsV2'

function parseLog(logtext) {
    let isParsed = false
    let cardData;
    //rewards data

    while(isParsed == false) {
        let result = LOG_LINE_PATTERN.exec(logtext)
        if(result != null && result[3] == 'PlayerInventory.GetPlayerCardsV3') {
            cardData = JSON.parse(result[4]);
            isParsed = true;
        } else if(result == null) {
            isParsed = true;
        }
    }
    return cardData;
}


console.log(log)

function constructCardStorage() {
    //get card data 
    //Check bulk data version here
    //download bulk data here if needed
    //construct arena json 

}