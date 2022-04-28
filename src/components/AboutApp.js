import './AboutApp.scss';
import '../sass/main-sass-style-file.scss';

  // wstępnie można zacząc od komponentu funkcyjnego
function AboutApp (props) {

  let { someText } = props;

  return (
    <div className="about">
      <h3>{someText}</h3>
      <p>Aplikacja umożliwia wyszukiwanie <span>adresowe</span> dla ...</p>
    </div>
  );
}

export default AboutApp;
