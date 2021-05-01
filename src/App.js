import { useState, useLayoutEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { getVideoSrc } from './videos';
import Overlay from './components/Overlay'; 
import Navbar from './components/Navbar';

// TODO: change font family according to different videos

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
  const [video, setVideo] = useState('lofi-girl');
  let vidSrc = getVideoSrc(video);

  const switchChannel = (name) => {
    setVideo(name);
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
