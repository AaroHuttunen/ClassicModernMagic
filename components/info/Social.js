import React from "react";
import './Social.css';

const Social = ({ }) => {
    return (
        <section id="social" className="section">
            <h2>Join Our Community</h2>
            <p>
                Connect with fellow players and be a part of our vibrant community! Here's how you can get involved:
            </p>

            <h3>Discord Server</h3>
            <p>
                Join our Discord server for discussions, decklists, and all the other good stuff!<br></br>
                <a href="https://discord.gg/3beWWDAk" target="_blank" rel="noopener noreferrer">Join the Discord server here.</a>
            </p>

            <h3>Instagram</h3>
            <p>
                Follow us on Instagram for updates, photos, and more!<br></br>
                <a href="https://www.instagram.com/classicmodernmagic/" target="_blank" rel="noopener noreferrer">@classicmodernmagic</a>
            </p>
        </section>
    );
}

export default Social;