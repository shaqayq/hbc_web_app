import Card from './card.jsx'
export default function Content() {

    return(
    <main class="container">z
    <section class="task-list">

     <Card title={"Math Homework"} 
     description={"Complete exercises 5 to 10 from chapter 3."}
     status={"Pending"}
     style={"badge pending"}/>
     
     <Card title={"Physics Lab Report"} 
     description={"Write the report for the optics experiment."}
     status={"In Progress"}
     style={"badge in-progress"}/>

     <Card title={"English Essay"} 
     description={"Write a 500-word essay about climate change."}
     status={"Done"}
     style={"badge done"}/>

    </section>
  </main>
    )
}