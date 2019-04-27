package org.kajal.mallick.controller;

import org.kajal.mallick.model.request.TaskRequest;
import org.kajal.mallick.model.response.BaseResponse;
import org.kajal.mallick.model.response.ExtendedTaskListResponse;
import org.kajal.mallick.model.response.ExtendedTaskResponse;
import org.kajal.mallick.service.TaskManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/task")
class TaskManagerController {

    private final TaskManagerService taskManagerService;

    @Autowired
    public TaskManagerController(TaskManagerService taskManagerService) {
        this.taskManagerService = taskManagerService;
    }

    @GetMapping("/findAllTasks")
    ExtendedTaskListResponse findAllTasks() {
        return taskManagerService.findAllTasks();
    }

    @GetMapping("/findTaskById/{taskId}")
    public ExtendedTaskResponse findTaskById(@PathVariable("taskId") long taskId) {
        return taskManagerService.findTaskById(taskId);
    }

    @GetMapping("/deleteTaskById/{taskId}")
    public BaseResponse deleteTaskById(@PathVariable("taskId") long taskId) {
        return taskManagerService.deleteByTaskId(taskId);
    }

    @GetMapping("/closeTaskById/{taskId}")
    public BaseResponse closeTaskById(@PathVariable("taskId") long taskId) {
        return taskManagerService.closeTaskById(taskId);
    }

    @PostMapping("/createTask")
    public @ResponseBody
    BaseResponse createTask(@RequestBody @Valid TaskRequest taskRequest) {
        return taskManagerService.save(taskRequest);
    }

    @PostMapping("/updateTask")
    public @ResponseBody
    BaseResponse updateTask(@RequestBody @Valid TaskRequest taskRequest) {
        return taskManagerService.update(taskRequest);
    }
}
