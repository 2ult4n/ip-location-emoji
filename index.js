var ipLocation = require('ip-location')
var axios = require('axios')
const emoji_source = 'https://unpkg.com/country-flag-emoji-json@1.0.2/json/flag-emojis-by-code.pretty.json'


exports.getEmoji = (hostname) => {
    var emoji = undefined
    ipLocation(hostname, function(error , data) {
        console.log(data)
    }).catch((error)=>{
        console.log(error)
    })
    return emoji
}