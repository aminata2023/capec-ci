"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Calendar, ChevronRight,ChevronLeft, Plus } from "lucide-react"
import { useEffect, useState } from "react";


export function EventCarousel({ events }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour passer à l'élément suivant
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length); // Revenir au début quand on atteint la fin
  };

  // Fonction pour passer à l'élément précédent
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length); // Revenir à la fin quand on est au début
  };

  // Utilisation de useEffect pour démarrer l'auto-défilement
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000); // 5000ms = 5 secondes

    // Nettoyage de l'intervalle à la fermeture du composant
    return () => clearInterval(intervalId);
  }, [events.length]);

  return (
    <div className="relative w-full">
      <div className="relative overflow-hidden">
        {/* Affichage des événements */}
        {events.map((event, index) => (
          <div
            key={index}
            className={`transition-transform duration-1000 ease-in-out flex-shrink-0 w-full ${index === currentIndex ? "block" : "hidden"}`}
          >
            <div className="p-1">
              <div className="overflow-hidden border-0 shadow-lg">
                <div className="relative aspect-[21/9] w-full">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-8">
                    <div className="flex items-center text-white/80 mb-2">
                      <span className="text-sm md:text-base">{event.date}</span>
                    </div>
                    <h2 className="text-5xl md:text-4xl font-bold text-white mb-4">{event.title}</h2>
                    <p className="text-white/90 mb-6 max-w-2xl text-sm md:text-base">{event.description}</p>
                    <div className="flex flex-wrap gap-3">
                      <Link href="/ressources">
                        <Button className="flex flex-col gap-2 min-[400px]:flex-row">
                          Découvrir nos publications
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      {event.registerLink && (
                        <Link href="/a-propos">
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
              </div>
            </div>
          </div>
        ))}

        {/* Flèche gauche (Précédent) */}
        <div className="absolute inset-y-0 left-4 flex items-center z-10">
          <button
            onClick={prevSlide} // Fonction pour revenir à l'élément précédent
            className="text-white cursor-pointer bg-black/50 p-2 rounded-full"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        </div>

        {/* Flèche droite (Suivant) */}
        <div className="absolute inset-y-0 right-4 flex items-center z-10">
          <button
            onClick={nextSlide} // Fonction pour passer à l'élément suivant
            className="text-white cursor-pointer bg-black/50 p-2 rounded-full"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}