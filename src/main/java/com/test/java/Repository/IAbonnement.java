package com.test.java.Repository;

import com.test.java.model.Abonnement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IAbonnement extends JpaRepository<Abonnement, Long> {
    @Query("SELECT r FROM Abonnement r where r.id = :x")
    public Abonnement getAbonnementById(@Param(value = "x") Long id);

}
