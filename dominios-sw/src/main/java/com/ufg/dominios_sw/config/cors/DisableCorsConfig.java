//package com.ufg.dominios_sw.config.cors;
//
//import jakarta.servlet.Filter;
//import jakarta.servlet.FilterChain;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.ServletRequest;
//import jakarta.servlet.ServletResponse;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//
//import jakarta.servlet.*;
//import jakarta.servlet.http.HttpServletResponse;
//import java.io.IOException;
//
//@Configuration
//public class DisableCorsConfig {
//
//    @Bean
//    public Filter disableCorsFilter() {
//        return new Filter() {
//            @Override
//            public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
//                    throws IOException, ServletException {
//                HttpServletResponse httpServletResponse = (HttpServletResponse) response;
//                httpServletResponse.setHeader("Access-Control-Allow-Origin", "*");
//                httpServletResponse.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//                httpServletResponse.setHeader("Access-Control-Allow-Headers", "*");
//                chain.doFilter(request, response);
//            }
//        };
//    }
//}
