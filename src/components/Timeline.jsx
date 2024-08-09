import data from '../data/timeline_data'
import TimelineInfo from './TimelineInfo'

function Timeline() {
  // const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col md:flex-row justify-center my-20">
      <div className="w-full md:w-7/12">
      {
        data.map(d => (
          <TimelineInfo
          year={d.year}
          title={d.title}
          duration={d.duration}
          details={d.details}
          />
        ))
      }
      </div>
    </div>
  )
}

export default Timeline