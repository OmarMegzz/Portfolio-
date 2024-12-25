import React from "react";

function ContactMe() {
  return (
    <div className="p-4 sm:p-8 flex flex-col min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md md:max-w-lg bg-black text-white rounded-lg p-6 md:p-10 flex flex-col items-center gap-6 shadow-lg">
        <h2 className="text-xl md:text-2xl font-bold text-center">
          Contact Me
        </h2>
        <p className="text-center text-gray-400">
          Feel free to reach out to me via phone, email, GitHub, or LinkedIn.
        </p>
        <div className="flex flex-col items-center space-y-4">
          <a
            href="tel:201287971308"
            className="text-blue-400 text-lg hover:underline"
          >
            📞 01287971308
          </a>
          <a
            href="mailto:omarmagdyzz12@gmail.com"
            className="text-blue-400 text-lg hover:underline"
          >
            ✉️ omarmagdyzz12@gmail.com
          </a>
          <a
            href="https://github.com/OmarMegzz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-lg hover:underline"
          >
            🌐 GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/omar-magdy-4866a1223/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-lg hover:underline"
          >
            💼 LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
