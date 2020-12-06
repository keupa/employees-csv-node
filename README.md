# Employee CSV Node

### About
Node application that reads a CSV file of employees and returns information based on two queries.
- Search by ID (required): outputs employee information based in their ID.
- Search by field (optional): outputs the value of the input field.

### Requirements
- Node.
- CLI

### Installation
Clone the repository

    https://github.com/keupa/employees-csv-node.git

@ the employees-csv-node directory: 

    node index.js <ID> <FIELD_QUERY> 

### CLI Usage

Search by ID (1 to 10):

    node index.js <ID>
    

Search by field:

    node index.js <ID> <FIELD_QUERY>

Available fields: 

-id
-first_name
-last_name
-email
-ip_address


This exercise was made as part of the Rockstar program @enroute :-) 
