package com.pomodoro.pomodoro.model;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

import java.time.LocalDate;
import java.time.Period;


@Data
public class Task {

    @Id
    private ObjectId id;
    private String taskTitle;
    private String taskDescription;
    private LocalDate creationDate;
    private boolean isStarted;
    private boolean isPaused;
    private boolean isFinished;
    private Period performanceTime;

    private String userId;

}
