import { useState } from "react"

export default function Products(){
    const [search,setSearch]=useState("")
    const [category,setCategory]=useState("all")

    const products = [
        { id: 1, name: "Laptop", price: 50000,category: "apple" }, //product
        { id: 2, name: "Phone", price: 25000,category: "samsung" },
        { id: 3, name: "Headphones", price: 3000,category: "hp" },
        { id: 4, name: "Keyboard", price: 2000,category: "xyz" },
        { id: 5, name: "Mouse", price: 1000,category: "apple" },
    ];

    const byName=products.filter((product)=>
    product.name.toLowerCase().includes(search.toLowerCase())
    )

    const byCategoty= byName.filter((product)=>
        category === "all" || product.category === category
    )

    return(
       <div>
        <label>Search:</label>
        <input type="text"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />
        

        <select 
        onChange={(e)=>setCategory(e.target.value)}
        value={category}>
            <option value="all">All</option>
            <option value="hp">HP</option>
            <option value="samsung">Samsung</option>
            <option value="apple">Apple</option>
            <option value="xyz">XYZ</option>

        </select>



        <h1>Showing {byName.length} of {products.length} products</h1>
        <span>----------</span>
        <ul>
            {
                byCategoty.map((item)=>
                <li>{item.name}</li>
                )
            }
        </ul>
       </div>
    )
}