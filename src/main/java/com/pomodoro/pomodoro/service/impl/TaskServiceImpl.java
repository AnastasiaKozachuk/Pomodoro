package com.pomodoro.pomodoro.service.impl;

import com.pomodoro.pomodoro.model.Task;
import com.pomodoro.pomodoro.repository.TaskRepository;
import com.pomodoro.pomodoro.service.TaskService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Period;
import java.util.List;
import java.util.Optional;

@Service
public class TaskServiceImpl implements TaskService {

    @Autowired
    private TaskRepository taskRepository;

    @Override
    public List<Task> getAllCompletedTasks(String userId) {
        return taskRepository.getAllCompletedTasks(userId);
    }

    @Override
    public List<Task> getAllUncompletedTasks(String userId) {
        return taskRepository.getAllUncompletedTasks(userId);
    }

    @Override
    public List<Task> getAllNotStartedTasks(String userId) {
        return taskRepository.getAllNotStartedTasks(userId);
    }

    @Override
    public List<Task> getAllStartedAndUncompletedTasks(String userId) {
        return taskRepository.getAllStartedAndUncompletedTasks(userId);
    }

    @Override
    public List<Task> getAllPausedTasks(String userId) {
        return taskRepository.getAllPausedTasks(userId);
    }

    @Override
    public void saveTimeSpentForWork(ObjectId id, Integer time) {
        Task task;

        Optional<Task> optTask = taskRepository.findById(id);
        if (optTask.isPresent()) {
            task = optTask.get();
            task.setPerformanceTime(time);
            taskRepository.save(task);
        }
    }

    @Override
    public Task saveTask(Task task) {
        return taskRepository.save(task);
    }

    @Override
    public void deleteTask(ObjectId id) {
        taskRepository.deleteById(id);
    }

    @Override
    public void updateTask(Task task) {
        taskRepository.save(task);
    }

    @Override
    public List<Task> getAllByUserId(String userId) {
        return taskRepository.findAllByUserLogin(userId);
    }

    @Override
    public Task getOneById(ObjectId id) {
        Optional<Task> optTask = taskRepository.findById(id);
        return optTask.orElse(null);
    }
}
