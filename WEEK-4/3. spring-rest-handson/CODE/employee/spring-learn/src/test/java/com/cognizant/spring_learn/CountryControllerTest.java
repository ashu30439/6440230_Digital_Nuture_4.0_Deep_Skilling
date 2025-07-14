package com.cognizant.spring_learn;

import com.cognizant.spring_learn.controller.CountryController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class CountryControllerTest {

    @Autowired
    private CountryController countryController;

    @Test
    void contextLoads() throws Exception {
        assertThat(countryController).isNotNull();
    }
}
