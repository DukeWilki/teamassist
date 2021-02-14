-- CREATE DATABASE teamassist;
-- DROP DATABASE teamassist;
-- use teamassist;
-- DROP TABLE records;
-- DROP TABLE certs;
-- DROP TABLE members;
-- DROP TABLE users;

CREATE TABLE members (
	id INT auto_increment NOT NULL,
    firstname VARCHAR(50),
	lastname VARCHAR(50),
    email VARCHAR(50),
    pass VARCHAR(50),
    dob DATE,
    gender VARCHAR(15)  DEFAULT 'Unknown',
    iscommittee BOOLEAN DEFAULT FALSE,
    iscoach BOOLEAN DEFAULT FALSE,
    isactive BOOLEAN DEFAULT TRUE,
    -- createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY(id)
    );

    
CREATE TABLE certs (
	id INT auto_increment NOT NULL,
    certname VARCHAR(50),
	recordtype VARCHAR(50),
    authority VARCHAR(50),
    -- createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY(id)
    );

    
CREATE TABLE records (
	id INT auto_increment NOT NULL,
    member_id INT,
    cert_id INT,
    auth_id INT,
    auth_date TIMESTAMP,
    completed DATE,
    expiry DATE,
    -- createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (member_id) REFERENCES members(id),
	FOREIGN KEY (cert_id) REFERENCES certs(id),
	FOREIGN KEY (auth_id) REFERENCES members(id)
    );


CREATE TABLE users (
	id INT auto_increment NOT NULL,
    email VARCHAR(50),
    `password` VARCHAR(50),
    -- createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY(id)
    );