import React, { useRef } from 'react';
import { Github } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Shield, Users, Heart, Lock, ArrowRight, CheckCircle, Star, Download } from 'lucide-react';
function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m8h1koj', 'template_gr5v7l6', form.current, 'fpXU_RTe_v5ZieGvn')
      .then(() => {
        alert('Thanks for your suggestion! We’ll review it soon.');
        form.current.reset();
      }, (error) => {
        console.error(error);
        alert('Something went wrong. Please try again.');
      });
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-blue-100 p-4 rounded-full">
                <Shield className="h-12 w-12 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Break Free from
              <span className="text-blue-600"> Digital Addiction</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Take control of your digital life with our powerful browser extension that blocks over 50,000 harmful websites. Your journey to recovery starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/SafeSurf-Extension.zip"
                download
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Download className="h-5 w-5" />
                Download Extension
              </a>

              {/* <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Learn More
              </button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              You're Not Alone in This Struggle
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Millions of men worldwide face the same challenges. Understanding the problem is the first step to recovery.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <div className="bg-red-100 p-3 rounded-full w-fit mx-auto mb-4">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Emotional Impact</h3>
              <p className="text-gray-600">
                Addiction affects self-esteem, relationships, and mental health. Many men struggle with shame and isolation.
              </p>
            </div>
            
            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <div className="bg-orange-100 p-3 rounded-full w-fit mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Relationship Strain</h3>
              <p className="text-gray-600">
                Addiction can damage intimate relationships and create barriers to forming meaningful connections.
              </p>
            </div>
            
            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-4">
                <Lock className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Loss of Control</h3>
              <p className="text-gray-600">
                The compulsive nature of addiction makes it difficult to break free without proper tools and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Regain Control with Our Extension
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our browser extension is designed to be your first line of defense against digital temptation. Simple, effective, and always working in the background.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Instant Protection</h3>
                    <p className="text-gray-600">Blocks access to over 50,000 harmful websites immediately</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Easy to Use</h3>
                    <p className="text-gray-600">Simple installation and automatic protection without complexity</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Always Improving</h3>
                    <p className="text-gray-600">Regular updates with new features and enhanced protection</p>
                  </div>
                </div>
              </div>
              
              <button
                className="mt-8 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
                onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
>
                Start Your Recovery Journey
                <ArrowRight className="h-5 w-5" />
              </button>

            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-6">
                  <Shield className="h-16 w-16 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">50,000+ Sites Blocked</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive protection against the most harmful content on the internet
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-center gap-2 text-green-600">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-semibold">Extension Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* How to Install Slide */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 to-blue-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Install the Extension
            </h2>
            <p className="text-lg text-gray-600">
              Follow these simple steps to set up the SafeSurf Extension on your browser.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Step 1: Download the Extension</h3>
              <p className="text-gray-600 mb-4">Click the "Download Extension" button on our homepage to download the ZIP file.</p>
              <p className="text-gray-600">Once downloaded, extract/unzip the file to a location on your computer.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Step 2: Load the Extension in Chrome</h3>
              <ul className="text-gray-600 list-disc list-inside space-y-2">
                <li>Open Google Chrome.</li>
                <li>Type <code>chrome://extensions</code> in the address bar and press Enter.</li>
                <li>Enable <strong>Developer Mode</strong> (top-right corner).</li>
                <li>Click <strong>Load unpacked</strong>.</li>
                <li>Select the extracted folder.</li>
                <li>The extension will be installed and ready to use!</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Current Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our extension is just getting started. Here's what's available now, with many more features coming soon.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Website Blocking</h3>
              <p className="text-gray-600">
                Automatically blocks access to over 50,000 harmful websites across all categories
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-green-100 p-3 rounded-lg w-fit mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Instant Activation</h3>
              <p className="text-gray-600">
                Protection starts immediately after installation - no configuration needed
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 p-3 rounded-lg w-fit mb-4">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">More Coming Soon</h3>
              <p className="text-gray-600">
                Advanced features, customization options, and enhanced support tools in development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="download" className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Take the First Step Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Recovery is a journey, not a destination. Let our extension be your companion on the path to freedom and self-control.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/SafeSurf-Extension.zip"
                download
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Download className="h-5 w-5" />
                Download Extension
              </a>

              {/* <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Learn More
              </button> */}
            </div>
        </div>
      </section>
      {/* About Us Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About the Developer
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Hey there! 👋 I'm just an indie developer who saw how digital addiction was hurting people's lives. 
            I built this extension with the hope that it helps others regain control, just like I wished I had when I was struggling. 
            No big team, no company — just one person trying to make a difference.
          </p>
          <p className="text-gray-600 mb-8">
            Thank you for trusting Safe Surf on your journey to freedom.
          </p>

          <div className="flex justify-center">
            <a
              href="https://github.com/Siddy096?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-semibold"
            >
              <Github className="h-6 w-6" />
              View My GitHub
            </a>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Shield className="h-8 w-8 text-blue-400" />
          <span className="text-xl font-bold">Safe Surf</span>
        </div>
        <p className="text-gray-400">
          Empowering men to break free from digital addiction and reclaim their lives.
        </p>
      </div>

        <div>
          <h3 className="font-semibold mb-4">Suggest a Site to Block</h3>
          <p className="text-gray-400 mb-4">
            Found a harmful site we missed? Send it to us so we can add it to the blocklist.
          </p>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              name="site"
              placeholder="Enter website URL"
              className="p-3 rounded-lg text-gray-900 w-full sm:w-auto"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-5 py-3 rounded-lg font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>
          &copy; 2025 Safe Surf.{" "}
          <a href="#about" className="text-blue-400 hover:underline">
            Learn more about us.
          </a>
        </p>
      </div>
    </div>
  </footer>
    </div>
  );
}

export default App;