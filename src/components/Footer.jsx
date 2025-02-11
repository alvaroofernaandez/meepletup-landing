import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTelegram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import SocialLink from "./SocialLink.jsx";

const Footer = () => {
  return (
    <footer className="bg-[#075173]/30 backdrop-blur-sm w-full h-[18rem] md:h-[18rem] text-base">
      <div
        title="logo"
        className="flex items-center gap-4 justify-center mt-3 mb-10 pt-10"
      >
        <img src="/logo.png" alt="logo" className="w-12" />
        <h1 className="hidden md:flex text-white text-xs font-semibold">
          Todos los derechos reservados @ MeepleTup 2024/25
        </h1>
      </div>

      <div>
        <ul className="flex items-center gap-6 justify-center text-slate-300">
          <SocialLink
            href="https://www.linkedin.com/company/pegoletech/people/"
            icon={faLinkedin}
            label="Visita nuestro perfil de LinkedIn"
            title="LinkedIn"
          />
          <SocialLink
            href="https://t.me/+buqc7nlJ4oM2MzJk"
            icon={faTelegram}
            label="Únete a nuestro canal de Telegram"
            title="Telegram"
          />
          <SocialLink
            href="https://x.com/MeepleTup"
            icon={faXTwitter}
            label="Visita nuestro perfil de X"
            title="X"
          />
        </ul>
      </div>

      <div className="flex items-center justify-center gap-2">
        <FontAwesomeIcon icon={faCode} className="size-3 text-slate-300" />
        <p className="mt-10 mb-10 text-center text-xs text-slate-300">
          Diseñado y desarrollado por el Aula de Software Libre - FP Córdoba
        </p>
        <p className="mt-10 mb-10 text-center text-xs text-slate-300">
          BY: Alvaro Fernandez Amaro & Ignacio de Loyola Díaz Jiménez
        </p>
        <FontAwesomeIcon icon={faCode} className="size-3 text-slate-300" />
      </div>
    </footer>
  );
};

export default Footer;
