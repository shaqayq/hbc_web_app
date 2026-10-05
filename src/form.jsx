import {useState} from 'react';
export default function UserForm(){
    const [name,setName]=useState("")
    function handelName(event){
        setName(event.target.value)

    }
    function handelClick(){
        alert(name)
    }
    function handelSubmit(e){
        e.preventDefault()
        alert(`Welcom ${name}`)
    }
    return (
        <div>
            <form onSubmit={handelSubmit}>
                <h1>Form:{name}</h1>
                <input type="text"   className="border border-gray-300 rounded px-2 py-1"
                onChange={handelName}/>
                <button onClick={handelClick}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Click</button>
            <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Submit</button>
            </form>
            </div>
    )
}