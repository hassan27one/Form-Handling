"use client"
import { useState } from "react"
import * as yup from "yup"
import DisplayContact from "./DisplayContact"
import { contactTypes, onChangeEventType } from "./types/commonTypes"


export default function ContactForm() {
  const [contactInfo, setContactInfo] = useState<contactTypes>({
    name: "",
    cnic: 0,
    address:"",
    email: "",
    phone: 0,
    city: "",
    state: "",
    country: "",
    education: "",
    message:"",
  })

  const [errors, setError ] = useState<string[]>([])

  const contactInfoSchema = yup.object().shape({
    name: yup.string().required().min(5).max(10),
    email: yup.string().email().required(),
    message: yup.string().required()
 })

  const [contactList, setContactList] = useState<contactTypes[]>([])

  const onChangeHandler = (e: onChangeEventType) => {
    let userDetails = {
      ...contactInfo,
      [e.target.name]: e.target.value
    }
    setContactInfo(userDetails)
  }


  const onClickHandler = async () => 
  {
     try {
      const result = await contactInfoSchema.validate(contactInfo)
      console.log(result);
           
      if (!result) {
        return 
      }
      
      let newContactList:contactTypes[] = [...contactList, contactInfo]
      setContactList(newContactList)
  
      setError([])
      setContactInfo({
        name:"",
        cnic: 0,
        address:"",
        email:"",
        phone:0,
        city:"",
        state:"",
        country: "",
        education: "",
        message:""
      })
     }
      catch (err) {

      setError(err.errors)

       console.log("error",err.errors);
       
     }
    
  }

  // const getUserNameHandler = (event: onChangeEventType) => {
  //   console.log("getUserNameHandler call", event.target.value);
  //   // userName = event.target.value
  //   setUserName(event.target.value)

  // }

  // const onChangeEmailHandler = (e: onChangeEventType) => {
  //   setEmail(e.target.value)
  // }

  // var userName:string  = "defaut"
  // const [userName, setUserName] = useState<string>("")
  // const [email, setEmail] = useState<string>("")
  // const [text, setText] = useState<string>("")
  // const [loading, setLoading] = useState<boolean>(false)

  return (
    <>
      {/* <form className="max-w-md mx-auto"> */}
      <h1 className="content-center" >Form Handling Assignment </h1>
      <div className="mb-4">

        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
          Name
        </label>  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
        <input
          value={contactInfo.name}
          onChange={onChangeHandler}
          type="text"
          id="name"
          name="name"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

  {/* CNIC----------------------------- */}
    <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
          CNIC#
        </label>  &nbsp; &nbsp; &nbsp; &nbsp; 
        <input
          value={contactInfo.cnic}
          onChange={onChangeHandler}
          type="number"
          id="cnic"
          name="cnic"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

{/*  Address------------------------------------  */}
<div className="mb-4">

<label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">
  Address
</label>  &nbsp; &nbsp; &nbsp; &nbsp; 
<input
  value={contactInfo.address}
  onChange={onChangeHandler}
  type="text"
  id="address"
  name="address"
  className="w-full px-3 py-2 border rounded-md"
  required
/>
</div>
{/* ------------------------------------------------------------ */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; 
        <input
          value={contactInfo.email}
          onChange={onChangeHandler}
          type="email"
          id="email"
          name="email"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Phone
        </label>  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <input
          value={contactInfo.phone}
          onChange={onChangeHandler}
          type="number"
          id="phone"
          name="phone"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

{/*  City------------------------------------  */}
<div className="mb-4">

<label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">
  City
</label>  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; 
<input
  value={contactInfo.city}
  onChange={onChangeHandler}
  type="text"
  id="city"
  name="city"
  className="w-full px-3 py-2 border rounded-md"
  required
/>
</div>
{/* ------------------------------------------------------------ */}

{/*  State-----------------------------------------------------  */}
<div className="mb-4">

<label htmlFor="state" className="block text-gray-700 text-sm font-bold mb-2">
  State
</label>  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
<input
  value={contactInfo.state}
  onChange={onChangeHandler}
  type="text"
  id="state"
  name="state"
  className="w-full px-3 py-2 border rounded-md"
  required
/>
</div>
{/* ------------------------------------------------------------ */}

{/*  Country-----------------------------------------------------  */}
<div className="mb-4">

<label htmlFor="country" className="block text-gray-700 text-sm font-bold mb-2">
  Country
</label>  &nbsp; &nbsp; &nbsp; 
<input
  value={contactInfo.country}
  onChange={onChangeHandler}
  type="text"
  id="country"
  name="country"
  className="w-full px-3 py-2 border rounded-md"
  required
/>
</div>
{/* ------------------------------------------------------------ */}

{/*  Education-----------------------------------------------------  */}
<div className="mb-4">

<label htmlFor="country" className="block text-gray-700 text-sm font-bold mb-2">
  Education
</label>  &nbsp; &nbsp; 
<input
  value={contactInfo.education}
  onChange={onChangeHandler}
  type="text"
  id="education"
  name="education"
  className="w-full px-3 py-2 border rounded-md"
  required
/>
</div>
{/* ------------------------------------------------------------ */}

      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
          Message
        </label>  &nbsp; &nbsp; 
        <textarea
         value={contactInfo.message}
         onChange={onChangeHandler}
          id="message"
          name="message"
          rows={4}
          className="w-full px-3 py-2 border rounded-md"
          required
        ></textarea>
      </div>
        {errors.map((item)=>{
          return (
            <div style={{color:"red"}}>
              <h1>{item}</h1>
            </div>
          )
        })}
      <div className="mb-6">
        <button
          onClick={onClickHandler}
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
      {/* </form> */}
      <DisplayContact contactData={contactList} />
    </>
  )
}