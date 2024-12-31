/* General Styles */
body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background: #121212;
    color: white;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
}

/* Header */
.header {
    background: linear-gradient(90deg, #4a00e0, #8e2de2);
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    position: sticky;
    top: 0;
    z-index: 1000;
}

.logo {
    height: 50px;
}

.brand-name {
    font-size: 1.8rem;
    font-weight: bold;
    animation: glow 1.5s infinite alternate;
}

/* Menu Bar */
.menu-bar {
    position: relative;
}

.menu-toggle {
    background: linear-gradient(45deg, #4a00e0, #8e2de2);
    color: white;
    font-size: 1rem;
    font-weight: bold;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    animation: glow 1.5s infinite alternate;
}

.menu-options {
    list-style: none;
    margin: 0;
    padding: 10px 0;
    position: absolute;
    top: 50px;
    right: 0;
    background: #222;
    border: 1px solid #555;
    display: none;
}

.menu-options li {
    margin: 10px 0;
    text-align: center;
}

.menu-options li a {
    text-decoration: none;
    color: white;
    font-size: 1rem;
    transition: color 0.3s;
}

.menu-options li a:hover {
    color: #ffc107;
}

/* Footer */
.footer {
    background: linear-gradient(90deg, #4a00e0, #8e2de2);
    text-align: center;
    padding: 20px;
}

.footer-links a {
    color: white;
    text-decoration: none;
    margin: 0 15px;
    font-size: 1rem;
    font-weight: bold;
    transition: color 0.3s ease;
}

.footer-links a:hover {
    color: #ffc107;
}
