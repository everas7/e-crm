# Overview

E-CRM is a web application that allows users to create/read/edit/delete employees in a payroll.

# Features

- Add employees
- Edit employess
- Delete employees
- View employees

# Anatomy

The project is composed by a client webapp built with Angular and a REST api built on Java Spring Boot.

API Structure

- controllers
- dao
- models
- services

WebApp Structure

- app
  - core
    - models
    - services
    - guards
  - shared
    - layout
    - nav
  - features
    - feature-a
      - _resolvers

# Setting Up Project

## Environment Variables

# Installing Dependencies

WebApp

```
npm install
```

# Running Project

WebApp

```
npm start
```

API

```
./mvnw clean spring-boot:run
```

# Additional Notes

TODO
