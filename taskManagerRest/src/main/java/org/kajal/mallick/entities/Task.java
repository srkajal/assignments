package org.kajal.mallick.entities;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

@Entity
@Table(name = "task")
public class Task implements Serializable {

    private long taskId;
    private ParentTask parentTask;
    private String task;
    private LocalDate startDate;
    private LocalDate endDate;
    private int priority;

    public Task() {
    }

    public Task(String task, LocalDate startDate, LocalDate endDate, int priority, ParentTask parentTask) {
        this.task = task;
        this.startDate = startDate;
        this.endDate = endDate;
        this.priority = priority;
        this.parentTask = parentTask;
    }

    public Task(long taskId, String task, LocalDate startDate, LocalDate endDate, int priority, ParentTask parentTask) {
        this.taskId = taskId;
        this.parentTask = parentTask;
        this.task = task;
        this.startDate = startDate;
        this.endDate = endDate;
        this.priority = priority;
    }

    @Id
    @Column(name = "task_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long getTaskId() {
        return taskId;
    }

    public void setTaskId(long taskId) {
        this.taskId = taskId;
    }

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "parent_id")
    public ParentTask getParentTask() {
        return parentTask;
    }

    public void setParentTask(ParentTask parentTask) {
        this.parentTask = parentTask;
    }

    public String getTask() {
        return task;
    }

    public void setTask(String task) {
        this.task = task;
    }

    @Column(name = "start_date")
    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    @Column(name = "end_date")
    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public int getPriority() {
        return priority;
    }

    public void setPriority(int priority) {
        this.priority = priority;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Task task1 = (Task) o;
        return taskId == task1.taskId &&
                priority == task1.priority &&
                task.equals(task1.task) &&
                startDate.equals(task1.startDate) &&
                endDate.equals(task1.endDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(taskId, task, startDate, endDate, priority);
    }

    @Override
    public String toString() {
        return "Task{" +
                "taskId=" + taskId +
                ", task='" + task + '\'' +
                ", startDate=" + startDate +
                ", endDate=" + endDate +
                ", priority=" + priority +
                '}';
    }
}
