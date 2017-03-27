CREATE TABLE foobar (
        id          char(5) CONSTRAINT foobar_id_pk PRIMARY KEY,
        title       varchar(100) NOT NULL,
        createdDate timestamp DEFAULT current_timestamp,
        updatedDate timestamp DEFAULT current_timestamp
);
