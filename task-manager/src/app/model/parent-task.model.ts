export class ParentTask {
    parent_id: number;
    parent_task: String;

    constructor(parent_id: number, parent_task: String){
        this.parent_id =parent_id;
        this.parent_task = parent_task;
    }
}
