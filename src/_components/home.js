import React from 'react'
import {Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <Link to="/postsdisplay">Display</Link>
            <Link to="/addpost">Addpost</Link>
        </div>
    )
}
