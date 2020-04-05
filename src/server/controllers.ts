const express = require('express')

const router = express.Router()

const projects = {
    projects: []
}

router.get('/projects', (req, res) => res.json(projects))
router.post('', (req, res) => res.send('POST on my API'))

export default router
