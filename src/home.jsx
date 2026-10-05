import { useState } from "react"

function HomePage({age=18}){
    // const [name,setName]=useState("")
    // const [email,setEmail]=useState("")

    const fields={
        firstname:"",
        email:""
    }
    const [form,setForm]=useState(fields)
    const [error,setError]=useState({})

    //form={
    //name:ali
    //email:abc
    //}
    function validate(form){
        const error={

            //firsname: please....
            //emil: ......
        }
        if(form.email == ""){
            error.firstname="Please Enter your name!!"
        }

        if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) {
                error.email = "Please enter a valid email.";
            }


        return error
    }

   

   

    function handelSubmit(e){
        e.preventDefault()
        setError(validate(form))

    }

    function handelForm(e){
        const next={...form,[e.target.name]:e.target.value} // firstname: ali
        setForm(next)
    }
    return(

        <div>
            
           <form onSubmit={handelSubmit}>
            <label>FirstName:</label>
            <input
             name="firstname"
             value={form.firstname}
             onChange={handelForm}/>

             {error.firstname && 
                   ( <p className="text-red-600 text-sm">{error.firstname}</p>)}

            <label>email:</label>
            <input 
            name="email"
           
            value={form.email}
            onChange={handelForm}/>

            {error.email && 
                   ( <p className="text-red-600 text-sm">{error.email}</p>)}

                   <button type="submit">Submit</button>
           </form>
        </div>

    )

}

export default HomePage