package com.cerebro.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import com.cerebro.model.CoreJavaDefinition;
import com.cerebro.model.Definition;
import com.cerebro.repository.CoreJavaDefinitionJpaRepository;
import com.cerebro.service.CerebroService;

@Service(value = "coreJavaServiceImpl")
public class CoreJavaServiceImpl implements CerebroService {

    @Autowired
    @Qualifier("coreJavaDefinitionRepository")
    private CoreJavaDefinitionJpaRepository coreJavaDefinitionRepository;

    @Override
    public void saveDefinition(Definition definition) {
	CoreJavaDefinition coreJavaDefinition = new CoreJavaDefinition();
	BeanUtils.copyProperties(definition, coreJavaDefinition);
	coreJavaDefinitionRepository.save(coreJavaDefinition);
    }

    @Override
    public List<Definition> getDefinitions() {
	List<Definition> definitions = null;
	List<CoreJavaDefinition> coreJavaDefinitions = coreJavaDefinitionRepository.findAll();

	if (CollectionUtils.isEmpty(coreJavaDefinitions)) {
	    definitions = new ArrayList<>();
	} else {
	    definitions = coreJavaDefinitions.stream().map(coreJavaDefinition -> {
		Definition definition = new Definition();
		BeanUtils.copyProperties(coreJavaDefinition, definition);
		return definition;
	    }).collect(Collectors.toList());
	}

	return definitions;
    }
}
