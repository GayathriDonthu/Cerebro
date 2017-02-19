package com.cerebro.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import com.cerebro.service.CerebroService;
import com.cerebro.service.impl.ApacheKafkaServiceImpl;
import com.cerebro.service.impl.CoreJavaServiceImpl;

/**
 * Factory class to get service based definition type
 * @author Avinash Babu Donthu - 19 Feb 2017
 *
 */
@Component(value = "serviceFactory")
public class ServiceFactory {

    @Autowired
    @Qualifier("coreJavaServiceImpl")
    private CoreJavaServiceImpl coreJavaServiceImpl;

    @Autowired
    @Qualifier("apacheKafkaServiceImpl")
    private ApacheKafkaServiceImpl apacheKafkaServiceImpl;

    public CerebroService getService(String definitionType) {
	CerebroService cerebroService = null;

	switch (definitionType) {
	case Constants.CORE_JAVA:
	    cerebroService = coreJavaServiceImpl;
	    break;
	case Constants.APACHE_KAFKA:
	    cerebroService = apacheKafkaServiceImpl;
	    break;
	}

	return cerebroService;
    }

}