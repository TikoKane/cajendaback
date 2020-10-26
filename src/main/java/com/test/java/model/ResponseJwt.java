package com.test.java.model;

import org.springframework.security.core.GrantedAuthority;

import java.io.Serializable;
import java.util.Collection;

public class ResponseJwt implements Serializable {
    private String token;
    private boolean etat;
    private String type = "Bearer";
    private String username;
    private String email;
    private Collection<? extends GrantedAuthority> authorities;

    public ResponseJwt(String accessToken, String username, Collection<? extends GrantedAuthority> authorities,Boolean etat,String email) {
        this.token = accessToken;
        this.etat = etat;
        this.username = username;
        this.authorities = authorities;
        this.email=email;
    }

    public String getAccessToken() {
        return token;
    }

    public void setAccessToken(String accessToken) {
        this.token = accessToken;
    }

    public String getTokenType() {
        return type;
    }

    public void setTokenType(String tokenType) {
        this.type = tokenType;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Boolean getEtat() {
        return etat;
    }

    public void setEtat(Boolean etat) {
        this.etat = etat;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }
}
