// Importing Dependencies
import './App.css';
import { useState, useEffect } from 'react';
import Gallery from './Gallery';
import ButtonBar from './ButtonBar';


function App() {
  let [data, setData] = useState({})
  let [artId, setArtId] = useState(6000)
  
  useEffect(() => {
    document.title = `Art ID: ${artId}`
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
    .then(response => response.json())
    .then(resData => setData(resData))
  }, [artId])
  
  const handleIterate = (e) => {
    setArtId(artId + Number(e.target.value))
  }

  return (
    <div className="App">
      <Gallery
        primaryImage={data.primaryImage}
        objectID={data.objectID}
        title={data.title}
        artistDisplayName={data.artistDisplayName}
        medium={data.medium}
        culture={data.culture}
      />
      <ButtonBar 
        updateId={handleIterate}
      />
    </div>
  );
}

export default App;