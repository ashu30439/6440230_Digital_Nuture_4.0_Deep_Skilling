package com.library.repository;

import org.springframework.stereotype.Repository;

@Repository  //  Marks this class as a Spring-managed component
public class BookRepository {
    public void saveBook(String title) {
        System.out.println(" Book stored in the database.");
    }
}
