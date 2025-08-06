import React, { useState } from "react";

const App = () => {
  const [selectedImage, setSelectedImage] = useState("bild1");

  const shareUrl = `https://mirahoszg.github.io/share-demo/share/${selectedImage}/`;
  const imageUrl = `https://mirahoszg.github.io/share-demo/assets/${selectedImage}.png`;
  const message = "Ich habe mein Jahresziel erreicht! 💪";

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedMessage = encodeURIComponent(message);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Share Demo</h1>

      <div style={{ marginBottom: "1rem" }}>
        <button onClick={() => setSelectedImage("bild1")}>Bild 1 wählen</button>
        <button onClick={() => setSelectedImage("bild2")} style={{ marginLeft: "1rem" }}>
          Bild 2 wählen
        </button>
      </div>

      <img src={imageUrl} alt="Ausgewähltes Bild" width="300" />

      <h2>Teilen</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 Auf LinkedIn teilen
          </a>
        </li>
        <li>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            📘 Auf Facebook teilen
          </a>
        </li>
        <li>
          <a
            href={`https://api.whatsapp.com/send?text=${encodedMessage}%20${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 Auf WhatsApp teilen
          </a>
        </li>
        <li>
          <a href={`mailto:?subject=Mein Jahresziel&body=${encodedMessage}%0A${shareUrl}`}>
            📧 Per E-Mail teilen
          </a>
        </li>
        <li>
          📷 <a href={imageUrl} download>Bild für Instagram herunterladen</a> <br />
          Danach manuell als Beitrag oder Story posten.
        </li>
        <li>
          🎵 <a href="https://www.tiktok.com/upload" target="_blank" rel="noopener noreferrer">TikTok Upload öffnen</a>
          (manuell)
        </li>
      </ul>
    </div>
  );
};

export default App;
