
import { useSession, useConversation, useCameraStream, useConversationStreams, VideoStream } from '@apirtc/react-lib'
import './App.css';

function App() {

//Get a connection session to ApiRTC Video platform
const { session } = useSession({ apiKey: 'INSERT_YOUR_API_KEY_HERE' }); // Get an account on cloud.apirtc.com and retrieve your Api Key.

//Grab the local camera video and audio stream
const { stream: localStream } = useCameraStream(session);

// Get the conversation stateful object
const { conversation } = useConversation(session, 'conversationName', undefined, true);

// Get the list of streams exchanged in the conversation
const { subscribedStreams } = useConversationStreams(conversation, localStream ? [{ stream: localStream }] : []);


  return (
    <div className="App">
      <header className="App-header">
        <div id="mememe-container">
        <h2>Local Streams</h2>
        { localStream && <VideoStream stream={localStream} muted={true}></VideoStream> }
        </div>
        <div id='remote-streams-container'>
          <h2>Remote Streams</h2>
          { 
            subscribedStreams.map( (stream, index) =>{
              return (<VideoStream stream={stream} muted={false} key={index}></VideoStream>)
            })
          }
        </div>
      </header>
    </div>
  );
}

export default App;
