package com.cerebro.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cerebro.model.CoreJavaDefinition;

@Repository(value = "coreJavaDefinitionRepository")
public interface CoreJavaDefinitionJpaRepository extends JpaRepository<CoreJavaDefinition, Long> {

}
