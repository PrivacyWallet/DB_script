-- Adminer 4.8.0 MySQL 5.5.5-10.5.9-MariaDB-1:10.5.9+maria~focal dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;

SET NAMES utf8mb4;

CREATE DATABASE `privace` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `privace`;

DROP TABLE IF EXISTS `calculators`;
CREATE TABLE `calculators` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `calculator` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `databuyer`;
CREATE TABLE `databuyer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `bidStartID` varchar(255) NOT NULL,
  `bidEndID` varchar(255) NOT NULL,
  `date` datetime NOT NULL,
  `status` varchar(255) NOT NULL,
  `calculator_address` varchar(255) NOT NULL,
  `deployedContract` varchar(255) NOT NULL,
  `transactions` varchar(255) NOT NULL,
  `result` text NOT NULL,
  `address` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `dataowner`;
CREATE TABLE `dataowner` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` datetime NOT NULL,
  `status` varchar(255) NOT NULL,
  `payment` varchar(255) NOT NULL,
  `from` varchar(255) NOT NULL,
  `dataBuyerContractAddress` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `bidStartID` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `getdata`;
CREATE TABLE `getdata` (
  `id` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `epsilon` int(11) NOT NULL,
  `calculatorContract` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- 2021-04-23 08:49:29
