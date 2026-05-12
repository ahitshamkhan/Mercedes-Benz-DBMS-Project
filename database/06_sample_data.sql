USE mercedes_benz;

INSERT INTO users (name, email, password, phone, role) VALUES
('Admin Mercedes', 'admin@mercedes.pk', '$2b$10$8K1p/DFaLGIwR6Y5PXkYxOQZX0QKjF5eKxVJqE1m5NqV5FKXW8Kbi', '+92-300-0000000', 'admin'),
('Ahmed Khan', 'ahmed@gmail.com', '$2b$10$8K1p/DFaLGIwR6Y5PXkYxOQZX0QKjF5eKxVJqE1m5NqV5FKXW8Kbi', '+92-321-1234567', 'customer'),
('Zainab Malik', 'zainab@yahoo.com', '$2b$10$8K1p/DFaLGIwR6Y5PXkYxOQZX0QKjF5eKxVJqE1m5NqV5FKXW8Kbi', '+92-333-9876543', 'customer'),
('Tariq Jameel', 'tariq@hotmail.com', '$2b$10$8K1p/DFaLGIwR6Y5PXkYxOQZX0QKjF5eKxVJqE1m5NqV5FKXW8Kbi', '+92-300-5551234', 'customer'),
('Haris Butt', 'haris@gmail.com', '$2b$10$8K1p/DFaLGIwR6Y5PXkYxOQZX0QKjF5eKxVJqE1m5NqV5FKXW8Kbi', '+92-312-7778899', 'customer'),
('Sara Sheikh', 'sara@outlook.com', '$2b$10$8K1p/DFaLGIwR6Y5PXkYxOQZX0QKjF5eKxVJqE1m5NqV5FKXW8Kbi', '+92-345-6667788', 'customer');

INSERT INTO cars (model, category, price, year, description, horsepower, engine, transmission, fuel_type, color, is_featured, is_new_arrival) VALUES
('S-Class 580 4MATIC', 'Luxury Sedan', 85500000.00, 2024, 'The pinnacle of automotive luxury. The S-Class sets the standard with cutting-edge technology, unmatched comfort, and a powerful yet refined driving experience.', 496, '4.0L V8 Biturbo', '9G-TRONIC Automatic', 'Petrol', 'Obsidian Black', TRUE, TRUE),
('G-Class AMG G63', 'SUV / Performance', 110200000.00, 2024, 'An icon reinvented. The G63 combines legendary off-road capability with AMG performance, handcrafted V8 power, and unmistakable presence.', 577, '4.0L V8 Biturbo', 'AMG SPEEDSHIFT 9G', 'Petrol', 'Manufaktur Arabian Grey', TRUE, TRUE),
('EQS 450+ Electric', 'Electric Luxury', 62900000.00, 2024, 'The future of luxury is electric. The EQS delivers up to 350 miles of range, a hyperscreen cockpit, and whisper-quiet performance in a stunning aerodynamic silhouette.', 329, 'Dual Electric Motor', 'Single-Speed Auto', 'Electric', 'High-Tech Silver', TRUE, TRUE),
('AMG GT 63 4-Door', 'Performance Coupe', 92000000.00, 2024, 'A four-door sports car that defies convention. AMG GT combines race-bred engineering with everyday usability and breathtaking design.', 630, '4.0L V8 Biturbo', 'AMG SPEEDSHIFT MCT 9G', 'Petrol', 'Jupiter Red', TRUE, FALSE),
('GLE 450 4MATIC', 'SUV', 49900000.00, 2024, 'The versatile luxury SUV. GLE offers a perfect blend of comfort, technology, and capability for every journey.', 362, '3.0L Inline-6 Turbo', '9G-TRONIC Automatic', 'Petrol', 'Diamond White', FALSE, TRUE),
('E-Class 300 Exclusive', 'Executive Sedan', 42500000.00, 2024, 'Business class on four wheels. The E-Class combines elegant design with intelligent technology for the modern executive.', 255, '2.0L Inline-4 Turbo', '9G-TRONIC Automatic', 'Petrol', 'Selenite Grey', FALSE, TRUE),
('GLS 450 4MATIC', 'Full-Size SUV', 58200000.00, 2024, 'The S-Class of SUVs. Three rows of first-class seating, commanding road presence, and technology that anticipates your every need.', 362, '3.0L Inline-6 Turbo', '9G-TRONIC Automatic', 'Petrol', 'Emerald Green', FALSE, FALSE),
('Maybach S 580', 'Ultra Luxury', 135000000.00, 2024, 'The ultimate expression of luxury. Mercedes-Maybach elevates the S-Class to extraordinary heights with bespoke craftsmanship and exclusive appointments.', 496, '4.0L V8 Biturbo', '9G-TRONIC Automatic', 'Petrol', 'Two-Tone Obsidian Black / Mojave Silver', TRUE, FALSE),
('CLA 250 Coupe', 'Compact Coupe', 28500000.00, 2024, 'Athletic elegance meets cutting-edge technology. The CLA combines a sleek four-door coupe design with Mercedes-Benz innovation.', 221, '2.0L Inline-4 Turbo', '7G-DCT Automatic', 'Petrol', 'Cosmos Black', FALSE, TRUE),
('EQB 350 4MATIC', 'Electric SUV', 38400000.00, 2024, 'Electric versatility for the whole family. The EQB offers seven seats, zero emissions, and the confidence of 4MATIC all-wheel drive.', 288, 'Dual Electric Motor', 'Single-Speed Auto', 'Electric', 'Digital White', FALSE, TRUE);

