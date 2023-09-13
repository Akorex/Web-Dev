import { Router } from "express"
import { createWorkspace, deleteWorkspace, getAllWorkspaces, getWorkspace } from "../controllers/workspace"

const workspaceRouter = Router()


workspaceRouter.route('/').post(createWorkspace).get(getAllWorkspaces)
workspaceRouter.route('/:id').get(getWorkspace).delete(deleteWorkspace)



export default workspaceRouter