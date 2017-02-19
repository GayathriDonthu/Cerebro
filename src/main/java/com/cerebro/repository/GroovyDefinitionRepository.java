package com.cerebro.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cerebro.model.GroovyDefinition;

@Repository("groovyDefinitionRepository")
public interface GroovyDefinitionRepository extends JpaRepository<GroovyDefinition, Long> {

}
