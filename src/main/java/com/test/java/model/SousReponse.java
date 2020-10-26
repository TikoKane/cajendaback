package com.test.java.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "sousreponse")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})

public class SousReponse {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String sousreponse;


    @JsonIgnore
    @JsonManagedReference
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn (name = "responde_id")
    private Reponse reponse;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getSousreponse() {
        return sousreponse;
    }

    public void setSousreponse(String sousreponse) {
        this.sousreponse = sousreponse;
    }

    public Reponse getReponse() {
        return reponse;
    }

    public void setReponse(Reponse reponse) {
        this.reponse = reponse;
    }
}
