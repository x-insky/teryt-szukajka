import './AboutApp.css';

  // wstępnie można zacząc od komponentu funkcyjnego
function AboutApp (props) {

  let { someText } = props;

  return (
    <div className="about">
      <h3>{someText}</h3>
      <p>Aplikacja umożliwia wyszukiwanie adresowe dla ...</p>
    </div>
  );
}

export default AboutApp;