package com.oneot.testtask;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WeatherController {

  @Autowired
  WeatherService weatherService;

  @CrossOrigin(origins = { "http://localhost:8081", "http://localhost:4173" })
  @GetMapping("/weather-forecast")
  public String weather() throws IOException {
    return weatherService.getWeatherForecast().toString();
  }
}
