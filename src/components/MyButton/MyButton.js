const MyButton = ({ id, value, handleClick, style, disable }) => {
  return (
    <button
      className={style}
      onClick={() => handleClick(id)}
      disabled={disable}
    >
      {value}
    </button>
  );
};

export default MyButton;
