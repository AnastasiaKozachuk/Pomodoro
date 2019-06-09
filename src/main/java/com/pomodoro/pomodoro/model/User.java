package com.pomodoro.pomodoro.model;

import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
public class User {

    @Id
    private String login;
    private String password;
    private String email;
    private String firstName;
    private String secondName;

    //timer

    private Integer timeOfPomidor; //minutes - default 25m
    private Integer timeOfSmallBreak;//minutes - default 5 min
    private Integer timeOfBigBreak;//minutes - default 25 min
    private Integer amountOfPomidors;//pieces - default 14
    private Integer amountOfPomidorForBigBreaks;//pieces - default 4

}
