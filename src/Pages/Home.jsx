import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";


const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col justify-center items-center p-8 pt-20 relative overflow-hidden" // Added pt-24 for top padding
    >
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
        className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-6 z-10"
      >
        Welcome to My Portfolio 🎉
      </motion.h1>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        className="w-64 h-64 rounded-full overflow-hidden shadow-2xl mb-12 ring-4 ring-purple-500 ring-opacity-50 z-10"
      >
        <img
          src="https://github.com/ShafeeJakhro/portfolio.me/blob/main/imgs/web.png?raw=true"
          alt="Shafiq ur Rehman"
          className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
        />
      </motion.div>

      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
        className="text-xl text-gray-300 mb-12 text-center max-w-2xl z-10"
      >
        Hello! I'm{" "}
        <span className="font-semibold text-white">Shafiq ur Rehman</span> 👨‍💻,
        Hello! I’m a passionate Computer Science student driven by the
        intersection of technology and creativity. With a problem-solving
        mindset and hands-on experience, I’m eager to contribute to innovative
        projects that make a positive impact. Let’s create something remarkable!
      </motion.p>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
        className="flex flex-col sm:flex-row gap-4 z-10"
      >
        <Link
          to="/projects"
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          View My Projects 🖥️
        </Link>
        <Link
          to="/contact"
          className="bg-gray-700 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:bg-gray-600"
        >
          Get in Touch ✉️
        </Link>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8, type: "spring" }}
        className="flex justify-center space-x-8 mt-12 z-10"
      >
        {[
          {
            icon: FaLinkedin,
            href: "https://www.linkedin.com/in/shafiq-ur-rehman-b62202317/",
            color: "text-blue-400",
          },
          {
            icon: FaGithub,
            href: "https://github.com/ShafeeJakhro",
            color: "text-gray-400",
          },
          {
            icon: FaInstagram,
            href: "https://www.instagram.com/im.shafee/",
            color: "text-pink-400",
          },
        ].map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${social.color} hover:text-white transition duration-300`}
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <social.icon size={36} />
            <span className="text-xl">{social.emoji}</span>
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Home;
