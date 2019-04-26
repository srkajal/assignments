package org.kajal.mallick.controller;

import org.junit.Before;
import org.junit.Test;
import org.kajal.mallick.model.TaskDto;
import org.kajal.mallick.model.response.ExtendedTaskListResponse;
import org.kajal.mallick.service.TaskManagerService;
import org.mockito.InjectMocks;
import org.mockito.Mock;

import java.util.Collections;

import static org.junit.Assert.*;
import static org.mockito.Mockito.when;
import static org.mockito.MockitoAnnotations.initMocks;

public class TaskManagerControllerTest {
    @InjectMocks
    private TaskManagerController taskManagerController;

    @Mock
    private TaskManagerService taskManagerService;

    @Mock
    private ExtendedTaskListResponse extendedTaskListResponse;

    @Mock
    private TaskDto taskDto;

    @Before
    public void setUp() {
        initMocks(this);
    }

    @Test
    public void findAllTasks() {
        String task = "Task 1";
        when(taskManagerService.findAllTasks()).thenReturn(extendedTaskListResponse);
        when(taskDto.getTask()).thenReturn(task);
        when(extendedTaskListResponse.getTasks()).thenReturn(Collections.singletonList(taskDto));

        ExtendedTaskListResponse taskListResponse = taskManagerController.findAllTasks();
        assertNotNull(taskListResponse);
        assertFalse(taskListResponse.getTasks().isEmpty());
        assertEquals(task, taskListResponse.getTasks().get(0).getTask());
    }

    @Test
    public void findTaskById() {
    }

    @Test
    public void deleteTaskById() {
    }

    @Test
    public void createTask() {
    }

    @Test
    public void updateTask() {
    }
}