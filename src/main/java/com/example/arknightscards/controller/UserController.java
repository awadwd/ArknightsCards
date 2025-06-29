package com.example.arknightscards.controller;

import com.example.arknightscards.config.PasswordConfig;
import com.example.arknightscards.entity.User;
import com.example.arknightscards.repositry.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import  java.util.*;
/***
 * 处理user请求流程 <=>业务  页面:请求，响应</=>
 */


//@Controller    页面跳转    ok.html  @RestController数据处理   json 格式
@RestController
public class UserController {

    @Autowired
    UserRepository userRepository;// 调用类的资源   原则上是需要new 实例化 UserRepository u=new UserRepository();

    @Autowired
    PasswordConfig passwordConfig;

//    http://127.0.0.1:8888/HealthyProject/userlogin?username=admin&password=%242a%2410%2451e68xI1Hw2A8OeepbWhc.WyE%2FY8laOJCN6j9tFyiITOmM4aFSLlu

    @GetMapping("/userlogin")
    public String userlogin(String username, String password) {
        System.out.println("username:" + username + "password:" + password);

        //操作数据库  查询用户是否存在

        //根据用户名和密码 查询
//        User user=userRepository.findByUsernameAndPassword(username,password);
//        if(user!=null){
//            System.out.println(user.getName()+"" +user.getMobile());
//
//            return "ok";
//        }
//        else{
//            System.out.println("用户不合法");
//            return null;
//        }
        //密码处理流程
        //根据用户名，查询密码
        User user = userRepository.findByUsername(username);
        if (user != null) {
            System.out.println("用户帐号存在");
            String encodepasasword = user.getPassword();
            System.out.println("密码加密。。。" + encodepasasword);
            //密码匹配
            boolean flag = passwordConfig.passwordEncoder().matches(password, encodepasasword);
            if (flag) {
                System.out.println("密码ok");
                //流程
                return "ok";
            } else {
                System.out.println("密码error");
            }
        } else {
            System.out.println("用户帐号不存在");
        }
        return null;


    }


    //http://127.0.0.1:8888/HealthyProject/sys/user/page?page=1&limit=8   <=>json  {[]}

    @GetMapping("/sys/user/page")
    public Map<String, Object> getUserPage(@RequestParam(defaultValue = "1") int page,
                                           @RequestParam(defaultValue = "8") int limit) {
        //key value   json
        //content
        System.out.println("page:" + page);
        //根据规则调用数据库操作
        Pageable pageable = PageRequest.of(page - 1, limit);
        Page<User> usersPage = userRepository.findAll(pageable);
        Map<String, Object> response = new HashMap<>();
        response.put("content", usersPage.getContent());
        response.put("totalElements", usersPage.getTotalElements());
        return response;




    }
}
