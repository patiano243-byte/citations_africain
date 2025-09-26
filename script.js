const quotes = [
  "L'arbre qui tombe fait plus de bruit que la forêt qui pousse. — Proverbe africain",
  "Le sommeil est le frère de la mort. — Proverbe africain",
  "Celui qui apprend, enseigne. — Proverbe africain",
  "La patience est un arbre dont la racine est amère mais le fruit est très doux. — Proverbe africain",
  "Le savoir est une richesse qui suit son propriétaire partout. — Proverbe africain" , "L'arbre qui tombe fait plus de bruit que la forêt qui pousse. — Proverbe africain",
  "Le sommeil est le frère de la mort. — Proverbe africain",
  "Celui qui apprend, enseigne. — Proverbe africain",
  "La patience est un arbre dont la racine est amère mais le fruit est très doux. — Proverbe africain",
  "Le savoir est une richesse qui suit son propriétaire partout. — Proverbe africain",
  "Qui veut voyager loin ménage sa monture. — Proverbe africain",
  "Ce que l'œil ne voit pas, le cœur ne le ressent pas. — Proverbe africain",
  "Quand les racines d’un arbre commencent à pourrir, il ne sert à rien d’arroser les feuilles. — Proverbe africain",
  "Le mensonge donne des fleurs mais pas de fruits. — Proverbe africain",
  "La vérité ne vieillit jamais. — Proverbe africain",
  "On ne peut empêcher le vent de souffler, mais on peut apprendre à construire des moulins. — Proverbe africain",
  "Le fleuve creuse son lit peu à peu. — Proverbe africain","Un ami est comme un trésor, difficile à trouver, facile à perdre. — Proverbe africain",
  "Le silence est un ami qui ne trahit jamais. — Proverbe africain",
  "Celui qui plante un arbre ne vivra peut-être pas assez longtemps pour en goûter l’ombre, mais il le fait pour ses enfants. — Proverbe africain",
  "Ne crache pas dans le puits, tu pourrais avoir besoin d’eau un jour. — Proverbe africain",
  "Un seul doigt ne peut attraper un pou. — Proverbe africain",
  "Si tu veux aller vite, marche seul. Si tu veux aller loin, marche avec les autres. — Proverbe africain",
  "Le lézard qui n’a pas de queue se déplace mieux que celui qui en a une. — Proverbe africain",
  "Le temps n’attend personne. — Proverbe africain",
  "Le crocodile ne peut pas se voir sa propre queue. — Proverbe africain",
  "Il faut casser le noyau pour avoir l’amande. — Proverbe africain",
  "Le chemin le plus court n’est pas toujours le plus sûr. — Proverbe africain",
  "La langue ne fait pas de mal à la bouche. — Proverbe africain",
  "Le ventre n’a pas d’oreilles. — Proverbe africain",
  "La bouche qui mange ne parle pas. — Proverbe africain",
  "L’oiseau ne chante pas parce qu’il a une réponse, il chante parce qu’il a une chanson. — Proverbe africain","Il faut de tout pour faire un monde. — Proverbe africain",
  "Le palmier ne pousse pas en une journée. — Proverbe africain",
  "La goutte d’eau creuse la pierre. — Proverbe africain",
  "Ne pas voir le danger ne signifie pas qu’il n’existe pas. — Proverbe africain",
  "Le lion ne rugit pas quand il est à jeun. — Proverbe africain",
  "L’argent ne fait pas le bonheur, mais il y contribue. — Proverbe africain",
  "Celui qui refuse de marcher ne pourra jamais danser. — Proverbe africain",
  "On reconnaît l’arbre à ses fruits. — Proverbe africain",
  "La nuit tous les chats sont gris. — Proverbe africain",
  "Il faut savoir perdre pour mieux gagner. — Proverbe africain",
  "Quand le doigt montre la lune, l’idiot regarde le doigt. — Proverbe africain",
  "Un homme sans culture est un zèbre sans rayures. — Proverbe africain",
  "L’eau chaude ne peut pas oublier qu’elle a été froide. — Proverbe africain",
  "Il n’y a pas de fumée sans feu. — Proverbe africain",
  "Le vent ne brise pas l’arbre qui plie. — Proverbe africain",
  "Il faut être dur pour être doux. — Proverbe africain",
  "Un homme sans parole est comme une maison sans porte. — Proverbe africain",
  "La rivière calme est la plus dangereuse. — Proverbe africain",
  "Celui qui rit la dernière rit mieux. — Proverbe africain", "L’enfant qui n’est pas embrassé brûlera la maison. — Proverbe africain",
  "Le chasseur à courre ne mange pas la chair de ses chiens. — Proverbe africain",
  "Quand on creuse une fosse pour son voisin, on y tombe soi-même. — Proverbe africain",
  "Les grandes mains ne peuvent attraper que les gros poissons. — Proverbe africain",
  "Le léopard ne perd pas ses taches. — Proverbe africain",
  "La parole est comme l’eau, une fois versée, on ne peut plus la ramasser. — Proverbe africain",
  "Il ne faut pas réveiller le chat qui dort. — Proverbe africain",
  "Le serpent ne peut pas se pendre. — Proverbe africain",
  "Le passé est le miroir de l’avenir. — Proverbe africain",
  "Le lion ne perd pas son sommeil à cause du cri du chien. — Proverbe africain",
  "Un ami véritable est un refuge sûr. — Proverbe africain",
  "Le mensonge a les jambes courtes. — Proverbe africain",
  "La vérité est comme l’huile, elle finit toujours par remonter. — Proverbe africain",
  "Le pot cassé ne peut être réparé. — Proverbe africain",
  "Le rire est le propre de l’homme. — Proverbe africain",
  "Le travail éloigne de nous trois grands maux : l’ennui, le vice et le besoin. — Proverbe africain",
  "Le feu ne se commande pas. — Proverbe africain","L’arbre se reconnaît à ses fruits. — Proverbe africain",
  "Celui qui ne sait pas où il va, risque de se perdre. — Proverbe africain",
  "La route est longue mais la voie est droite. — Proverbe africain",
  "Le paresseux rêve de récolter sans semer. — Proverbe africain",
  "Le chacal ne chasse pas seul. — Proverbe africain",
  "Il faut savoir donner pour recevoir. — Proverbe africain",
  "L’oiseau matinal attrape le ver. — Proverbe africain",
  "Le ciel ne tombe pas sur la tête. — Proverbe africain",
  "Le lion est roi dans la forêt mais il est sans défense dans la brousse. — Proverbe africain",
  "La vérité est comme une pierre lancée dans l’eau, elle fait des cercles. — Proverbe africain",
  "Il faut tourner sept fois sa langue dans la bouche avant de parler. — Proverbe africain",
  "Le sage parle parce qu’il a quelque chose à dire, le fou parle parce qu’il doit dire quelque chose. — Proverbe africain",
  "Les yeux ne servent pas seulement à voir, mais aussi à comprendre. — Proverbe africain",
  "Le crocodile ne peut pas changer ses dents. — Proverbe africain",
  "Il faut écouter plus que parler. — Proverbe africain",
  "Le lion ne chasse pas la gazelle, il chasse pour la gazelle. — Proverbe africain",
  "L’arbre est grand mais il a commencé petit. — Proverbe africain","Le chemin est plus important que la destination. — Proverbe africain",
  "Le vent disperse les feuilles mortes. — Proverbe africain",
  "Un homme sans parole est un arbre sans racines. — Proverbe africain",
  "Le savoir est une lumière dans l’obscurité. — Proverbe africain"
  
];
function newQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[randomIndex];
}
window.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('musique');
  
  const playAudio = () => {
    if (audio) {
      audio.play().catch(() => {});
      window.removeEventListener('click', playAudio);
    }
  };

  window.addEventListener('click', playAudio);
});