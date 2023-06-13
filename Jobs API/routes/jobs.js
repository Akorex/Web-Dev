const express = require('express')
const Router = express.Router()

const {getAllJobs, 
    getJob, 
    createJob,
    updateJob, 
    deleteJob
} = require('../controllers/jobs')

Router.route('/').post(createJob).get(getAllJobs)
Router.route('/:id').get(getJob).delete(deleteJob).patch(updateJob)

module.exports = Router