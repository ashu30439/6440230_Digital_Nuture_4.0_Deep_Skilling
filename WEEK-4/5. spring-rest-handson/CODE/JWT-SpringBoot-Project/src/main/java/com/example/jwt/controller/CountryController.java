package com.example.jwt.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class CountryController {
    @GetMapping("/countries")
    public List<Map<String, String>> getCountries() {
        List<Map<String, String>> countries = new ArrayList<>();

        Map<String, String> us = new HashMap<>();
        us.put("code", "US");
        us.put("name", "United States");
        countries.add(us);

        Map<String, String> in = new HashMap<>();
        in.put("code", "IN");
        in.put("name", "India");
        countries.add(in);

        Map<String, String> de = new HashMap<>();
        de.put("code", "DE");
        de.put("name", "Germany");
        countries.add(de);

        Map<String, String> jp = new HashMap<>();
        jp.put("code", "JP");
        jp.put("name", "Japan");
        countries.add(jp);

        return countries;
    }
}
