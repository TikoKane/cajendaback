package com.test.java.Repository;


import com.test.java.model.Video;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IVideo extends JpaRepository<Video, Long> {

    @Query("SELECT r FROM Video r where r.id = :x")
    public Video getVideoById(@Param(value = "x") Long id);
}
