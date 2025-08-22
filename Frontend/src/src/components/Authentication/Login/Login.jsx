import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Make sure to install framer-motion

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full bg-transparent p-4 sm:p-6 md:p-8">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative w-full max-w-[420px] bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/20"
      >
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-purple-800/50 to-blue-900/50 animate-gradient"></div>
        
        {/* Enhanced Floating Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 left-0 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-0 right-0 w-36 h-36 bg-blue-500/20 rounded-full blur-xl"
          />
        </div>

        <div className="relative p-6 sm:p-8 md:p-10">
          {/* Enhanced Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8 text-center"
          >
            <h3 className="font-bold text-2xl sm:text-3xl text-white mb-2 tracking-wider">
              IQAC DASHBOARD
            </h3>
            <p className="text-white/70 text-sm sm:text-base">
              Please sign in to continue
            </p>
          </motion.div>

          <div className="space-y-6">
            {/* Enhanced Email Input */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="group"
            >
              <div className="relative">
                <input 
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-400 text-white placeholder-white/50 backdrop-blur-sm transition-all duration-300 text-sm sm:text-base"
                  type="email" 
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Password Input */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="group"
            >
              <div className="relative">
                <input 
                  className="w-full pl-12 pr-12 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-400 text-white placeholder-white/50 backdrop-blur-sm transition-all duration-300 text-sm sm:text-base"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <svg className="w-5 h-5 text-white/50" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-white/50" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                      <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                    </svg>
                  )}
                </motion.div>
              </div>
            </motion.div>

            {/* Enhanced Sign In Button */}
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 text-sm sm:text-base"
            >
              Sign in
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}