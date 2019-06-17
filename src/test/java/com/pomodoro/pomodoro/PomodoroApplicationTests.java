package com.pomodoro.pomodoro;

import com.pomodoro.pomodoro.model.Task;
import com.pomodoro.pomodoro.model.User;
import com.pomodoro.pomodoro.service.TaskService;
import com.pomodoro.pomodoro.service.UserService;
import org.hamcrest.CoreMatchers;
import org.junit.Test;
import org.junit.Assert.*;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.hamcrest.CoreMatchers.hasItem;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
public class PomodoroApplicationTests {


    @Autowired
    private UserService userService;

    @Autowired
    private TaskService taskService;

    @Test
    public void saveAndUpdateUserTest() {
        String userName = "testUser";
        String userPassword = "123";
        User user = new User();
        user.setLogin(userName);
        user.setPassword(userPassword);

        userService.saveUser(user);
        User savedUser = userService.findByLoginAndPassword(userName, userPassword);
        assertThat(userName, CoreMatchers.equalTo(savedUser.getLogin()));


        userPassword = "345";
        user.setPassword(userPassword);

        userService.updateUser(user);
        User updatedUser = userService.findByLoginAndPassword(userName, userPassword);
        assertThat(userPassword, CoreMatchers.equalTo(updatedUser.getPassword()));
    }

    @Test
    public void saveAndDeleteTaskTest() {

        String userName = "testUser";

        Task task = new Task();

        task.setTaskTitle("Test system");
        task.setTaskDescription("Perform tests for system");

        task.setUserLogin(userName);

        Task savedTask = taskService.saveTask(task);

        List<Task> userTaskList = taskService.getAllByUserId(userName);

        assertThat(userTaskList, hasItem(savedTask));

        taskService.deleteTask(savedTask.get_id());

        Task deletedTask = taskService.getOneById(savedTask.get_id());

        assertNull(deletedTask);

    }

    @Test
    public void taskMethod1Test() {

        String userName = "testUser";

        Task task = new Task();

        task.setTaskTitle("Test system");
        task.setTaskDescription("Perform tests for system");
        task.setStarted(true);
        task.setUserLogin(userName);

        Task savedTask = taskService.saveTask(task);

        List<Task> userTaskList = taskService.getAllStartedAndUncompletedTasks(userName);

        assertThat(userTaskList, hasItem(savedTask));

        userTaskList = taskService.getAllUncompletedTasks(userName);

        assertThat(userTaskList, hasItem(savedTask));

    }

    @Test
    public void taskMethod2Test() {

        String userName = "testUser";

        Task task = new Task();

        task.setTaskTitle("Test system");
        task.setTaskDescription("Perform tests for system");
        task.setStarted(true);
        task.setFinished(true);
        task.setUserLogin(userName);

        Task savedTask = taskService.saveTask(task);

        List<Task> userTaskList = taskService.getAllCompletedTasks(userName);

        assertThat(userTaskList, hasItem(savedTask));

    }

    @Test
    public void taskMethod3Test() {

        String userName = "testUser";

        Task task = new Task();

        task.setTaskTitle("Test system");
        task.setTaskDescription("Perform tests for system");
        task.setUserLogin(userName);

        Task savedTask = taskService.saveTask(task);

        List<Task> userTaskList = taskService.getAllNotStartedTasks(userName);

        assertThat(userTaskList, hasItem(savedTask));

    }

    @Test
    public void taskMethod4Test() {

        String userName = "testUser";

        Task task = new Task();

        task.setTaskTitle("Test system");
        task.setTaskDescription("Perform tests for system");
        task.setPaused(true);
        task.setUserLogin(userName);

        Task savedTask = taskService.saveTask(task);

        List<Task> userTaskList = taskService.getAllPausedTasks(userName);

        assertThat(userTaskList, hasItem(savedTask));

    }

}
