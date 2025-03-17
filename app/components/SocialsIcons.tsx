"use client";

import { Github } from "lucide-react";
import { Instagram } from "lucide-react";
import Link from "next/link";

export const GithubIcon: React.FC = () => {
  return (
    <Link
      href="https://github.com/aeriallistique"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      className="inline-flex ml-4 bg-gray-600 p-0.5 rounded-md text-white"
    >
      <Github className="w-7 h-7 hover:opacity-60 transition text-center bg-black" />
    </Link>
  );
};

export const InstaIcon: React.FC = () => {
  return (
    <Link
      href="https://www.instagram.com/aeriallistique"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="inline-flex ml-4 bg-gray-600 p-0.5 rounded-md text-white"
    >
      <Instagram className="w-7 h-7 hover:opacity-60 transition text-center bg-black" />
    </Link>
  )
}
