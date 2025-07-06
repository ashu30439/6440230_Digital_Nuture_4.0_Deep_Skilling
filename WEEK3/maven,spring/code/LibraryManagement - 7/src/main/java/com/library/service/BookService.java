package com.library.service;

import com.library.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookService {

    private BookRepository bookRepository;

    //  Constructor Injection
    @Autowired
    public BookService(BookRepository bookRepository) {
        System.out.println("🛠 Constructor Injection: BookRepository injected");
        this.bookRepository = bookRepository;
    }

    //  Setter Injection (will still work if needed)
    @Autowired
    public void setBookRepository(BookRepository bookRepository) {
        System.out.println(" Setter Injection: BookRepository injected");
        this.bookRepository = bookRepository;
    }

    public void addBook(String title) {
        System.out.println(" BookService: Adding book - " + title);
        bookRepository.saveBook(title);
    }
}
