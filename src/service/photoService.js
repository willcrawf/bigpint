import { Stream } from 'stream'
// const ExifImage = require('exif').ExifImage


export function getGPhotos() {
    console.log('in the photo service, sending fetch')
    return fetch('/apis/gPhotos', {
        method: 'POST'
    }, { mode: "cors" })
        .then(res => res.json())
        .then(({ photos }) => {
            console.log(photos)
            return photos
        })
}

export async function getUserPhotos() {
    return fetch('/')
}

export async function addPhotoToUser() {

}

// export async function getExif(imgUrl) {
//     let exifData
//     try {
//         fetch(imgUrl, {mode: 'cors'})
//         .then(image => new ExifImage({ image }, (err, exData) => {
//             console.log(exData)
//             return exifData = exData
//             })
//         )
//     } catch (err) {console.log(err)}
//     finally {
//         return exifData
//     }
// }

// function createNewStream() {
//     const newStream = new Stream
//     newStream.writable = true
//     newStream.bytes = 0

//     newStream.write = function(buffer) {
//         newStream.bytes += buffer.length
//     }

//     newStream.end = function(buffer) {
//         if(arguments.length) newStream.write(buffer)
//         newStream.writable = false
//     }
//     return newStream
// }