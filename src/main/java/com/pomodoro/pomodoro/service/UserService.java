package com.pomodoro.pomodoro.service;


import com.pomodoro.pomodoro.model.User;

import java.util.List;

public interface UserService {

    void saveUser(User user);
    void updateUser(User user);
    User findByLoginAndPassword(String login, String password);
    List<User> findAllUsers();

}
