package com.test.java.model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "admin", uniqueConstraints = {
        @UniqueConstraint(columnNames = {
                "username"
        }),
        @UniqueConstraint(columnNames = {
                "email"
        })
})

public class Admin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotNull(message = "Le prenom ne doit pas être null")
    private String prenom;

    @NotNull(message = "Le nom ne doit pas être null")
    private String nom;

    private String email;

    @NotNull(message = "Le username ne doit pas être nul")
    private String username;

    @NotNull(message = "Name may not be null")
    private String password;

    @JsonBackReference(value="questionforadmin")
    @OneToMany(mappedBy = "admin")
    private List<Question> questions;

    @JsonBackReference(value="adminforbondereduction")
    @OneToMany(mappedBy = "admin")
    private List<Bon_Reduction> bon_reductions;

    @JsonIgnore
    @JsonManagedReference
    @ManyToOne
    @JoinColumn(name = "role_id")
    private Role role;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
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

    public List<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(List<Question> questions) {
        this.questions = questions;
    }

    public List<Bon_Reduction> getBon_reductions() {
        return bon_reductions;
    }

    public void setBon_reductions(List<Bon_Reduction> bon_reductions) {
        this.bon_reductions = bon_reductions;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }
}
