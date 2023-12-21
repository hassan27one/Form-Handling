import { contactTypes } from "./types/commonTypes";

export default function DisplayContact(props: { contactData: contactTypes[] }) {
  return (
    <div>

      <div>
        <table className="border-2 border-sky-500">
          <tr  className="border-2 border-sky-500">
            <th className="border-2 border-sky-500">Name</th> &nbsp; 
            <th className="border-2 border-sky-500">CNIC</th> &nbsp;  
            <th className="border-2 border-sky-500">Address</th>  &nbsp;  
            <th className="border-2 border-sky-500">Email</th>  &nbsp;  
            <th className="border-2 border-sky-500">Phone</th> &nbsp;  
            <th className="border-2 border-sky-500">City</th> &nbsp; 
            <th className="border-2 border-sky-500">State</th> &nbsp;  
            <th className="border-2 border-sky-500">Country</th> &nbsp;  
            <th className="border-2 border-sky-500">Education</th> &nbsp;  
            <th className="border-2 border-sky-500">Message</th> &nbsp;  
          </tr>
          {props.contactData.map((item, index) => {
            return (
              <tr  key={index}  className="border-2 border-sky-500">
                <td className="border-2 border-sky-500">{item.name}</td>
                <td className="border-2 border-sky-500">{item.cnic}</td>
                <td className="border-2 border-sky-500">{item.address}</td>
                <td className="border-2 border-sky-500">{item.email}</td>
                <td className="border-2 border-sky-500">{item.phone}</td>
                <td className="border-2 border-sky-500">{item.city}</td>
                <td className="border-2 border-sky-500">{item.state}</td>
                <td className="border-2 border-sky-500">{item.country}</td>
                <td className="border-2 border-sky-500">{item.education}</td>
                <td className="border-2 border-sky-500">{item.message}</td>
              </tr>
            )
          })}

        </table>
      </div>

    </div>
  )
}