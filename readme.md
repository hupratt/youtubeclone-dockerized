## recover DB

docker exec -it -u postgres youtubeclone-dockerized-postgres-1 bash

CREATE ROLE ubuntu WITH LOGIN PASSWORD 'XXXXXXXXXXXXXXXXXXXXXXXX';

GRANT ALL PRIVILEGES ON DATABASE youtubeclone to ubuntu;

\q

psql youtubeclone < youtubeclone_22-09-2024.bak

exit 

docker compose down

docker compose up -d