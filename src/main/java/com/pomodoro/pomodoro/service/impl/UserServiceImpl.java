package com.pomodoro.pomodoro.service.impl;

import com.pomodoro.pomodoro.model.User;
import com.pomodoro.pomodoro.repository.UserRepository;
import com.pomodoro.pomodoro.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {


    @Autowired
    private UserRepository userRepository;

    @Override
    public void saveUser(User user) {
        userRepository.save(user);
    }

    @Override
    public void updateUser(User user) {
        userRepository.save(user);
    }

    @Override
    public User findByLoginAndPassword(String login, String password) {
        return userRepository.findByLoginAndPassword(login, password);
    }

    @Override
    public List<User> findAllUsers(){
        return userRepository.findAll();
    }
}
