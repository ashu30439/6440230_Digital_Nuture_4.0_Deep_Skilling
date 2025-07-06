package com.example.exercise1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Exercise1_FindAllProducts implements CommandLineRunner {

    @Autowired
    private ProductRepository productRepository;

    public static void main(String[] args) {
        SpringApplication.run(Exercise1_FindAllProducts.class, args);
    }

    @Override
    public void run(String... args) {
        productRepository.findAll().forEach(System.out::println);
    }
}