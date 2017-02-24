package com.cerebro.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cerebro.model.ApacheKafkaDefinition;

@Repository(value = "apacheKafkaDefinitionRepository")
public interface ApacheKafkaDefinitionRepository extends JpaRepository<ApacheKafkaDefinition, Long> {

}
