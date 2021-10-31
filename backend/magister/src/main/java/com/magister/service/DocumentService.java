package com.magister.service;

import org.springframework.stereotype.Service;

import com.magister.model.Document;
import com.magister.model.enums.DocumentStatus;

@Service
public class DocumentService {
	
	public Document validaDocumento(Document document) {
		
		if(document.getHours() > 1) {

			document.setStatus(DocumentStatus.HOMOLOGADO);
		}else {
			document.setStatus(DocumentStatus.RECUSADO);
		}
		
		return document;
		
	}

}
