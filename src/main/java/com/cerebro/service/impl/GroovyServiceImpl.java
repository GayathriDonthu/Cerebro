package com.cerebro.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import com.cerebro.model.Definition;
import com.cerebro.model.GroovyDefinition;
import com.cerebro.repository.GroovyDefinitionRepository;
import com.cerebro.service.CerebroService;

@Service(value = "groovyServiceImpl")
public class GroovyServiceImpl implements CerebroService {

    @Autowired
    @Qualifier("groovyDefinitionRepository")
    private GroovyDefinitionRepository groovyDefinitionRepository;

    @Override
    public List<Definition> getDefinitions() {
	List<GroovyDefinition> groovyDefinitions = groovyDefinitionRepository.findAll();
	List<Definition> definitions = null;

	if (CollectionUtils.isEmpty(groovyDefinitions)) {
	    definitions = new ArrayList<>();
	} else {
	    definitions = groovyDefinitions.stream().map(groovyDefinition -> {
		Definition definition = new Definition();
		BeanUtils.copyProperties(groovyDefinition, definition);
		return definition;
	    }).collect(Collectors.toList());
	}

	return definitions;
    }

    @Override
    public void saveDefinition(Definition definition) {
	GroovyDefinition groovyDefinition = new GroovyDefinition();
	BeanUtils.copyProperties(definition, groovyDefinition);
	groovyDefinitionRepository.save(groovyDefinition);
    }

}
