package com.test.java.model;


import com.fasterxml.jackson.annotation.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "reponse")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Reponse {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String titre;
    private String duree1;
    private String duree2;
    private String titre2;

    private String image1;
    private String image2;

    @JsonIgnore
    @JsonManagedReference
    @ManyToOne
    @JoinColumn (name ="question_id")
    private Question questions;


    @JsonBackReference(value="responseforingredients")
    @OneToMany(mappedBy = "reponse",fetch = FetchType.EAGER)
    private List<Ingredient> ingredients;

    @JsonBackReference(value="responseforsousreponse")
    @OneToMany(mappedBy = "reponse",fetch = FetchType.EAGER)
    private List<SousReponse> sousreponses;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getDuree_1() {
        return duree1;
    }

    public void setDuree_1(String duree_1) {
        this.duree1 = duree_1;
    }

    public String getDuree_2() {
        return duree2;
    }

    public void setDuree_2(String duree_2) {
        this.duree2 = duree_2;
    }

    public String getTitre2() {
        return titre2;
    }

    public void setTitre2(String titre2) {
        this.titre2 = titre2;
    }

    public String getImage1() {
        return image1;
    }

    public void setImage1(String image1) {
        this.image1 = image1;
    }

    public String getImage2() {
        return image2;
    }

    public void setImage2(String image2) {
        this.image2 = image2;
    }

    public Question getQuestions() {
        return questions;
    }

    public void setQuestions(Question questions) {
        this.questions = questions;
    }

    public List<Ingredient> getIngredients() {
        return ingredients;
    }

    public void setIngredients(List<Ingredient> ingredients) {
        this.ingredients = ingredients;
    }

    public List<SousReponse> getSousreponses() {
        return sousreponses;
    }

    public void setSousreponses(List<SousReponse> sousreponses) {
        this.sousreponses = sousreponses;
    }

    public String getDuree1() {
        return duree1;
    }

    public void setDuree1(String duree1) {
        this.duree1 = duree1;
    }

    public String getDuree2() {
        return duree2;
    }

    public void setDuree2(String duree2) {
        this.duree2 = duree2;
    }
}
