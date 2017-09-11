# beninca-spring-boot-reactjs

### Conceito

A ideia do projeto é conseguir executar a aplicação tanto no tomcat embarcado como no jboss eap7. Alem disso com a configuração correta do webpack(já realizada) é possivel ter o desenvolvimento com hotdeploy tanto da camada spring-boot como da camada reactjs.

### profiles

beninca-spring-boot: execução do tomcat em memoria, para desenvolvimento do backend com hotdeploy
beninca-spring-boot-webpack-dev-server: execução do webpack-server para desenvolvimento com hotdeploy da camada frontend. Pode ser substituido por "npm run build-dev".

beninca-spring-boot-package: gerar o .war, para ser executado por linha de comando ou fazer deploy manual em algum servidor de aplicação.
beninca-spring-boot-jboss7: gerar o .war e faz deploy no servidor jboss eap7. 



 