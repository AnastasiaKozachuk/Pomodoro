package com.pomodoro.pomodoro.service;


import com.pomodoro.pomodoro.model.User;

import java.util.List;
import java.util.Optional;

public interface UserService {

    User saveUser(User user);
    void updateUser(User user);
    User findByLoginAndPassword(String login, String password);
    List<User> findAllUsers();
    Optional<User> findByLogin(String login);

}
