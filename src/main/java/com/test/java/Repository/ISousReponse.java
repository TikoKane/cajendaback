package com.test.java.Repository;

import com.test.java.model.SousReponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ISousReponse extends JpaRepository<SousReponse, Long> {
    @Query("SELECT r FROM SousReponse r where r.id = :x")
    public SousReponse getSous_ReponseById(@Param(value = "x") Long id);

}
