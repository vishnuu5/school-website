import React from 'react';

const Gallery = () => {
  const photos = [
    { src: '/images/sports_day.jpg', alt: 'Students participating in various sports events.', caption: 'Sports Day' },
    { src: '/images/science_exhibition.jpg', alt: 'Students presenting their science projects.', caption: 'Science Exhibition' },
    { src: '/images/cultural_fest.jpg', alt: 'Students performing in the cultural fest.', caption: 'Cultural Fest' },
    { src: '/images/classroom.jpg', alt: 'A glimpse of our interactive classrooms.', caption: 'Classroom' },
    { src: '/images/library.jpg', alt: 'Students reading and studying in the school library.', caption: 'Library' }
  ];

  const videos = [
    { src: '/videos/school_tour.mp4', caption: 'Virtual tour of Springdale Public School' },
    { src: '/videos/annual_function.mp4', caption: 'Highlights from the Annual Function 2023' }
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Gallery</h2>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Photos</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div key={index} className="border rounded overflow-hidden">
              <img src={photo.src} alt={photo.alt} className="w-full h-auto" />
              <div className="p-2">
                <p className="text-center">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Videos</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map((video, index) => (
            <div key={index} className="border rounded overflow-hidden">
              <video controls className="w-full h-auto">
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-2">
                <p className="text-center">{video.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
