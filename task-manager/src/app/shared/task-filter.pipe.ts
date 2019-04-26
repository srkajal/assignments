import { PipeTransform, Pipe } from '@angular/core';
import { Task } from '../model/task.model';

@Pipe({
    name: 'taskFilter',
    pure: false
})
export class TaskFilterPipe implements PipeTransform {
    transform(tasks: Task[], filter: Task) {
        //console.log("Inside the filter:"+filter.task_name);
        if(!tasks || !filter){
            return tasks;
        }

        return tasks.filter(t=>this.applyFilter(t, filter));
        
    }

    applyFilter(task: Task, filter: Task): boolean{
        
        for(let field in filter){
            //console.log("Field:"+filter[field]);
            if(filter[field]){
                //console.log("Task type:"+ typeof task[field] +",Filter type:"+ typeof filter[field]+",Field name:"+ field);
                if(typeof filter[field] === 'string' && typeof task[field] === 'string'){
                    if(field === 'start_date'){
                        return new Date(filter[field]) <= new Date(task[field]);
                    } 
                    
                    if(field === 'end_date'){
                        return new Date(filter[field]) >= new Date(task[field]);
                    } 
                    
                    if(field === 'task_name') {
                        return task[field].toLowerCase().indexOf(filter[field].toLowerCase()) !== -1;
                    }
                } 
                
                if(typeof filter[field] === 'string' && typeof task[field] === 'object'){
                    return task[field].parent_task_name.toLowerCase().indexOf(filter[field].toLowerCase()) !== -1;
                }
                
                if(typeof filter[field] === 'number'){

                    if(field === 'priority_from'){
                        return task['priority'] >= filter[field];
                    }

                    if(field === 'priority_to'){
                        return task['priority'] <= filter[field];
                    }
                }
            }
        }
        return true;
    }
}