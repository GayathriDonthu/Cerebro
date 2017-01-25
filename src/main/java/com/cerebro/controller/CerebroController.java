package com.cerebro.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cerebro.model.Definition;

@RestController
public class CerebroController {

    @RequestMapping(value = "/definitions/{type}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<String> getDefinitions(@PathVariable("type") String type) {
	System.out.println("type: " + type);
	List<String> definitions = new ArrayList<>();
	definitions.add(type);
	return definitions;
    }

    @RequestMapping(value = "/addDefinitions", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public List<Definition> addDefinitions(@RequestBody Definition definition) {
	System.out.println("definition: " + definition);
	return Arrays.asList(definition);
    }
}