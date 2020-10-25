package com.test.java.Repository;
import com.test.java.model.Paiement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IPaiement extends JpaRepository<Paiement, Long> {
    @Query("SELECT r FROM Paiement r where r.id = :x")
    public Paiement getPaiementById(@Param(value = "x") Long id);

}
