package com.cerebro.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cerebro.model.CoreJavaDefinition;
import com.cerebro.service.DefinitionsService;

@RestController
public class CerebroController {

    @Autowired
    @Qualifier("definitionsService")
    private DefinitionsService definitionsService;

    @RequestMapping(value = "/definitions/{type}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<CoreJavaDefinition> getDefinitions(@PathVariable("type") String type) {
	System.out.println("type: " + type);

	List<CoreJavaDefinition> definitionsList = definitionsService.getDefinitions();
	System.out.println("definitionsList: " + definitionsList);

	return definitionsList;
    }

    @RequestMapping(value = "/addDefinitions", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public List<CoreJavaDefinition> addDefinitions(@RequestBody CoreJavaDefinition definition) {
	System.out.println("definition: " + definition);
	System.out.println("definitionsService: " + definitionsService);
	definitionsService.saveDefinition(definition);
	return Arrays.asList(definition);
    }
}