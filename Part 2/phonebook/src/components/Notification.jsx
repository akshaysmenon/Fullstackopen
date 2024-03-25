const Notification = ({ show, text, type }) => {
  return show ? (
    <div className={type === "success" ? "success" : "error"}>{text}</div>
  ) : null;
};

export default Notification;
