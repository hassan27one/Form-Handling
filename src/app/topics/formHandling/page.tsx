import React from 'react'
import ContactForm from './contactForm/ContactForm'
import Link from 'next/link'


export default function FormHandling() {
  return (
    <>
    <Link href={"/"} >Main Page</Link>
    <h1>FormHandling page</h1>
    <ContactForm/>
    </>
  )
}
