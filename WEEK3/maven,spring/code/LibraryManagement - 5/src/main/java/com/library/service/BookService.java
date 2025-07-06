package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        System.out.println("[Spring IoC Test] Injecting BookRepository into BookService...");
        this.bookRepository = bookRepository;
    }

    public void addBook(String title) {
        System.out.println("BookService is ready to add books!");
        System.out.println("Adding: " + title);
        bookRepository.saveBook(title);
    }
}
