import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className="bg-gray-100 py-20 pl-[5%] pr-[5%]">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800">Contact Me</h2>
            <p className="mt-4 text-gray-600">I'm here to help you find your perfect property!</p>
            <form className="mt-8 max-w-md mx-auto">
                <input type="text" placeholder="Your Name" className="block w-full p-3 mb-4 border border-gray-300 rounded" />
                <input type="email" placeholder="Your Email" className="block w-full p-3 mb-4 border border-gray-300 rounded" />
                <textarea placeholder="Your Message" className="block w-full p-3 mb-4 border border-gray-300 rounded"></textarea>
                <button type="submit" className="w-full py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default Contact
