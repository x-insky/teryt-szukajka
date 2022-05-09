import './Notifier.scss';

function Notifier ({ notificationText="wystąpił jakiś błąd" }) {

  return (
    <div className="regular-notification">
        <h3>{ notificationText }</h3>
    </div>
  );
}

export default Notifier;
