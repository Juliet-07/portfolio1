import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f5dvunq",
        "template_vjr5n5a",
        form.current,
        "oiC7s5VYSbMGf8t5E"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sent")
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#28a745] flex justify-center items-center p-4"
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-white text-white">
            Contact
          </p>
          <p className="text-white py-4">
            Submit the form below or shoot me an email -
            ohankwerejulietkelechi@gmail.com
          </p>
        </div>
        <input
          className="bg-white p-2"
          type="text"
          placeholder="Name"
          name="user_name"
        />
        <input
          className="my-4 p-2 bg-white"
          type="email"
          placeholder="Email"
          name="user_email"
        />
        <textarea
          className="bg-white p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <input
          type="submit"
          value="Send"
          className="text-white border-2 hover:bg-[#28a745] hover:border-white px-4 py-3 my-8 mx-auto flex items-center"
        />
        {/* Let's Collaborate */}
        {/* </button> */}
      </form>
    </div>
  );
};

export default Contact;
