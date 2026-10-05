import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header class="header">
            <Link to="/">
            Home | 
            </Link>

            <Link to="/counter">
            Counter |
            </Link>

            <Link to="/content">
            Content |
            </Link>

            <Link to="/products">
                Products
            </Link>
            <h1>📚 Student Dashboard</h1>
            <p>Manage your daily tasks</p>
        </header>
    )
}