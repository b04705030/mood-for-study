export const VIDEO_IDS = {
    'lofi-girl': '5qap5aO4i9A',
    'tokyo-cafe': '6uddGul0oAc',
    'fireplace-thunderstorm': '3sL0omwElxw',
    'forest': 'xNN7iTA57jM'
};

export const getVideoThumbnailSrc = (videoId) => {
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}; // mqdefault: 320px, hqdefault: 480px, sddefault: 640px

export const getVideoSrc = (videoId) => {
    return `https://www.youtube.com/embed/${videoId}?controls=1&autoplay=1&disablekb=0&modestbranding=1&rel=0&loop=1`;
};