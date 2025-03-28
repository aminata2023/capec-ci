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
                Née en 1992, dans un contexte de crise économique, la Cellule d’Analyse de Politiques Economiques
                 du Cires (CAPEC) est devenue fonctionnelle en 1993. Initialement financée principalement par 
                 la Fondation pour le Renforcement des Capacités en Afrique (ACBF), et l’Etat Ivoirien, 
                 la création de la CAPEC se justifiait par la nécessité d’apporter une assistance technique 
                 au Gouvernement dans la quête de solutions à une croissance économique soutenue, favorable 
                 à la réduction de la pauvreté et à celle de son incidence sur les populations ivoiriennes.
                </p>
                <h1 className="font-bold mb-4 ">
                La mise en œuvre du Projet s'est opérée en trois grandes phases:
                </h1>
                <p>
                La première phase qui a démarré en juin 1993, a pris fin en mai 2003. Elle a été jugée 
                encourageante et les résultats obtenus ont permis la mise en place d'une 2ème phase à 
                travers la signature d'un second accord de Don entre l'Etat de Côte d'Ivoire et l'ACBF
                </p>
                <p>
                L'objectif de la seconde phase était de renforcer les acquis de la phase I dans les domaines 
                du renforcement des capacités et de la gestion de la politique macroéconomique. Elle visait 
                aussi le renforcement de l'autonomie financière de la cellule et l'instauration d'un programme 
                de formation en direction du personnel d'appui et des chercheurs à l'effet de renforcer les 
                capacités internes du CIRES et également d'attirer et de maintenir un personnel qualifié. 
                Une revue de cette seconde phase conduite par l'ACBF en 2006, indique que le projet a eu un 
                impact global substantiel surtout dans les domaines du renforcement des capacités du personnel 
                de l'administration publique et dans la mise en œuvre de la politique économique du gouvernement
                </p>
                <p>
                La troisième phase a débuté en juin 2007 et s'est achevée le 30 novembre 2013. L'évaluation 
                de cette phase réalisée par un Consultant confirme les tendances issues des premières 
                évaluations et met en évidence des impacts positifs non prévus par l'accord de don.
                </p>
                <p>
                A partir de Janvier 2014, les interventions de la CAPEC ont été inscrites désormais dans une 
                perspective plus globale de l'appui aux acteurs économiques nationaux à travers le Programme 
                Pays de Renforcement des Capacités en Côte d'Ivoire (PPRC) dont l'accord de don a été signé 
                le mercredi 15 mai 2013. Ce Programme Pays vise à contribuer, avec succès, au renforcement 
                des capacités de l'économie nationale dans la lutte contre la pauvreté.
                </p>
                <p>
                Après plus de 25 années d'activités ayant visé le renforcement des capacités des cadres de 
                l'administration publique, du secteur privé et de la société civile en élaboration et mise 
                en œuvre des politiques économiques, la Capec connait une mutation institutionnelle. 
                Elle aura besoin de plus de ressources de l'Etat, mais souhaite préserver son autonomie 
                afin de permettre aux chercheurs d'avoir des contributions plus pertinentes à l'analyse 
                de la politique économique en CI.
                </p>
                <p>
                En attendant cette mutation, la CAPEC se présente à ce jour, comme une référence dans le 
                domaine de l'analyse et de gestion des politiques macroéconomiques en Côte d'Ivoire. 
                Elle se signale, comme un précieux organe de référence dans la maîtrise du développement 
                économique de la Côte d'Ivoire. Cette performance est à mettre sur le compte de la qualité 
                de ses produits. Produits en tant que résultats de la recherche et produits en tant que 
                Producteurs de la Recherche.
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/30.jpg"
                  //src="/placeholder.svg?text=Histoire+du+CAPEC+depuis+1998&height=400&width=600"
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
            <h2 className="text-xl font-bold mb-6">Objectif Général</h2>
            
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4 text-muted-foreground">
                <p>
                La CAPEC a pour objectif de produire pour le compte de l'administration ivoirienne des travaux 
                scientifiques destinés à éclairer la politique économique du gouvernement. Elle se veut 
                également un cadre national de réflexion, de recherche, d'information et de conseil au 
                service des institutions internationales, des opérateurs économiques et autres organisations 
                professionnelles.  
                </p> 
                <h2 className="text-xl font-bold mb-6">Objectifs spécifiques</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                  Faire des études et recherches destinées à éclairer les décideurs et les groupes 
                  socio-économiques ivoiriens, en vue de renforcer les capacités nationales d'analyse 
                  de politique et du développement économique ;                  
                  </li>
                  <li>
                  Offrir aux agents économiques un cadre national de réflexion et d'animation scientifique 
                  favorisant le dialogue sur les grandes questions économiques d'intérêt pour la Côte d'Ivoire 
                  et pour la sous-région ;                  
                  </li>
                  <li>
                  Assurer la formation continue des cadres de l'Administration dans le domaine de l'analyse 
                  des politiques macroéconomiques et sectorielles.                  
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

