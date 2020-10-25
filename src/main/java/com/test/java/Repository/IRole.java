package com.test.java.Repository;

import com.test.java.model.ERole;
import com.test.java.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface IRole extends JpaRepository<Role, Long> {
    public Role findByName(ERole roleName);


}
