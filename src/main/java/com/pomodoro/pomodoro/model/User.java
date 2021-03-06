package com.pomodoro.pomodoro.model;

import com.pomodoro.pomodoro.domain.Role;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document("User")
public class User {

    @Id
    private String login;
    private String password;
    private String email;
    private String firstName;
    private String secondName;

    @Transient
    private Role role = Role.USER;
    //timer

    private Integer timeOfPomidor; //minutes - default 25m
    private Integer timeOfSmallBreak;//minutes - default 5 min
    private Integer timeOfBigBreak;//minutes - default 25 min
    private Integer amountOfPomidors;//pieces - default 14
    private Integer amountOfPomidorForBigBreaks;//pieces - default 4

}
