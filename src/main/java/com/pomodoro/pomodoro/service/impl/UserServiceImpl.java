package com.pomodoro.pomodoro.service.impl;

import com.pomodoro.pomodoro.repository.UserRepository;
import com.pomodoro.pomodoro.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

}
