package com.izaram.registerapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.izaram.registerapi.model.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {

}
