# Database Name : retail
# Database Schema and Inserted Values

# Schema
create table user(id int primary key,username varchar(20) unique not null,password varchar(50) unique not null,role varchar(20));

# Inserted Values
insert into user(id,username,password,role) values(100,'vedaant','student','administrator')
(101,'mandar','student','administrator');


