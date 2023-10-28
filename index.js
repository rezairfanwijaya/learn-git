// Sample user data
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    { username: 'user3', password: 'password3' }
];

// Function to check if user exists and password is correct
function login(username, password) {
    const user = users.find(user => user.username === username);
    if (!user) {
        return 'User not found';
    }
    if (user.password !== password) {
        return 'Incorrect password';
    }
    return 'Login successful';
}

// Example usage
console.log(login('user1', 'password1')); // Output: Login successful
console.log(login('user2', 'wrongpassword')); // Output: Incorrect password
console.log(login('nonexistentuser', 'password')); // Output: User not found
