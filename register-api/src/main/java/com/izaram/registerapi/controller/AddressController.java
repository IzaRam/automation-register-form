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

import com.izaram.registerapi.model.Address;
import com.izaram.registerapi.repository.AddressRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/address")
public class AddressController {

	@Autowired
	AddressRepository addressRepository;

	@GetMapping("/all")
	public ResponseEntity<List<Address>> getAllAddresses() {
		try{
			List<Address> addresses = new ArrayList<>();
			addressRepository.findAll().forEach(addresses::add);

			if (addresses.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(addresses, HttpStatus.OK);
		} catch(Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}


