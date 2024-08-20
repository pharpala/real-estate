import React from 'react'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0e5a131f-31cf-447e-8551-69a1709a9cf8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id='contact' className="bg-gray-100 py-20 pl-[5%] pr-[5%]">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800">Contact Me</h2>
            <p className="mt-4 text-gray-600">I'm here to help you find your perfect property!</p>
            <form className="mt-8 max-w-md mx-auto" onSubmit={onSubmit}>
                <input type="text" name="name" placeholder="Your Name" className="block w-full p-3 mb-4 border border-gray-300 rounded" />
                <input type="email" name="email" placeholder="Your Email" className="block w-full p-3 mb-4 border border-gray-300 rounded" />
                <textarea placeholder="Your Message" name="message" required className="block w-full p-3 mb-4 border border-gray-300 rounded"></textarea>
                <button type="submit" className="w-full py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">Send Message</button>
            </form>
            {result && <p className="mt-4 text-gray-600">{result}</p>}
        </div>
    </section>
  )
}

export default Contact
