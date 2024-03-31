const About = (props) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl static">
      <figure>
        <img
          src="https://ashutoshsarangi.github.io/portfolio/static/media/Dp1.0e256a15187daa7078c7.jpeg"
          className="h-[350px] w-[350px]"
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">About Me</h2>
        <p>
          I am Ashutosh Sarangi! A determined Web and Mobile application
          Developer.
        </p>
        <i> I am having around 7 years of industry experience.</i>
      </div>
    </div>
  );
};

export default About;
