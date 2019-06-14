package com.pomodoro.pomodoro.controller;

import com.pomodoro.pomodoro.dto.SaveTimeParam;
import com.pomodoro.pomodoro.model.Task;
import com.pomodoro.pomodoro.service.TaskService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/task")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @GetMapping("/completedTasks")
    public List<Task> getAllCompletedTasks(@RequestParam String userId) {
        return taskService.getAllCompletedTasks(userId);
    }

    @GetMapping("/uncompletedTasks")
    public List<Task> getAllUncompletedTasks(@RequestParam String userId) {
        return taskService.getAllUncompletedTasks(userId);
    }

    @GetMapping("/notStartedTasks")
    public List<Task> getAllNotStartedTasks(@RequestParam String userId) {
        return taskService.getAllNotStartedTasks(userId);
    }

    @GetMapping("/startedAndUncompletedTasks")
    public List<Task> getAllStartedAndUncompletedTasks(@RequestParam String userId) {
        return taskService.getAllStartedAndUncompletedTasks(userId);
    }

    @PostMapping("/saveTimeForWork")
    public void saveTimeSpentForWork(@RequestBody SaveTimeParam saveTimeParam ) {
        taskService.saveTimeSpentForWork(saveTimeParam.get_id(), saveTimeParam.getTime());
    }


    @PostMapping("/saveTask")
    public void saveTask(@RequestBody Task task) {
        taskService.saveTask(task);
    }


    @DeleteMapping("/deleteTask")
    public void deleteTask(@RequestParam ObjectId id) {
        taskService.deleteTask(id);
    }


    @PostMapping("/updateTask")
    public void updateTask(@RequestBody Task task) {
        taskService.updateTask(task);
    }


    @GetMapping("/getAllForUser")
    public List<Task> getAllByUserId(@RequestParam String userId) {
        return taskService.getAllByUserId(userId);
    }


    @GetMapping("/getOneById")
    public Task getOneById(@RequestParam ObjectId id) {
        return taskService.getOneById(id);
    }

}
