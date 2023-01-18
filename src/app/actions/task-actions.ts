import { Task } from "../model/task";

export class addTask{
    static readonly type="[Task] Add"
    constructor (public payload :Task)
    {}
}

export class GetTask{
    static readonly type="[Task] Get"
    constructor (public payload :Task[])
    {}
}

export class removeTask{
    static readonly type="[Task] Remove"
    constructor (public payload :string)
    {}
}


export class editTask{
    static readonly type="[Task] Edit"
    constructor (public payload :Task)
    {}
}