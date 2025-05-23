import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">À propos du CAPEC</h1>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            Découvrez l'histoire, la mission et l'équipe de la Cellule d'Analyse de Politiques Économiques du CIRES.
          </p>
        </div>

        <Tabs defaultValue="historique" className="mt-12">
          <TabsList className="grid w-full grid-cols-2 bg-orange-100">
            <TabsTrigger value="historique" className="data-[state=active]:bg-ci-orange data-[state=active]:text-white">
              Historique
            </TabsTrigger>
            <TabsTrigger value="equipe" className="data-[state=active]:bg-ci-green data-[state=active]:text-white">
              Notre Équipe
            </TabsTrigger>
          </TabsList>
          <TabsContent value="historique" className="mt-6 space-y-8">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Notre Histoire</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Fondé en 1998, le CAPEC (Cellule d'Analyse de Politiques Économiques du CIRES) est né de la volonté
                    de créer un centre d'excellence en matière d'analyse économique et de recherche appliquée.
                  </p>
                  <p>
                    Depuis sa création, le CAPEC s'est imposé comme un acteur incontournable dans le domaine de
                    l'analyse des politiques économiques, contribuant activement au débat public et à la prise de
                    décision.
                  </p>
                  <p>
                    Au fil des années, notre centre a développé une expertise reconnue dans plusieurs domaines clés,
                    notamment la macroéconomie, le développement durable, les politiques sociales et l'économie
                    internationale.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/hist01.jpg?text=Histoire+du+CAPEC+depuis+1998&height=400&width=600"
                  alt="Histoire du CAPEC"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-4">Notre Mission</h2>
              <div className="space-y-4 text-muted-foreground max-w-[800px]">
                <p>
                  La CAPEC a pour mission principale de contribuer au développement économique et social à travers la
                  recherche, l'analyse et la formulation de politiques économiques fondées sur des données probantes.
                </p>
                <p>Nos objectifs sont multiples :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Conduire des recherches de haute qualité sur les questions économiques pertinentes</li>
                  <li>Fournir des analyses rigoureuses pour éclairer les décisions politiques</li>
                  <li>Former la prochaine génération d'analystes et de chercheurs en économie</li>
                  <li>Faciliter le dialogue entre chercheurs, décideurs politiques et société civile</li>
                  <li>Contribuer au débat public sur les enjeux économiques majeurs</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/images/notremission.jpg?text=Évolution+du+CAPEC&height=300&width=500"
                  alt="Évolution du CAPEC"
                  width={500}
                  height={300}
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-bold">Notre évolution</h3>
                  <p className="text-white/80 text-sm">De 1998 à aujourd'hui</p>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/images/notrmission.jpg?text=Partenariats+Internationaux&height=300&width=500"
                  alt="Partenariats internationaux"
                  width={500}
                  height={300}
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-bold">Nos partenariats</h3>
                  <p className="text-white/80 text-sm">Collaborations nationales et internationales</p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="equipe" className="mt-6">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Comité de Pilotage</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {directionTeam.map((member) => (
                    <TeamMemberCard key={member.id} member={member} />
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Direction</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {researchTeam.map((member) => (
                    <TeamMemberCard key={member.id} member={member} />
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Equipe de Recherche</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {adminTeam.map((member) => (
                    <TeamMemberCard key={member.id} member={member} />
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  )
}

function TeamMemberCard({ member }) {
  return (
    <Card className="border-t-4 border-t-ci-orange hover:shadow-md transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="relative w-32 h-32 rounded-full overflow-hidden">
            <Image src={member.photo || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
          </div>
          <div>
            <h3 className="font-bold">{member.name}</h3>
            <p className="text-sm text-muted-foreground">{member.title}</p>
          </div>
          <p className="text-sm text-muted-foreground">{member.bio}</p>
        </div>
      </CardContent>
    </Card>
  )
}

// Sample data with updated image placeholders
const directionTeam = [
  {
    id: "1",
    name: "Dr. YEO Nahoua",
    title: "Directeur de Cabinet du Ministère du Plan",
    bio: " expert en planification, dirige le Cabinet du Ministère du Plan de Côte d’Ivoire.",
    photo: "/images/DrYEONahoua.jpg?text=Dr.+Amadou+Diallo&height=200&width=200",
  },
  {
    id: "2",
    name: "Honorable DIABAGATE MAmah",
    title: " Commission des Affaires Economiques et Financières de l’Assemblée Nationale",
    bio: "Membre de la Commission Éco. et Finances à l’Assemblée Nationale, expert en politiques publiques.",
    photo: "/images/HonorableDIABAGATEMAmah.jpg?text=Dr.+Marie+Koné&height=200&width=200",
  },
]

const researchTeam = [
  {
    id: "3",
    name: "Prof. AHOURE Alban A.E.",
    title: "Directeur de la CAPEC",
    bio: "Expert en économie du développement avec un focus sur les politiques d'inclusion financière.",
    photo: "/images/drcapec.jpg?text=Dr.+Jean+Touré&height=200&width=200",
  },
  /*{
    id: "4",
    name: "Dr. Fatou Sow",
    title: "Chercheuse Senior",
    bio: "Spécialiste des questions de genre et d'économie sociale, docteure de l'Université de Paris.",
    photo: "/placeholder.svg?text=Dr.+Fatou+Sow&height=200&width=200",
  },
  {
    id: "5",
    name: "Dr. Paul Mensah",
    title: "Chercheur",
    bio: "Économiste spécialisé dans l'analyse des politiques commerciales et l'intégration régionale.",
    photo: "/placeholder.svg?text=Dr.+Paul+Mensah&height=200&width=200",
  },*/
]

const adminTeam = [
  {
    id: "6",
    name: "Prof. KIMOU Assi José Carlos",
    title: "Responsable Administrative",
    bio: "Coordonne les activités administratives et financières du CAPEC depuis 10 ans.",
    photo: "/placeholder.svg?text=Aïcha+Bamba&height=200&width=200",
  },
  {
    id: "7",
    name: "Kofi Addo",
    title: "Chargé de Communication",
    bio: "Responsable de la stratégie de communication et des relations publiques du CAPEC.",
    photo: "/placeholder.svg?text=Kofi+Addo&height=200&width=200",
  },
  {
    id: "8",
    name: "Kofi Addo",
    title: "Chargé de Communication",
    bio: "Responsable de la stratégie de communication et des relations publiques du CAPEC.",
    photo: "/placeholder.svg?text=Kofi+Addo&height=200&width=200",
  }
]