import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HistoriqueObjectifPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Historique et Objectif</h1>
          <div className="w-20 h-1 bg-ci-orange"></div>
        </div>

        <div className="grid gap-12 mt-12">
          {/* Section Historique */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Notre Histoire</h2>
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Fondé en 1998, le CAPEC (Cellule d'Analyse de Politiques Économiques du CIRES) est né de la volonté de
                  créer un centre d'excellence en matière d'analyse économique et de recherche appliquée en Côte
                  d'Ivoire.
                </p>
                <p>
                  À l'origine, le CAPEC a été créé pour répondre à un besoin croissant d'analyses économiques
                  rigoureuses et indépendantes pour guider les politiques publiques dans un contexte de réformes
                  économiques et institutionnelles.
                </p>
                <p>
                  Au fil des années, le CAPEC s'est imposé comme un acteur incontournable dans le domaine de l'analyse
                  des politiques économiques, contribuant activement au débat public et à la prise de décision.
                </p>
                <p>
                  Le centre a progressivement élargi son champ d'action, développant des partenariats avec des
                  institutions nationales et internationales, et renforçant ses capacités de recherche et d'analyse.
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/placeholder.svg?text=Histoire+du+CAPEC+depuis+1998&height=400&width=600"
                  alt="Histoire du CAPEC"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
          </section>

          {/* Section Chronologie */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Chronologie</h2>
            <div className="space-y-8">
              <div className="flex">
                <div className="flex-shrink-0 w-24 font-bold text-ci-orange">1998</div>
                <div>
                  <h3 className="font-bold">Création du CAPEC</h3>
                  <p className="text-muted-foreground">
                    Fondation de la Cellule d'Analyse de Politiques Économiques du CIRES sous l'impulsion de chercheurs
                    visionnaires.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-24 font-bold text-ci-orange">2003</div>
                <div>
                  <h3 className="font-bold">Expansion des activités</h3>
                  <p className="text-muted-foreground">
                    Élargissement du champ d'action du CAPEC avec l'intégration de nouvelles thématiques de recherche et
                    le renforcement de l'équipe.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-24 font-bold text-ci-orange">2008</div>
                <div>
                  <h3 className="font-bold">Partenariats internationaux</h3>
                  <p className="text-muted-foreground">
                    Développement de collaborations avec des institutions internationales et des centres de recherche
                    étrangers.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-24 font-bold text-ci-orange">2013</div>
                <div>
                  <h3 className="font-bold">Renforcement des capacités</h3>
                  <p className="text-muted-foreground">
                    Mise en place de programmes de formation et de renforcement des capacités pour les chercheurs et
                    analystes.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-24 font-bold text-ci-orange">2018</div>
                <div>
                  <h3 className="font-bold">20ème anniversaire</h3>
                  <p className="text-muted-foreground">
                    Célébration des 20 ans du CAPEC et lancement de nouvelles initiatives stratégiques pour l'avenir.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-24 font-bold text-ci-orange">2023</div>
                <div>
                  <h3 className="font-bold">Modernisation et innovation</h3>
                  <p className="text-muted-foreground">
                    Adoption de nouvelles technologies et méthodes d'analyse pour répondre aux défis économiques
                    contemporains.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section Objectifs */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Nos Objectifs</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Le CAPEC a pour mission principale de contribuer au développement économique et social à travers la
                  recherche, l'analyse et la formulation de politiques économiques fondées sur des données probantes.
                </p>
                <p>Nos objectifs stratégiques sont :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Produire des analyses économiques rigoureuses et pertinentes pour éclairer les décisions politiques
                  </li>
                  <li>
                    Contribuer au débat public sur les enjeux économiques majeurs nationaux, régionaux et internationaux
                  </li>
                  <li>
                    Former la prochaine génération d'économistes et d'analystes pour renforcer les capacités nationales
                  </li>
                  <li>Développer des partenariats stratégiques avec des institutions nationales et internationales</li>
                  <li>
                    Promouvoir l'utilisation des données et des méthodes scientifiques dans l'élaboration des politiques
                    publiques
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-4">Nos valeurs</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-ci-orange flex items-center justify-center text-white font-bold mr-4">
                      E
                    </div>
                    <div>
                      <h4 className="font-bold">Excellence</h4>
                      <p className="text-sm text-muted-foreground">
                        Nous nous engageons à maintenir les plus hauts standards de qualité dans nos recherches et
                        analyses.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-ci-green flex items-center justify-center text-white font-bold mr-4">
                      I
                    </div>
                    <div>
                      <h4 className="font-bold">Indépendance</h4>
                      <p className="text-sm text-muted-foreground">
                        Nous préservons notre indépendance intellectuelle pour garantir l'objectivité de nos travaux.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-ci-orange flex items-center justify-center text-white font-bold mr-4">
                      R
                    </div>
                    <div>
                      <h4 className="font-bold">Rigueur</h4>
                      <p className="text-sm text-muted-foreground">
                        Nous appliquons une méthodologie rigoureuse et scientifique dans toutes nos analyses.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-ci-green flex items-center justify-center text-white font-bold mr-4">
                      P
                    </div>
                    <div>
                      <h4 className="font-bold">Pertinence</h4>
                      <p className="text-sm text-muted-foreground">
                        Nous veillons à ce que nos recherches répondent aux défis économiques réels et actuels.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}

