package com.test.java.Repository;

import com.test.java.model.Admin;
import com.test.java.model.Astuce;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

public interface IAstuce extends JpaRepository<Astuce, Long> {
    public Astuce getAstuceById(@Param(value = "x") Long id);
}
