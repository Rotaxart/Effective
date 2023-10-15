CREATE TABLE users(
	    id SERIAL,
	    username VARCHAR(100) NOT NULL,
      password VARCHAR(100) NOT NULL,
	    email VARCHAR(100),
	    PRIMARY KEY ("id")
    );

CREATE TABLE history(
	    id SERIAL,
      event VARCHAR(100) NOT NULL,
      user_id INTEGER NOT NULL,
	    PRIMARY KEY (id),
      FOREIGN KEY (user_id) REFERENCES users (id)
    );
