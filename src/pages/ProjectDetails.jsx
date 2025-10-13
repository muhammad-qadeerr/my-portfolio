import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../constants";
import { styles } from "../styles";
import Navbar from "../components/Navbar";

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-primary text-white flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Project not found</h1>
          <Link to="/" className="text-[#915EFF] hover:underline">
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
      </div>

      <main className={`max-w-7xl mx-auto ${styles.paddingX} pt-24 pb-10`}>
        <Link to="/#projects" className="text-secondary hover:text-white transition-colors">← Back</Link>

        <header className="mt-6">
          <h1 className={`${styles.sectionHeadText}`}>{project.name}</h1>
          <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
            {project.description}
          </p>
        </header>

        <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <div className="rounded-2xl overflow-hidden bg-tertiary/60 ring-1 ring-white/10">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-[360px] md:h-[480px] object-cover"
                loading="lazy"
              />
            </div>
            {Array.isArray(project.images) && project.images.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.images.map((img, i) => (
                  <div key={i} className="rounded-xl overflow-hidden bg-black-100 ring-1 ring-white/10">
                    <img src={img} alt={`${project.name}-${i}`} className="w-full h-32 object-cover" loading="lazy" />
                  </div>
                ))}
              </div>
            )}
          </div>

          <aside className="space-y-6">
            <div className="bg-tertiary/60 ring-1 ring-white/10 rounded-2xl p-5">
              <h2 className="text-white font-semibold text-lg mb-3">Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag.name} className="text-sm px-2 py-1 rounded-md bg-black-100 text-white/90">
                    #{tag.name}
                  </span>
                ))}
              </div>
            </div>

            {project.live_demo_link && (
              <a
                href={project.live_demo_link}
                target="_blank"
                rel="noreferrer"
                className="block text-center bg-[#10B981] text-black rounded-xl py-3 font-semibold shadow-card hover:opacity-90"
              >
                Live Demo
              </a>
            )}

            <a
              href={project.source_code_link}
              target="_blank"
              rel="noreferrer"
              className="block text-center bg-tertiary rounded-xl py-3 font-semibold text-white shadow-card hover:opacity-90"
            >
              View Source Code
            </a>
          </aside>
        </section>
      </main>
    </div>
  );
};

export default ProjectDetails;
