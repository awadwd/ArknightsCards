package com.example.arknightscards.controller;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.Calendar;
import java.util.Date;
import java.util.UUID;




@Controller
public class PageController {

    @GetMapping("main")
    public String getCardVuePage(HttpServletRequest request) throws UnknownHostException {

        String ipAddress = request.getHeader("X-Forwarded-For");

        Date currentDate = new Date(); // 获取当前时间
        Calendar calendar = Calendar.getInstance(); // 创建Calendar对象
        calendar.setTime(currentDate); // 设置Calendar对象的时间为当前时间
        InetAddress id = InetAddress.getLocalHost();

        if (ipAddress == null || ipAddress.length() == 0 || "unknown".equalsIgnoreCase(ipAddress)) {
            System.out.println("无法获取IP,可能是权限不足");
        }

        System.out.println("ip地址" +ipAddress+"于"
                +calendar.get((Calendar.YEAR))+"年"+calendar.get(Calendar.MONTH)+"月"+calendar.get(Calendar.DATE) + "日   " + calendar.get(Calendar.HOUR_OF_DAY) + ":" + calendar.get(Calendar.MINUTE) + ":" + calendar.get(Calendar.SECOND)
                +"已成功通过方式1获取页面UI,本次访问的随机ID:"
                + UUID.randomUUID().toString().replaceAll("-",""));
        return  "index";
    }

    @GetMapping("login")
    public String getLoginPage(){
        return "login";
    }

    @GetMapping("terms")
    public String getTermsPage(){
        return "terms";
    }

    @GetMapping("")
    public String getHomePage(HttpServletRequest request) throws UnknownHostException {
        String ipAddress = request.getHeader("X-Forwarded-For");

        Date currentDate = new Date(); // 获取当前时间
        Calendar calendar = Calendar.getInstance(); // 创建Calendar对象
        calendar.setTime(currentDate); // 设置Calendar对象的时间为当前时间
        InetAddress id = InetAddress.getLocalHost();

        if (ipAddress == null || ipAddress.length() == 0 || "unknown".equalsIgnoreCase(ipAddress)) {
            System.out.println("无法获取IP,可能是权限不足");
        }

        System.out.println("ip地址" +ipAddress+"于"
                +calendar.get((Calendar.YEAR))+"年"+calendar.get(Calendar.MONTH)+"月"+calendar.get(Calendar.DATE) + "日   " + calendar.get(Calendar.HOUR_OF_DAY) + ":" + calendar.get(Calendar.MINUTE) + ":" + calendar.get(Calendar.SECOND)
                +"已成功通过方式2获取页面UI,本次访问的随机ID:"
                + UUID.randomUUID().toString().replaceAll("-",""));
        return "index";

    }
}