export function getGPhotos() {
    console.log('in the photo service, sending fetch')
    return fetch('/apis/gPhotos', {
        method: 'POST'
    }, { mode: "cors" })
        .then(res => res.json())
        .then(({ photos }) => photos)
}

