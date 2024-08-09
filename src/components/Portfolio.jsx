import data from '../data/projects_details'
import Project from './Project'

function Portfolio() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          data.map(d => (
            <Project
              title={d.title}
              techStack={d.techStack}
              imgUrl={d.imgUrl}
              link={d.link}
              completed={d.completed}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Portfolio