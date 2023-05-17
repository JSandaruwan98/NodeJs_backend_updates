# NodeJs_backend_updates

Endpoint: User registration
	
	URI: localhost:3000/api/users/register
	request payload (json): 
		{
			"name": "lakmal Hasalanka",
			"email": "hasalanka@xyz.com",
			"password": "password123"
		}
	response format(json):
		{
    			"message": "User registered successfully",
    			"user": {
        			"name": "lakmal Hasalanka",
        			"email": "hasalanka@xyz.com",
        			"password": "$2b$10$j7rgtk5uaeH7qul7YBd7luLfFQrDwzj41.gz3wEW0z6e5cnEUJL2C",
        			"_id": "6464ac475017acb474356962",
        			"__v": 0
    			}
		}


Endpoint: User login

	URI: localhost:3000/api/users/login
	request payload (json): 
		{
			"email": "hasalanka@xyz.com",
  			"password": "password123"
		}
	response format(json):
		{
    			 "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
				eyJ1c2VySWQiOiI2NDY0YWM0NzUwMTdhY2I0NzQzNTY5NjIiLCJpYXQiOjE2ODQzMTkzMzJ9.
				wroejXW39i03P2oiWinTo6AZTyhKWbNgiLK-n_9WAvg"
		}


Authentication: For authentication, the JWT token is included in the "authorization" header of subsequent requests using the Bearer Token method.
	
	URI: localhost:3000/api/users/profile
	response format(json):
		{
    			"user": {
        			"_id": "6464ac475017acb474356962",
        			"name": "lakmal Hasalanka",
        			"email": "hasalanka@xyz.com",
        			"password": "$2b$10$j7rgtk5uaeH7qul7YBd7luLfFQrDwzj41.gz3wEW0z6e5cnEUJL2C",
        			"__v": 0
    			}
		}
    
postman collection: https://api.postman.com/collections/27460792-c84f088b-989b-4055-932c-492d4063405b?access_key=PMAT-01H0MM8DRWX28F0F8B3E16Z224
