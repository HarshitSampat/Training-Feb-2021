

			---------------- instagram ---------------

CREATE TABLE Users
(
	UserId VARCHAR(20) PRIMARY KEY,
	UserName VARCHAR(20),
	Email VARCHAR(20),
	PhoneNo INT,
	Location VARCHAR(20),
	BirthDate Date,
	gender VARCHAR(20)
)

--DROP TABLE Users

--DISABLE TRIGGER ALL ON DATABASE;

CREATE TABLE Followers
(
	FUserId VARCHAR(20) CONSTRAINT FKID FOREIGN KEY REFERENCES Users(UserId),
	FollowerId VARCHAR(20) PRIMARY KEY
)
CREATE TABLE Following
(
	FUserId VARCHAR(20) CONSTRAINT FKID1 FOREIGN KEY REFERENCES Users(UserId),
	FollowingId VARCHAR(20) PRIMARY KEY
)

SELECT * FROM Users
SELECT * FROM Followers
SELECT * FROM Following

CREATE TABLE Posts
(
	PUserId VARCHAR(20) CONSTRAINT FKID2 FOREIGN KEY REFERENCES Users(UserId),
	PostId VARCHAR(20) PRIMARY KEY,
	PostDate datetime
)

CREATE TABLE PostLikes
(
	PLPostId VARCHAR(20) CONSTRAINT FKPL2 FOREIGN KEY REFERENCES Posts(PostId),
	PLUserId VARCHAR(20) CONSTRAINT FKID3 FOREIGN KEY REFERENCES Users(UserId),
	LikeDate datetime
)
ALTER TABLE PostLikes DROP CONSTRAINT FKID3;

CREATE TABLE PostComments
(
	PostId VARCHAR(20) CONSTRAINT FKPL3 FOREIGN KEY REFERENCES Posts(PostId),
	PCUserId VARCHAR(20) CONSTRAINT FKID4 FOREIGN KEY REFERENCES Users(UserId),
	CommentId VARCHAR(20) PRIMARY KEY,
	CommentContent VARCHAR(20),
	CommentDate datetime
)
ALTER TABLE PostComments DROP CONSTRAINT FKID4;

CREATE TABLE CommentLike
(
	CommentId VARCHAR(20) CONSTRAINT FKCID FOREIGN KEY REFERENCES PostComments(CommentId),
	CLUserId VARCHAR(20) CONSTRAINT FKID5 FOREIGN KEY REFERENCES Users(UserId),
	CommentLike datetime
)
ALTER TABLE CommentLike DROP CONSTRAINT FKID5;