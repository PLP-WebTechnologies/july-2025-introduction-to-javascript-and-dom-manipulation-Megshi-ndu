document.addEventListener('DOMContentLoaded', function () {
    const ageInput = document.getElementById('ageInput');
    const checkButton = document.getElementById('checkAge');
    const result = document.getElementById('result');

    function age() {
        const ageValue = Number(ageInput.value);
        let message = "";
        if (ageValue < 0) {
            message = "That's not a valid age!";
        } else if (ageValue < 13) {
            message = "You're a child!";
        } else if (ageValue < 18) {
            message = "You're a teenager!";
        } else if (ageValue < 65) {
            message = "You're an adult!";
        } else {
            message = "You're a senior!";
        }
        result.textContent = message;
        console.log(message);
    }

    checkButton.addEventListener('click', age);
    ageInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            age();
        }
    });
});

// 1. Calculate total with optional tax
function calculateTotal(prices, taxRate = 0) {
    if (!prices) {
        // Get values from inputs if not provided
        const pricesInput = document.getElementById('prices').value;
        prices = pricesInput.split(',').map(price => parseFloat(price.trim()));
        taxRate = parseFloat(document.getElementById('tax').value) || 0;
    }

    const subtotal = prices.reduce((sum, price) => sum + price, 0);
    const taxAmount = subtotal * (taxRate / 100);
    const total = subtotal + taxAmount;

    // If called without UI, return the result
    if (!document.getElementById('totalResult')) {
        return { subtotal, taxAmount, total };
    }

    // Display result in UI
    document.getElementById('totalResult').innerHTML = `
                <strong>Subtotal:</strong> $${subtotal.toFixed(2)}<br>
                <strong>Tax (${taxRate}%):</strong> $${taxAmount.toFixed(2)}<br>
                <strong>Total:</strong> $${total.toFixed(2)}
            `;

    return { subtotal, taxAmount, total };
}

// 2. Format name with proper capitalization
function formatName(firstName, lastName) {
    if (!firstName) {
        // Get values from inputs if not provided
        firstName = document.getElementById('firstName').value;
        lastName = document.getElementById('lastName').value;
    }

    const formattedName = `${firstName.trim().charAt(0).toUpperCase() + firstName.trim().slice(1).toLowerCase()} ${lastName.trim().charAt(0).toUpperCase() + lastName.trim().slice(1).toLowerCase()}`;

    // If called without UI, return the result
    if (!document.getElementById('nameResult')) {
        return formattedName;
    }

    // Display result in UI
    document.getElementById('nameResult').textContent = formattedName;
    return formattedName;
}

// 3. Toggle content visibility
function toggleContent(elementId) {
    let contentElement;

    if (!elementId) {
        // Use default if no element ID provided
        contentElement = document.getElementById('toggleContent');
    } else {
        contentElement = document.getElementById(elementId);
    }

    if (!contentElement) {
        console.error('Element not found');
        return false;
    }

    const isHidden = contentElement.classList.contains('hidden');

    if (isHidden) {
        contentElement.classList.remove('hidden');
        if (document.getElementById('toggleButton')) {
            document.getElementById('toggleButton').textContent = 'Hide Content';
        }
    } else {
        contentElement.classList.add('hidden');
        if (document.getElementById('toggleButton')) {
            document.getElementById('toggleButton').textContent = 'Show Content';
        }
    }

    return !isHidden; // Return new state
}

// 4. Switch between tabs
function switchTab(tabIndex) {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    // Remove active class from all tabs and contents
    tabs.forEach(tab => tab.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Add active class to selected tab and content
    tabs[tabIndex].classList.add('active');
    tabContents[tabIndex].classList.add('active');
}

// 5. Validate email format
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// 6. Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

// 7. Debounce function for limiting API calls or expensive operations
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}
// Example usage of debounce
const handleResize = debounce(() => {
    console.log('Window resized');
}, 300);

// Arrays to work with
const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
const languages = ['JavaScript', 'Python', 'Java', 'C#', 'Ruby', 'Go'];

// 1. For Loop - Print fruits
function printFruits() {
    const resultElement = document.getElementById('forLoopResult');
    resultElement.innerHTML = '';

    for (let i = 0; i < fruits.length; i++) {
        const paragraph = document.createElement('p');
        paragraph.textContent = `${i + 1}. ${fruits[i]}`;
        resultElement.appendChild(paragraph);
    }
}

// 2. While Loop - Countdown
function startCountdown() {
    const countdownElement = document.getElementById('countdown');
    let count = 5;

    // Reset to initial state
    countdownElement.textContent = count;
    countdownElement.style.backgroundColor = '#2c3e50';

    const countdownInterval = setInterval(() => {
        count--;

        if (count >= 0) {
            countdownElement.textContent = count;

            // Change color as it gets closer to zero
            if (count <= 1) {
                countdownElement.style.backgroundColor = '#e74c3c';
            } else if (count <= 3) {
                countdownElement.style.backgroundColor = '#f39c12';
            }
        }

        if (count < 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = 'Liftoff! 🚀';
            countdownElement.style.backgroundColor = '#27ae60';
        }
    }, 1000);
}

