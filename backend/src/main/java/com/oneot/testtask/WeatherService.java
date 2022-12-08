package com.oneot.testtask;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

import org.json.JSONException;
import org.json.JSONObject;
import org.json.XML;
import org.springframework.stereotype.Component;

@Component
public class WeatherService {
  public String getXmlString() {
    String xmlData = "";
    FileInputStream fin;
    try {
      File file = new File("src/main/resources/response.xml");

      fin = new FileInputStream(file);
      byte[] data = new byte[(int) file.length()];
      fin.read(data);
      fin.close();

      xmlData = new String(data, "UTF-8");
    } catch (FileNotFoundException e) {
      e.printStackTrace();
    } catch (IOException e) {
      e.printStackTrace();
    }
    return xmlData;
  }

  public JSONObject getWeatherForecast() {
    JSONObject jsonPrettyPrintString = null;

    String XML_STRING = getXmlString();

    try {
      jsonPrettyPrintString = XML.toJSONObject(XML_STRING);

    } catch (JSONException je) {
      System.out.println(je.toString());
    }
    return jsonPrettyPrintString;
  }
}
