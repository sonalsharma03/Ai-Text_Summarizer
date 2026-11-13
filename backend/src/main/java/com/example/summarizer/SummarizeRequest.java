package com.example.summarizer;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

public class SummarizeRequest {

    @NotBlank(message = "Text cannot be empty")
    private String text;

    @NotBlank(message = "Summary length is required")
    @Pattern(
            regexp = "Short|Medium|Long",
            message = "Length must be Short, Medium, or Long"
    )
    private String length;

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getLength() {
        return length;
    }

    public void setLength(String length) {
        this.length = length;
    }
}