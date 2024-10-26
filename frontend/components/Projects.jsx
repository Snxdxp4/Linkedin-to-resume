import React from "react";

const Projects = ({ projects }) => {
    const formatBulletPoints = (summary) => {
        let potential_bullet_points = summary.split("\n");
        if (potential_bullet_points.length > 3) {
            return potential_bullet_points.slice(1);
        } else {
            return potential_bullet_points;
        }
    };

    const formatBullet = (bullet) => {
        return bullet.replace(
            /\d\.\s+|[a-z]\)\s+|•\s+|[A-Z]\.\s+|[IVX]+\.\s+/g,
            ""
        );
    };
    return (
        <section className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Projects</h2>
            <ul>
                {projects.map((project, index) => (
                    <li key={index} className="mb-4">
                        <h3 className="text-lg font-semibold">
                            {project.title}
                        </h3>
                        <ul>
                            {formatBulletPoints(project.description).map(
                                (bullet, index) => (
                                    <li key={index} className="list-disc ml-4">
                                        {bullet ? formatBullet(bullet) : ""}
                                    </li>
                                )
                            )}
                        </ul>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            View Project
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Projects;
