CREATE TABLE quiz (
  id integer primary key,
  title text,
  answer1 text,
  answer2 text,
  answer3 text,
  answer4 text,
  correct integer
);

insert into quiz (title, answer1, answer2, answer3, answer4, correct) values ('question', 'a', 'b', 'c', 'd', 2);