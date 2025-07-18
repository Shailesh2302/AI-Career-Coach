"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { useRef } from "react";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full pt-36 md:pt-48 pb-10 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,theme(colors.primary.500/0.1),transparent)] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,theme(colors.purple.500/0.1),transparent)] pointer-events-none"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="space-y-8 text-center">
          <div className="space-y-8 mx-auto">
            {/* Enhanced Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-sm font-medium text-primary">AI-Powered Career Guidance</span>
            </div>
            
            {/* Enhanced Title */}
            <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl gradient-title leading-tight">
              Your AI Career Coach for
              <br />
              <span className="bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Professional Success
              </span>
            </h1>
            
            {/* Enhanced Description */}
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl lg:text-2xl leading-relaxed">
              Advance your career with personalized guidance, interview prep, and
              AI-powered tools for job success.
            </p>
          </div>
          
          {/* Enhanced Button Group */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link href="/dashboard">
              <Button size="lg" className="px-8 h-12 text-lg font-semibold hover:scale-105 transition-all duration-300 hover:shadow-xl group">
                Get Started
                <div className="ml-2 w-0 group-hover:w-4 transition-all duration-300 overflow-hidden">
                  →
                </div>
              </Button>
            </Link>
            <Link href="/resume">
              <Button size="lg" className="px-8 h-12 text-lg font-semibold hover:scale-105 transition-all duration-300 hover:shadow-xl" variant="outline">
                Try Resume Builder
              </Button>
            </Link>
          </div>

          {/* Enhanced Hero Image with Modern Design */}
          <div className="hero-image-wrapper mt-12 md:mt-16 relative">
            <div ref={imageRef} className="hero-image relative">
              {/* Modern Dashboard Mockup */}
              <div className="relative mx-auto max-w-6xl">
                {/* Browser Chrome */}
                <div className="bg-gray-200 dark:bg-gray-800 rounded-t-2xl p-3 border border-gray-300 dark:border-gray-700">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="flex-1 bg-white dark:bg-gray-700 rounded-md mx-4 px-3 py-1 text-xs text-gray-500 dark:text-gray-400">
                      https://career-ai-coach.com/dashboard
                    </div>
                  </div>
                </div>
                
                {/* Dashboard Content */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-b-2xl border-l border-r border-b border-gray-300 dark:border-gray-700 p-8 shadow-2xl">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                        Welcome back, Sarah! 👋
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">
                        Your career growth journey continues
                      </p>
                    </div>
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">AI</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Stats Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Interview Score</p>
                          <p className="text-2xl font-bold text-green-600">92%</p>
                        </div>
                        <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                          <span className="text-green-600 text-xl">📈</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Skills Improved</p>
                          <p className="text-2xl font-bold text-blue-600">15</p>
                        </div>
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                          <span className="text-blue-600 text-xl">🎯</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Career Level</p>
                          <p className="text-2xl font-bold text-purple-600">Senior</p>
                        </div>
                        <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                          <span className="text-purple-600 text-xl">🏆</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* AI Suggestions */}
                  <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-xl p-6 border border-primary/20">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">AI</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                          AI Career Insights
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                          Based on your profile, I recommend focusing on leadership skills and cloud architecture certifications.
                        </p>
                        <div className="flex gap-2">
                          <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium">
                            Leadership
                          </span>
                          <span className="px-3 py-1 bg-blue-500/20 text-blue-600 rounded-full text-xs font-medium">
                            AWS Certified
                          </span>
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-600 rounded-full text-xs font-medium">
                            System Design
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Action Cards */}
                <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-xl border border-gray-200 dark:border-gray-700 animate-pulse">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-gray-600 dark:text-gray-400">Live AI Coach</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-xl border border-gray-200 dark:border-gray-700 animate-pulse delay-500">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🚀</span>
                    <span className="text-xs text-gray-600 dark:text-gray-400">Career Boost</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;