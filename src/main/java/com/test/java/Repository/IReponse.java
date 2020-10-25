package com.test.java.Repository;

import com.test.java.model.Reponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IReponse extends JpaRepository<Reponse, Long> {

    @Query("SELECT r FROM Reponse r where r.id = :x")
    public Reponse getReponseById(@Param(value = "x") Long id);
}
