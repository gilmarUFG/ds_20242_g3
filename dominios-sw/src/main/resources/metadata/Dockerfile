FROM postgres:15
COPY 01_dump.sql /docker-entrypoint-initdb.d/
COPY 02_add_comment_column.sql /docker-entrypoint-initdb.d/