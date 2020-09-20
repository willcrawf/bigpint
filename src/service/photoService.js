const ExifImage = require('exif').ExifImage


export function getGPhotos() {
    console.log('in the photo service, sending fetch')
    return fetch('/apis/gPhotos', {
        method: 'POST'
    }, { mode: "cors" })
        .then(res => res.json())
        .then(({ photos }) => photos)
}

export async function getExif(img) {
    console.log('in service getExif')
    let exifData = null
    try {
        exifData = await new ExifImage({ img }, function(err, exifData) {
            console.log(exifData)
        })
    } catch (err) {console.log(err)}
    return exifData
}