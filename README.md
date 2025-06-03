[![EMBERCORE](assets\maquette_embger_mind.png)]


# EmberCore

**EmberCore** est une application mobile moderne qui fournit une interface de chat intuitive pour interagir avec un système RAG (Retrieval-Augmented Generation) et des modèles de langage (LLM). Conçue pour être à la fois puissante et chaleureuse, EmberCore facilite l’accès aux connaissances contextualisées, l’interrogation intelligente et la gestion documentaire.

---

## Fonctionnalités principales

- **Chat intelligent** : Posez des questions et recevez des réponses générées par le LLM, enrichies par des documents contextualisés via RAG.
- **Multi-source** : Choisissez d’interroger soit le RAG (avec contexte documentaire), soit le LLM brut.
- **Upload de documents** : Ajoutez facilement vos propres documents (PDF, TXT, DOCX) pour enrichir la base de connaissances.
- **Historique des conversations** : Sauvegarde et navigation entre vos sessions de chat.
- **Interface moderne** : Design épuré et chaleureux, avec une palette rouge/orange, pensé pour un usage mobile fluide.
- **Accessibilité** : Mode clair/sombre, clavier optimisé, interaction rapide.

---

## Installation

### Prérequis

- Node.js >= 18
- npm ou yarn
- Un backend RAG/LLM accessible (ex : proxy Sephard)

### Setup

```bash
git clone https://github.com/tonpseudo/embercore.git
cd embercore
npm install
npm run dev


```

L’application sera accessible sur http://localhost:3000

### Usage

Lancez l’application.

Dans la zone de chat, posez vos questions.

Utilisez le bouton d’upload pour ajouter des documents.

Basculez entre le mode RAG ou LLM selon vos besoins.

Consultez l’historique de vos conversations.

### Architecture


Frontend : React avec Tailwind CSS, composants UI modulaires.

Backend : Proxy API vers Sephard (RAG + LLM).

Stockage : Historique local / Cloud (à implémenter selon besoin).

Upload : Gestion des fichiers avec indexation dans la base documentaire.

### Contribution


Les contributions sont les bienvenues ! 

IMPORTANT: Les taches planifier sont dans le fichier **TODO.txt**

Pour proposer des améliorations ou corriger des bugs :

Fork le repo

Crée une branche feature (git checkout -b feature/ma-fonctionnalite)

Commit tes changements (git commit -m "Ajout de ma fonctionnalité")

Push vers ta branche (git push origin feature/ma-fonctionnalite)

Ouvre une Pull Request

### Licence
Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus d’informations.

### Contact
Pour toute question, feedback ou collaboration, contacte-moi sur [ton-email@example.com] ou via GitHub.