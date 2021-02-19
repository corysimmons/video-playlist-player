import { useState, useEffect } from 'react'
import axios from 'axios'
import ReactPlayer from 'react-player'
import isVideo from 'is-video'
import natsort from 'natsort'

function App () {
  const [files, setFiles] = useState([])
  const [selectedVid, setSelectedVid] = useState()

  useEffect(() => {
    axios('http://localhost:1338')
      .then(x => {
        const _files = x.data.filter(z => isVideo(z)).sort(natsort())
        setFiles(_files)
        setSelectedVid(_files[0])
      })
  }, [])

  if (!files) return null

  return (
    <main>
      <div className="vid">{selectedVid && <ReactPlayer width="100%" height="100%" playing controls url={`/PUT_VIDEOS_IN_HERE/${selectedVid}`} />}</div>
      <nav>
        {files.map((x, i) => <button key={i} onClick={() => setSelectedVid(x)} className={selectedVid === x && 'active'}>{x}</button>)}
      </nav>
    </main>
  )
}

export default App
