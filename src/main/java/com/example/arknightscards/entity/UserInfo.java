package com.example.arknightscards.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.time.Instant;

@Entity
@Table(name = "user_info")
public class UserInfo {
    @Id
    @Column(name = "`user_id‌`", nullable = false)
    private String userId‌;

    @Column(name = "`username‌`")
    private String username‌;

    @Column(name = "`gender‌`")
    private String gender‌;

    @Column(name = "`birthdate‌`")
    private Instant birthdate‌;

    @Column(name = "`email‌`")
    private String email‌;

    @Column(name = "`registration_date‌`")
    private Instant registrationDate‌;

    public String getUserId‌() {
        return userId‌;
    }

    public void setUserId‌(String userId‌) {
        this.userId‌ = userId‌;
    }

    public String getUsername‌() {
        return username‌;
    }

    public void setUsername‌(String username‌) {
        this.username‌ = username‌;
    }

    public String getGender‌() {
        return gender‌;
    }

    public void setGender‌(String gender‌) {
        this.gender‌ = gender‌;
    }

    public Instant getBirthdate‌() {
        return birthdate‌;
    }

    public void setBirthdate‌(Instant birthdate‌) {
        this.birthdate‌ = birthdate‌;
    }

    public String getEmail‌() {
        return email‌;
    }

    public void setEmail‌(String email‌) {
        this.email‌ = email‌;
    }

    public Instant getRegistrationDate‌() {
        return registrationDate‌;
    }

    public void setRegistrationDate‌(Instant registrationDate‌) {
        this.registrationDate‌ = registrationDate‌;
    }

}