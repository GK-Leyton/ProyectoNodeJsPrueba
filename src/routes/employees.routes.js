import { Router} from 'express'
import {getEmployees , getEmployee} from '../controllers/employees.controllers.js'
import {createEmployee} from '../controllers/employees.controllers.js'
import {updateEmployee} from '../controllers/employees.controllers.js'
import {deleteEmployee} from '../controllers/employees.controllers.js'

const router = Router()

router.get('/employees' , getEmployees  )
router.get('/employees/:id' , getEmployee  )
router.post('/employees' , createEmployee)
router.patch('/employees/:id' , updateEmployee)
router.delete('/employees/:id' , deleteEmployee)

export default router