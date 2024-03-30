import { useId, useState } from "react"

type formType ={
    trigger: boolean,
    setTrigger: React.Dispatch<React.SetStateAction<boolean>>
}
export default function PaymentForm(props: formType){
    const [formData, setFormData] = useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
        }
    )
    
    const id = useId()
    
    function handleChange(event:any) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }
    
    function handleSubmit(event:any) {
        event.preventDefault()
        console.log(formData)
    }
    
  return (
    (props.trigger)?(
    <div className="popup">
        <div className="popup-inner">
            <form onSubmit={handleSubmit}>
                <label htmlFor={id + "-firstName"}>First Name</label>
                <input
                    type="text"
                    onChange={handleChange}
                    name="firstName"
                    value={formData.firstName}
                    id={id + "-firstName"}
                />
                <label htmlFor={id + "-lastName"}>Last Name</label>
                <input
                    type="text"
                    onChange={handleChange}
                    name="lastName"
                    value={formData.lastName}
                    id={id + "-lastName"}
                />
                <label htmlFor={id + "-email"}>Email</label>
                <input
                    type="email"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                    id={id + "-email"}
                />
                <button>Submit</button>
            </form>
            <button className="close-btn" onClick={()=> props.setTrigger(false)}>X</button>
        </div>
    </div>
    ) : <></>
  )
};
