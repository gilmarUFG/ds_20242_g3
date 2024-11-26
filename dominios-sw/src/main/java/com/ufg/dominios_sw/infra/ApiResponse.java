package com.ufg.dominios_sw.infra;

public record ApiResponse<T>(
        int status,
        String message,
        long timestamp,
        T data
) {
    public ApiResponse(int status, String message, T data) {
        this(status, message, System.currentTimeMillis(), data);
    }

    public ApiResponse(int status, T data) {
        this(status, null, System.currentTimeMillis(), data);
    }
}