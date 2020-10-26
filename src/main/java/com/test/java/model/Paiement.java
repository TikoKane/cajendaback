package com.test.java.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "paiement")

public class Paiement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String numcarte;
    private long cvv;
    private String nom;
    private String prenom;
    private String email;
    private String password;


    @JsonIgnore
    @JsonManagedReference
    @ManyToOne
    @JoinColumn(name ="idAbonne")
    private Abonnement abonnements;


    @JsonIgnore
    @JsonManagedReference
    @ManyToOne
    @JoinColumn(name ="id_type_paiement")
    private Typepaiement typepaiement;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNumcarte() {
        return numcarte;
    }

    public void setNumcarte(String numcarte) {
        this.numcarte = numcarte;
    }

    public long getCvv() {
        return cvv;
    }

    public void setCvv(long cvv) {
        this.cvv = cvv;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Abonnement getAbonnements() {
        return abonnements;
    }

    public void setAbonnements(Abonnement abonnements) {
        this.abonnements = abonnements;
    }

    public Typepaiement getTypepaiement() {
        return typepaiement;
    }

    public void setTypepaiement(Typepaiement typepaiement) {
        this.typepaiement = typepaiement;
    }
}
