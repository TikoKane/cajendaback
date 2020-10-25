package com.test.java.Repository;
import com.test.java.model.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IQuestion extends JpaRepository<Question, Long> {
    @Query("SELECT r FROM Question r where r.id = :x")
    public Question getQuestionById(@Param(value = "x") Long id);
}
