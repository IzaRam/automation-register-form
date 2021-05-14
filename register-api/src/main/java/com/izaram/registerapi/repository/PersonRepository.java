package com.izaram.registerapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.izaram.registerapi.model.Person;

public interface PersonRepository extends JpaRepository<Person, Long>{
	
}
