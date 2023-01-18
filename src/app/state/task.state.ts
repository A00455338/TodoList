import { State,Action,StateContext,Selector } from "@ngxs/store";
import { Task } from "../model/task";
import { addTask,GetTask,removeTask } from "../actions/task-actions";

export class TaskStateModel{
    taskarr:Task[]=[];
}

@State<TaskStateModel>({
    name:'task',
    defaults:{
        taskarr:[]
    }
})

export class TaskState{

    @Selector()
    static getTasks(state:TaskStateModel)
    {

        return state.taskarr

    }
    @Action(addTask)
    addTask({getState,patchState}:StateContext<TaskStateModel>,{payload}:addTask)
    {
        const state=getState();
        patchState({
            taskarr:[...state.taskarr,payload]
        })
    }

    @Action(GetTask)
    getTaskData({getState,patchState}:StateContext<TaskStateModel>,{payload}:GetTask)
    {
        const state=getState();
        patchState({
            taskarr:payload
        })
    }
    

}

