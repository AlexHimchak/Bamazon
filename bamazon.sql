DROP DATABASE IF EXISTS products_db;
create database products_db;

use products_db;
create table products (
	item_id integer(11) auto_increment not null,
    product_name varchar(30) not null,
    department_name varchar(30) not null,
    price integer(10),
    stock_quantity integer(10),
    primary key (item_id)
);
use products_db;
insert into products (product_name, department_name, price, stock_quantity)
values ("Tacos", "Food", 2, 12);

insert into products (product_name, department_name, price, stock_quantity)
values ("Burrito", "Food", 4, 20);

insert into products (product_name, department_name, price, stock_quantity)
values ("Cheese", "Food", 5, 30);

insert into products (product_name, department_name, price, stock_quantity)
values ("Battery", "General Merchandise", 9, 48);

insert into products (product_name, department_name, price, stock_quantity)
values ("Pork", "Meat", 12, 10);

insert into products (product_name, department_name, price, stock_quantity)
values ("Hot Dogs", "Meat", 4, 80);

insert into products (product_name, department_name, price, stock_quantity)
values ("Bananas", "Food", 2, 28);

insert into products (product_name, department_name, price, stock_quantity)
values ("Cake", "Food", 15, 90);

insert into products (product_name, department_name, price, stock_quantity)
values ("Hamburger", "Food", 6, 87);

insert into products (product_name, department_name, price, stock_quantity)
values ("Lettuce", "Produce", 4, 35);

select * from products;