package com.test.java.Repository;
import com.test.java.model.Admin;
import com.test.java.model.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IAdmin extends JpaRepository<Admin, Long> {

    @Query("SELECT r FROM Admin r where r.id = :x")
    public Admin getAdminById(@Param(value = "x") Long id);

    public Admin findByUsername(String username);
}




