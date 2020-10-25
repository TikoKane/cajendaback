package com.test.java.Repository;
import com.test.java.model.Ingredient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IIngredient extends JpaRepository<Ingredient, Long> {

    @Query("SELECT r FROM Ingredient r where r.id = :x")
    public Ingredient getIngredientById(@Param(value = "x") Long id);

}
