package com.test.java.service;


import com.test.java.Repository.IAdmin;
import com.test.java.Repository.IRole;
import com.test.java.Repository.IUser;
import com.test.java.model.Admin;
import com.test.java.model.Role;
import com.test.java.model.Utilisateur;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    private UserDetailsServiceImpl userDetailsService;
    @Autowired
    private IUser userRepository;
    @Autowired
    private IAdmin adminRepository;

    @Autowired
    private IRole roleRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Utilisateur user = userRepository.findByUsername(username);
        if(user != null)
        {
            ArrayList<Role> l = new ArrayList<>();
            l.add(user.getRole());
            org.springframework.security.core.userdetails.User u =
                    new org.springframework.security.core.userdetails.
                            User(user.getUsername(),user.getPassword(),
                            true,true,
                            true,true,
                            getAuthorities(l));
            return u ;
        }else{
            Admin admin = adminRepository.findByUsername(username);
            if(admin != null)
            {
                ArrayList<Role> l = new ArrayList<>();
                l.add(admin.getRole());
                org.springframework.security.core.userdetails.User a =
                        new org.springframework.security.core.userdetails.
                                User(admin.getUsername(),admin.getPassword(),
                                true,true,
                                true,true,
                                getAuthorities(l));
                return a ;
            }
        }

        return null;
    }



    private Collection getAuthorities(List roles) {
        List authorities = new ArrayList();
        for(Object role : roles)
        {
            Role l = (Role)role;
            authorities.add(new SimpleGrantedAuthority(l.getName().name()));
        }
        return authorities ;
    }
}
