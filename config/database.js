const mongoose = require('mongoose')

mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})

const dbWhips = mongoose.connection

dbWhips.on('connected', () => console.log(`connected to MongoDB Ones at ${dbWhips.host}:${dbWhips.port}`))

// const dbTwos = mongoose.createConnection(process.env./*--your typetwo MongoDB URI name from .env---*/, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})

// dbTwos.on('connected', () => console.log(`connected to MongoDB Twos at ${dbTwos.host}:${dbTwos.port}`))