INSERT INTO car_images (car_id, image_url, is_primary) VALUES
(1, 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGlZsLIJGOHZdaTEqJtv6DaIrraYgyCT_z4-6b90vRq63ychSCfp6UyBrzAkpeizdwhKrcsEWFwvgU-V6UjrFBC_51oW0n_liX5WWa0CSRAsT17CqZjlVjTl0YZebtIxIcT9ZVENWf9vScsV94zm0oS4ht4Dvs1FWhSNmjmMgjWy9y0aUWqESJuZy44_SEDspADeZxSnSVGeBYNUFZ1dSdHx9pvV1dq6uPv5-RH3Q-3-HAkGu16gBMsexNzeniXGCu5unHsGwioOE', TRUE),
(2, 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpREFU_I7nZkGGhc3wj4s0RB8asbSmwjNr3GS9BStQa6uvoSpEDEVKBy5yufvmZzsov4j152ASR0wXkWiskmd1xSAY0e3q1PcXeIpjpBz7xubGBKKrbhQBRZEAs4Eem04jUsDrCEeKrSlbpdJ-I9gfjgvjeYrOWNB8xLK7UsenjvbpOPc1ddV7s5iRkCyf4wT7k27WxL98FWfB096lE_kqAqBF4xOWx9sR986UaMvYt_dcRqp3sBmHBrP5Rphxpv5CQuAgR2ARCwI', TRUE),
(3, 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWpXP9EN9S2hsE508Y031Vk3Em7xWWCS-Z2NeCq3dfKFAdHWh4ZOgoIhL-fMemf3PLj3iA1oBaL9Fg-iidivQfj81-g9Fd8EPWzOwdE58mjjfPGrZO0-IS4wsfaVjJQTkB5Y96edj0mN0928tmM--1pd8GZs23H-PVYTqdp4F7wuswOnamP-kHTPi8o3SKV5kOJEnksHfhduObaKxdI8vbSKA0fG7Ru4Thqif4vpPxpqyM5Juw59ArTc6e4gCyjKwOOyZEh75hU4g', TRUE),
(4, 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-QnFh__x_VnZ9Zm9umx8UPu-2CweuVWN8qv03dK-u8hQj7ItBPBTVP4MEWwvlcuWhLx00VMzUxnqRN8tFP0x1p4if-ZP3CxJzXBKKk0zVHQj81uaViTGOFSXab6Duq9GGman-aUArwJjMaT_Dl8-w0cBhCJUCKEaOk3A-8wkVZgVDN9MMqgYNMNJrHsmQoBQHBwYjmNRuukciEwkYu2v5ezfhUGNTpsJ_YgXOGRIC4OKrfDdr6HkbsJOZd7_x0obMn5yKZMQ4vI8', TRUE),
(5, 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgZN5d7rvEau8lSrp7PI9ePpGFwOZv08bxeYOqGnf4cPoahWgz3zAP0OZmlTcaR4UhgeI79gO10eo92r5KCls2Wl4P3KAUlci33A7p5gCe2VViRxI3C6UOUuJOqEFccIxkrFoUMzRo9QUxZRISfZtedwlEQ32tTsFM1AbT0bxVm2hqnxblECcwG0ShBcvFnOwRSmBjONZy-Hm5fxIyZlTy58cUnltm6pwCsse47FvD4NOWgEcm-tAQHDCSv_JCagF-kXwp0IFIvQQ', TRUE),
(6, 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8ln03Ovuk6sYGDir8vbYiaplx_86SyHfMd9jX2y2T6uOGcT4_SDlsVWA55ozVh9tSd2xigo1V1hXjCRR2HgBRrf_20QuityFc32MZX_2PHhK9S9Pd585x3Lo-CdrN4KFtEetN9LjimJGTkvQOREQ_wJOzCa63wYiFcC3gbYTt0M03bDI1rMVt60P6Sn2kfofvFfdqKCt3wDltJuYRF4flYAdOYXCqIjW6sO1dRv_xAb5soGdx3ICR24xR9A-CWPTcpv6T9EzFtQE', TRUE),
(7, 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvX4cWt7AWr15gj5WT0PR7Ky6fu2R703N92QRIDXzbF6FnvZP-X3hNFnnc_GHluIub_apgPwh9jWRYzSAgcN8TVKzg5uFzPt5bY0GDazplxf4kROpvGH7TgC2yPmcgOejMY3o_NtOBIboJUbQFT9FtS0Dek55y-QYveKhnXw9RzBAoVwOITgvAsEhN9bPMDxtaCSMrvJaaTmrMakcBeho93dJRiKcIzKYKFJe6bYryXpiW05010zJ5yWtgtTujmWvE88JrbzdXdSQ', TRUE),
(8, 'https://lh3.googleusercontent.com/aida-public/AB6AXuCN5LvjX5lXm5DbxVjEyadq7hCpQD5eg-rNF6Z8B0IGR5pmRkPb0m3xgmLhG_ZEchtPCplPgoQmBjSNbseDqri0zwjkKmGKeF7uu82WVwmS3j1iWG8OJQ9yxkVLYQcn6bZA8ZezQN6XLXoDRBVCnOWiZ2RLAV9GxHGdf0UPA0_XtStPLjqYHdJsFnOQBApL6RFvvbR9ilQHGa6QzL-aSlGvLWnXVcUYY9VLlQW6M5YDqVSj-Io4gWS-gLuTfHrXX-lXlSb3VIaZ-TU', TRUE),
(9, 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuO9UCIw71kz5HaMseG5gmDahZKnrjb1OolOs8gg5aeimEhZ7SbS2ZmT4-8HJaSRHQdqf6e6YKN0bPFLLtPHxFR3oMx2MQ9xbz1BM8Tzn5NPzoc9zmSUb-1rZbDoRuDtkYKf8b0w0vHkZEDUzVhAKZiVxnK5fvBCeN7qg3CyVpxc8L7vGe9vCiIfr3CG14SRhDW3e8E-BV8CnO57M9w3ayzILxliIavsUlCouq4IdlFb3KGKJic_gfHjSNlmSzIOtiX8Z-ff35Eo8', TRUE),
(10, 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaKVpyWL2QnIFkqmY9TyHE588Jew-yOaFbM4uph8887rrGiY4Sl9_AaiqzjRVDjT6kce_Ek1WP822lA_NTUAfPB7Yt0eiBO1j4m8_fiNikVQKKQYyutHOGLsOUYgWCyI758CqovQwgScT7WL_zNwp3udPvDN71Bbnc4bSXhecKYehstysiujdKHmWoR1z_8sRcTTi4CSguWAZHgQVYabBCiJuSPODHc_7rlKr5m_cplnYST5xzTMyLcOPJPspk52S3zuDkRJPnLHM', TRUE);

INSERT INTO dealerships (name, city, address, phone, email, image_url, hours_weekday, hours_sunday) VALUES
('Mercedes-Benz Karachi Central', 'Karachi', 'Plot 23, Shahrah-e-Faisal, PECHS Block 6', '+92-21-34567890', 'karachi@mercedes.pk', 'https://lh3.googleusercontent.com/aida-public/AB6AXuDO7ODNv7Wtg6GNw5pp4fpXI4587GrjwX_1HFfF2_n7COdSmWniytMNwJlWOyTOs75tCs0mbjdisCZAbCsHwKuSRuT6EaN_zZnYXin4XFlxmHDgGCsiiYiDmjoP_-4YvtmwpGjwSjLs3lkrjHGhDv9ghO90taW9XTe5Uxm4p00SaVHbkUIbEo6ECCKsP7JDBckLHJxZ6WT-U2bIathCD7jK97aMAfInUClzHmIUuKDFJbsk-WLN7alXtCAnFbquk7wHNxp5h8hwMO4', '9:00 AM - 7:00 PM', '11:00 AM - 5:00 PM'),
('Mercedes-Benz Lahore Signature', 'Lahore', '45-A, Main Boulevard, DHA Phase VI', '+92-42-35678901', 'lahore@mercedes.pk', 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtcSnhcsd15tP1SO2DMJC_7-JASH19dIGNGB4S3sj0P-0LNmFX3GmI9NU27PLldb2l8WoF50aoeYK_Pv_ZbMRFb8zzZlfpTt3nnFQJk3s8zIjeiSPPQo2PNl-WQpgF7lLiUI9WUu00k22B2bxfUQQ17xc-HdCAY8dgY1j13YPH_eU8eRWUjxN0x0-lOMM5hcvFQk6YsnqngkYNfTE-gTHXWLfIeqzLO8K1t2gj_f0_UeuANDA8J6j8TJgbmiHfzSQnC4wknKTnkB8', '9:00 AM - 8:00 PM', '10:00 AM - 4:00 PM'),
('Mercedes-Benz Islamabad Hub', 'Islamabad', 'Sector F-7/1, Jinnah Super Market Road', '+92-51-26789012', 'islamabad@mercedes.pk', 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvcXYHPbkzbwWFWH38nOyW2UxKhMIiASKLfZhoXQORz3Aq4a4wYmDWHeEXceoIbyyL6n0GszXRIMYBzykAkFoAMxDDDC6MWTFZUaukVgDuYSbuskcvK5dDzLRpzLjcPWhVXzSiOZuYQGJawT6RxT4aoOvzqq1z7ajbohvLgq05aFleEHAei1OsBcnOOCaMoSabhj5wBEIzqx4YMnVWQsbtL2ROZXPfnNaywt9AR6yH_rY5oP889JCdYjXKpoAS5xDloNXkQTZ7NGc', '9:30 AM - 7:30 PM', 'Closed');

INSERT INTO dealership_staff (dealership_id, name, role, subtitle, image_url) VALUES
(1, 'Omar Farooq', 'General Manager', 'Since 2018', 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDwsR2bwmDgIOHBPZfjkKUv6VIsD0zuL9ktfMAC8uoMvb4ySTLaC2GfLWTHBuPg8u_lPloYnHpnoi8pPIlMcf1dopOtaVciDtHSBHxKA519CrLw0JHske2f9y4Ce4NgVXR21n2i0w5zMvnLZw7GeNVOvDTojX1NMtBaPSO_J8QIAqiDOnjOYrKU1VHk5Q6B_FdaVTAInCiGUxWgpQqViphX3VpPXJ5pTF5q327kZVIHm38TaoF7GVOsy_JbsCgSn65Mu1YlYLMvng'),
(1, 'Ayesha Rizwan', 'Sales Director', 'AMG Specialist', 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaU6hmi-fBCmm6-a23KA6jQSOL-vAKWJFjPCVOqYDVqsFkagZgFuhkl9xId_1KYbmx-6PKBf6fRIrQFrL0PrINRLhlbnmA5v-YwC1_D-7Cil0ERBRIx7lyCukg2bocsVlF1OIIokTxA3dL5weC8Ok3VWw9K0F5eN46uau8E25Zh5acRuFf-6GoVX8thFVEVIs7go2AqV4kEanhG0aEA69dFm_5rX50Wd4KR6c2P1V_YSVVztS9Wmf7Wlt86PwKDhCrl38AjFqBNCI'),
(2, 'Bilal Hassan', 'Service Manager', 'Since 2020', 'https://lh3.googleusercontent.com/aida-public/AB6AXuA75-EV1Kq1wJKUIcmCL8bRjgpqvDmwfuedCrQ9gfcq49qjxuJuy2jgeO__nyDHVXwitOcw70R1PuhxG9AE2df4krOl8-phjd81cdMrvRCyJ-qqrwhf9TWKhVgbKkXcAEYRZqdUs7F6AE6XIIpLOuI17LI9ZCwcPez27K2JbctaWGDdp9nFWOCeXnq3SYFB9G0AlleXWiRyLqMXQ5kLe0AJvrew86DGbbZ-X8X_iGKhgPuqeSwvDVwgMnLStXyE83eoVlM0QlkyFYM'),
(2, 'Fatima Noor', 'Client Relations', 'EQ Specialist', 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjOM58RFMotngOCNSXtgAqtn4vkFsDRNtN4cBu98MekQQGA220bODKypgd7vkYJjSDDjb9DFvQEKVcVHQ9cnL_80rE9IiwLppo5N8BmhN1HibI6db_rvfyUlJNgYqbb_vgYFHB4yfHI5-nf9i4Lovl8A50oGZf9qFv3cyOsWFsO1h7OvbTqmrMPq1mIGUv4vp2ZFaIIMcBNfJkYbbKFqfSnwQfo1K1GhSKf8TGTmsBmP0OFF0O1MX4UsqsOCnx-TWB6EZve5CuNRE'),
(3, 'Usman Ali', 'General Manager', 'Since 2019', 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuuMtUbym6irXZL9rAwUuwcqv-zkCa6JklMGdcNQppZYdIXqwIV37uJMZfUl4Fy-BKCvZiJ0smmAj7BXNXmE-Q3boBO1i6GIDDp_H78sgKlt8VJ0lI5G3Ze4kmwER2m4IdvQwzVVikFyI1RdQO5uf2BpedJwNTlaOSRJmfkzQ1_xLwKtHLOr9B-V3f1LF-T0Vfh6PyFDcHgC8IC0VdtZpPt2W3pq47zbj4FFpdxdGqkP-D2OzCgw4VHhg8TuOa5yTY-YtEXnlcyps');

INSERT INTO orders (user_id, car_id, total_price, status, payment_method) VALUES
(2, 1, 85500000.00, 'delivered', 'bank'),
(3, 3, 62900000.00, 'confirmed', 'credit'),
(4, 2, 110200000.00, 'pending', 'install'),
(5, 4, 92000000.00, 'delivered', 'cash'),
(2, 5, 49900000.00, 'preparing', 'credit'),
(6, 8, 135000000.00, 'in_transit', 'bank');

INSERT INTO wishlist (user_id, car_id) VALUES
(2, 2), (2, 4), (2, 8),
(3, 1), (3, 5),
(4, 3), (4, 6),
(5, 7), (5, 9),
(6, 1), (6, 10);

INSERT INTO test_drive_bookings (user_id, car_id, dealership_id, date, time_slot, status) VALUES
(2, 5, 1, '2024-11-12', '10:30 AM', 'pending'),
(3, 1, 2, '2024-10-28', '02:00 PM', 'confirmed'),
(4, 3, 3, '2024-09-15', '11:00 AM', 'completed'),
(5, 2, 1, '2024-12-01', '03:30 PM', 'pending'),
(6, 4, 2, '2024-11-20', '10:00 AM', 'confirmed');

INSERT INTO service_bookings (user_id, service_type, dealership, date, notes, status) VALUES
(2, 'oil_change', 'Mercedes-Benz Karachi Central', '2024-10-24', 'Synthetic oil preferred', 'scheduled'),
(3, 'tire_service', 'Mercedes-Benz Lahore Signature', '2024-08-12', 'Alignment and rotation needed', 'completed'),
(4, 'full_service', 'Mercedes-Benz Islamabad Hub', '2024-05-05', 'Full annual maintenance package', 'completed'),
(2, 'inspection', 'Mercedes-Benz Karachi Central', '2024-12-10', 'Pre-winter checkup', 'scheduled'),
(5, 'repair', 'Mercedes-Benz Lahore Signature', '2024-09-20', 'Brake pad replacement', 'completed');

INSERT INTO chat_messages (sender_id, receiver_id, message, is_read) VALUES
(2, 1, 'Good morning. I am interested in the new Maybach S-Class. Do you have a black edition available for a test drive next week?', TRUE),
(1, 2, 'Good morning Mr. Khan. We currently have a bespoke Obsidian Black Maybach S 580 in our downtown inventory. I can arrange a private viewing and test drive for you.', TRUE),
(2, 1, 'That sounds perfect. Tuesday at 2:00 PM would work best for my schedule.', TRUE),
(1, 2, 'Confirmed. I have reserved the Maybach for your exclusive viewing on Tuesday at 2:00 PM at our Karachi Central showroom.', FALSE),
(3, 1, 'When will the service for my EQS be completed?', FALSE),
(1, 3, 'Ms. Malik, your EQS service is on track and will be completed by tomorrow evening.', FALSE);
