package com.example.arknightscards.entity;

import jakarta.persistence.*;

import java.time.Instant;

@Entity
@Table(name = "user")
public class User {
    @Id
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "username", length = 100)
    private String username;

    @Column(name = "password", length = 100)
    private String password;

    @Column(name = "salt", length = 10)
    private String salt;

    @Column(name = "name", length = 50)
    private String name;

    @Column(name = "mobile", length = 50)
    private String mobile;

    @Column(name = "mail", length = 100)
    private String mail;

    @Column(name = "open_id", length = 50)
    private String openId;

    @Lob
    @Column(name = "avatar")
    private String avatar;

    @Column(name = "roles")
    private Byte roles;

    @Column(name = "status")
    private Byte status;

    @Column(name = "community_name", length = 200)
    private String communityName;

    @Column(name = "font_big_flag")
    private Byte fontBigFlag;

    @Column(name = "create_time")
    private Instant createTime;

    @Column(name = "update_time")
    private Instant updateTime;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getSalt() {
        return salt;
    }

    public void setSalt(String salt) {
        this.salt = salt;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getOpenId() {
        return openId;
    }

    public void setOpenId(String openId) {
        this.openId = openId;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public Byte getRoles() {
        return roles;
    }

    public void setRoles(Byte roles) {
        this.roles = roles;
    }

    public Byte getStatus() {
        return status;
    }

    public void setStatus(Byte status) {
        this.status = status;
    }

    public String getCommunityName() {
        return communityName;
    }

    public void setCommunityName(String communityName) {
        this.communityName = communityName;
    }

    public Byte getFontBigFlag() {
        return fontBigFlag;
    }

    public void setFontBigFlag(Byte fontBigFlag) {
        this.fontBigFlag = fontBigFlag;
    }

    public Instant getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Instant createTime) {
        this.createTime = createTime;
    }

    public Instant getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Instant updateTime) {
        this.updateTime = updateTime;
    }

}