package com.izaram.registerapi.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.izaram.registerapi.model.Person;
import com.izaram.registerapi.repository.PersonRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/person")
public class PersonController {

	@Autowired
	PersonRepository personRepository;

	@GetMapping("/all")
	public ResponseEntity<List<Person>> getAllPersons() {
		try{
			List<Person> persons = new ArrayList<>();
			personRepository.findAll().forEach(persons::add);

			if (persons.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(persons, HttpStatus.OK);
		} catch(Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/add")
	public ResponseEntity<Person> addNewPerson(@RequestBody Person person) {
		try {
			Person _person = personRepository.save(person);
			return new ResponseEntity<>(_person, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}


