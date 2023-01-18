import { State, Action, StateContext, Selector } from "@ngxs/store";
import { Task } from "../model/task";
import { addTask, editTask, GetTask, removeTask } from "../actions/task-actions";

export class TaskStateModel {
    taskarr: Task[] = [];
}

@State<TaskStateModel>({
    name: 'task',
    defaults: {
        taskarr: []
    }
})

export class TaskState {

    @Selector()
    static getTasks(state: TaskStateModel) {
        return state.taskarr
    }

    @Action(addTask)
    addTask({ getState, patchState }: StateContext<TaskStateModel>, { payload }: addTask) {
        const state = getState();
        patchState({
            taskarr: [...state.taskarr, payload]
        })
    }

    @Action(GetTask)
    getTaskData({ getState, patchState }: StateContext<TaskStateModel>, { payload }: GetTask) {
        const state = getState();
        patchState({
            taskarr: payload
        })
    }

    @Action(removeTask)
    removeTask({ getState, patchState }: StateContext<TaskStateModel>, { payload }: removeTask) {
        const state = getState();
        patchState({
            taskarr: getState().taskarr.filter(a=>a.task_name!=payload)
        })
    }

    @Action(editTask)
    editTask({ getState, patchState }: StateContext<TaskStateModel>, { payload }: editTask) {
        const task = getState().taskarr.find(x => x.id == payload.id);
        const state = getState();
        const todoList = [...state.taskarr];
        const todoIndex = todoList.findIndex(x => x.id == payload.id);
        todoList[todoIndex] = payload;
        patchState({
            ...state,
            taskarr: todoList,
        })
    }
    



}

