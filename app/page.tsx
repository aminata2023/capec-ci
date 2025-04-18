
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, FileText, Calendar, Users, Camera } from "lucide-react"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { EventCarousel } from "@/components/carousel"



// Utilisation du composant
const carouselEvents = [
  {
    title: "Cellule d'Analyse de Politiques Économiques du CIRES",
    description:
      "Rejoignez-nous pour cette conférence majeure qui réunira des experts de renommée mondiale pour discuter des stratégies économiques dans l'ère post-pandémie.",
    date: "15-16 mars 2023",
    image: "/images/10esommetdesthinkstankdafriquevalide.jpg",
    learnMoreLink: "/activites/programme#event1",
    registerLink: "/activites/programme/inscription",
  },
  {
    title: "Lancement du nouveau programme de recherche sur l'économie verte",
    description:
      "Le CAPEC lance un ambitieux programme de recherche sur l'économie verte et la transition écologique, financé par une subvention internationale.",
    date: "20 avril 2023",
    image: "/images/dinerdes30eanniversairedelacapec9octobre2024.jpg",
    learnMoreLink: "/recherches/projets/economie-verte",
    registerLink: "/formations/inscription",
  },
  {
    title: "Séminaire de formation en économétrie appliquée",
    description:
      "Formation avancée sur les techniques économétriques pour les chercheurs et doctorants, avec un focus sur les applications pratiques.",
    date: "5-7 juin 2023",
    image: "/images/leçoninaugurale8octobre20242.jpg",
    learnMoreLink: "/formations/econometrie",
    registerLink: "/formations/inscription",
  },
];

