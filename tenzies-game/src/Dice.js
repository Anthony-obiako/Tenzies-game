function Dice(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59e391" : "white",
  };
  return (
    <div className="dice-face" style={styles} onClick={props.holdDice}>
      <h2 className="dice-num">{props.value}</h2>
    </div>
  );
}

export default Dice;
