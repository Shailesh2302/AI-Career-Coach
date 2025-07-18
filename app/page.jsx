import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Trophy,
  Target,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import HeroSection from "@/components/hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { features } from "@/data/features";
import { testimonial } from "@/data/testimonial";
import { faqs } from "@/data/faqs";
import { howItWorks } from "@/data/howItWorks";

export default function Home() {
  
  return (
    <div className="relative overflow-hidden">
      {/* Enhanced background with gradient overlay */}
      <div className="grid-background"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 pointer-events-none"></div>
      
      <HeroSection />

      {/* Enhanced Features Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-background relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-950/10 dark:to-purple-950/10"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Powerful Features for Your Career Growth
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the tools that will transform your professional journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => {
              return (
                <Card
                  key={index}
                  className="group border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 bg-background/60 backdrop-blur-sm hover:-translate-y-2 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="pt-8 pb-8 text-center flex flex-col items-center relative z-10">
                    <div className="flex flex-col items-center justify-center space-y-4">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,theme(colors.primary.500/0.1),transparent)] dark:bg-[radial-gradient(circle_at_30%_50%,theme(colors.primary.400/0.1),transparent)]"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Trusted by Professionals Worldwide
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { number: "50+", label: "Industry Covered", icon: "🏢" },
              { number: "1000+", label: "Interview Questions", icon: "❓" },
              { number: "95%", label: "Success Rate", icon: "🎯" },
              { number: "24/7", label: "AI Support", icon: "🤖" }
            ].map((stat, index) => (
              <div key={index} className="group text-center p-6 rounded-2xl bg-background/60 backdrop-blur-sm hover:bg-background/80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </h3>
                <p className="text-muted-foreground font-medium text-lg">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced How It Works Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-background relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Four simple steps to accelerate your career growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {howItWorks.map((item, index) => {
              return (
                <div
                  key={index}
                  className="group flex flex-col items-center text-center space-y-6 p-6 rounded-2xl hover:bg-primary/5 transition-all duration-300 relative"
                >
                  {/* Connection line for desktop */}
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent -translate-x-8 z-0"></div>
                  )}
                  
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative z-10">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        {item.icon}
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
                      {index + 1}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-bold text-xl group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-muted/50 to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,theme(colors.purple.500/0.1),transparent)]"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Trophy className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              What Our Users Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Real success stories from professionals like you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonial.map((testimonial, index) => (
              <Card 
                key={index} 
                className="group bg-background/80 backdrop-blur-sm hover:bg-background transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 border-2 hover:border-primary/30 hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="pt-8 pb-8 relative z-10">
                  <div className="flex flex-col space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="relative h-14 w-14 flex-shrink-0">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 animate-pulse"></div>
                        <Image
                          width={56}
                          height={56}
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="rounded-full object-cover border-2 border-primary/20 relative z-10"
                        />
                      </div>
                      <div className="space-y-1">
                        <p className="font-bold text-lg">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground font-medium">
                          {testimonial.role}
                        </p>
                        <p className="text-sm text-primary font-semibold">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                    
                    <blockquote className="relative">
                      <div className="absolute -top-2 -left-2 text-4xl text-primary/20 font-serif">&quot;</div>
                      <p className="text-muted-foreground italic leading-relaxed pl-6 pr-4 relative z-10">
                        {testimonial.quote}
                      </p>
                      <div className="absolute -bottom-2 right-2 text-4xl text-primary/20 font-serif">&quot;</div>
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <CheckCircle2 className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about our platform
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-2 rounded-2xl px-6 hover:border-primary/30 transition-colors duration-300 bg-background/60 backdrop-blur-sm"
                >
                  <AccordionTrigger className="text-left text-lg md:text-xl font-semibold hover:text-primary transition-colors duration-300 py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="w-full py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-600 to-primary"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent)]"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-8 text-center max-w-4xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Ready to Accelerate Your Career?
              </h2>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Join thousands of professionals who are advancing their careers with AI-powered guidance.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-4">
              <Link href="/dashboard" passHref>
                <Button
                  size="lg"
                  variant="secondary"
                  className="h-14 px-8 text-lg font-semibold hover:scale-105 transition-all duration-300 hover:shadow-xl group"
                >
                  Start Your Journey Today 
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center space-x-8 pt-8 text-white/70">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-5 w-5 text-white/90" />
                <span className="text-sm">No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-5 w-5 text-white/90" />
                <span className="text-sm">Free forever plan</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}