CREATE DATABASE mebel_b;
\c mebel_b;

CREATE TABLE IF NOT EXISTS contact(
    id serial primary key,
    telephone varchar(15) not null,
    date timestamp default current_timestamp
);

CREATE TABLE IF NOT EXISTS comment(
    id serial primary key,
    titleUz varchar(250) not null, 
    titleEn varchar(250) not null,
    titleRu varchar(250) not null,
    date DATE default CURRENT_DATE,
    image text not null,
    avatar_image text not null,
    client_name_surname varchar(50) not null,
    client_comment_ru text not null,
    client_comment_uz text not null,
    client_comment_en text not null
);

CREATE TABLE IF NOT EXISTS strech(
    id serial primary key,
    titleUz varchar(250) not null,
    titleEn varchar(250) not null,
    titleRu varchar(250) not null,
    money varchar(20) not null,
    skidka varchar(10) not null,
    shades varchar(10) not null,
    date timestamp default current_timestamp,
    image text not null
);

CREATE TABLE IF NOT EXISTS ceiling(
    id serial primary key,
    titleUz varchar(250) not null,
    titleEn varchar(250) not null,
    titleRu varchar(250) not null,
    date timestamp default current_timestamp
);
drop table cuisine ;
CREATE TABLE IF NOT EXISTS cuisine(
    id serial primary key,
    ceiling_id int references ceiling(id) not null,
    titleCuisineUz varchar(250) not null,
    titleCuisineEn varchar(250) not null,
    titleCuisineRu varchar(250) not null,
    image text not null,
    date timestamp default current_timestamp
);

create table if not exists banners(
    banner_id serial primary key,
    banner_image text not null,
    created_at timestamp default current_timestamp  
);

create table if not exists region(
    id serial primary key,
    region_name_uz varchar(100) not null,
    region_name_en varchar(100) not null,
    region_name_ru varchar(100) not null,
    date timestamp default current_timestamp  
);

drop table partners;
create table if not exists partners(
    id serial primary key,
    region_id int references region(id) not null,
    titleUz varchar(500) not null,
    titleEn varchar(500) not null,
    titleRu varchar(500) not null,
    phone varchar(15) not null,
    partner_name varchar(32) not null,
    image text not null,
    avatar_image text not null,
    date timestamp default current_timestamp
);