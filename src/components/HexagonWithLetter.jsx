const HexagonWithLetter = ({ color, size, delay }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      style={{ display: "block", marginTop: "-10px" }}
    >
      <path
        d="M 50 10 L 90 30 L 90 70 L 50 90 L 10 70 L 10 30 Z"
        stroke={color}
        stroke-width="7"
        fill="none"
        stroke-dasharray="300"
        stroke-dashoffset="300"
        style={{ animation: `draw-hex 1s ease-in-out forwards ${delay}` }}
      />
      <text
        x="50%"
        y="50%"
        dominant-baseline="middle"
        text-anchor="middle"
        font-weight="bold"
        fill={color}
        opacity="0"
        font-size="35px"
        style={{
          animation: "show-letter 500ms ease-in-out forwards 1s",
        }}
      >
        B
      </text>

      <style>
        {`
          @keyframes draw-hex {
            to {
              stroke-dashoffset: 0;
            }
          }
  
          @keyframes show-letter {    
              to {
                opacity: 1;
              }    
          }
          `}
      </style>
    </svg>
  );
};
export default HexagonWithLetter;
