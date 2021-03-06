const request = require('request')

const forecast = (latitude , longitude , callback ) => {
     const url = 'http://api.weatherstack.com/current?access_key=144cc19ed5fd6c7fa697ed8222feadff&query= ' + latitude + ',' + longitude 
    request({url, json: true} , (error,{body}) => {
        if(error) {
            callback('unable to connect location services ', undefined)

        }
            else if(body.error){
                callback('unable to find location ',undefined)
            }
            else {
                callback(undefined , body.current.weather_descriptions[0] +'. It is currently ' +body.current.temperature + '°C feels like ' + body.current.feelslike +'°C' + ' and the humidity is ' + body.current.humidity + '%')
            }
    })
    }
    module.exports= forecast