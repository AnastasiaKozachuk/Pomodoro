package com.pomodoro.pomodoro.service;

import com.pomodoro.pomodoro.model.Task;
import org.bson.types.ObjectId;

import java.time.Period;
import java.util.List;

public interface TaskService {

    List<Task> getAllCompletedTasks(String userId);
    List<Task> getAllUncompletedTasks(String userId);
    List<Task> getAllNotStartedTasks(String userId);
    List<Task> getAllStartedAndUncompletedTasks(String userId);
    void saveTimeSpentForWork(ObjectId id, Integer time);
    void saveTask(Task task);
    void deleteTask(ObjectId id);
    void updateTask(Task task);
    List<Task> getAllByUserId(String userId);
    Task getOneById(ObjectId id);

}
