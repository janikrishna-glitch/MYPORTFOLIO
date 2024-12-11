// import React, { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";

// import { styles } from "../styles";
// import { EarthCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { slideIn } from "../utils/motion";

// const Contact = () => {
//   const formRef = useRef();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { target } = e;
//     const { name, value } = target;

//     setForm({
//       ...form,
//       [name]: value,
//     });
//   };

  

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);
  
//     emailjs
//       .send(
//         import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
//         import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
//         {
//           from_name: form.name,
//           to_name: "Jani Krishna",
//           from_email: form.email,
//           to_email: "janikrishna918@gmail.com",
//           message: form.message,
//         },
//         import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
//       )
//       .then(
//         () => {
//           setLoading(false);
//           alert(
//             "Message sent successfully! Please check your Gmail for the message details."
//           );
  
//           setForm({
//             name: "",
//             email: "",
//             message: "",
//           });
//         },
//         (error) => {
//           setLoading(false);
//           console.error(error);
//           alert("Oops! Something went wrong. Please try again.");
//         }
//       );
//   };
  

//   return (
//     <div
//       className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
//     >
//       <motion.div
//         variants={slideIn("left", "tween", 0.2, 1)}
//         className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
//       >
//         <p className={styles.sectionSubText}>Get in touch</p>
//         <h3 className={styles.sectionHeadText}>Contact.</h3>

//         <form
//           ref={formRef}
//           onSubmit={handleSubmit}
//           className='mt-12 flex flex-col gap-8'
//         >
//           <label className='flex flex-col'>
//             <span className='text-white font-medium mb-4'>Your Name</span>
//             <input
//               type='text'
//               name='name'
//               value={form.name}
//               onChange={handleChange}
//               placeholder="What's your good name?"
//               className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//             />
//           </label>
//           <label className='flex flex-col'>
//             <span className='text-white font-medium mb-4'>Your email</span>
//             <input
//               type='email'
//               name='email'
//               value={form.email}
//               onChange={handleChange}
//               placeholder="What's your web address?"
//               className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//             />
//           </label>
//           <label className='flex flex-col'>
//             <span className='text-white font-medium mb-4'>Your Message</span>
//             <textarea
//               rows={7}
//               name='message'
//               value={form.message}
//               onChange={handleChange}
//               placeholder='What you want to say?'
//               className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//             />
//           </label>

//           <button
//             type='submit'
//             className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
//           >
//             {loading ? "Sending..." : "Send"}
//           </button>
//         </form>
//       </motion.div>

//       <motion.div
//         variants={slideIn("right", "tween", 0.2, 1)}
//         className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
//       >
//         <EarthCanvas />
//       </motion.div>
//     </div>
//   );
// };

// export default SectionWrapper(Contact, "contact");



import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-18 overflow-hidden`}>
    <motion.div
    variants={slideIn("left", "tween", 0.2, 1)}
    className="flex-[0.75] bg-black-100 p-12 rounded-2xl shadow-lg h-[500px] md:h-[500px] xl:h-[450px] mt-14"  
  >
    <p className={`${styles.sectionSubText} text-lg`}>Get in touch</p>
    <p className={`${styles.sectionHeadText} md:text-[40px] sm:text-[30px] xs:text-[20px] text-[18px]`}>Contact.</p>
  
    {/* Contact Details Section */}
    <div className="mt-12">
      <p className="text-white text-[20px] font-bold mb-6">
        📞 +91 9023209965
      </p>
      <a
        href="mailto:janikrishna918@gmail.com"
        className="text-white text-[18px] font-medium underline hover:text-primary transition-all duration-200"
      >
        📧 janikrishna918@gmail.com
      </a>
      <p className="text-white text-[18px] mt-8">
        Feel free to reach out to me via phone or email. I’d love to hear from you!
      </p>
    </div>
  </motion.div>
  
  <motion.div
  variants={slideIn("right", "tween", 0.2, 1)}
  className='xl:flex-1 xl:h-[600px] md:h-[700px] h-[500px] flex justify-center items-center ml-5 mb-15' 
>
  <EarthCanvas />
</motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");