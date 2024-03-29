import { GET_BACKLOG, GET_PROJECT_TASK, DELETE_PROJECT_TASK } from "../actions/types";


const initialState = {
    project_tasks: [],
    project_task:{}
}
export default function (state = initialState, action) {
    switch (action.type) {

 case GET_BACKLOG: return {
            ...state,
            project_tasks: action.payload,
        };

 case GET_PROJECT_TASK: return {
            ...state,
             project_task: action.payload,
        };
        
 case DELETE_PROJECT_TASK: return {
            ...state,
     projects:state.projects.filter(project => project.projectIdentifier !==action.payload)
 }       


        default: return state
    }
}