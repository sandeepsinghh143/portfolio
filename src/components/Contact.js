"use client"
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { Alert, Snackbar } from '@mui/material';

export default function Contact() {
  const [open,setOpen] = useState(false);
  const form = useRef();
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const sendEmail = (e) => {
    
    e.preventDefault();

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      })
      .then(
        () => {
          setOpen(true);
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
  };
  return (
    <div className='w-[90%] m-auto lg:w-full flex flex-col justify-center relative z-10 items-center' id="contact">
        <div className='relative flex justify-between items-center flex-col w-full max-w-[1350px] pb-20 gap-3'>
        <div className='text-6xl text-center font-bold  mt-5 '>Contact</div>
        <div className='text-lg text-center font-semibold mt-6 mb-12'>Feel free to reach out to me for any questions or opportunities!</div>
        <form action="" className='w-[95%] max-w-[600px] flex flex-col p-8 rounded-2xl gap-3 bg-[#171721]' ref={form} onSubmit={sendEmail}>
        <div className='mb-6 text-2xl font-semibold text-white'>Email Me 🚀</div>
        <input type="text" placeholder='Your Email' name='from_email' className='flex-1 bg-[#171721] text-white outline-0 text-lg rounded-xl px-3 py-4 border border-solid border-[#b1b2b3] my-input'/>
        <input type="text" placeholder='Your Name' name='from_name' className='flex-1 text-white bg-transparent outline-0 text-lg rounded-xl px-3 py-4 border border-solid border-[#b1b2b3] my-input'/>
        <input type="text" placeholder='Subject' name='subject' className='flex-1 text-white bg-transparent outline-0 text-lg rounded-xl px-3 py-4 border border-solid border-[#b1b2b3] my-input'/>
        <textarea placeholder="Message" rows="4" name="message" className='flex-1 text-white bg-transparent border border-solid border-[#b1b2b3] text-lg rounded-xl px-3 py-4 outline-0 my-input'></textarea>
        <input type="submit" value="Send" className='text-center px-3 py-4 mt-0.5 rounded-xl border-0 text-lg font-semibold submit-btn text-white'/>
        </form>
        </div>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}  anchorOrigin={{ vertical:"top", horizontal:"center" }} className='mt-[100px]'>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Sent Successfully!
        </Alert>
      </Snackbar>
    </div>
  )
}
