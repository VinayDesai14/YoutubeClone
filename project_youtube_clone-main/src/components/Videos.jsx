import React from "react";
import { Stack, Box, Grid } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({ videos, direction }) => {
  if(!videos?.length) return <Loader />;
  
  return (
    <Stack  direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {videos.map((item, idx) => (
        <Grid key={idx} >
          {item.id.videoId &&<Grid md={3}> <VideoCard video={item}  /></Grid> }
          {item.id.channelId &&<Grid md={3}> <ChannelCard channelDetail={item} /></Grid>}
        </Grid>
      ))}
    </Stack>
    
  );
}

export default Videos;
