import WebProjectCard from "../../components/WebProjectCard/WebProjectCard";
import wedHighResImage from "../../assets/web/wedding/wed-high-resolution.png";
import wedLowResImage from "../../assets/web/wedding/wed-low-resolution-min.png";

const Web = (props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <WebProjectCard
        lowResImage={wedLowResImage}
        highResImage={wedHighResImage}
        title="Digital Wedding Invitation Card"
        description="This is a digital wedding invitation card with different language features"
        projectLink="https://ashutoshsarangi.github.io/wedding-invitation-Assu/"
      />
    </div>
  );
};

export default Web;
