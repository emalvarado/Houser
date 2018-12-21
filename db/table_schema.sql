create table houses (
id serial primary key,
name varchar(30),
address varchar(100),
city varchar(100),
state varchar(2),
zip integer,
img text,
mortgage decimal,
rent decimal
)

insert into houses (name, address, city, state, zip)
values ('dikembes house', 'not in my', 'house', 'ba', 54321),
('batmans house', 'batcave', 'gotham', 'dc', 23894 ),
('spideysssss', 'aunt mays apt', 'ny', 'ny', 33399)


alter table houses
add column img text,
add column mortgage decimal,
add column rent decimal