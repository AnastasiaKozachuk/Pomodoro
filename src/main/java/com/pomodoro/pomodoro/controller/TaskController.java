package com.pomodoro.pomodoro.controller;

import com.pomodoro.pomodoro.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TaskController {

    @Autowired
    private TaskService taskService;

}
