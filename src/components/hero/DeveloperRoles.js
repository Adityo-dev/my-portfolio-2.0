"use client";
import { motion } from "motion/react";
function DeveloperRoles({ developerRoles }) {
  return (
    <div className="w-full flex flex-wrap items-center justify-center sm:justify-between uppercase text-sm gap-4 md:gap-0">
      {developerRoles.map((role, ind) => (
        <motion.p
          key={ind}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: ind * 0.3,
          }}
          className="space-x-2 text-center md:text-left"
        >
          <span className="text-sunsetOrange">{"{"}</span>
          <span>{role}</span>
          <span className="text-sunsetOrange">{"}"}</span>
        </motion.p>
      ))}
    </div>
  );
}

export default DeveloperRoles;
