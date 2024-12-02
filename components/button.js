import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";

function Button({ text, type, href }) {
  let btnType = "";

  if (type === "arrow") {
    btnType = "/arrow.svg";
  } else {
    btnType = "/plus.svg";
  }

  const buttonContent = (
    <button className="bg-[#D6C0B3] text-[#493628] font-bold text-2xl w-96 h-12 p-4 rounded-md flex items-center justify-between">
      <span>{text}</span>
      {/* Icon */}
      <div className="bg-[#493628] p-2 rounded-full flex items-center justify-center">
        <Image src={btnType} width={20} height={20} alt="Arrow Right" />
      </div>
    </button>
  );

  return href ? <Link href={href}>{buttonContent}</Link> : buttonContent;
}

Button.propTypes = {
  text: PropTypes.node.isRequired,
  type: PropTypes.string,
  href: PropTypes.string,
};

export default Button;
