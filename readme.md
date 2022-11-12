# Endpoint

## GET

- /users
- /users/:id/friends
- /users/:id/enemies

## POST

- /users/signin

# Models

## USER

- id: String
- name: String
- image?: String
- contacts {
  -friends: String[]
  -enemies: String[]
  }
