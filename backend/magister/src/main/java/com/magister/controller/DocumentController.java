package com.magister.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.magister.model.Document;
import com.magister.repository.DocumentRepository;
import com.magister.service.DocumentService;

@RestController
@RequestMapping("/documents")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class DocumentController {

	
	@Autowired
	private DocumentRepository repository;
	
	@Autowired
	private DocumentService service;
	
	@GetMapping
	public ResponseEntity<List<Document>> getAll(){
		return ResponseEntity.ok(repository.findAll());
	}
	
	@GetMapping("{id}")
	public ResponseEntity<Document> getById(@PathVariable Long id){
			return repository.findById(id)
									.map(resp -> ResponseEntity.ok(resp))
									.orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).build());
	}
	
	@PostMapping
	public ResponseEntity<Document> createDocument(@RequestBody Document document){
		
		try {
			service.validaDocumento(document);
			return ResponseEntity.ok(repository.save(document));
		}catch(Error e){
			return ResponseEntity.badRequest().build();
		}	
	}
	
	@PutMapping
	public ResponseEntity<Document> updateDocument(@RequestBody Document document){
		
		service.validaDocumento(document);
		return ResponseEntity.status(HttpStatus.OK).body(repository.save(document));
	}
	
	
	@DeleteMapping("{id}")
	public void deleteDocument(@PathVariable long id){
		repository.deleteById(id);
	}
	
}

