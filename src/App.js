import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Navbar from './components/Navbar';

const VIDEO_IDs = {
  'lofi-girl': '5qap5aO4i9A',
  'tokyo-cafe': '6uddGul0oAc'
};

const useStyles = makeStyles((theme) => ({
  app: {
    height: '100vh',
    backgroundColor: 'black'
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    textAlign: 'center'
  },
  appBarSpacer: theme.mixins.toolbar,
  videoPlayer: {
    width: 800,
    height: 450,
    pointerEvents: 'none'
  }
}));

function App() {
  const classes = useStyles();
  const [videoId, setVideoId] = useState(VIDEO_IDs['lofi-girl']);
  let iframeSrc = `https://www.youtube.com/embed/${videoId}?controls=0&autoplay=1&disablekb=1&modestbranding=1&rel=0`;

  const onChannelClicked = (name) => {
    setVideoId(VIDEO_IDs[name]);
  };

  return (
    <div className={classes.app}>
      <Navbar onChannelClicked={onChannelClicked}/>
      <Container maxWidth="md" className={classes.container}>
        <div className={classes.appBarSpacer} />
        <iframe className={classes.videoPlayer} src={iframeSrc} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </Container>
    </div>
  );
}

export default App;
