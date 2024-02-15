import './Styles.css';

const PercentButton = ({
  percent,
  name,
}: {
  percent: string;
  name?: string;
}) => {
  return (
    <button
      className="text button-style"
      name={percent}
      onClick={(event) => console.log(parseInt(event.target.name))}
    >
      {name || percent} %
    </button>
  );
};

export default PercentButton;
