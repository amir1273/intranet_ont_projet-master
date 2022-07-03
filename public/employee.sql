-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : dim. 03 juil. 2022 à 02:43
-- Version du serveur :  10.4.19-MariaDB
-- Version de PHP : 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `test`
--

-- --------------------------------------------------------

--
-- Structure de la table `employee`
--

CREATE TABLE `employee` (
  `id` bigint(20) NOT NULL,
  `cin` varchar(255) DEFAULT NULL,
  `cnrps` varchar(255) DEFAULT NULL,
  `date_de_naissance` date DEFAULT NULL,
  `date_embauche` date DEFAULT NULL,
  `fonction` int(11) DEFAULT NULL,
  `genre` int(11) DEFAULT NULL,
  `matricule` varchar(255) DEFAULT NULL,
  `nom_complet` varchar(255) DEFAULT NULL,
  `num_assurance` varchar(255) DEFAULT NULL,
  `solde_conge` double NOT NULL,
  `account_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `employee`
--

INSERT INTO `employee` (`id`, `cin`, `cnrps`, `date_de_naissance`, `date_embauche`, `fonction`, `genre`, `matricule`, `nom_complet`, `num_assurance`, `solde_conge`, `account_id`) VALUES
(1, '04845925', '999999999', '1993-06-04', '2016-08-01', 1, 0, '66257', 'adminAdmin', '9999', 30, 1);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_qtfor7d5mkkf26elj9m0amnmv` (`cin`),
  ADD UNIQUE KEY `UK_883uum2dnyaxf4sblf8rnlju1` (`cnrps`),
  ADD UNIQUE KEY `UK_mhc2ui61426hl21hhoonv4vwe` (`matricule`),
  ADD UNIQUE KEY `UK_iu8sl653gbvo7lplohkk94iq2` (`num_assurance`),
  ADD KEY `FKcfg6ajo8oske94exynxpf7tf9` (`account_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `employee`
--
ALTER TABLE `employee`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `employee`
--
ALTER TABLE `employee`
  ADD CONSTRAINT `FKcfg6ajo8oske94exynxpf7tf9` FOREIGN KEY (`account_id`) REFERENCES `account` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
