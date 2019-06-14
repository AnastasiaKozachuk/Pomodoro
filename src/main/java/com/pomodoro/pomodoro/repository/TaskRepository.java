package com.pomodoro.pomodoro.repository;

import com.pomodoro.pomodoro.model.Task;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.time.Period;
import java.util.List;

public interface TaskRepository extends MongoRepository<Task, ObjectId> {

    @Query("{ 'userLogin' : ?0,  'isFinished' : true }")
    List<Task> getAllCompletedTasks(String userId);

    @Query("{ 'userLogin' : ?0,  'isFinished' : false }")
    List<Task> getAllUncompletedTasks(String userId);

    @Query("{ 'userLogin' : ?0,  'isStarted' : false }")
    List<Task> getAllNotStartedTasks(String userId);

    @Query("{ 'userLogin' : ?0,  'isStarted' : true, 'isFinished':false }")
    List<Task> getAllStartedAndUncompletedTasks(String userId);

    List<Task> findAllByUserLogin(String userLogin);
}
