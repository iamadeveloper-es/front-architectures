# Arquitectura Hexagonal o Arquitectura de Puertos y Adaptadores

### Referencias y fuentes
- [Arquitectura Hexagonal en el FrontEnd](https://softwarecrafters.io/react/arquitectura-hexagonal-frontend).

### Finalidad:
- Dividir la aplicación en distintas capas, permitiendo su evolución de manera aislada y responsabilizando a cada entidad de una 
funcionalidad única. En caso de realizar un cambio tecnológico en nuestra aplicación, sólo se verá afectada la capa externa (adaptador).

![alt text](https://gist.githubusercontent.com/adrian-afergon/52d0f1cc95d7dcf3bcf33b98a4c688dd/raw/b20666a3be59156ab2fc26ee7b3c7816cf125b6c/infrastructure.png)

## Capas:
- Dominio o Core
    - Contendrá las reglas y la lógica de negocio
- Puerto
    - Es la interfaz que deberán implementar las distintas variantes de nuestro código
- Adaptadores
    - Implementan la interfaz (los puertos) 