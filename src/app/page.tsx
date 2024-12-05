import Image from "next/image";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <div className="min-h-screen h-screen bg-gray-50 overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-10">
        <div className="px-40 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/kld-logo.png" alt="Logo" width={80} height={80} />
            <p className="font-semibold text-lg">
              KLD Grades Monitoring and Advising System
            </p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>Login as</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link
                  href={"https://kld-grade-portal-final-student.vercel.app"}
                >
                  Student
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href={"https://kld-grade-portal-final-faculty.vercel.app"}
                >
                  Faculty
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={"https://kld-grade-portal-final-admin.vercel.app"}>
                  Admin
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        <section
          id="hero"
          className="text-center h-screen py-20 bg-cover bg-center bg-blue-100"
          style={{
            backgroundImage: "url('/bg.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-custom-gradient"></div>
          <div className="relative z-10 flex flex-col items-center justify-center">
            <Image src="/kld-logo.png" alt="Logo" width={200} height={200} />
            <p className="font-semibold text-5xl font-serif tracking-wider mt-5 text-white">
              Kolehiyo ng Lungsod ng Dasmariñas
            </p>
            <p className="text-yellow-400 text-7xl font-semibold mt-3 font-cursive">
              Building the foundation for the Dasmarineños!
            </p>
            <Link
              href="https://www.kld.edu.ph/"
              target="_blank"
              className="text-zinc-200 text-3xl font-semibold tracking-wide mt-5"
            >
              www.kld.edu.ph
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
