import { Project } from "@/content";

interface WorkGridProps {
  projects: Project[];
}

export function WorkGrid({ projects }: WorkGridProps) {
  return (
    <div className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <a
          key={project.name}
          href={project.url}
          target={project.url === "#" ? undefined : "_blank"}
          rel="noopener noreferrer"
          className="group relative flex flex-col bg-canvas p-8 hover:bg-accent-soft transition-colors duration-200"
        >
          {project.placeholder && (
            <span className="mb-5 self-start rounded-full border border-line px-2.5 py-1 text-xs text-ink-faint">
              Placeholder
            </span>
          )}
          <div className="flex-1">
            <p className="text-xs text-ink-faint mb-2">{project.client}</p>
            <h3 className="text-base font-semibold text-ink group-hover:text-ink transition-colors">
              {project.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{project.description}</p>
          </div>
          <div className="mt-6 flex items-center gap-1.5 text-xs font-medium text-ink-faint group-hover:text-ink transition-colors">
            View project
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M2 5h6M5.5 2.5L8 5l-2.5 2.5" />
            </svg>
          </div>
        </a>
      ))}
    </div>
  );
}
