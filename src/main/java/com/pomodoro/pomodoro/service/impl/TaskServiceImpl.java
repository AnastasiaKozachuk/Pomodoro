package com.pomodoro.pomodoro.service.impl;

import com.pomodoro.pomodoro.repository.TaskRepository;
import com.pomodoro.pomodoro.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskServiceImpl implements TaskService {

    @Autowired
    private TaskRepository taskRepository;

}
