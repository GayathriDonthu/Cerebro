package com.cerebro.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CerebroController {

    @RequestMapping(value = "/definitions/{type}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<String> definitions(@PathVariable("type") String type) {
	System.out.println("type: " + type);
	List<String> definitions = new ArrayList<>();
	definitions.add(type);
	return definitions;
    }
}