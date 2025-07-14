package com.cognizant.spring_learn;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
public class CountryNotFoundTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void testInvalidCountryCodeReturns404() throws Exception {
        mockMvc.perform(get("/countries/XYZ"))
                .andExpect(status().isNotFound())
                .andExpect(content().string("Country with code 'XYZ' not found"));
    }
}
