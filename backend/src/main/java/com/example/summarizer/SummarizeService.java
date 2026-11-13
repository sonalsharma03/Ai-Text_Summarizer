package com.example.summarizer;

import com.google.genai.Client;
import com.google.genai.types.GenerateContentResponse;
import org.springframework.stereotype.Service;

@Service
public class SummarizeService {

    private final Client geminiClient;

    public SummarizeService(Client geminiClient) {
        this.geminiClient = geminiClient;
    }

    public String summarizeText(String text, String length) {

        String prompt = """
                You are an expert text summarizer.

                Summarize the following text.
                Summary length: %s

                Follow these instructions:
                - Short: Give a brief summary in 2-3 sentences.
                - Medium: Give a clear summary in one paragraph.
                - Long: Give a detailed summary covering all important points.
                - Keep the original meaning.
                - Do not add information that is not in the text.

                Text to summarize:
                %s
                """.formatted(length, text);

        System.out.println("Sending request to Gemini...");
        GenerateContentResponse response =
                geminiClient.models.generateContent(
                        "gemini-3.5-flash-lite",
                        prompt,
                        null
                );
        System.out.println("Gemini response received!");

        return response.text();
    }
}
