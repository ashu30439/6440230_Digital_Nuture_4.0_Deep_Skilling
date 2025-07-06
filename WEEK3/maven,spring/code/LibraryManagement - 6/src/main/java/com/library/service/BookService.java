package com.library.service;

import com.library.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service  //  Marks this class as a Spring bean
public class BookService {

    private BookRepository bookRepository;

    @Autowired  //  Tells Spring to inject this automatically
    public void setBookRepository(BookRepository bookRepository) {
        System.out.println(" Injecting BookRepository into BookService via @Autowired");
        this.bookRepository = bookRepository;
    }

    public void addBook(String title) {
        System.out.println(" BookService is ready to add books!");
        System.out.println(" Adding: " + title);
        bookRepository.saveBook(title);
    }
}
