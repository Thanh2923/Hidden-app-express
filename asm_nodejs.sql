-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th4 09, 2024 lúc 11:44 AM
-- Phiên bản máy phục vụ: 10.4.32-MariaDB
-- Phiên bản PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `asm_nodejs`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`id`, `title`, `description`, `image`, `name`, `price`, `createdAt`, `updatedAt`) VALUES
(22, 'Áo khoát nam', 'Mô tả về áo khoát nam', 'spbc1.webp', 'Áo khoát nam H566', 100000, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(23, 'Áo khoát nam', 'Mô tả về áo khoát nam', 'spbc2.webp', 'Áo khoát nam Hk66', 99000, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(24, 'Áo khoát nam', 'Mô tả về áo khoát nam', 'spbc3.webp', 'Áo khoát nam H77 đẹp', 199000, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(25, 'Áo khoát nam', 'Mô tả về áo khoát nam', 'spbc4.webp', 'Áo khoát nam mùa đông', 99000, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(26, 'Áo khoát nam', 'Mô tả về áo khoát nam', 'tpc1.webp', 'Áo thun nam H14 ', 199000, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(27, 'Áo khoát nam', 'Mô tả về áo khoát nam', 'tpc2.webp', 'Áo thun nam H889', 199000, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(28, 'Áo khoát nam', 'Mô tả về áo khoát nam', 'tpc3.webp', 'Áo thun nam HI Basic K56', 89000, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(29, 'Áo khoát nam', 'Mô tả về áo khoát nam', 'tpc4.webp', 'Áo thun nam Pocket K46', 99000, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20240407085731-create-product.js'),
('20240407090010-create-user.js');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(6, 'Thu ', 'Hiền', 'thanhnvpd09249@fpt.edu.vn', '$2a$10$e2d3FPUzvhl1.8rFjkOMfe9VGkEX1QY8MTbTUF3O3EOW2g974YhNS', '2024-04-09 06:31:21', '2024-04-09 06:31:21'),
(7, 'Nguyenxuan', 'Hieu', 'vonhuthi123@gmai.com', '$2a$10$HjxZO1/IIXasigm4pR.imOh.9u6Jcb1RREnh.MlRSwmToQhd0fiBK', '2024-04-09 06:32:21', '2024-04-09 06:32:21'),
(8, 'Nguyễn', 'Thành', 'thanhnv2923@gmail.com', '$2a$10$KgmgZGj0E2Ut4MCmFsLpge3T.zUtBT7ErBTpuPqhhCTs1WHpNK3.W', '2024-04-09 06:43:12', '2024-04-09 06:43:12');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
