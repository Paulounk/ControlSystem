package com.magister.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.magister.model.Document;

@Repository
public interface DocumentRepository extends JpaRepository<Document, Long> {
	
}