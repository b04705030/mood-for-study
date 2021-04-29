import { useState, useLayoutEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { getVideoSrc } from './videos';
import Overlay from './components/Overlay'; 
import Navbar from './components/Navbar';


const VIDEO_IDs = {
  'lofi-girl': '5qap5aO4i9A',
  'tokyo-cafe': '6uddGul0oAc',
  'fireplace-thunderstorm': '3sL0omwElxw',
  'forest': 'xNN7iTA57jM'
};

const useStyles = makeStyles((theme) => ({
  app: {
    height: '100vh',
    backgroundColor: 'black'
  },
  container: {
    margin: 0,
    padding: 0,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    // textAlign: 'center'
  },
  appBarSpacer: theme.mixins.toolbar,
  videoPlayer: {
    width: '100vw',
    height: '16vw'
    // height: window.innerWidth * 9 / 16,
    // pointerEvents: 'none'
  }
}));

function App() {
  const classes = useStyles();
  // const [playerHeight, setPlayerHeight] = useState(window.innerWidth);
  const [overlay, setOverlay] = useState(true);
  const [videoId, setVideoId] = useState(VIDEO_IDs['lofi-girl']);
  let vidSrc = getVideoSrc(videoId);

  const switchChannel = (name) => {
    setVideoId(VIDEO_IDs[name]);
  };

  const showOverlay = (val) => {
    setOverlay(val);
  };

  return (
    <div className={classes.app}>
      { overlay ?
        <Overlay hideOverlay={() => showOverlay(false)} switchChannel={switchChannel}/> :
        <Navbar showOverlay={() => showOverlay(true)}/>
      }
      <Container className={classes.container}>
        <div className={classes.appBarSpacer} />
        <iframe className={classes.videoPlayer} src={vidSrc} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </Container>
    </div>
  );
}

export default App;
