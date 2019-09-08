const ipLocation = require('iplocation').default
const emoji_source = 'https://unpkg.com/country-flag-emoji-json@1.0.2/json/flag-emojis-by-code.pretty.json'
const axios = require('axios')

exports.getEmoji = async (ipAddress) => {

    let locationInfo = await ipLocation(ipAddress)
    let emoji_dic = await axios.get(emoji_source)
    return emoji_dic.data[locationInfo.countryCode].emoji
}