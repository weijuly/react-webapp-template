const supertest = require('supertest')
const app = require('../../app')
require('regenerator-runtime')

let request, server

describe('projects API test', () => {
    beforeEach(async () => {
        server = await app.listen(8080)
        request = supertest(server)
    })

    afterEach(async () => {
        server && await server.close()
    })

    it('should return empty projects', async () => {
        const response = await request.get('/_api/projects/')
        expect(response.statusCode).toEqual(200)
        expect(response.body.projects.length).toEqual(0)
    })
})
