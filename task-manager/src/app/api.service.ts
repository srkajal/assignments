import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { TaskRequest } from './model/task-request.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL = 'http://localhost:8080';
  constructor(private httpClient: HttpClient) { }

  getAllTasks(){
    return this.httpClient.get(`${this.API_URL}/api/task/findAllTasks`);
  }

  endTask(taskId: number){
    return this.httpClient.get(`${this.API_URL}/api/task/deleteTaskById/`+taskId);
  }

  addTask(taskRequest: TaskRequest){
    return this.httpClient.post(`${this.API_URL}/api/task/createTask`, taskRequest);
  }

  updateTask(taskRequest: TaskRequest){
    return this.httpClient.post(`${this.API_URL}/api/task/updateTask`, taskRequest);
  }

  getTaskById(taskId: number){
    return this.httpClient.get(`${this.API_URL}/api/task/findTaskById/`+taskId);
  }
}
