import React, { useState, useEffect } from 'react';
import { database } from '../firebase';
import { ref, onValue, set, get } from 'firebase/database';

function StockOptionsCalculator() {
  const [downloadCount, setDownloadCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let unsubscribe;

    const initializeCounter = async () => {
      try {
        console.log('Initializing counter...');
        const downloadCountRef = ref(database, 'downloadCount');
        
        // Set up real-time listener
        unsubscribe = onValue(downloadCountRef, (snapshot) => {
          console.log('Counter updated:', snapshot.val());
          const count = snapshot.val() || 0;
          setDownloadCount(count);
          setIsLoading(false);
        }, (error) => {
          console.error('Error setting up listener:', error);
          setIsLoading(false);
        });

        // Initialize counter if it doesn't exist
        const snapshot = await get(downloadCountRef);
        if (!snapshot.exists()) {
          console.log('Counter does not exist, setting to 0');
          await set(downloadCountRef, 0);
        } else {
          console.log('Current count:', snapshot.val());
        }
      } catch (error) {
        console.error('Error initializing counter:', error);
        setIsLoading(false);
      }
    };

    initializeCounter();

    // Cleanup subscription on unmount
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  const handleDownload = async () => {
    try {
      console.log('Starting download process...');
      
      // Create a link element
      const link = document.createElement('a');
      link.href = '/downloads/Stock%20Options%20Calculator.exe';
      link.download = 'Stock Options Calculator.exe';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      console.log('File download initiated, updating counter...');
      
      // Increment the download count in Firebase
      const downloadCountRef = ref(database, 'downloadCount');
      const snapshot = await get(downloadCountRef);
      const currentCount = snapshot.val() || 0;
      console.log('Current count before increment:', currentCount);
      
      const newCount = currentCount + 1;
      await set(downloadCountRef, newCount);
      console.log('Counter updated to:', newCount);
      
      // Update local state immediately for better UX
      setDownloadCount(newCount);
    } catch (error) {
      console.error('Error in handleDownload:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)]"></div>
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative min-h-screen py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="backdrop-blur-xl bg-white/10 rounded-3xl shadow-2xl p-8 border border-white/20">
            {/* App Header */}
            <div className="flex items-center space-x-4 mb-8">
              <img
                src="/assets/images/StockOptionsLogo.jpg"
                alt="Stock Options Calculator Logo"
                className="w-20 h-20 rounded-2xl object-cover"
              />
              <div>
                <h1 className="text-3xl font-bold text-white">Stock Options Calculator</h1>
                <p className="text-gray-300 mt-2">
                  This app helps you to quickly calculate a -10% stop and a +10% profit target, based on options contract price. Input your fill price, and your stop loss / profit target contract price display immediately.
                </p>
                <p className="text-gray-400 mt-2 italic">
                  Available for Windows only, for now.
                </p>
                <button
                  onClick={handleDownload}
                  className="mt-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Download for Windows</span>
                </button>
                <p className="text-gray-400 mt-2">
                  {isLoading ? 'Loading...' : `Total Downloads: ${downloadCount.toLocaleString()}`}
                </p>
              </div>
            </div>

            {/* Screenshots */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="/assets/images/stockoptions1.png"
                  alt="Stock Options Calculator Screenshot 1"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="/assets/images/stockoptions2.png"
                  alt="Stock Options Calculator Screenshot 2"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StockOptionsCalculator; 