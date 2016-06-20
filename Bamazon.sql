CREATE DATABASE Bamazon_DB;

USE Bamazon_DB;

CREATE TABLE Products (

	ItemID int auto_increment,
    
    ProductName VARCHAR (50),
    
    DepartmentName  VARCHAR (50),
    
    Price int,
    
    StockQuantity int,
    
    constraint PRIMARY KEY (ItemID)
);

ALTER TABLE Products

ADD COLUMN Price float (6, 2)

UPDATE Products
SET Price=1.99
WHERE ProductName='Drinking Glass';
    