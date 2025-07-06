package com.example.exercise2;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Exercise2_FindProductsByCategory implements CommandLineRunner {

    @Autowired
    private ProductRepository productRepository;

    public static void main(String[] args) {
        SpringApplication.run(Exercise2_FindProductsByCategory.class, args);
    }

    @Override
    public void run(String... args) {
        productRepository.findByCategory("Electronics").forEach(System.out::println);
    }
}