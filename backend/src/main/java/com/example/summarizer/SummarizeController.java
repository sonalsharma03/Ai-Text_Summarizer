
package com.example.summarizer;

import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api")
public class SummarizeController {

    private final SummarizeService summarizeService;

    public SummarizeController(SummarizeService summarizeService) {
        this.summarizeService = summarizeService;
    }

    @PostMapping("/summarize")
    public SummarizeResponse summarize(
            @Valid @RequestBody SummarizeRequest request) {

        String summary = summarizeService.summarizeText(
                request.getText(),
                request.getLength()
        );

        return new SummarizeResponse(summary);
    }
}
