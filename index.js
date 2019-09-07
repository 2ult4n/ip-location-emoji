const ipLocation = require('iplocation').default
const emoji_source = 'https://unpkg.com/country-flag-emoji-json@1.0.2/json/flag-emojis-by-code.pretty.json'
const axios = require('axios')

exports.getEmoji = (ipAddress) => {
    var emoji = ''

    ipLocation(ipAddress)
    .then((res) => {
        var countryCode = res.countryCode
        axios.get(emoji_source).then(function (response) {
            emoji = response.data[countryCode].emoji
        })
        .catch(function (error) {
            console.error(error)
        })
    })
    .catch(error => {
        console.error(error)
    });
return emoji
}