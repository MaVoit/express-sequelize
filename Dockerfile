############################################################
# Dockerfile to build Postgres container
#
############################################################

FROM postgres:9.6

ENV POSTGRES_USER foo
ENV POSTGRES_PASSWORD foo
ENV POSTGRES_DB foo_dev

#ADD scripts/createDB.sql /docker-entrypoint-initdb.d/