// 3. ForEach Loop - Display languages
function showLanguages() {
    const listElement = document.getElementById('forEachResult');
    listElement.innerHTML = '';

    languages.forEach((language, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${language}`;
        listElement.appendChild(listItem);
    });
}

// 4. Animated Progress Bar
function animateProgress() {
    const progressElement = document.getElementById('progress');
    const progressResult = document.getElementById('progressResult');
    let width = 0;

    // Reset progress
    progressElement.style.width = '0%';
    progressResult.textContent = '0% Complete';

    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            progressResult.textContent = 'Complete! ✅';
        } else {
            width += 2;
            progressElement.style.width = width + '%';
            progressResult.textContent = width + '% Complete';
        }
    }, 50);
}

// Bonus: Dynamic content generation with loops
function generateTable() {
    const tableElement = document.getElementById('multiplicationTable');
    tableElement.innerHTML = '';

    // Create multiplication table using nested loops
    for (let i = 1; i <= 10; i++) {
        const row = document.createElement('tr');

        for (let j = 1; j <= 10; j++) {
            const cell = document.createElement('td');
            cell.textContent = i * j;
            row.appendChild(cell);
        }

        tableElement.appendChild(row);
    }
}
// Initialize table on page load
document.addEventListener('DOMContentLoaded', generateTable);
// Event listeners for buttons
document.getElementById('printFruitsBtn').addEventListener('click', printFruits);
document.getElementById('startCountdownBtn').addEventListener('click', startCountdown);
document.getElementById('showLanguagesBtn').addEventListener('click', showLanguages);
document.getElementById('animateProgressBtn').addEventListener('click', animateProgress);
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Element Selection
    const updateTextBtn = document.getElementById('update-text');
    const textInput = document.getElementById('text-input');
    const textResult = document.getElementById('text-result');

    updateTextBtn.addEventListener('click', function () {
        if (textInput.value.trim() !== '') {
            textResult.textContent = textInput.value;
            textInput.value = '';
        } else {
            textResult.textContent = 'Please enter some text first!';
        }
    });

    // Event Listeners
    const clickMeBtn = document.getElementById('click-me');
    const clickResult = document.getElementById('click-result');
    const colorSelect = document.getElementById('color-select');
    const changeColorBtn = document.getElementById('change-color');

    let clickCount = 0;
    clickMeBtn.addEventListener('click', function () {
        clickCount++;
        clickResult.textContent = `Button clicked ${clickCount} time(s)`;

        // Add animation effect
        clickMeBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            clickMeBtn.style.transform = 'scale(1)';
        }, 100);
    });

    changeColorBtn.addEventListener('click', function () {
        document.body.style.backgroundColor = colorSelect.value;

        // Reset after 2 seconds
        setTimeout(() => {
            document.body.style.backgroundColor = '';
        }, 2000);
    });

    // Dynamic Content
    const addUserBtn = document.getElementById('add-user');
    const userNameInput = document.getElementById('user-name');
    const userList = document.getElementById('user-list');

    addUserBtn.addEventListener('click', function () {
        if (userNameInput.value.trim() !== '') {
            const userCard = document.createElement('div');
            userCard.className = 'user-card';

            const userName = document.createElement('span');
            userName.textContent = userNameInput.value;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';

            deleteBtn.addEventListener('click', function () {
                userCard.remove();
            });

            userCard.appendChild(userName);
            userCard.appendChild(deleteBtn);
            userList.appendChild(userCard);

            userNameInput.value = '';
        }
    });

    // Class Toggling
    const toggleContentBtn = document.getElementById('toggle-content');
    const hiddenContent = document.getElementById('hidden-content');
    const borderToggleBtn = document.getElementById('border-toggle');

    toggleContentBtn.addEventListener('click', function () {
        hiddenContent.classList.toggle('hidden');

        if (!hiddenContent.classList.contains('hidden')) {
            toggleContentBtn.textContent = 'Hide Content';
        } else {
            toggleContentBtn.textContent = 'Show Content';
        }
    });

    borderToggleBtn.addEventListener('click', function () {
        document.querySelectorAll('.card').forEach(card => {
            card.style.border = card.style.border ? '' : '2px solid #3498db';
        });
    });

    // Tab Component
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const tabId = this.getAttribute('data-tab');

            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Form Handling
    const submitFormBtn = document.getElementById('submit-form');
    const formResult = document.getElementById('form-result');

    submitFormBtn.addEventListener('click', function () {
        const name = document.getElementById('full-name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            formResult.innerHTML = `
                        <h3>Form Submitted Successfully!</h3>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Message:</strong> ${message}</p>
                    `;

            // Clear form fields
            document.getElementById('full-name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
        } else {
            formResult.innerHTML = '<p>Please fill out all fields!</p>';
        }
    });

    // Theme Switcher
    const themeToggleBtn = document.getElementById('theme-toggle');

    themeToggleBtn.addEventListener('click', function () {
        document.body.classList.toggle('dark-theme');

        if (document.body.classList.contains('dark-theme')) {
            themeToggleBtn.textContent = 'Toggle Light Mode';
        } else {
            themeToggleBtn.textContent = 'Toggle Dark Mode';
        }
    });
});
