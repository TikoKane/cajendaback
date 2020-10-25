package com.test.java.Repository;

import com.test.java.model.Typepaiement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ITypePaiement extends JpaRepository<Typepaiement, Long> {
    @Query("SELECT r FROM Typepaiement r where r.id = :x")
    public Typepaiement getType_paiementById(@Param(value = "x") Long id);

}




