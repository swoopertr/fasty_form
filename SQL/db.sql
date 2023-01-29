CREATE TABLE public."User" (
	Id SERIAL primary KEY NOT NULL,
	FirstName varchar(150) NOT NULL,
	LastName varchar(150) NOT NULL,
	Email varchar(150) NOT NULL,
	"Password" varchar(150) NOT NULL,
	"Role" int NOT NULL DEFAULT 2,
    "token" varchar(150) NULL,
	tokenexp timestamp NULL,
	CreatedAt TIMESTAMP NOT NULL DEFAULT now()
);

CREATE TABLE public."Form" (
	Id SERIAL primary KEY NOT NULL,
	FormName varchar(150) NOT NULL,
	CreatedAt TIMESTAMP NOT NULL DEFAULT now()
);

CREATE TABLE public."Questions" (
	Id SERIAL primary KEY NOT NULL,
	FormId INTEGER NOT null,
	Question varchar(150) NOT NULL,
	CreatedAt TIMESTAMP NOT NULL DEFAULT now(),
	foreign key (FormId) references public."Form"(Id)
);

CREATE TABLE public."Answers" (
	Id SERIAL primary KEY NOT NULL,
	QuestionId INTEGER NOT null,
	Answer varchar(150) NOT NULL,
	CreatedAt TIMESTAMP NOT NULL DEFAULT now(),
	foreign key (QuestionId) references public."Questions"(Id)
);