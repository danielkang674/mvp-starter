DROP DATABASE IF EXISTS process.env.JAWSDB_DATABASE || test;

CREATE DATABASE process.env.JAWSDB_DATABASE || test;

USE process.env.JAWSDB_DATABASE || test;


-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'sizes'
-- 
-- ---

DROP TABLE IF EXISTS `sizes`;
		
CREATE TABLE `sizes` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `size` CHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'crusts'
-- 
-- ---

DROP TABLE IF EXISTS `crusts`;
		
CREATE TABLE `crusts` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `crust` CHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'toppings'
-- 
-- ---

DROP TABLE IF EXISTS `toppings`;
		
CREATE TABLE `toppings` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `topping` CHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'pizzas'
-- 
-- ---

DROP TABLE IF EXISTS `pizzas`;
		
CREATE TABLE `pizzas` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` CHAR(255) NOT NULL,
  `size_id` INTEGER NOT NULL,
  `crust_id` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'pizzas_toppings'
-- 
-- ---

DROP TABLE IF EXISTS `pizzas_toppings`;
		
CREATE TABLE `pizzas_toppings` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `pizza_id` INTEGER NOT NULL,
  `topping_id` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `pizzas` ADD FOREIGN KEY (size_id) REFERENCES `sizes` (`id`);
ALTER TABLE `pizzas` ADD FOREIGN KEY (crust_id) REFERENCES `crusts` (`id`);
ALTER TABLE `pizzas_toppings` ADD FOREIGN KEY (pizza_id) REFERENCES `pizzas` (`id`);
ALTER TABLE `pizzas_toppings` ADD FOREIGN KEY (topping_id) REFERENCES `toppings` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `sizes` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `crusts` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `toppings` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `pizzas` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `pizzas_toppings` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

INSERT INTO `sizes` (`size`) VALUES ('medium');
INSERT INTO `sizes` (`size`) VALUES ('large');

INSERT INTO `crusts` (`crust`) VALUES ('hand tossed');
INSERT INTO `crusts` (`crust`) VALUES ('pan');
INSERT INTO `crusts` (`crust`) VALUES ('thin crust');

INSERT INTO `toppings` (`topping`) VALUES ('ham');
INSERT INTO `toppings` (`topping`) VALUES ('beef');
INSERT INTO `toppings` (`topping`) VALUES ('salami');
INSERT INTO `toppings` (`topping`) VALUES ('pepperoni');
INSERT INTO `toppings` (`topping`) VALUES ('italian sausage');
INSERT INTO `toppings` (`topping`) VALUES ('chicken');
INSERT INTO `toppings` (`topping`) VALUES ('bacon');
INSERT INTO `toppings` (`topping`) VALUES ('philly steak');
INSERT INTO `toppings` (`topping`) VALUES ('jalapeno');
INSERT INTO `toppings` (`topping`) VALUES ('onion');
INSERT INTO `toppings` (`topping`) VALUES ('banana peppers');
INSERT INTO `toppings` (`topping`) VALUES ('diced tomatoes');
INSERT INTO `toppings` (`topping`) VALUES ('black olives');
INSERT INTO `toppings` (`topping`) VALUES ('mushrooms');
INSERT INTO `toppings` (`topping`) VALUES ('pineapple');
INSERT INTO `toppings` (`topping`) VALUES ('cheese');
INSERT INTO `toppings` (`topping`) VALUES ('green peppers');
INSERT INTO `toppings` (`topping`) VALUES ('spinach');
INSERT INTO `toppings` (`topping`) VALUES ('roasted red peppers');

INSERT INTO `pizzas` (`name`,`size_id`,`crust_id`) VALUES ('BEST PIZZA','1','1');

-- INSERT INTO `pizzas_toppings` (`id`,`pizza_id`,`topping_id`) VALUES ('','','');

/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql -p
 *  to create the database and the tables.*/