export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title">TNT</a>
        <ul>
            <li>
                <a href="/tickets">Tickets</a>
            </li>
            <li>
                <a href="/users">Users</a>
            </li>
            <li>
                <a href="/queries">Queries</a>
            </li>
        </ul>
    </nav>
}