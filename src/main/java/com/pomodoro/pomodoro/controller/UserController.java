package com.pomodoro.pomodoro.controller;

import com.pomodoro.pomodoro.model.User;
import com.pomodoro.pomodoro.security.jwt.JwtTokenProvider;
import com.pomodoro.pomodoro.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;


    @Autowired
    JwtTokenProvider jwtTokenProvider;

    @Autowired
    AuthenticationManager authenticationManager;


    @PostMapping(value = "/registration")
    public ResponseEntity saveUser(@RequestBody User user) {
        User userSaved = userService.saveUser(user);

        if (userSaved != null) {
            String authority = userSaved.getRole().getAuthority();
            String username = userSaved.getLogin();
            String password = userSaved.getPassword().replace("{noop}", "");

            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
            String token = jwtTokenProvider.createToken(username, authority);

            Map<Object, Object> model = new HashMap<>();
            model.put("role", authority);
            model.put("token", token);
            model.put("username", username);
            return ResponseEntity.ok(model);
        }

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Can't save employee");

    }


    @PostMapping(value = "/updateUser")
    public void updateUser(@RequestBody User user) {
        userService.updateUser(user);
    }


    @GetMapping(value = "/findUser")
    public User findByLoginAndPassword(@RequestParam String login, @RequestParam String password) {
        return userService.findByLoginAndPassword(login, password);
    }

    @GetMapping(value = "/findAll")
    public List<User> findAllUsers() {
        return userService.findAllUsers();
    }



}
