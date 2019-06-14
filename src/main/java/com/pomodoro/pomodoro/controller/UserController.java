package com.pomodoro.pomodoro.controller;

import com.pomodoro.pomodoro.model.User;
import com.pomodoro.pomodoro.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;


    @PostMapping(value = "saveUser")
    public void saveUser(@RequestBody User user) {
        userService.saveUser(user);
    }


    @PostMapping(value = "updateUser")
    public void updateUser(@RequestBody User user) {
        userService.updateUser(user);
    }


    @GetMapping(value = "/findUser")
    public User findByLoginAndPassword(@RequestParam String login, @RequestParam String password) {
        return userService.findByLoginAndPassword(login, password);
    }

    @GetMapping(value = "/findAll")
    public List<User> findByLoginAndPassword() {
        return userService.findAllUsers();
    }



}
