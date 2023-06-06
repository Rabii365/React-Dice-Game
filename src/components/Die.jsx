export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "#ffffff",
  };

  return (
    <div onClick={props.holdDice} className="number-box" style={styles}>
      <p>{props.value}</p>
    </div>
  );
}
