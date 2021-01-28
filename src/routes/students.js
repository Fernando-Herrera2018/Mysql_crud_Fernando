const router = require('express').Router()

const { getStudents, getStudentById, postStudent, putStudentById, deleteStudentById } = require('../controllers/student')

router.get('/', getStudents)
router.get('/:id', getStudentById)
router.post('/', postStudent)
router.put('/:id', putStudentById)
router.delete('/:id', deleteStudentById)

module.exports = router