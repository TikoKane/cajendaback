package com.test.java.model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "abonnement")

public class Abonnement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @JsonBackReference(value="utilisateurs")
    @OneToMany(mappedBy = "abonnements")
    private List<Utilisateur> utilisateurs;

    @JsonIgnore
    @JsonManagedReference
    @ManyToOne
    @JoinColumn(name ="typeabonnement_id",nullable = false)
    private Typeabonnement typeabonnement;

    @JsonBackReference(value="paie")
    @OneToMany(mappedBy = "abonnements")
    private List<Paiement> paiements;

    @DateTimeFormat(pattern = "dd.MM.yyyy")
    private Date date_debut;

    @DateTimeFormat(pattern = "dd.MM.yyyy")
    private Date date_fin;

    private boolean  Etat;

    private String pays;

    private long idBonReduction;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getIdBonReduction() {
        return idBonReduction;
    }

    public void setIdBonReduction(long idBonReduction) {
        this.idBonReduction = idBonReduction;
    }

    public List<Utilisateur> getUtilisateurs() {
        return utilisateurs;
    }

    public void setUtilisateurs(List<Utilisateur> utilisateurs) {
        this.utilisateurs = utilisateurs;
    }

    public Typeabonnement getTypeabonnement() {
        return typeabonnement;
    }

    public void setTypeabonnement(Typeabonnement typeabonnement) {
        this.typeabonnement = typeabonnement;
    }

    public List<Paiement> getPaiements() {
        return paiements;
    }

    public void setPaiements(List<Paiement> paiements) {
        this.paiements = paiements;
    }


    public Date getDate_debut() {
        return date_debut;
    }

    public void setDate_debut(Date date_debut) {
        this.date_debut = date_debut;
    }

    public Date getDate_fin() {
        return date_fin;
    }

    public void setDate_fin(Date date_fin) {
        this.date_fin = date_fin;
    }

    public boolean isEtat() {
        return Etat;
    }

    public void setEtat(boolean etat) {
        Etat = etat;
    }

    public String getPays() {
        return pays;
    }

    public void setPays(String pays) {
        this.pays = pays;
    }
}
