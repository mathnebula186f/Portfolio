import React, { useEffect, useRef } from "react";

const VaraText = ({ text, fontSize = 40, strokeWidth = 0.7, speed = 0.5 }) => {
  const containerRef = useRef(null);
  const uniqueId = useRef(
    `vara-container-${Math.random().toString(36).substr(2, 9)}`
  );
  const loadedRef = useRef(false);

  useEffect(() => {
    if (containerRef.current && !loadedRef.current) {
      // Import Vara dynamically to avoid SSR issues
      import("vara").then(({ default: Vara }) => {
        const vara = new Vara(
          `#${uniqueId.current}`,
          "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
          [
            {
              text: text,
              fontSize: fontSize,
              strokeWidth: strokeWidth,
              duration: 2000,
              autoAnimation: true,
              color: "#FFFFFF",
              textAlign: "center",
            },
          ]
        );
      });
      loadedRef.current = true;
    }
  }, [text, fontSize, strokeWidth, speed]);

  return (
    <div
      id={uniqueId.current}
      ref={containerRef}
      className="z-[20] text-white w-full flex justify-center items-center text-center"
    ></div>
  );
};

export default VaraText;
