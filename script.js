document.addEventListener('DOMContentLoaded', () => {  
    const videoList = document.getElementById('videoList');  
    const videoPlayer = document.getElementById('videoPlayer');  
    const videoElement = document.getElementById('video');  
  
    // List of video files (you can generate this dynamically if needed)  
    const videos = [  
        { name: 'Video 1', src: 'video/video1.mp4', poster: 'video/poster1.jpg' },  
        { name: 'Video 2', src: 'video/video2.mp4', poster: 'video/poster2.jpg' },  
        { name: 'Video 3', src: 'video/video3.mp4', poster: 'video/poster3.jpg' }  
    ];  
  
    // Populate video list  
    videos.forEach(video => {  
        const videoItem = document.createElement('div');  
        videoItem.className = 'video-item';  
  
        const videoPoster = document.createElement('img');  
        videoPoster.src = video.poster;  
        videoPoster.alt = video.name;  
  
        const videoTitle = document.createElement('h3');  
        videoTitle.textContent = video.name;  
  
        videoItem.addEventListener('click', () => {  
            videoElement.src = video.src;  
            videoPlayer.style.display = 'block';  
            videoList.style.display = 'none';  
        });  
  
        videoItem.appendChild(videoPoster);  
        videoItem.appendChild(videoTitle);  
        videoList.appendChild(videoItem);  
    });  
  
    // Hide video player initially  
    videoPlayer.style.display = 'none';  
  
    // Close video player and show video list when video ends  
    videoElement.addEventListener('ended', () => {  
        videoPlayer.style.display = 'none';  
        videoList.style.display = 'block';  
    });  
});
