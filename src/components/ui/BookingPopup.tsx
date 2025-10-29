
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CalButton } from "@/components/ui/cal-button";

const BookingPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const threshold = window.innerHeight * 0.5; // Show after scrolling 50% of viewport height
      
      if (scrolled > threshold && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 100 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="fixed bottom-4 right-4 z-50 w-80 max-w-[calc(100vw-2rem)]"
        >
          <Card className="bg-white shadow-xl border-2 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-6 w-6 text-green-600" />
                  <h3 className="font-semibold text-lg text-gray-900">Book Your Meeting</h3>
                </div>
                <button
                  onClick={handleClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <p className="text-gray-600 mb-4">
                Ready to maximize your property investment? Schedule a free consultation with our experts.
              </p>
              
              <div className="space-y-3">
                <CalButton 
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={handleClose}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Free Consultation
                </CalButton>
                <button
                  onClick={handleClose}
                  className="w-full text-sm text-gray-500 hover:text-gray-700 transition-colors"
                >
                  Maybe later
                </button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingPopup;
