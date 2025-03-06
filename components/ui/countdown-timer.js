"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const CountdownTimer = ({ expireTime }) => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const [hours, minutes, seconds] = expireTime.split(":").map(Number);
      const now = new Date();
      const target = new Date();
      target.setHours(hours, minutes, seconds);

      if (target < now) {
        target.setDate(target.getDate() + 1);
      }

      const difference = target - now;
      
      if (difference > 0) {
        return {
          hours: Math.floor((difference / (1000 * 60 * 60))),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      return { hours: 0, minutes: 0, seconds: 0 };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [expireTime]);

  return (
    <div className="inline-flex items-center gap-1 text-sm py-1 px-2 bg-neutral-100 dark:bg-neutral-700 rounded-md">
      <motion.div
        animate={{ scale: timeLeft.seconds === 0 ? 1.1 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <span className="font-mono">
          {String(timeLeft.hours).padStart(2, '0')}
        </span>
      </motion.div>
      <span className="text-neutral-400 font-bold">:</span>
      <motion.div
        animate={{ scale: timeLeft.seconds === 0 ? 1.1 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <span className="font-mono">
          {String(timeLeft.minutes).padStart(2, '0')}
        </span>
      </motion.div>
      <span className="text-neutral-400 font-bold">:</span>
      <motion.div
        animate={{ scale: timeLeft.seconds === 59 ? 1.1 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <span className="font-mono">
          {String(timeLeft.seconds).padStart(2, '0')}
        </span>
      </motion.div>
    </div>
  );
};

export default CountdownTimer;