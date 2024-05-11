import {React, useState} from 'react'
import bg_contact from '../assets/images/bg_contact.webp'
import ContactCard from '../components/ContactCard'
import { contact, contactText } from '../constants/contact'

const Contact = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [form, setForm] = useState({name: '', email: '' , message: ''})
  const text = contactText;
  const handleChange =  (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  };
  const handleFocus = () =>{
    
  }
  const handleBlur = () =>{

  }
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send( 
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Alex",
        from_email: form.email,
        to_email: 'johnyevag95@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });
      setForm({name: '', email: '', message: ''});
    }).catch((error)=> {
      console.log(error);
    })

  }
  return (
    
    <div>
      
        <div className='relative'>
        {!imageLoaded ?
          <div className='w-full h-[80vh] bg-gray-200 '/> :
          <div />
      }

      <img
        alt="Large pic"
        src={bg_contact}
        className='w-full'
        style={imageLoaded ? {} : { display: `none` }}
        onLoad={() => setImageLoaded(true)}
      />
            <div className='flex flex-col  justify-center items-center'>
                <div className='bg-blue-300 py-7 flex flex-col justify-center items-center justify-items-center'>
                    <h1 className='text-center text-6xl text-white font-semibold font-worksans'>{text.title}</h1>
                    <h2 className='text-center text-white pt-4 w-3/4 text-2xl max-md:text-xl'>{text.subtitle}</h2>
                    
                </div>
                
            </div>
            {contact.map((contact) => (
                <ContactCard key={contact.title} {...contact}/>
            ))}
  <div className='w-full flex flex-col items-center justify-center pb-14' >
     <form onSubmit={handleSubmit} className='w-1/2 flex flex-col gap-7 mt-14'>
          
          <label className='text-black-500 font-semibold'>
          Name
            <input type="text" name='name' className='input' placeholder='Your name' required value={form.name} onChange={handleChange}
            onFocus={handleFocus} onBlur={handleBlur}/>
          </label>
          <label className='text-black-500 font-semibold'>
          Email
            <input type="text" name='email' className='input' placeholder='Your email' required value={form.email} onChange={handleChange}
            onFocus={handleFocus} onBlur={handleBlur}/>
          </label>
          <label className='text-black-500 font-semibold'>
          Your Message
            <textarea name='message' rows={4} className='input' placeholder='Type your text here' required value={form.message} onChange={handleChange}
            onFocus={handleFocus} onBlur={handleBlur}/>
          </label>
          <button className='btn' type='submit' onFocus={handleFocus} onBlur={handleBlur}>
            Send Message
          </button>
        </form>
        </div>
 
            
        </div>
    </div>
  )
}

export default Contact