import { ReactNode } from "react";
import IconPlus from "../../assets/images/icon-plus.svg";
import IconMinus from "../../assets/images/icon-minus.svg";

interface AccordionProps {
  question: string;
  answer: ReactNode;
  showBody: boolean;
  handleClick: () => void;
  showLineBreak?: boolean;
}
const Accordion = ({
  question,
  answer,
  showBody,
  handleClick,
  showLineBreak = true,
}: AccordionProps) => {
  return (
    <div className="flex flex-col gap-y-5 text-left">
      <div
        className="hover:text-purple-gray flex items-center justify-between gap-x-4 cursor-pointer"
        onClick={handleClick}
      >
        <p className="font-semibold">{question}</p>
        <img
          src={!showBody ? IconPlus : IconMinus}
          alt="icon-info"
          className="h-6"
        />
      </div>
      {<div hidden={!showBody}>{answer}</div>}
      {showLineBreak && <hr className="text-pink" />}
    </div>
  );
};

export default Accordion;
