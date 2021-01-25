INSERT INTO certs (certname, recordtype, authority)
VALUES  
('clubfees', 'expiry', 'committee'),
('aocrafees', 'expiry', 'committee'),
('ybsc', 'expiry', 'committee'),
('codeofconduct', 'expiry', 'committee'),
('firstaid', 'expiry', 'committee'),
('wwcc', 'expiry', 'committee'),
('swim', 'expiry', 'coach'),
('huli', 'expiry', 'coach');
    
INSERT INTO members (firstname, lastname, email, dob, gender)
VALUES  
('Sabrina', 'Aguilar', 'SabrinaAguilar@teamassist.com', '1950-01-01', 'F'),
('Alexia', 'Beasley', 'AlexiaBeasley@teamassist.com', '1952-02-02', 'F'),
('Talia', 'Black', 'TaliaBlack@teamassist.com', '1954-03-03', 'F'),
('Alina', 'Blaese', 'AlinaBlaese@teamassist.com', '1956-04-04', 'F'),
('Shane', 'Christian', 'ShaneChristian@teamassist.com', '1958-05-05', 'M'),
('Velma', 'Clayton', 'VelmaClayton@teamassist.com', '1960-06-06', 'F'),
('Taylor', 'Day', 'TaylorDay@teamassist.com', '1962-07-07', 'F'),
('Lauren', 'Finch', 'LaurenFinch@teamassist.com', '1964-08-08', 'F'),
('Daisy', 'Fuentes', 'DaisyFuentes@teamassist.com', '1966-09-09', 'F'),
('Rosie', 'Hudson', 'RosieHudson@teamassist.com', '1968-10-10', 'F'),
('Troy', 'Hurst', 'TroyHurst@teamassist.com', '1970-11-11', 'M'),
('Esme', 'Marshall', 'EsmeMarshall@teamassist.com', '1972-12-12', 'F'),
('Leyla', 'Mcconnell', 'LeylaMcconnell@teamassist.com', '1974-01-13', 'F'),
('Carla', 'Ortiz', 'CarlaOrtiz@teamassist.com', '1976-02-14', 'F'),
('Angela', 'Welsh', 'AngelaWelsh@teamassist.com', '1978-03-15', 'F'),
('Ebony', 'Davenport', 'EbonyDavenport@teamassist.com', '1980-04-16', 'F'),
('Anika', 'Faulkner', 'AnikaFaulkner@teamassist.com', '1982-05-17', 'F'),
('Bailey', 'Perez', 'BaileyPerez@teamassist.com', '1990-09-21', 'F'),
('Euan', 'Mcclain', 'IeuanMcclain@teamassist.com', '1992-10-22', 'M'),
('Jeremy', 'Dyer', 'JeremyDyer@teamassist.com', '1994-11-23', 'M'),
('Kyron', "O'Gallagher", 'KyronOGallagher@teamassist.com', '1996-12-24', 'M'),
('Liberty', 'Elliott', 'LibertyElliott@teamassist.com', '1998-01-25', 'F'),
('Lucas', 'Bartlett', 'LucasBartlett@teamassist.com', '2000-02-26', 'M'),
('Nicholas', 'Williams', 'NicholasWilliams@teamassist.com', '2002-03-27', 'M'),
('Ross', 'Tanner', 'RossTanner@teamassist.com', '2004-04-28', 'M');

INSERT INTO members (firstname, lastname, email, dob, gender, iscommittee, iscoach)
VALUES  
('Luke', 'Wilkinson', 'LukeWilkinson@teamassist.com', '1984-6-18', 'M', TRUE, TRUE),
('Committee', 'Member', 'Committee@teamassist.com', '1986-7-19', 'M', TRUE, FALSE),
('Coach', 'Member', 'Coach@teamassist.com', '1988-8-20', 'F', FALSE, TRUE);
