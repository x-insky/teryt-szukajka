import './LoadingNotifier.scss';

  // wstępnie można zacząc od komponentu funkcyjnego
function LoadingNotifier ({ notificationHeader="Trwa ładowanie..." }) {

  return (
    <div className="notification">
      <h3>{ notificationHeader }</h3>
    </div>
  );
}

export default LoadingNotifier;
