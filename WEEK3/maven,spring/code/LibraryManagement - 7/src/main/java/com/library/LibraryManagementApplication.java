package com.library;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class LibraryManagementApplication {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        //  Declare service only ONCE
        BookService service = (BookService) context.getBean("bookService");

        // Call a method to test constructor + setter injection
        service.addBook("Rich Dad Poor Dad");
    }
}
