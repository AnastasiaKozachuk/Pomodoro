package com.pomodoro.pomodoro.dto;

import lombok.Getter;
import lombok.Setter;
import org.bson.types.ObjectId;

@Setter
@Getter
public class SaveTimeParam {

    private ObjectId _id;
    private Integer time;

}
