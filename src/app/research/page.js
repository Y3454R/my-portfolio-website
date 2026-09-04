import { interests, publications } from "@/data/research";

export default function Research() {
  return (
    <div className="space-y-10">
      <section>
        <h2 className="text-xs font-semibold text-notion-muted uppercase tracking-wider underline underline-offset-4 mb-3">
          Interests
        </h2>
        <div className="border-l-2 border-notion-accent pl-3">
          <div className="flex flex-wrap gap-2">
            {interests.map((item) => (
              <span
                key={item}
                className="inline-flex items-center px-2 py-0.5 bg-notion-sidebar border border-notion-border rounded text-sm text-notion-text"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xs font-semibold text-notion-muted uppercase tracking-wider underline underline-offset-4 mb-3">
          Publications
        </h2>
        <div className="border-l-2 border-notion-accent pl-3 space-y-6">
          {publications.map((pub) => (
            <div key={pub.title}>
              <div className="flex items-start justify-between gap-4">
                {pub.link ? (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-notion-text hover:text-notion-accent hover:underline transition-colors"
                  >
                    {pub.title}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-notion-text">
                    {pub.title}
                  </p>
                )}
                <span className="text-xs text-notion-muted shrink-0 italic">
                  {pub.venue}
                </span>
              </div>
              <p className="text-xs text-notion-muted mt-1">{pub.authors}</p>
              <p className="text-xs text-notion-muted mt-1 leading-relaxed text-justify">
                {pub.summary}
              </p>
            </div>
          ))}
        </div>
      </section>

      <p className="text-sm text-notion-muted flex flex-wrap gap-x-4 gap-y-1">
        <a
          href="https://www.researchgate.net/profile/Samin-Yeasar-2"
          target="_blank"
          rel="noopener noreferrer"
          className="text-notion-accent hover:underline"
        >
          ResearchGate
        </a>
        <a
          href="https://scholar.google.com/citations?user=e1NkeTUAAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="text-notion-accent hover:underline"
        >
          Google Scholar
        </a>
      </p>
    </div>
  );
}
