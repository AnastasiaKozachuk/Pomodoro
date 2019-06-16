package com.pomodoro.pomodoro.repository;


import com.pomodoro.pomodoro.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserRepository extends MongoRepository<User, String> {

    User findByLoginAndPassword(String login, String password);
    Optional<User> findByLogin(String login);

}
