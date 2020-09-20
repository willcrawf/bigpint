const config = {
   
    gClientID: '595083078627-t2qqf4b6hb57c9i47lac7609l5bt9i1i.apps.googleusercontent.com',
    gClientSecret: 'DN6x3rFZ0f_WhJ_wFsLKllgK',
    gCb: 'http://localhost:3001/auth/google/callback',
    port: 3001,
    scopes: [
      'https://www.googleapis.com/auth/photoslibrary.readonly',
      'profile'
    ],
    photosToLoad: 100,
    searchPageSize: 100,
    albumPageSize: 100,
    apiEndpoint: 'https://photoslibrary.googleapis.com'

}

module.exports = config;