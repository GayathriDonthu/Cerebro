package com.cerebro.service;

import java.util.List;

import com.cerebro.model.Definition;

public interface CerebroService {

    public abstract List<Definition> getDefinitions();

    public abstract void saveDefinition(Definition definition);

}
