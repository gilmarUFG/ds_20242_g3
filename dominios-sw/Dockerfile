FROM openjdk:17-jdk-slim

WORKDIR /app

COPY build/libs/dominios-sw-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
