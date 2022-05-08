import './LoadingNotifier.scss';

  // wstępnie można zacząc od komponentu funkcyjnego
function LoadingNotifier ({ notificationHeader="Trwa ładowanie..." }) {

  return (
    <div className="cover-curtain">
      <div className="notification">
        <h3>{ notificationHeader }</h3>
        <div className="rotated rotation-anim">T</div>
      </div>
    </div>
  );
}

export default LoadingNotifier;
