import Image from "next/image";
import { FaFolderOpen } from "react-icons/fa";

interface ProjectData {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

interface Props {
  project: ProjectData;
}

export function ProjectCard({ project }: Props) {
  return (
    <div className="group relative flex flex-col bg-slate-900/40 backdrop-blur-md border border-glass-border rounded-xl overflow-hidden cursor-pointer transition-transform hover:-translate-y-1">
      <div className="relative h-54 w-full overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-t from-slate-900 to-transparent z-10 opacity-70" />

        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={false}
        />
      </div>

      <div className="p-5 flex flex-col grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <span className="text-primary opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">
            <FaFolderOpen size={28} />
          </span>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-6">
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[14px] font-mono text-primary/90 border border-primary/20 bg-primary/5 px-2 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/40 rounded-xl pointer-events-none transition-colors duration-300" />
    </div>
  );
}
export type { ProjectData };
