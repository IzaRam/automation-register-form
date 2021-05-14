package com.izaram.registerapi.model;

import javax.persistence.*;
import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "address")
public class Address {
	
	@Id
	@GeneratedValue (strategy = GenerationType.AUTO)
	private long id;

	@Column (name = "address_main")
	private String addressMain;

	@Column (name = "address_com")
	private String addressCom;

	@Column (name = "city")
	private String city;

	@Column (name = "state")
	private String state;

	@Column (name = "postal_code")
	private String postalCode;

	@Column (name = "country")
	private String country;

	@OneToOne(mappedBy = "address")
	@JsonIgnore
	private Person person;

}
