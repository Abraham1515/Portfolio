import { AiFillGithub, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="print:hidden border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted text-sm font-display">
          © {new Date().getFullYear()} Abraham Pérez Rodríguez
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/abraham1515"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors duration-200"
            aria-label="GitHub"
          >
            <AiFillGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/abraham-p%C3%A9rez-rodr%C3%ADguez-00646bb1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href="mailto:ap94143@gmail.com"
            className="text-muted hover:text-accent transition-colors duration-200"
            aria-label="Email"
          >
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
