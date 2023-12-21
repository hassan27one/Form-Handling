'use client'
import Link from 'next/link';
import React from 'react'


export default function Buttons() {
  
      // Click & Alert button         
      const onClickHandler =()=> {
          alert("ALERT on Click Button-1");
        }
 
    return (
    <>

<Link href={"./"} >Main Page</Link>


    <h1>buttons Page</h1> <br/>
<div>
 <h3>Event or Function Define Above the  return</h3> 
<button onClick={onClickHandler}>Button-1 </button>
</div><br/>

<div>
  <h3>Single Line Event / Action  </h3>
<button onClick={()=> alert("Alert on click Button-2")}>Button-2</button>
</div>

    </>
  )
}
