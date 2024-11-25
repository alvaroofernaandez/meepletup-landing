import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialLink = ({ href, icon, label, title }) => {
  return (
    <li>
      <a
        href={href}
        className="hover:text-white transition-all duration-300"
        aria-label={label}
        title={title}
      >
        <FontAwesomeIcon
          icon={icon}
          className="size-10 md:size-12 transition-all duration-300 hover:scale-125 focus:scale-125"
        />
      </a>
    </li>
  );
};

export default SocialLink;
