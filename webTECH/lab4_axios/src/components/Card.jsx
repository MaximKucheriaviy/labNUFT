export const Card = ({ name, value, sp, Icon, color, customSpan = true }) => {
  return (
    <div className="card">
      <div>
        <p className="name">{name}</p>
        <p className="num">
          {value}
          <span className={customSpan ? "customSpan" : ""}> {sp}</span>
        </p>
      </div>
      <Icon size={30} color={color} />
    </div>
  );
};
