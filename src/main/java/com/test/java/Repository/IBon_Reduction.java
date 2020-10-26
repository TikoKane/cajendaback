package com.test.java.Repository;
import com.test.java.model.Bon_Reduction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IBon_Reduction  extends JpaRepository<Bon_Reduction, Long> {

    @Query("SELECT r FROM Bon_Reduction r where r.id = :x")
    public Bon_Reduction getBon_ReductionById(@Param(value = "x") Long id);

    @Query("SELECT max(r.id) FROM Bon_Reduction r")
    public Long maxBon();

    public Bon_Reduction findByCode(String code);

}
