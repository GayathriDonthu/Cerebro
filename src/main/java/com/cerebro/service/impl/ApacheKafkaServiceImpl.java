package com.cerebro.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import com.cerebro.model.ApacheKafkaDefinition;
import com.cerebro.model.Definition;
import com.cerebro.repository.ApacheKafkaDefinitionRepository;
import com.cerebro.service.CerebroService;

@Service(value = "apacheKafkaServiceImpl")
public class ApacheKafkaServiceImpl implements CerebroService {

    @Autowired
    @Qualifier("apacheKafkaDefinitionRepository")
    private ApacheKafkaDefinitionRepository apacheKafkaDefinitionRepository;

    public void saveDefinition(Definition definition) {
	ApacheKafkaDefinition apacheKafkaDefinition = new ApacheKafkaDefinition();
	BeanUtils.copyProperties(definition, apacheKafkaDefinition);
	apacheKafkaDefinitionRepository.save(apacheKafkaDefinition);
    }

    @Override
    public List<Definition> getDefinitions() {
	List<ApacheKafkaDefinition> apacheKafkaDefinitions = apacheKafkaDefinitionRepository.findAll();
	List<Definition> definitions = null;

	if (CollectionUtils.isEmpty(apacheKafkaDefinitions)) {
	    definitions = new ArrayList<>();
	} else {
	    definitions = apacheKafkaDefinitions.stream().map(apacheKafkaDefinition -> {
		Definition definition = new Definition();
		BeanUtils.copyProperties(apacheKafkaDefinition, definition);
		return definition;
	    }).collect(Collectors.toList());
	}

	return definitions;
    }
}
