import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { useState } from 'react';
import { storage } from './firebase'
import './App.css'

function App() {
  const [imgURL, setImgURL ] = useState("");
  const [progress, setProgress] = useState();

  const handleUpload = (event) => {
    event.preventDefault();
    const file = event.target[0]?.files[0];
    if(!file) return;

    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress)
      }, 
      error => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(url => {
          setImgURL(url)
        })
      }
    )
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleUpload}>
          <input type="file" />
          <button type= "submit">Enviar</button>
        </form>
        <br />
        {!imgURL && <progress value={progress} max="100" />}
        {imgURL && <img src={imgURL} alt="Imagem " height={200}/>}
      </header>
    </div>
  )
}

export default App
