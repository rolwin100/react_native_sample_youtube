export const GET_VIDEOS = 'GET_VIDEOS';
export const GET_VIDEOS_PENDING = 'GET_VIDEOS_PENDING';
export const GET_VIDEOS_FULLFILLED = 'GET_VIDEOS_FULLFILLED';
export const GET_VIDEOS_REJECTED = 'GET_VIDEOS_REJECTED';

export const getVideos = () => ({
  type: GET_VIDEOS,
});
export const getVideosPending = () => ({
  type: GET_VIDEOS_PENDING,
});

export const getVideosFullfilled = (data) => ({
  type: GET_VIDEOS_FULLFILLED,
  data,
});

export const getVideosRejected = (error) => ({
  type: GET_VIDEOS_REJECTED,
  error,
});
