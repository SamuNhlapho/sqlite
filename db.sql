create table greetings(
       id integer PRIMARY KEY AUTOINCREMENT,
       language text,
       greeting text
       );

       --DML (database manipulation language)

       select * 
       from greetings;
       select  count(*) 
       from greetings;

       INSERT into greetings (language,greeting) VALUES ('IsiZulu', 'Sawubona');
      
       --add two more languages 
        INSERT INTO greetings (language,greeting) VALUES ('Hindi', 'Namaste');
        INSERT INTO greetings (language,greeting) VALUES ('IsiNdebele', 'Lotjhani');

        --delete a row using 2 methods
        -- 1. delete from greetings where id > 1;
        -- 2. delete from greetings where id in (2,3);