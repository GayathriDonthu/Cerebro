package com.cerebro.model;

public class Definition {
    private String description;
    private String details;

    public Definition(String description, String details) {
	this.description = description;
	this.details = details;
    }

    public Definition() {
    }

    public String getDescription() {
	return description;
    }

    public void setDescription(String description) {
	this.description = description;
    }

    public String getDetails() {
	return details;
    }

    public void setDetails(String details) {
	this.details = details;
    }

    @Override
    public String toString() {
	return "Definition [description=" + description + ", details=" + details + "]";
    }

}