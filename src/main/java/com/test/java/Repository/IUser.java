package com.test.java.Repository;
import com.test.java.model.Typepaiement;
import com.test.java.model.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IUser extends JpaRepository<Utilisateur, Long> {

    @Query("SELECT r FROM Utilisateur r where r.id = :x")
    public Utilisateur getUserById(@Param(value = "x") Long id);
    public Utilisateur findByUsername(String username);
    @Query("SELECT r FROM Utilisateur r where r.email like :x")
    public Utilisateur findByEmail(@Param(value = "x") String email);

    public Utilisateur findByTelephone(String email);



    Utilisateur findByPasswordAndPassword(String username, String password);


}
