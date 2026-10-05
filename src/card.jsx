export default function Card({title, description, status,style}) {
    return(
        <article class="task-card">
        <h2>{title}</h2>
        <p>{description}</p>
        <span class={style}>{status}</span>
      </article>
    )
}