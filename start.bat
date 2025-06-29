@echo off
mvn spring-boot:run -Dspring-boot.run.jvmArguments="-javaagent:%IDEA_HOME%\lib\idea_rt.jar=49815"
pause