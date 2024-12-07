package com.ufg.dominios_sw.config.docummentation;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.License;

@Configuration
public class OpenAPIConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Documentação da API de Avaliações")
                        .version("1.0")
                        .description("Esta API gerencia avaliações de usuários e filmes.")
                        .contact(new Contact()
                                .name("Amadeu lee")
                                .email("amadeulee@assista-ai.com")
                                .url("https://www.assista-ai"))
                        .license(new License()
                                .name("MIT License")
                                .url("https://choosealicense.com/licenses/mit/")));
    }
}