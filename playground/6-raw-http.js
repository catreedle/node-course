const https = require ('https')
const url = 'https://api.darksky.net/forecast/6b6ca56658298a2c0f26bdab6ada7a51/40,-75?units=si&lang=id'

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
        console.log(chunk)
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()