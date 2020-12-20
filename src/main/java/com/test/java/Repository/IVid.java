package com.test.java.Repository;

import com.test.java.model.Vid;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IVid extends JpaRepository<Vid, Long> {

    @Query("SELECT r FROM Video r where r.id = :x")
    public Vid getVideoById(@Param(value = "x") Long id);
}
