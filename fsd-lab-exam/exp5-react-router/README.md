# 5. React Router (Home / About / Contact)

> Core idea: **BrowserRouter → Link → Routes → Route**

## ▶ Start (terminal)

```bash
cd "C:\Users\Numan ghori\Desktop\FSD"
npx create-react-app exp5
cd exp5
npm install react-router-dom
```

## 📄 Code: replace src/App.js

```jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
    return <h2>Home Page</h2>;
}

function About() {
    return <h2>About Page</h2>;
}

function Contact() {
    return <h2>Contact Page</h2>;
}

function App() {
    return (
        <BrowserRouter>

            <nav>
                <Link to="/">Home</Link> |
                <Link to="/about">About</Link> |
                <Link to="/contact">Contact</Link>
            </nav>

            <Routes>
                <Route path="/"        element={<Home />} />
                <Route path="/about"   element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

        </BrowserRouter>
    );
}

export default App;
```

## 🏁 End

1. **Ctrl + S**, then in the terminal:

```bash
npm start
```

2. The browser opens **http://localhost:3000**
3. Click Home / About / Contact → the page and the URL change.
4. Stop: **Ctrl + C** in the terminal.
