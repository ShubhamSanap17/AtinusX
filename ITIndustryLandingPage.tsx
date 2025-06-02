import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function ITIndustryLandingPage() {
  useEffect(() => {
    // Chatbot widget integration (example: Tawk.to)
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/YOUR_TAWKTO_ID/default";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <header className="p-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">TechNova IT Solutions</h1>
        <Button className="bg-blue-600 hover:bg-blue-800">Get Started</Button>
      </header>

      <main className="flex flex-col md:flex-row justify-between items-center p-10 md:p-20">
        <motion.div
          className="space-y-6 max-w-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-extrabold leading-tight">
            Innovative IT Services for the Modern World
          </h2>
          <p className="text-lg text-gray-300">
            We specialize in cloud computing, AI solutions, cybersecurity, and DevOps to help businesses scale and innovate.
          </p>
          <Button className="bg-purple-700 hover:bg-purple-900 text-lg px-6 py-2">
            Explore Services
          </Button>
        </motion.div>

        <motion.img
          src="/tech-illustration.svg"
          alt="Technology illustration"
          className="w-full md:w-1/2 mt-10 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
      </main>

      <section className="p-10 md:p-20 bg-gray-800">
        <h3 className="text-2xl font-semibold mb-6">Why Choose Us?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "AI-Powered Solutions", icon: <Sparkles /> },
            { title: "24/7 Support & Chatbot", icon: <Sparkles /> },
            { title: "Enterprise-Grade Security", icon: <Sparkles /> },
          ].map((feature, i) => (
            <Card key={i} className="bg-gray-700 text-white">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="text-purple-400">{feature.icon}</div>
                <div>{feature.title}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="p-6 text-center text-gray-400">
        © 2025 TechNova IT Solutions. All rights reserved.
      </footer>
    </div>
  );
}
