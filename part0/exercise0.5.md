# Exercise 0.5

```mermaid
sequenceDiagram
    participant user
    participant browser
    participant server

    user->>browser: Open https://studies.cs.helsinki.fi/exampleapp/spa

    browser->>server: GET /exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET /exampleapp/spa.js
    activate server
    server-->>browser: JavaScript file
    deactivate server

    Note right of browser: Browser starts executing JavaScript

    browser->>server: GET /exampleapp/data.json
    activate server
    server-->>browser: JSON data containing notes
    deactivate server

    Note right of browser: JavaScript renders notes on the page
```