# Exercise 0.4

```mermaid
sequenceDiagram
    participant user
    participant browser
    participant server

    user->>browser: Writes note text and clicks Save button

    browser->>server: POST /exampleapp/new_note
    activate server

    server-->>browser: Redirect to /exampleapp/notes

    deactivate server

    browser->>server: GET /exampleapp/notes
    activate server

    server-->>browser: HTML document

    deactivate server

    browser->>server: GET /exampleapp/main.css
    activate server

    server-->>browser: CSS file

    deactivate server

    browser->>server: GET /exampleapp/main.js
    activate server

    server-->>browser: JavaScript file

    deactivate server

    browser->>server: GET /exampleapp/data.json
    activate server

    server-->>browser: JSON data containing notes

    deactivate server