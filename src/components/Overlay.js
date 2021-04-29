import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
// import IconButton from '@material-ui/core/IconButton';

import { VIDEO_IDS, getVideoThumbnailSrc } from '../videos';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: 'black',
    opacity: 0.9,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  gridList: {
    width: '80vw',
    height: '80vh',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  appBarSpacer: theme.mixins.toolbar,
  subHeader: {
      textAlign: 'center',
      color: 'white'
  },
}));

export default function TitlebarGridList({ hideOverlay, switchChannel }) {
  const classes = useStyles();
  const vidNames = Object.keys(VIDEO_IDS);

  const handleTileClick = (_, vidName) => {
    switchChannel(vidName);
    hideOverlay();
  };

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader className={classes.subHeader} component="div">Set the mood for the evening</ListSubheader>
        </GridListTile>
        {vidNames.map((vidName) => (
          <GridListTile key={vidName} onClick={(event) => handleTileClick(event, vidName)}>
            <img src={getVideoThumbnailSrc(VIDEO_IDS[vidName])} alt={`${vidName} video thumbnail`}/>
            <GridListTileBar
              title={vidName}
            //   subtitle={<span>by: {index}</span>}
            //   actionIcon={
            //     <IconButton aria-label={`info about`} className={classes.icon}>
            //     </IconButton>
            //   }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
