export {}
const MongoClient = require('mongodb').MongoClient

module.exports = (() => {
    let connection
    const getInstance = () => {
        if (!connection) {
            const url = 'mongodb://localhost:27107/projects'
            const options = {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
            MongoClient.connect(url, options, (err, db) => {
                if (err) {
                    throw err
                }
                connection = db
            })
        }
        return connection
    }
    return {
        getInstance: getInstance
    }
})()
