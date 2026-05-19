import {
  FaLinkedin,
  FaGithub,
  FaResearchgate,
  FaGoodreads,
  FaEnvelope,
} from "react-icons/fa";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/samin-yeasar-abir/",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  { href: "https://github.com/Y3454R", icon: FaGithub, label: "GitHub" },
  {
    href: "https://www.researchgate.net/profile/Samin-Yeasar-2",
    icon: FaResearchgate,
    label: "ResearchGate",
  },
  {
    href: "https://www.goodreads.com/user/show/69334929-abir-yeasar",
    icon: FaGoodreads,
    label: "Goodreads",
  },
  { href: "mailto:syeasar.kuet@gmail.com", icon: FaEnvelope, label: "Email" },
];

export default function Home() {
  return (
    <div className="py-16 flex flex-col items-center text-center max-w-sm mx-auto">
      <img
        src="/my_dp.jpg"
        alt="Samin Yeasar"
        className="w-28 h-28 rounded-full object-cover mb-4"
      />
      <h1 className="text-2xl font-bold text-notion-text mb-2">Samin Yeasar</h1>
      <p className="text-notion-muted text-sm mb-4">
        Engineer · Reader · Curious
      </p>
      <p className="text-notion-text text-sm leading-relaxed mb-3 text-justify">
        I am a CSE grad from KUET, currently working as a software engineer. I
        have been building web applications for a while, and recently started
        getting my hands dirty in deep learning and computer vision.
      </p>

      <p className="text-notion-text text-sm leading-relaxed mb-3 text-justify">
        During my free time, I read fiction, watch anime, and overthink things
        with an LLM.
      </p>

      <p className="text-notion-text text-sm leading-relaxed mb-6 text-justify">
        Yes, I use AI to write code. But I take ownership of my code by reading,
        understanding, and maintaining it myself. I believe in the KISS
        principle. Keep it simple, stupid. I always try to write simple and
        explainable code.
      </p>
      <div className="flex items-center gap-3">
        {socialLinks.map(({ href, icon: Icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-notion-muted hover:text-notion-accent transition-colors"
          >
            <Icon size={17} />
          </a>
        ))}
      </div>
    </div>
  );
}
