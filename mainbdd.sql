-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Client : 127.0.0.1
-- Version du serveur : 5.6.17
-- Version de PHP : 5.5.12
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
--
-- Base de données : music
--
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
--
-- Structure de la table albums
--
CREATE TABLE IF NOT EXISTS albums (
alb_id int(5) NOT NULL AUTO_INCREMENT COMMENT 'Identifiant de l album',
alb_art int(5) NOT NULL COMMENT 'Code artiste',
alb_nom varchar(50) NOT NULL COMMENT 'Nom de l album',
alb_annee int(4) NOT NULL COMMENT 'Année de sortie',
alb_prix decimal(5,2) NOT NULL COMMENT 'Prix de l album',
PRIMARY KEY (alb_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=53 ;
--
-- Contenu de la table albums
--
INSERT INTO albums (alb_id, alb_art, alb_nom, alb_annee, alb_prix) VALUES
(1, 10, 'Let It Bleed', 1969, '18.70'),
(2, 10, 'Sticky Fingers', 1971, '18.70'),
(3, 10, 'Black And Blue ', 1976, '16.50'),
(4, 10, 'Some Girls', 1978, '16.50'),
(5, 10, 'Undercover', 1983, '15.40'),
(6, 10, 'A Bigger Bang', 2005, '16.50'),
(7, 1, 'Led Zeppelin', 1969, '16.50'),
(8, 1, 'Led Zeppelin II', 1969, '16.50'),
(9, 1, 'Led Zeppelin III', 1970, '16.50'),
(10, 1, 'Led Zeppelin IV', 1971, '16.50'),
(11, 1, 'Houses Of The Holy', 1973, '13.20'),


(12, 1, 'Physical Graffiti', 1975, '16.50'),
(13, 1, 'Presence', 1976, '18.81'),
(14, 1, 'In Through The Outdoor', 1979, '18.70'),
(15, 1, 'Coda', 1982, '16.50'),
(16, 1, 'The Song Reamins The Same', 1976, '19.80'),
(17, 7, 'No Pads, No Helmets...Just Balls', 2002, '16.50'),
(18, 7, 'Still Not Getting Any...', 2004, '16.50'),
(19, 7, 'MTV Hard Rock Live', 2005, '11.00'),
(20, 7, 'Simple plan', 2008, '13.20'),
(21, 7, 'Get Your Heart On!', 2011, '16.50'),
(22, 7, 'Taking One For the Team', 2016, '19.80'),
(23, 3, '19', 2008, '16.50'),
(24, 3, '21', 2011, '18.70'),
(25, 3, '25', 2015, '17.60'),
(26, 2, 'Killers', 1981, '13.20'),
(27, 2, 'The Number of the Beast', 1982, '16.50'),
(28, 2, 'Piece of Mind', 1983, '13.20'),
(29, 2, 'Powerslave', 1984, '13.20'),
(30, 2, 'Somewhere in Time', 1986, '11.00'),
(31, 2, 'Seventh Son of a Seventh Son', 1988, '9.90'),
(32, 2, 'No Prayer for the Dying', 1990, '12.10'),
(33, 4, 'Showbizz', 1999, '11.00'),
(34, 4, 'Origin of Symmetry', 2001, '11.00'),
(35, 4, 'Absolution', 2003, '9.90'),
(36, 4, 'Black Holes and Revelations', 2006, '16.50'),
(37, 5, 'Telephone', 1977, '11.00'),
(38, 5, 'Crache Ton Venin', 1979, '13.20'),
(39, 5, 'Au Coeur de la Nuit', 1980, '13.20'),
(40, 5, 'Dure Limite', 1982, '13.20'),
(41, 5, 'Un Autre Monde', 1984, '15.40'),
(42, 6, 'Parachutes', 2000, '16.50'),
(43, 6, 'A Rush of Blood to the Head', 2002, '14.30'),
(44, 8, 'Blue Period', 1951, '16.50'),
(45, 8, 'Dig', 1951, '16.50'),
(46, 8, 'The Musings of Miles', 1955, '13.20'),
(47, 9, 'Extrapolation ', 1969, '18.81'),
(48, 9, 'Devotion ', 1970, '15.40'),
(49, 9, 'Live At The Royal Festival Hall ', 1990, '15.40'),
(50, 1, 'Live BBC Sessions', 1997, '19.86');
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
--
-- Structure de la table artistes
--
CREATE TABLE IF NOT EXISTS artistes (
art_id int(5) NOT NULL AUTO_INCREMENT COMMENT 'identifiant de l artiste ou du groupe',
art_nom varchar(30) NOT NULL COMMENT 'nom de l artiste ou du groupe',
art_typ varchar(1) NOT NULL COMMENT 'Type d artiste : G=Groupe, S=Solo',
art_pays varchar(3) NOT NULL COMMENT 'Code pays = nationalité du groupe ou de l artiste. Se référer à la table des pays.',
art_genre varchar(3) NOT NULL COMMENT 'Code genre musical; Se référer à la table des genres
musicaux.',
PRIMARY KEY (art_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=11 ;
--
-- Contenu de la table artistes
--
INSERT INTO artistes (art_id, art_nom, art_typ, art_pays, art_genre) VALUES
(1, 'Led Zeppelin', 'G', 'ANG', 'HME'),
(2, 'Iron Maiden', 'G', 'ANG', 'HME'),
(3, 'Adele', 'S', 'ANG', 'POP'),
(4, 'Muse', 'G', 'ANG', 'ROC'),
(5, 'Telephone', 'G', 'FRA', 'ROC'),
(6, 'Coldplay', 'G', 'ANG', 'POP'),
(7, 'Simple Plan', 'G', 'CAN', 'ROC'),
(8, 'Davis, Miles', 'S', 'USA', 'JAZ'),
(9, 'Mc Laughlin, John', 'S', 'ANG', 'JAZ'),
(10, 'Rolling Stones', 'G', 'ANG', 'ROC');
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
--
-- Structure de la table clients
--
CREATE TABLE IF NOT EXISTS clients (
cli_id int(5) NOT NULL AUTO_INCREMENT COMMENT 'Identifiant du client',
cli_nom varchar(30) NOT NULL COMMENT 'Nom du client',
cli_adr varchar(50) NOT NULL COMMENT 'Adresse du client',
cli_cps varchar(5) NOT NULL COMMENT 'Code Postal',
cli_ville varchar(30) NOT NULL COMMENT 'Ville du client',
cli_email varchar(50) NOT NULL COMMENT 'Adresse mail du client',
cli_dnai date NOT NULL COMMENT 'Date de naissance',
PRIMARY KEY (cli_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;
--
-- Contenu de la table clients
--
INSERT INTO clients (cli_id, cli_nom, cli_adr, cli_cps, cli_ville, cli_email, cli_dnai) VALUES
(1, 'Saquet, Frodon', 'Place du village', '88888', 'La Comté', 'frodon.saquet@gmail.com', '2000-01- 01'),
(2, 'Gandalf, Le Magicien', 'Rue du Mordor', '77777', 'Les Deux Tours', 'gandalf@orange.fr', '1963-07-
15'),
(3, 'Legolas, Archer', 'Boulevard des Elfes', '66666', 'Elfe Town', 'legolas@free.fr', '1980-08- 15');
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
--
-- Structure de la table genres


--
CREATE TABLE IF NOT EXISTS genres (
gen_genre varchar(3) NOT NULL COMMENT 'Code genre musical',
gen_libelle varchar(20) NOT NULL COMMENT 'Libellé du genre musical',
PRIMARY KEY (gen_genre)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
--
-- Contenu de la table genres
--
INSERT INTO genres (gen_genre, gen_libelle) VALUES
('BLU', 'Blues'),
('HME', 'Heavy Metal'),
('JAZ', 'Jazz'),
('POP', 'Pop Music'),
('RAP', 'Rap'),
('ROC', 'Rock');
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
--
-- Structure de la table historique
--
CREATE TABLE IF NOT EXISTS historique (
his_id int(5) NOT NULL AUTO_INCREMENT,
his_art int(5) NOT NULL COMMENT 'code artiste',
his_mem int(5) NOT NULL COMMENT 'code musicien',
his_debut int(4) NOT NULL COMMENT 'année début',
his_fin int(4) NOT NULL COMMENT 'année fin',
PRIMARY KEY (his_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;
--
-- Contenu de la table historique
--
INSERT INTO historique (his_id, his_art, his_mem, his_debut, his_fin) VALUES
(1, 10, 1, 1965, 2016),
(2, 10, 2, 1965, 2016),
(3, 10, 3, 1965, 2016),
(4, 5, 4, 1976, 1986),
(5, 5, 5, 1976, 1986),
(6, 5, 6, 1976, 1986),
(7, 5, 7, 1976, 1986),
(8, 5, 1, 2016, 2020);
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
--


-- Structure de la table instruments
--
CREATE TABLE IF NOT EXISTS instruments (
ins_cod varchar(3) NOT NULL,
ins_libelle varchar(30) NOT NULL,
PRIMARY KEY (ins_cod)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
--
-- Contenu de la table instruments
--
INSERT INTO instruments (ins_cod, ins_libelle) VALUES
('BAS', 'Guitare Basse'),
('BAT', 'Batterie'),
('GUE', 'Guitare Electrique'),
('VOC', 'Vocals');
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
--
-- Structure de la table membres
--
CREATE TABLE IF NOT EXISTS membres (
mem_id int(5) NOT NULL AUTO_INCREMENT,
mem_nom varchar(30) NOT NULL COMMENT 'nom du musicien',
mem_pays varchar(3) NOT NULL COMMENT 'code pays du musicien',
mem_ins varchar(3) NOT NULL COMMENT 'code instrument joué par le musicien',
PRIMARY KEY (mem_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=10 ;
--
-- Contenu de la table membres
--
INSERT INTO membres (mem_id, mem_nom, mem_pays, mem_ins) VALUES
(1, 'Keith Richards ', 'ANG', 'GUE'),
(2, 'Bill Wyman ', 'ANG', 'BAS'),
(3, 'Charlie Watts ', 'ANG', 'BAT'),
(4, 'Jean-Louis Aubert', 'FRA', 'VOC'),
(5, 'Richard Kolinka', 'FRA', 'BAT'),
(6, 'Louis Bertignac', 'FRA', 'GUE'),
(7, 'Corinne Marienneau', 'FRA', 'BAS');
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
--
-- Structure de la table pays
--

CREATE TABLE IF NOT EXISTS pays (
pay_pays varchar(3) NOT NULL COMMENT 'Code pays',
pay_libelle varchar(20) NOT NULL COMMENT 'Libellé du pays',
PRIMARY KEY (pay_pays)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
--
-- Contenu de la table pays
--
INSERT INTO pays (pay_pays, pay_libelle) VALUES
('ALL', 'Allemagne'),
('ANG', 'Angleterre'),
('CAN', 'Canada'),
('ESP', 'Espagne'),
('FRA', 'France'),
('ITA', 'Italie'),
('USA', 'Etats Unis');
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
--
-- Structure de la table ventes
--
CREATE TABLE IF NOT EXISTS ventes (
ven_id int(5) NOT NULL AUTO_INCREMENT COMMENT 'Identifiant de la vente',
ven_date date NOT NULL COMMENT 'Date de la vente',
ven_alb int(5) NOT NULL COMMENT 'Identifiant de l album vendu',
ven_cli int(5) NOT NULL COMMENT 'Identifiant du client qui a acheté l album',
ven_prix decimal(5,2) NOT NULL COMMENT 'Prix de vente de l album',
PRIMARY KEY (ven_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=19 ;
--
-- Contenu de la table ventes
--
INSERT INTO ventes (ven_id, ven_date, ven_alb, ven_cli, ven_prix) VALUES
(1, '2016-07- 13', 1, 1, '15.00'),
(2, '2016-07- 13', 1, 2, '13.00'),
(3, '2016-07- 13', 1, 3, '13.00'),
(4, '2016-07- 15', 2, 1, '14.00'),
(5, '2016-07- 15', 2, 3, '14.00'),
(6, '2016-07- 29', 3, 1, '12.00'),
(7, '2016-07- 30', 3, 2, '12.00'),
(8, '2016-08- 02', 10, 2, '12.00'),
(9, '2016-08- 31', 15, 1, '12.00'),
(10, '2016-09- 01', 39, 1, '10.00'),
(11, '2016-09- 15', 39, 2, '10.00'),
(12, '2016-09- 15', 9, 3, '10.00'),
(13, '2016-10- 17', 6, 2, '15.00'),
(14, '2016-10- 17', 7, 3, '15.00'),
(15, '2016-10- 17', 8, 3, '15.00'),
(16, '2016-10- 22', 8, 2, '15.00'),
(17, '2016-10- 22', 9, 2, '15.00'),
(18, '2016-10- 22', 10, 2, '15.00');
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
