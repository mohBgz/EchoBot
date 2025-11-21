import { useState } from "react";
import { BubbleChat } from "./BubbleChat";

export  function ChatWidget() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-5 right-5 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-105"
      >
        Chat
      </button>

      {isVisible && (
        <BubbleChat isVisible={isVisible} setIsVisible={setIsVisible}/>
      )}
    </>
  );
}
