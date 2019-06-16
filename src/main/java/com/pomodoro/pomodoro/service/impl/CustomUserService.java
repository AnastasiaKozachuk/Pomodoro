package com.pomodoro.pomodoro.service.impl;

import com.pomodoro.pomodoro.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Optional;

@Service("customUserService")
public class CustomUserService implements UserDetailsService {

    @Autowired
    private UserService userService;

    @Override
    public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {

        Optional<com.pomodoro.pomodoro.model.User> userOpt = userService.findByLogin(login);
        User user;
        if (userOpt.isPresent()) {
            com.pomodoro.pomodoro.model.User customUser = userOpt.get();
            user = new User(customUser.getLogin(), customUser.getPassword(), Arrays.asList(customUser.getRole()));

        } else {
            throw new UsernameNotFoundException("No user present with username : " + login);
        }

        return user;
    }
}