export default function Home() {
  // Données pour le carrousel d'événements

 // <div className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"></div>

  

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Carousel Section */}
      <section className="w-full">
        <EventCarousel events={carouselEvents} />
        
      </section>

      {/* Mission Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center py-16 bg-orange-500 text-white">
            <div className="space-y-2">
              <h2 className="text-3xl tracking-tighter sm:text-4xl font-bold">Notre Mission</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-white font-bold">
               Eclairer la politique économique et renforcer les capacités
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="max-w-xs mx-auto">
              <CardContent className="p-4 flex flex-col items-center text-center space-y-3">
                <div className="p-2 rounded-full bg-orange-100">
                  <FileText className="h-5 w-5 text-ci-orange" />
                </div>
                <h3 className="text-lg font-bold">Recherche</h3>
                <p className="text-sm text-muted-foreground">
                  Conduire des recherches de haute qualité sur les questions économiques pertinentes.
                </p>
                <Image
                  src="/images/30.jpg?text=Recherche+Économique&height=120&width=240"
                  alt="Recherche économique"
                  width={240}
                  height={120}
                  className="rounded-md mt-1"
                />
              </CardContent>
            </Card>

            <Card className="max-w-xs mx-auto">
              <CardContent className="p-4 flex flex-col items-center text-center space-y-3">
                <div className="p-2 rounded-full bg-green-100">
                  <Users className="h-5 w-5 text-ci-green" />
                </div>
                <h3 className="text-lg font-bold">Formation</h3>
                <p className="text-sm text-muted-foreground">
                  Former la prochaine génération d'analystes et de chercheurs en économie.
                </p>
                <Image
                  src="/images/30.jpg?text=Recherche+Économique&height=120&width=240"
                  alt="Formation académique"
                  width={240}
                  height={120}
                  className="rounded-md mt-1"
                />
              </CardContent>
            </Card>

            <Card className="max-w-xs mx-auto">
              <CardContent className="p-4 flex flex-col items-center text-center space-y-3">
                <div className="p-2 rounded-full bg-orange-100">
                  <Calendar className="h-5 w-5 text-ci-orange" />
                </div>
                <h3 className="text-lg font-bold">Etude</h3>
                <p className="text-sm text-muted-foreground">
                  Fournir des conseils stratégiques aux décideurs politiques et aux parties prenantes.
                </p>
                <Image
                  src="/images/30.jpg?text=Recherche+Économique&height=120&width=240"
                  alt="Conseil stratégique"
                  width={240}
                  height={120}
                  className="rounded-md mt-1"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Publications */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-start space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Publications Récentes</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Découvrez nos dernières études et publications.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {recentPublications.map((pub) => (
              <PublicationCard key={pub.id} publication={pub} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/publications">
              <Button variant="outline" className="border-ci-green text-ci-green hover:bg-green-100">
                Voir toutes les publications
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-start space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Actualités</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Restez informé des derniers événements et annonces du CAPEC.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {recentNews.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/activites/actualites">
              <Button variant="outline" className="border-ci-orange text-ci-orange hover:bg-orange-100">
                Voir toutes les actualités
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Image Gallery - Enhanced with zoom effect and better design */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-orange-50 to-orange-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-10">
            <div className="inline-flex items-center justify-center p-2 bg-orange-100 rounded-full mb-4">
              <Camera className="h-6 w-6 text-ci-orange" />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">La CAPEC en images</h2>
            <div className="w-20 h-1 bg-ci-orange mx-auto my-2"></div>
            <p className="max-w-[700px] text-muted-foreground">
              Découvrez nos activités, nos événements et notre équipe à travers cette galerie d'images.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-lg shadow-lg group">
                <div className="relative h-48 md:h-64 w-full transition-transform duration-500 ease-in-out group-hover:scale-110">
                  <Image
                    src="/images/album1.jpg"
                    alt="Conférence du CAPEC"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-sm">Conférence annuelle</h3>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg group">
                <div className="relative h-64 md:h-80 w-full transition-transform duration-500 ease-in-out group-hover:scale-110">
                  <Image
                  src="/images/album2.jpg"
                    //src="/placeholder.svg?text=Séminaire+Économique&height=400&width=300"
                    alt="Séminaire économique"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-sm">Séminaire économique</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-lg shadow-lg group">
                <div className="relative h-64 md:h-80 w-full transition-transform duration-500 ease-in-out group-hover:scale-110">
                  <Image
                    src="/images/album4.jpg?text=Atelier+de+Formation&height=400&width=300"
                    alt="Atelier de formation"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-sm">Atelier de formation</h3>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg group">
                <div className="relative h-48 md:h-64 w-full transition-transform duration-500 ease-in-out group-hover:scale-110">
                  <Image
                    src="/images/album7.jpg?text=Réunion+d'Experts&height=300&width=400"
                    alt="Réunion d'experts"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-sm">Réunion d'experts</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-lg shadow-lg group">
                <div className="relative h-48 md:h-64 w-full transition-transform duration-500 ease-in-out group-hover:scale-110">
                  <Image
                    src="/images/album3.jpg"
                    alt="Présentation de recherche"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-sm">Présentation de recherche</h3>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg group">
                <div className="relative h-64 md:h-80 w-full transition-transform duration-500 ease-in-out group-hover:scale-110">
                  <Image
                    src="/images/album4.jpg"
                    alt="Visite officielle"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-sm">Visite officielle</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-lg shadow-lg group">
                <div className="relative h-64 md:h-80 w-full transition-transform duration-500 ease-in-out group-hover:scale-110">
                  <Image
                    src="/images/album4.jpg?text=Équipe+de+Recherche&height=400&width=300"
                    alt="Équipe de recherche"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-sm">Équipe de recherche</h3>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg group">
                <div className="relative h-48 md:h-64 w-full transition-transform duration-500 ease-in-out group-hover:scale-110">
                  <Image
                    src="/images/album6.jpg?text=Cérémonie+de+Remise+de+Prix&height=300&width=400"
                    alt="Cérémonie de remise de prix"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-sm">Cérémonie de remise de prix</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <Link href="/medias/phototheque"> {/*redirige vers l'onglet photothèque*/}
              <Button className="bg-ci-orange hover:bg-orange-600 text-white">
                Voir toutes les photos
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

interface Publication {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  coverImage?: string;
}

function PublicationCard({ publication }: { publication: Publication }) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video w-full overflow-hidden">
        <Image
        //src="/images/album1.jpg"
         src={publication.coverImage || "/placeholder.svg"}
          alt={publication.title}
          width={600}
          height={340}
          className="object-cover w-full h-full"
        />
      </div>
      <CardContent className="p-6">
        <div className="space-y-2">
          <span className="text-xs text-muted-foreground">{publication.date}</span>
          <h3 className="font-bold">{publication.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{publication.excerpt}</p>
          <Link href={`/publications/${publication.id}`}>
            <Button variant="link" className="p-0 h-auto">
              Lire plus
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

interface News {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image?: string;
}

function NewsCard({ news }: { news: News }) {
  return (
    <Card>
      {news.image && (
        <div className="aspect-video w-full overflow-hidden">
          <Image
            src={news.image || "/placeholder.svg"}
            alt={news.title}
            width={600}
            height={340}
            className="object-cover w-full h-full"
          />
        </div>
      )}
      <CardContent className="p-6">
        <div className="space-y-2">
          <span className="text-xs text-muted-foreground">{news.date}</span>
          <h3 className="font-bold">{news.title}</h3>
          <p className="text-muted-foreground">{news.excerpt}</p>
          <Link href={`/activites/actualites/${news.id}`}>
            <Button variant="link" className="p-0 h-auto">
              Lire plus
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

// Sample data with updated image placeholders
const recentPublications = [
  {
    id: "1",
    title: "Impact des politiques fiscales sur la croissance économique",
    excerpt:
      "Cette étude analyse l'impact des différentes politiques fiscales sur la croissance économique à long terme.",
    date: "15 février 2023",
    coverImage: "/images/pr1.jpg?text=Politiques+Fiscales&height=340&width=600",
  },
  {
    id: "2",
    title: "Analyse du marché du travail et des inégalités salariales",
    excerpt:
      "Une étude approfondie des dynamiques du marché du travail et des facteurs contribuant aux inégalités salariales.",
    date: "10 janvier 2023",
    coverImage: "/images/pr2.jpg?text=Marché+du+Travail&height=340&width=600",
  },
  {
    id: "3",
    title: "Évaluation des politiques de développement durable",
    excerpt:
      "Cette publication examine l'efficacité des politiques de développement durable et propose des recommandations.",
    date: "5 décembre 2022",
    coverImage: "/images/pr3.jpg?text=Développement+Durable&height=340&width=600",
  },
]

const recentNews = [
  {
    id: "1",
    title: "Conférence annuelle du CAPEC sur les politiques économiques",
    excerpt:
      "Le CAPEC organise sa conférence annuelle sur les politiques économiques le 15 mars 2023. Inscrivez-vous dès maintenant pour participer à cet événement majeur.",
    date: "20 février 2023",
    image: "/images/actua1.jpg?text=Conférence+Annuelle&height=340&width=600",
  },
  {
    id: "2",
    title: "Nouveau partenariat avec l'Université de Paris-Saclay",
    excerpt:
      "Le CAPEC est fier d'annoncer un nouveau partenariat de recherche avec l'Université de Paris-Saclay pour étudier les impacts économiques du changement climatique.",
    date: "5 février 2023",
    image: "/images/actua2.jpg?text=Partenariat+Universitaire&height=340&width=600",
  },
]

