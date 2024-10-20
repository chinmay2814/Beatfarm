import React from 'react';

function Contact() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-[#4A3728]">Contact Us</h1>
      <p>Reach out to us at contact@beatfarm.com for any inquiries.</p>
      <form className="mt-8">
        <label className="block mb-4">
          <span className="text-[#4A3728]">Name</span>
          <input type="text" className="mt-1 block w-full rounded bg-[#E8D6C0] p-2" />
        </label>
        <label className="block mb-4">
          <span className="text-[#4A3728]">Email</span>
          <input type="email" className="mt-1 block w-full rounded bg-[#E8D6C0] p-2" />
        </label>
        <button className="bg-[#00A4E4] text-white py-2 px-4 rounded">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
