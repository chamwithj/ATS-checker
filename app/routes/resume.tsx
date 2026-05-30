import { useParams } from "react-router"


export const meta = () => ([
  {title:'Resumind | Review'},
  {name:'description',content:'Detailed overview of your resume'},

])

const resume = () => {

  const { id } = useParams();

  return (
    <main className="!pt-10">
      <nav></nav>
    </main>
  )
}

export default resume