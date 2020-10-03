const request = require('request')

const geocode = (address , callback ) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZmFyYWhlbHNhbWFkb255IiwiYSI6ImNrZnM5eWhpdjA4amEyeXM4MTd3c2Vsb2kifQ.wPHSc1dc5oQyrVGHrLIHdw'
    request({url , json: true} , (error,{body}) => {
        if(error) {
            callback('unable to connect location services ')

        }
            else if(body.features.length === 0){
                callback('unable to connect to location . try another search',undefined)
            }else {
                callback(undefined,{
                    latitude: body.features[0].center[1],
                    longitude: body.features[0].center[0],
                    location : body.features[0].place_name
                })
            }
    })
    }
    module.exports=geocode