/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Layout = () => {
  return (
    <div
      className="min-h-screen flex flex-col bg-white
    "
    >
      <Header />

      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-30">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Outlet />
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
