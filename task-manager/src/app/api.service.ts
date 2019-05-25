import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { TaskRequest } from './model/task-request.model';
import { Observable } from 'rxjs'
import { map, shareReplay} from 'rxjs/operators'
import { ParentTask } from './model/parent-task.model';
import { Task } from './model/task.model';

//API_URL = 'http://localhost:8080/taskManagerRest';
const API_URL = 'http://localhost:8686';
const FIND_ALL_TASK_URL = '/api/task/findAllTasks';
const FIND_ALL_PARENT_TASK_URL = '/api/task/findAllParentTasks';
const END_TASK_URL = '/api/task/closeTaskById/';
const ADD_TASK_URL = '/api/task/createTask';
const UPDATE_TASK_URL = '/api/task/updateTask';
const FIND_TASK_BY_ID_URL = '/api/task/findTaskById/';
const CACHE_SIZE = 1;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private cache$ : Observable<Array<ParentTask>>;

  constructor(private httpClient: HttpClient) { }

  getAllTasks(){
    return this.httpClient.get<Array<Task>>(`${API_URL}${FIND_ALL_TASK_URL}`).pipe(
      map((response:any)=>response.tasks)
    );
  }

  getAllParentTasks(){
    if(!this.cache$){
      this.cache$ = this.getParentTasksFromDb().pipe(
        shareReplay(CACHE_SIZE));   
    }
    return this.cache$;
  }

  endTask(taskId: number){
    return this.httpClient.get(`${API_URL}${END_TASK_URL}${taskId}`);
  }

  addTask(taskRequest: TaskRequest){
    return this.httpClient.post(`${API_URL}${ADD_TASK_URL}`, taskRequest);
  }

  updateTask(taskRequest: TaskRequest){
    return this.httpClient.post(`${API_URL}${UPDATE_TASK_URL}`, taskRequest);
  }

  getTaskById(taskId: number){
    return this.httpClient.get<Task>(`${API_URL}${FIND_TASK_BY_ID_URL}${taskId}`).pipe(
      map((response:any)=>response.task)
    );
  }

  getParentTasksFromDb(){
    return this.httpClient.get<Array<ParentTask>>(`${API_URL}${FIND_ALL_PARENT_TASK_URL}`).pipe(
      map((response:any) =>response.parent_tasks)
    );
  }
}
