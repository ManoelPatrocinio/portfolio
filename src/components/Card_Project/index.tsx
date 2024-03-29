import "./index.css";

export function Card_Project(project: any) {
  const { name, image, skills, description, link, link_github } =
    project.project;
  return (
    <div className="card">
      <div className="card-img-wrapper">
        <img src={image} alt={name} />
      </div>
      <div className="card-info">
        <h2>{name}</h2>
        <h3> {skills}</h3>
        <p>{description} </p>
        <a href={link} target="_blank">
          <button className="btn">Acessar</button>
        </a>
        {link_github && (
          <a href={link_github} target="_blank" className="link-github">
            Github
          </a>
        )}
      </div>
    </div>
  );
}
