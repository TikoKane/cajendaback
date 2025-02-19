package com.test.java.model;


import com.fasterxml.jackson.annotation.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "bonreduction")

public class Bon_Reduction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String code;
    private float  pourcentage;
    private boolean etat;
    private Integer nombre;
    private Integer nombreutilise;
    @JsonIgnore
    @JsonManagedReference
    @ManyToOne
    @JoinColumn(name="admin_id")
    private Admin admin;

    public Integer getNombreutilise() {
        return nombreutilise;
    }

    public void setNombreutilise(Integer nombreutilise) {
        this.nombreutilise = nombreutilise;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public float getPourcentage() {
        return pourcentage;
    }

    public void setPourcentage(float pourcentage) {
        this.pourcentage = pourcentage;
    }

    public boolean isEtat() {
        return etat;
    }

    public void setEtat(boolean etat) {
        this.etat = etat;
    }

    public Admin getAdmin() {
        return admin;
    }

    public void setAdmin(Admin admin) {
        this.admin = admin;
    }

    public Integer getNombre() {
        return nombre;
    }

    public void setNombre(Integer nombre) {
      this.nombre = nombre;
    }
}

