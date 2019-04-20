package org.kajal.mallick.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.kajal.mallick.entities.ParentTask;
import org.kajal.mallick.entities.Task;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.time.LocalDate;

public class TaskDto implements Serializable {
    @JsonProperty("task_id")
    private long taskId;
    private String task;
    @JsonProperty("start_date")
    private String startDate;
    @JsonProperty("end_date")
    private String endDate;
    private int priority;
    @JsonProperty("parent_task")
    private ParentTaskDto parentTaskDto;

    public TaskDto(Task task) {
        this.taskId = task.getTaskId();
        this.task = task.getTask();
        this.startDate = String.valueOf(task.getStartDate());
        this.endDate = String.valueOf(task.getEndDate());
        this.priority = task.getPriority();

        if(task.getParentTask() != null){
            this.parentTaskDto = new ParentTaskDto(task.getParentTask().getParentId(), task.getParentTask().getParentTask());
        }

    }

    public TaskDto() {
    }

    public long getTaskId() {
        return taskId;
    }

    public void setTaskId(long taskId) {
        this.taskId = taskId;
    }

    public ParentTaskDto getParentTaskDto() {
        return parentTaskDto;
    }

    public void setParentTaskDto(ParentTaskDto parentTaskDto) {
        this.parentTaskDto = parentTaskDto;
    }

    public String getTask() {
        return task;
    }

    public void setTask(String task) {
        this.task = task;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public int getPriority() {
        return priority;
    }

    public void setPriority(int priority) {
        this.priority = priority;
    }
}