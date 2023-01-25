
import { useSession, useConversation, useCameraStream, useConversationStreams, VideoStream } from '@apirtc/react-lib'
import './App.css';
function App() {

  
const { session } = useSession({ apiKey: 'myDemoApiKey' });
const { localStream } = useCameraStream(session);
const { conversation } = useConversation(session, 'conversationName', undefined, true);
const { publishedStreams, subscribedStreams } = useConversationStreams(
  conversation, localStream ? [{ stream: localStream }] : []);


  return (
    <div className="App">
      <header className="App-header">
        <div id="mememe-container">

        <h2>Local Streams</h2>
        { <VideoStream stream={localStream} muted={true}></VideoStream> }
        <video src={localStream?.getData()}></video>
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
