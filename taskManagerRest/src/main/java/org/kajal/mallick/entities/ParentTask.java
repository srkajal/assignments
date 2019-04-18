package org.kajal.mallick.entities;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "parent_task")
public class ParentTask implements Serializable {
    private long parentId;
    private String parentTask;

    public ParentTask() {
    }

    public ParentTask(long parentId) {
        this.parentId = parentId;
    }

    public ParentTask(String parentTask) {
        this.parentTask = parentTask;
    }

    @Id
    @Column(name = "parent_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long getParentId() {
        return parentId;
    }

    public void setParentId(long parentId) {
        this.parentId = parentId;
    }

    @Column(name = "parent_task")
    public String getParentTask() {
        return parentTask;
    }

    public void setParentTask(String parentTask) {
        this.parentTask = parentTask;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ParentTask that = (ParentTask) o;
        return parentId == that.parentId &&
                parentTask.equals(that.parentTask);
    }

    @Override
    public int hashCode() {
        return Objects.hash(parentId, parentTask);
    }

    @Override
    public String toString() {
        return "ParentTask{" +
                "parentId=" + parentId +
                ", parentTask='" + parentTask + '\'' +
                '}';
    }
}
