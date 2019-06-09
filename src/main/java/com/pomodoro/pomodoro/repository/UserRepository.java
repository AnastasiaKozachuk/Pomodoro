package com.pomodoro.pomodoro.repository;


import com.pomodoro.pomodoro.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
}
