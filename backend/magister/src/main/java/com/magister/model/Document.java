package com.magister.model;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import com.magister.model.enums.DocumentStatus;

import lombok.Data;

@Entity
@Table(name = "documents")
@Data
public class Document {
	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private Long id;
	
	@NotBlank
	private String name;
	
	@NotBlank
	private String activity;
	
	private Integer hours;
	
	@NotBlank
	private String link;
	
	@Enumerated(value = EnumType.STRING)
	private DocumentStatus status;

	
}
