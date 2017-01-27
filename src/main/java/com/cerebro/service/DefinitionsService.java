package com.cerebro.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.cerebro.model.CoreJavaDefinition;
import com.cerebro.repository.CoreJavaDefinitionJpaRepository;

@Service(value = "definitionsService")
public class DefinitionsService {

    @Autowired
    @Qualifier("coreJavaDefinitionRepository")
    private CoreJavaDefinitionJpaRepository coreJavaDefinitionRepository;

    public void saveDefinition(CoreJavaDefinition definition) {
	coreJavaDefinitionRepository.save(definition);
    }

    public List<CoreJavaDefinition> getDefinitions() {
	return coreJavaDefinitionRepository.findAll();
    }
}
