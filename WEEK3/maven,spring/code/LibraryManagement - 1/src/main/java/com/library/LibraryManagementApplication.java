package com.library;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class LibraryManagementApplication {
    public static void main(String[] args) {
        // Load Spring context from applicationContext.xml
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // Get the bookService bean
        BookService service = (BookService) context.getBean("bookService");

        // Call method to test
        service.addBook("The Great Gatsby");
    }
}
