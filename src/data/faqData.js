export const faqData = [
  // --- NOUVEAU : Cœur de l'offre (IA Locale & Modèles) ---
  {
    id: 'modeles-ia-locaux',
    slug: 'quels-modeles-ia-locaux',
    featured: true,
    question: "Quels modèles d'IA installez-vous (Mistral, Llama, Qwen) ?",
    shortAnswer: "Nous sélectionnons le meilleur de l'Open Source. Mistral (France) pour la rédaction, Qwen pour la logique/maths, et Llama 3 pour la polyvalence. Le tout orchestré via Ollama pour une fluidité totale.",
    detailedAnswer: `
      <p class="mb-4">Contrairement aux solutions fermées (comme ChatGPT), nous vous donnons accès à une <strong>bibliothèque de modèles de pointe</strong> (State of the Art), choisis spécifiquement pour vos besoins.</p>
      
      <h3 class="text-xl font-bold text-white mb-3 mt-6">L'Orchestration avec Ollama</h3>
      <p class="mb-4">Nous utilisons <strong>Ollama</strong> comme moteur d'orchestration, ce qui nous permet de changer de "cerveau" instantanément selon la tâche :</p>
      <ul class="list-disc list-inside space-y-2 mb-4 text-slate-300">
        <li><strong>Mistral / Mixtral (France)</strong> : Excellent pour la rédaction en français, le code et la synthèse.</li>
        <li><strong>Qwen (Alibaba)</strong> : Actuellement imbattable sur les mathématiques, la logique complexe et le code.</li>
        <li><strong>Llama 3 (Meta)</strong> : Le standard industriel, très polyvalent et robuste.</li>
      </ul>

      <h3 class="text-xl font-bold text-white mb-3 mt-6">Pourquoi plusieurs modèles ?</h3>
      <p class="mb-4">On n'utilise pas un marteau pour visser. SmartUnityIA configure votre Mac Mini pour router vos demandes vers le modèle le plus compétent : Qwen pour analyser vos Excel, Mistral pour rédiger vos emails.</p>
    `,
    keywords: ['Mistral', 'Qwen', 'Ollama', 'Llama 3', 'Modèles Open Source', 'IA Locale'],
    seoTitle: 'Quels modèles IA locaux (Mistral, Qwen) ? | SmartUnityIA',
    seoDescription: 'Découvrez les modèles IA installés sur votre Mac Mini : Mistral pour le français, Qwen pour la logique, orchestrés par Ollama. Performance locale maximale.',
    slides: [
      {
        image: '/slides/modeles-ia/modeles-ia-1.jpg',
        alt: 'Interface Ollama - Orchestration des modèles IA Mistral, Qwen et Llama 3'
      },
      {
        image: '/slides/modeles-ia/modeles-ia-2.jpg',
        alt: 'Modèle Mistral - Performance en rédaction française et génération de code'
      },
      {
        image: '/slides/modeles-ia/modeles-ia-3.jpg',
        alt: 'Modèle Qwen - Capacités en mathématiques et logique complexe'
      },
      {
        image: '/slides/modeles-ia/modeles-ia-4.jpg',
        alt: 'Modèle Llama 3 - Polyvalence et robustesse pour tâches générales'
      },
      {
        image: '/slides/modeles-ia/modeles-ia-5.jpg',
        alt: 'Comparaison des performances des modèles IA locaux sur Mac Mini'
      },
      {
        image: '/slides/modeles-ia/modeles-ia-6.jpg',
        alt: 'Configuration et installation des modèles IA sur infrastructure Local First'
      }
    ]
  },

  // --- NOUVEAU : Choix du Matériel ---
  {
    id: 'choix-mac-mini',
    slug: 'quel-mac-mini-choisir',
    featured: true,
    question: "Quel Mac Mini choisir pour mon entreprise ?",
    shortAnswer: "Cela dépend de votre usage. Le M4 standard suffit pour l'administratif et les assistants personnels. Le M4 Pro est recommandé pour les développeurs et l'analyse de gros volumes de données.",
    detailedAnswer: `
      <p class="mb-4">Le <strong>Mac Mini</strong> est la machine idéale pour l'IA grâce à son architecture mémoire unifiée (CPU/GPU). Voici comment choisir votre configuration :</p>
      
      <h3 class="text-xl font-bold text-white mb-3 mt-6">Configuration "Essentiel" (M4 - 16/24 Go)</h3>
      <ul class="list-disc list-inside space-y-2 mb-4 text-slate-300">
        <li><strong>Pour qui ?</strong> : Indépendants, secrétariat, administratif.</li>
        <li><strong>Capacités</strong> : Faire tourner des modèles de 7B à 14B paramètres (très rapides).</li>
        <li><strong>Usage</strong> : Rédaction d'emails, synthèse de documents, chat simple.</li>
      </ul>

      <h3 class="text-xl font-bold text-white mb-3 mt-6">Configuration "Pro" (M4 Pro - 32 Go+)</h3>
      <ul class="list-disc list-inside space-y-2 mb-4 text-slate-300">
        <li><strong>Pour qui ?</strong> : Développeurs, Analystes financiers, Juristes (gros dossiers).</li>
        <li><strong>Capacités</strong> : Modèles 32B+, contextes longs (livres entiers).</li>
        <li><strong>Usage</strong> : Analyse de code, RAG sur base de données massive, automatisation complexe.</li>
      </ul>

      <p class="mb-4">En tant qu'ingénieur, je valide chaque configuration pour qu'elle corresponde exactement à votre charge de travail, sans surcoût inutile.</p>
    `,
    keywords: ['Mac Mini M4', 'Hardware IA', 'Configuration Apple', 'M4 Pro', 'Performance IA'],
    seoTitle: 'Quel Mac Mini pour l\'IA ? Guide M4 vs M4 Pro | SmartUnityIA',
    seoDescription: 'Guide d\'achat Mac Mini pour l\'IA. M4 pour l\'usage bureautique, M4 Pro pour l\'analyse de données intensive. Choisissez la bonne puissance.',
    slides: [
      {
        image: '/slides/mac-mini/mac-mini-1.jpg',
        alt: 'Mac Mini M4 - Configuration Essentiel 16 Go RAM pour usage administratif et assistants personnels'
      },
      {
        image: '/slides/mac-mini/mac-mini-2.jpg',
        alt: 'Mac Mini M4 Pro - Configuration Pro 48 Go RAM pour développeurs et analyse de données'
      },
      {
        image: '/slides/mac-mini/mac-mini-3.jpg',
        alt: 'Comparaison Mac Mini M4 vs M4 Pro - Capacités et performances pour IA locale'
      },
      {
        image: '/slides/mac-mini/mac-mini-4.jpg',
        alt: 'Architecture mémoire unifiée Mac Mini - Avantages pour l\'intelligence artificielle'
      },
      {
        image: '/slides/mac-mini/mac-mini-5.jpg',
        alt: 'Modèles IA supportés par Mac Mini M4 - Mistral 7B, Llama 3, Qwen'
      },
      {
        image: '/slides/mac-mini/mac-mini-6.jpg',
        alt: 'Modèles IA avancés sur Mac Mini M4 Pro - Modèles 32B+ et contextes longs'
      },
      {
        image: '/slides/mac-mini/mac-mini-7.jpg',
        alt: 'Installation et configuration Mac Mini pour infrastructure IA Local First'
      }
    ]
  },

  // --- NOUVEAU : Services Spécialisés (Apps) ---
  {
    id: 'applications-sur-mesure',
    slug: 'applications-ia-sur-mesure',
    featured: true,
    question: "Pouvez-vous créer des applications pour un problème spécifique ?",
    shortAnswer: "Oui. Au-delà du simple 'Chat', nous développons des interfaces dédiées : tableau de bord financier, trieur de CV pour les RH, ou analyseur de contrats juridiques.",
    detailedAnswer: `
      <p class="mb-4">L'IA ne sert pas qu'à discuter. C'est un moteur de traitement. SmartUnityIA développe des <strong>micro-applications métiers</strong> qui résolvent vos problèmes spécifiques.</p>
      
      <h3 class="text-xl font-bold text-white mb-3 mt-6">Exemples de réalisations</h3>
      <ul class="list-disc list-inside space-y-2 mb-4 text-slate-300">
        <li><strong>Finance</strong> : Une app qui "scanne" vos factures PDF et remplit automatiquement votre fichier Excel de comptabilité.</li>
        <li><strong>RH</strong> : Un outil qui lit 500 CV et sort le top 10 correspondant à votre fiche de poste.</li>
        <li><strong>Immobilier</strong> : Un générateur d'annonces optimisées à partir de vos photos et caractéristiques techniques.</li>
      </ul>

      <p class="mb-4">Nous ne vous vendons pas une boîte vide, mais une <strong>solution configurée</strong> pour votre métier.</p>
    `,
    keywords: ['Développement IA', 'Applications sur mesure', 'Outils métiers', 'Finance', 'RH'],
    seoTitle: 'Applications IA sur mesure pour entreprises | SmartUnityIA',
    seoDescription: 'Développement d\'applications IA métiers : Finance, RH, Juridique. Résolvez vos problèmes spécifiques avec des outils sur mesure.',
    slides: [
      {
        image: '/slides/applications/applications-1.jpg',
        alt: 'Tableau de bord financier IA - Analyse automatique de factures PDF et remplissage Excel'
      },
      {
        image: '/slides/applications/applications-2.jpg',
        alt: 'Trieur de CV IA pour RH - Analyse de 500 CV et sélection du top 10 correspondant'
      },
      {
        image: '/slides/applications/applications-3.jpg',
        alt: 'Analyseur de contrats juridiques IA - Extraction et analyse de clauses contractuelles'
      },
      {
        image: '/slides/applications/applications-4.jpg',
        alt: 'Générateur d\'annonces immobilières IA - Création optimisée à partir de photos et caractéristiques'
      },
      {
        image: '/slides/applications/applications-5.jpg',
        alt: 'Interface micro-application métier IA - Développement sur mesure pour secteurs spécifiques'
      },
      {
        image: '/slides/applications/applications-6.jpg',
        alt: 'Architecture applications IA sur mesure - Solutions configurées pour votre métier'
      }
    ]
  },

  // --- NOUVEAU : Automatisations ---
  {
    id: 'automatisation-processus',
    slug: 'automatisation-taches-ia',
    featured: true,
    question: "L'IA peut-elle automatiser mes tâches répétitives ?",
    shortAnswer: "C'est sa plus grande force. Nous connectons l'IA à vos fichiers et logiciels via des scripts Python pour qu'elle travaille en arrière-plan : lecture de mails, extraction de données, reporting.",
    detailedAnswer: `
      <p class="mb-4">Ne perdez plus de temps à faire des copier-coller. Nous configurons des <strong>agents d'automatisation</strong> qui travaillent pour vous 24/7 sur votre Mac Mini.</p>
      
      <h3 class="text-xl font-bold text-white mb-3 mt-6">L'Automatisation "Local First"</h3>
      <ul class="list-disc list-inside space-y-2 mb-4 text-slate-300">
        <li><strong>Traitement de fichiers</strong> : L'IA ouvre vos dossiers, lit les nouveaux fichiers et agit dessus.</li>
        <li><strong>Connexion API</strong> : (Optionnel) Liaison avec votre CRM ou vos outils internes.</li>
        <li><strong>Scripts Python</strong> : Des programmes robustes et audités qui exécutent les actions (envoi de mail, création de PDF).</li>
      </ul>

      <p class="mb-4">Le but est de libérer vos équipes des tâches à faible valeur ajoutée pour qu'elles se concentrent sur l'essentiel.</p>
    `,
    keywords: ['Automatisation IA', 'Python', 'Productivité', 'Agents autonomes', 'Workflow'],
    seoTitle: 'Automatisation des tâches par l\'IA | SmartUnityIA',
    seoDescription: 'Automatisez vos processus métiers avec l\'IA et Python. Traitement de fichiers, emails, reporting. Gain de productivité immédiat.',
    slides: [
      {
        image: '/slides/auto/auto-1.jpg',
        alt: 'Agents autonomes IA'
      },
      {
        image: '/slides/auto/auto-2.jpg',
        alt: 'Opérationnel 24/7'
      },
      {
        image: '/slides/auto/auto-3.jpg',
        alt: 'Alliance IA Python'
      },
      {
        image: '/slides/auto/auto-4.jpg',
        alt: 'Zéro erreur humaine'
      },
      {
        image: '/slides/auto/auto-5.jpg',
        alt: 'Fin du copier-coller'
      }
    ]
  },

  // --- NOUVEAU : Cause Animale (Info Mémoire) ---
  {
    id: 'cause-animale',
    slug: 'soutien-cause-animale',
    featured: true,
    question: "Quelles associations pour la cause animale soutenez-vous ?",
    shortAnswer: "C'est vous qui décidez. Pour chaque Mac Mini vendu, nous reversons 100€ à l'une de nos 3 associations partenaires (Santé, Refuge ou Faune Sauvage). Vous validez votre choix lors de la commande.",
    detailedAnswer: `
      <p class="mb-4">Chez SmartUnityIA, la technologie doit servir le vivant. C'est pourquoi l'engagement éthique est intégré directement dans notre modèle économique, pas en option.</p>
      
      <h3 class="text-xl font-bold text-white mb-3 mt-6">Un engagement concret : 100€ par vente</h3>
      <p class="mb-4">Sur chaque configuration vendue, nous prélevons 100€ sur notre marge. Au moment de valider votre projet, <strong>vous choisissez</strong> à laquelle de ces trois causes le don sera versé :</p>
      
      <ul class="list-disc list-inside space-y-2 mb-4 text-slate-300">
        <li><strong>Santé Vétérinaire</strong> : Aide aux soins pour les animaux des personnes démunies ou financement de matériel médical.</li>
        <li><strong>Refuges & Adoptions</strong> : Soutien aux structures qui accueillent les animaux abandonnés (nourriture, chauffage, soins).</li>
        <li><strong>Faune Sauvage & Biodiversité</strong> : Protection des habitats naturels et centres de soins pour la faune sauvage.</li>
      </ul>
  <p class="mb-4">Les versements sont effectués mensuellement et en toute transparence. En modernisant votre entreprise, vous contribuez directement à un impact positif sur la cause qui vous touche le plus.</p>
    `,
    keywords: ['Cause animale', 'Choix client', 'Dons', 'Éthique', 'Protection animale'],
    seoTitle: 'SmartUnityIA et la Cause Animale | Vous choisissez l\'association',
    seoDescription: '100€ reversés par Mac Mini vendu. Le client choisit l\'association bénéficiaire parmi 3 causes : Santé vétérinaire, Refuges ou Faune sauvage.',
    slides: [
      {
        image: '/slides/ethique/ethique-1.jpg',
        alt: 'Éthique non optionnelle'
      },
      {
        image: '/slides/ethique/ethique-2.jpg',
        alt: '100€ de don inclus'
      },
      {
        image: '/slides/ethique/ethique-3.jpg',
        alt: 'Choix du client'
      },
      {
        image: '/slides/ethique/ethique-4.jpg',
        alt: 'Sélecteur de cause'
      },
      {
        image: '/slides/ethique/ethique-5.jpg',
        alt: 'Transparence des versements'
      },
      {
        image: '/slides/ethique/ethique-6.jpg',
        alt: 'Engagement vivant'
      }
    ]
  },

  // --- EXISTANT : Sécurité & Données (Gardé et Poli) ---
  {
    id: 'securite-local-first',
    slug: 'securite-ia-local-first',
    featured: true,
    question: "Pourquoi l'IA 'Local First' est-elle plus sécurisée que le Cloud ?",
    shortAnswer: "Parce que vos données ne sortent jamais de votre Mac Mini. Aucune fuite possible vers des serveurs étrangers ou utilisation pour entraîner des modèles tiers.",
    detailedAnswer: `
      <p class="mb-4">Dans une architecture Cloud classique, vos données sensibles transitent par internet vers des serveurs souvent basés aux US. Avec SmartUnityIA, l'IA est chez vous.</p>
      <ul class="list-disc list-inside space-y-2 mb-4 text-slate-300">
        <li><strong>Zéro Fuite</strong> : Le câble internet débranché, l'IA fonctionne toujours.</li>
        <li><strong>Confidentialité</strong> : Vos données ne servent jamais à entraîner les modèles publics.</li>
        <li><strong>Souveraineté</strong> : Vous possédez la machine et les données.</li>
      </ul>
    `,
    keywords: ['Sécurité', 'Local First', 'Confidentialité', 'Air-Gapped'],
    seoTitle: 'Pourquoi l\'IA Local First est plus sécurisée ? | SmartUnityIA',
    seoDescription: 'Sécurité maximale avec l\'IA Local First. Vos données restent sur votre Mac Mini. Aucune fuite vers le Cloud.',
    slides: [
      {
        image: '/slides/securite/secu-1.jpg',
        alt: 'Localisation des données'
      },
      {
        image: '/slides/securite/secu-2.jpg',
        alt: 'Cloud vs Local'
      },
      {
        image: '/slides/securite/secu-3.jpg',
        alt: 'Stockage physique bureau'
      },
      {
        image: '/slides/securite/secu-4.jpg',
        alt: 'Zéro fuite mathématique'
      },
      {
        image: '/slides/securite/secu-5.jpg',
        alt: 'Impossible intercepter'
      },
      {
        image: '/slides/securite/secu-6.jpg',
        alt: 'Propriétaire total'
      },
      {
        image: '/slides/securite/secu-7.jpg',
        alt: 'Indépendance service'
      }
    ]
  },
  
  {
    id: 'ia-offline',
    slug: 'ia-locale-fonctionne-sans-internet',
    featured: false, // Accessible via les détails
    question: "L'IA locale fonctionne-t-elle sans internet ?",
    shortAnswer: "Oui, totalement. C'est la configuration 'Air-Gapped' ultime pour les données ultra-sensibles (Médical, Défense, Brevets).",
    detailedAnswer: `
      <p class="mb-4">C'est la force du Local First. Une fois installés, les modèles comme Mistral ou Llama n'ont besoin d'aucune connexion pour réfléchir.</p>
      <ul class="list-disc list-inside space-y-2 mb-4 text-slate-300">
        <li><strong>Résilience</strong> : Travaillez même en cas de panne réseau mondiale.</li>
        <li><strong>Mobilité</strong> : Votre IA vous suit en train, en avion ou en zone blanche.</li>
        <li><strong>Sécurité</strong> : Une machine déconnectée est impossible à pirater à distance.</li>
      </ul>
    `,
    keywords: ['Offline', 'Sans internet', 'Air-Gapped', 'Mobilité'],
    seoTitle: 'IA sans internet : Comment ça marche ? | SmartUnityIA',
    seoDescription: 'Fonctionnement hors-ligne de l\'IA locale. Sécurité Air-Gapped et résilience totale pour les entreprises critiques.',
    slides: [
      {
        image: '/slides/offline/offline-1.jpg',
        alt: 'IA Offline Souveraine'
      },
      {
        image: '/slides/offline/offline-2.jpg',
        alt: 'Mode Air-Gapped'
      },
      {
        image: '/slides/offline/offline-3.jpg',
        alt: 'Résilience totale panne'
      },
      {
        image: '/slides/offline/offline-4.jpg',
        alt: 'Mobilité sécurisée train avion'
      },
      {
        image: '/slides/offline/offline-5.jpg',
        alt: 'Avantage stratégique immunité'
      }
    ]
  }
];