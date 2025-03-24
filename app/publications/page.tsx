import Image from "next/image"
import { Header } from "@/components/header"

export default function PublicationsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Publications</h1>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            Découvrez nos travaux de recherche, rapports, notes de politique et autres publications.
          </p>
        </div>

        {/* Banner Image */}
        <div className="mt-8 relative rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?text=Centre+de+Documentation+du+CAPEC&height=300&width=1200"
            alt="Centre de documentation du CAPEC"
            width={1200}
            height={300}
            className="object-cover w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="p-8 text-white max-w-md">
              <h2 className="text-2xl font\

