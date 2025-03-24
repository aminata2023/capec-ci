"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Calendar, ChevronRight, Plus } from "lucide-react"


export function EventCarousel({ events }) {
  
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {events.map((event, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="overflow-hidden border-0 shadow-lg">
                <div className="relative aspect-[21/9] w-full">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-8">
                    <div className="flex items-center text-white/80 mb-2">
                      <Calendar className="mr-2 h-5 w-5" />
                      <span className="text-sm md:text-base">{event.date}</span>
                    </div>
                    <h2 className="text-5xl md:text-4xl font-bold text-white mb-4 grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">{event.title}</h2>
                    <p className="text-white/90 mb-6 max-w-2xl text-sm md:text-base">{event.description}</p>
                    <div className="flex flex-wrap gap-3">
                      <Link href="/ressources">
                        <Button className="flex flex-col gap-2 min-[400px]:flex-row">
                          Découvrir nos publications
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      {event.registerLink && (
                        <Link href= "/a-propos">
                          <Button
                            variant="outline"
                            className="border-ci-green text-ci-green hover:bg-green-50"
                          >
                            En savoir plus sur le CAPEC 
                          </Button>
                        </Link>
                      )}
         
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hidden md:block">
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </div>
    </Carousel>
  )
}

