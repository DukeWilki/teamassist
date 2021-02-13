CREATE DATABASE teamassist;
DROP DATABASE teamassist;
use teamassist;
-- DROP TABLE records;
-- DROP TABLE certs;
-- DROP TABLE members;

CREATE TABLE members (
	id INT NOT NULL auto_increment,
    firstname VARCHAR(50),
	lastname VARCHAR(50),
    email VARCHAR(50),
    pass VARCHAR(50),
    dob DATE,
    gender VARCHAR(15)  DEFAULT 'Unknown',
    iscommittee BOOLEAN DEFAULT FALSE,
    iscoach BOOLEAN DEFAULT FALSE,
    isactive BOOLEAN DEFAULT TRUE,
    PRIMARY KEY (id)
    );

    
CREATE TABLE certs (
	id INT NOT NULL auto_increment,
    certname VARCHAR(50),
	recordtype VARCHAR(50),
    authority VARCHAR(50),
    PRIMARY KEY (id)
    );

    
CREATE TABLE records (
	id INT NOT NULL auto_increment,
    member_id INT,
    cert_id INT,
    auth_id INT,
    auth_date TIMESTAMP,
    completed DATE,
    expiry DATE,
    PRIMARY KEY (id),
    FOREIGN KEY (member_id) REFERENCES members(id),
	FOREIGN KEY (cert_id) REFERENCES certs(id),
	FOREIGN KEY (auth_id) REFERENCES members(id)
    );


CREATE TABLE users (
	id INT NOT NULL auto_increment,
    email VARCHAR(50),
    `password` VARCHAR(50),
    dob DATE,
    PRIMARY KEY (id)
    );