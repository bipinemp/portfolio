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
        strokeWidth="7"
        fill="none"
        strokeDasharray="300"
        strokeDashoffset="300"
        style={{ animation: `draw-hex 1s ease-in-out forwards ${delay}` }}
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontWeight="bold"
        fill={color}
        opacity="0"
        fontSize="35px"
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
