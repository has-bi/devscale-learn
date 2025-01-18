////////////////////////
// PART 1: ASYNC/SYNC //
////////////////////////

// setTimeout() Method
// What: Executes a function after a specified delay
// Parameters: callback function, delay in milliseconds
// Returns: timeout ID
setTimeout(() => {
    console.log("Delayed message");
}, 1000);

// Promise
// What: Object representing eventual completion of async operation
// States: pending, fulfilled, rejected
const myPromise = new Promise((resolve, reject) => {
    // resolve() - call when successful
    // reject() - call when error occurs
    if (successCondition) {
        resolve("Success data");
    } else {
        reject("Error message");
    }
});

// async/await
// What: Cleaner way to handle promises
// async: Declares function returns a promise
// await: Pauses execution until promise resolves
async function getData() {
    const result = await myPromise; // waits for promise to resolve
    return result;
}

//////////////////////////////
// PART 2: NETWORK REQUESTS //
//////////////////////////////

// fetch() Method
// What: Modern API for making HTTP requests
// Parameters: URL, options object
// Returns: Promise that resolves to Response object
fetch('https://api.example.com/data', {
    method: 'POST',            // HTTP method
    headers: {                 // Request headers
        'Content-Type': 'application/json',
        'Authorization': 'Bearer token'
    },
    body: JSON.stringify(data) // Request body
});

// Response object methods
// .json() - Parse JSON response
// .text() - Get response as text
// .blob() - Handle binary data
// .formData() - Handle form data
const response = await fetch(url);
const jsonData = await response.json();

////////////////////////////
// PART 3: ERROR HANDLING //
////////////////////////////

// try/catch/finally
// try: Attempts to execute code that might fail
// catch: Handles any errors that occur
// finally: Always executes, regardless of outcome
try {
    riskyOperation();
} catch (error) {
    // Error object properties:
    console.log(error.message);  // Error message
    console.log(error.name);     // Error type
    console.log(error.stack);    // Stack trace
} finally {
    cleanup();
}

// Custom Error
// What: Create specific error types
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

//////////////////////////////
// PART 4: DOM MANIPULATION //
//////////////////////////////

// Element Selection Methods
// getElementById
// What: Finds element by ID attribute
// Returns: Single element or null
const element = document.getElementById('myId');

// querySelector
// What: Finds first element matching CSS selector
// Returns: Single element or null
const element = document.querySelector('.class');

// querySelectorAll
// What: Finds all elements matching CSS selector
// Returns: NodeList (array-like object)
const elements = document.querySelectorAll('.class');

// Element Creation and Modification
// createElement
// What: Creates new DOM element
// Returns: New element
const div = document.createElement('div');

// Element Properties and Methods
element.textContent = 'text';     // Set text content
element.innerHTML = '<p>html</p>'; // Set HTML content (use carefully)
element.setAttribute('id', 'myId'); // Set attribute
element.classList.add('class');     // Add CSS class
element.style.color = 'red';        // Set CSS style

// DOM Tree Manipulation
parentElement.appendChild(child);    // Add child at end
parentElement.insertBefore(new, ref); // Insert before reference
element.remove();                    // Remove element
parentElement.replaceChild(new, old); // Replace element

////////////////////
// PART 5: EVENTS //
////////////////////

// addEventListener
// What: Attaches event handler to element
// Parameters: event type, callback function, options
element.addEventListener('click', (event) => {
    // Event object properties
    event.target;           // Element that triggered event
    event.currentTarget;    // Element handling event
    event.preventDefault(); // Prevent default behavior
    event.stopPropagation(); // Stop event bubbling
}, {
    once: true,            // Run once only
    capture: false,        // Event phase
    passive: true          // Performance optimization
});

// Common Event Types
// Mouse: click, dblclick, mouseenter, mouseleave
// Keyboard: keydown, keyup, keypress
// Form: submit, change, input
// Document: DOMContentLoaded, load
// Window: resize, scroll

// Event Delegation
// What: Handle events on parent for dynamic children
document.getElementById('parent').addEventListener('click', (event) => {
    if (event.target.matches('.child-class')) {
        // Handle child element click
    }
});

// Example combining everything
class UserInterface {
    constructor() {
        this.container = document.getElementById('app');
        this.setupEventListeners();
    }

    async initialize() {
        try {
            await this.loadData();
            this.render();
        } catch (error) {
            this.handleError(error);
        }
    }

    setupEventListeners() {
        // Event delegation
        this.container.addEventListener('click', (event) => {
            const button = event.target.closest('.button');
            if (button) {
                this.handleButtonClick(button.dataset.action);
            }
        });

        // Form submission
        document.getElementById('userForm')?.addEventListener('submit', 
            async (event) => {
                event.preventDefault();
                await this.handleSubmit(event);
            }
        );
    }

    async loadData() {
        const response = await fetch('/api/data');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    }

    render() {
        // Create elements
        const element = document.createElement('div');
        element.classList.add('user-container');
        
        // Add content
        element.innerHTML = `
            <h2>${this.data.title}</h2>
            <p>${this.data.description}</p>
        `;
        
        // Update DOM
        this.container.appendChild(element);
    }

    handleError(error) {
        console.error('Application error:', error);
        
        const errorElement = document.createElement('div');
        errorElement.classList.add('error');
        errorElement.textContent = 'An error occurred. Please try again.';
        
        this.container.appendChild(errorElement);
    }
}