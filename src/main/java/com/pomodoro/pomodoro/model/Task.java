package com.pomodoro.pomodoro.model;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.time.Period;


@Data
@Document("Task")
public class Task {

    @Id
    private ObjectId _id;
    private String taskTitle;
    private String taskDescription;
    private String creationDate;
    private boolean isStarted;
    private boolean isPaused;
    private boolean isFinished;
    private Integer performanceTime;

    private String userLogin;

}
