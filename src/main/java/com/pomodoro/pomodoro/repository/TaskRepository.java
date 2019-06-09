package com.pomodoro.pomodoro.repository;

import com.pomodoro.pomodoro.model.Task;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TaskRepository extends MongoRepository<Task, ObjectId> {
}
