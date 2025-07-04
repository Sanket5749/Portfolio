import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const projects = [
  {
    title: "PicPe",
    img: "/Picpe.png",
    description: "A social media web app inspired by Instagram."
  },
  {
    title: "ReelConnect",
    img: "/ReelConnect.jpeg",
    description: "Reel Connect is a modern reel-sharing platform"
  },
  {
    title: "Gaminghub",
    img: "/Gaminghub.webp",
    description: "This is a modern gaming hub."
  },
]

export default function Projects() {
  return (
    
   <div className="flex flex-col items-center justify-center w-full min-h-screen space-y-6 bg-dark">
  <h1 className="text-3xl font-bold">Projects</h1>
  <Carousel className="w-full max-w-xs">

        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="transition-transform duration-300 hover:scale-105">
                  <CardContent className="flex flex-col items-center justify-center p-4 gap-4">
                    <h1>{project.title}</h1>
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-32 h-32 object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    <p className="text-center text-sm text-gray-600">{project.description}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-black" />
        <CarouselNext className="text-black" />
      </Carousel>
    </div>
                    
  )
}