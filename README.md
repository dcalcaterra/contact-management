# Gestione contatti
Sviluppare un'applicazione web minimale per la gestione di una lista contatti. L'applicazione deve permettere di visualizzare una lista di contatti e aggiungere contatti alla lista. Un contatto è costituito da nominativo, email e numero di telefono.

Ci aspetteremmo:
1. scambio dati tra front-end e back-end via API REST
2. front-end realizzato con qualsiasi tecnologia tu voglia
3. back-end realizzato in Java, con framework di tua scelta
4. salvataggio dei contatti in db SQL di tua scelta (anche un DB embedded può fare al caso)
5. containerizzazione dell'applicazione di back-end utilizzando uno a tua scelta tra: Docker, Docker Compose, deploy descriptor K8s
6. che il codice sia condiviso con noi su un repo GitHub, GitLab o altro servizio Git condivisibile di tua scelta

Organizzazione del repository
-----

Il repository è organizzato come segue:

* **backend** : la cartella contiene il codice sorgente del backend realizzato con Spring Boot

* **db** : la cartella contiene il dump del database MySQL utilizzato dal back-end

* **frontend** : la cartella contiene il codice sorgente del front-end realizzato in React

* **docker-compose.yml** : il file contiene la definizione dei servizi per il deployment della piattaforma

Prerequisiti
-----

Si presuppone l'installazione di [Docker](http://www.docker.io/gettingstarted/#h_installation) e [Maven](https://maven.apache.org/install.html).

Istruzioni
-----

1. Costruire il file jar del back-end

        cd backend
        mvn clean package -Dmaven.test.skip=true
        
2. Costruire le immagini del back-end e del front-end ed eseguire il deployment

        cd ..
        docker-compose up 

3. Collegarsi a [http://localhost:8080/](http://localhost:8080/) sulla macchina locale.

4. Accedere alla piattaforma 

        * **username** : Domenico
        * **password** : dOm3n1c0

5. Dopo l'accesso, l'utente può visualizzare, aggiungere e rimuovere i propri contatti.

