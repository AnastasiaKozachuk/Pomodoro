package com.pomodoro.pomodoro.controller;


import com.pomodoro.pomodoro.security.jwt.JwtTokenProvider;
import com.pomodoro.pomodoro.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;


@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    JwtTokenProvider jwtTokenProvider;

    @Autowired
    UserService userService;


    @GetMapping("/test")
    @CrossOrigin
    public ResponseEntity test() {
        return ResponseEntity.ok("Test passed");
    }

    @PostMapping("/signIn")
    @CrossOrigin
    public ResponseEntity signIn(@RequestBody AuthenticationRequest data) {

        try {
            String username = data.getUsername();
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, data.getPassword()));

            String authority = "USER";

            String token = jwtTokenProvider.createToken(username, authority);

            Map<Object, Object> model = new HashMap<>();
            model.put("role", authority);
            model.put("token", token);
            model.put("username", username);
            return ResponseEntity.ok(model);
        } catch (AuthenticationException e) {
            throw new BadCredentialsException("Invalid username/password supplied");
        }
    }
}