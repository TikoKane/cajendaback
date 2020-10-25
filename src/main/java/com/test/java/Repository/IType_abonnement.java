package com.test.java.Repository;


import com.test.java.model.Typeabonnement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IType_abonnement  extends JpaRepository<Typeabonnement, Long> {

    @Query("SELECT r FROM Typeabonnement r where r.id = :x")
    public Typeabonnement getType_abonnementById(@Param(value = "x") Long id);
}
