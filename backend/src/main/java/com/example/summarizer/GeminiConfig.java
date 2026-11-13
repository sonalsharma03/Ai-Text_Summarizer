package com.example.summarizer;

import com.google.genai.Client;
import com.google.genai.types.ClientOptions;
import com.google.genai.types.ProxyOptions;
import com.google.genai.types.ProxyType;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GeminiConfig {

    @Value("${gemini.api.key}")
    private String apiKey;

    @Bean
    public Client geminiClient() {
        return Client.builder()
                .apiKey(apiKey)
                .clientOptions(
                        ClientOptions.builder()
                                .proxyOptions(
                                        ProxyOptions.builder()
                                                .type(ProxyType.Known.DIRECT)
                                                .build()
                                )
                                .build()
                )
                .httpOptions(
                        com.google.genai.types.HttpOptions.builder()
                                .timeout(120000)
                                .build()
                )
                .build();
    }
}