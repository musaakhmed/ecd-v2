const Video = () => {
  return (
    <section className="max-h-[75vh]">
      <video autoPlay loop muted playsInline className="object-cover max-h-[75vh] mx-auto">
        <source src="/assets/video/epnm-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  )
}

export default Video
