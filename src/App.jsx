import { useState } from 'react';

function App() {
  const [selected, setSelected] = useState(null);

  const shareLinks = {
    bild1: 'https://<USERNAME>.github.io/linkedin-share-demo/share/bild1/',
    bild2: 'https://<USERNAME>.github.io/linkedin-share-demo/share/bild2/',
  };

  const handleShare = () => {
    if (!selected) return;
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      shareLinks[selected]
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Teile dein Jahresziel!</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
        <img
          src="/assets/bild1.png"
          alt="Bild 1"
          width={200}
          onClick={() => setSelected('bild1')}
          style={{
            border: selected === 'bild1' ? '4px solid blue' : '2px solid gray',
            cursor: 'pointer',
          }}
        />
        <img
          src="/assets/bild2.png"
          alt="Bild 2"
          width={200}
          onClick={() => setSelected('bild2')}
          style={{
            border: selected === 'bild2' ? '4px solid blue' : '2px solid gray',
            cursor: 'pointer',
          }}
        />
      </div>
      <button
        onClick={handleShare}
        disabled={!selected}
        style={{ marginTop: '2rem', padding: '0.5rem 1rem' }}
      >
        Auf LinkedIn teilen
      </button>
    </div>
  );
}

export default App;
