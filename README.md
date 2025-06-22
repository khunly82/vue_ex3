# Exercice 3

## 3.1

Créez 3 composants et incluez les dans App.vue 
- Header
- Products
- Footer

## 3.2
Créez un service ProductService avec une méthode get qui retournera
une liste d'objets

```ts
private PRODUCTS: Product[] = [
    {
        id: 1,
        name: "Chaise ergonomique",
        description: "Chaise de bureau confortable avec support lombaire.",
        category: "Maison",
        image: "https://picsum.photos/seed/chaise/400/300"
    },
    {
        id: 2,
        name: "Ordinateur portable 15\"",
        description: "Laptop performant pour le travail et les loisirs.",
        category: "Technologie",
        image: "https://picsum.photos/seed/laptop/400/300"
    },
    {
        id: 3,
        name: "Casque Bluetooth",
        description: "Casque sans fil avec réduction de bruit active.",
        category: "Technologie",
        image: "https://picsum.photos/seed/casque/400/300"
    },
    {
        id: 4,
        name: "Tapis de yoga",
        description: "Tapis antidérapant pour séances de yoga ou de fitness.",
        category: "Accessoires",
        image: "https://picsum.photos/seed/yoga/400/300"
    },
    {
        id: 5,
        name: "Lampe LED de bureau",
        description: "Lampe tactile avec intensité réglable.",
        category: "Maison",
        image: "https://picsum.photos/seed/lampe/400/300"
    },
    {
        id: 6,
        name: "Montre connectée",
        description: "Suivi d'activité, cardio et notifications.",
        category: "Technologie",
        image: "https://picsum.photos/seed/montre/400/300"
    },
    {
        id: 7,
        name: "Sac à dos étanche",
        description: "Idéal pour le voyage ou les déplacements quotidiens.",
        category: "Accessoires",
        image: "https://picsum.photos/seed/sac/400/300"
    },
    {
        id: 8,
        name: "Machine à café automatique",
        description: "Préparez un espresso parfait en un clic.",
        category: "Maison",
        image: "https://picsum.photos/seed/cafe/400/300"
    },
    {
        id: 9,
        name: "Smartphone 5G",
        description: "Haute performance et compatibilité 5G.",
        category: "Technologie",
        image: "https://picsum.photos/seed/smartphone/400/300"
    },
    {
        id: 10,
        name: "Clavier mécanique RGB",
        description: "Confort de frappe et rétroéclairage personnalisable.",
        category: "Technologie",
        image: "https://picsum.photos/seed/clavier/400/300"
    },
    {
        id: 11,
        name: "Lunettes anti-lumière bleue",
        description: "Protègent vos yeux pendant les sessions d’écran prolongées.",
        category: "Accessoires",
        image: "https://picsum.photos/seed/lunettes/400/300"
    },
    {
        id: 12,
        name: "Bouteille isotherme",
        description: "Garde vos boissons chaudes ou froides pendant des heures.",
        category: "Accessoires",
        image: "https://picsum.photos/seed/bouteille/400/300"
    },
    {
        id: 13,
        name: "Caméra de sécurité Wi-Fi",
        description: "Surveillance en temps réel avec application mobile.",
        category: "Maison",
        image: "https://picsum.photos/seed/camera/400/300"
    },
    {
        id: 14,
        name: "Table de gaming",
        description: "Conçue pour accueillir tout votre setup.",
        category: "Maison",
        image: "https://picsum.photos/seed/table/400/300"
    },
    {
        id: 15,
        name: "Mini projecteur portable",
        description: "Projetez vos films et présentations n’importe où.",
        category: "Technologie",
        image: "https://picsum.photos/seed/projecteur/400/300"
    },
    {
        id: 16,
        name: "Planche à découper en bambou",
        description: "Écologique et résistante aux couteaux.",
        category: "Maison",
        image: "https://picsum.photos/seed/planche/400/300"
    },
    {
        id: 17,
        name: "Imprimante multifonction",
        description: "Impression, scan et copie pour la maison ou le bureau.",
        category: "Technologie",
        image: "https://picsum.photos/seed/imprimante/400/300"
    },
    {
        id: 18,
        name: "Enceinte portable étanche",
        description: "Parfaite pour la plage ou la piscine.",
        category: "Accessoires",
        image: "https://picsum.photos/seed/enceinte/400/300"
    },
    {
        id: 19,
        name: "Tondeuse à barbe électrique",
        description: "Précision et autonomie longue durée.",
        category: "Accessoires",
        image: "https://picsum.photos/seed/tondeuse/400/300"
    },
    {
        id: 20,
        name: "Chargeur sans fil rapide",
        description: "Rechargez votre téléphone sans câble.",
        category: "Accessoires",
        image: "https://picsum.photos/seed/chargeur/400/300"
    }
];
```

## 3.3
Créez un composant Card qui permettra d'afficher un produit
Injectez le service dans Product.vue et afficher l'ensemble des produits en utilisant Card.vue

## 3.4
Créez un composant Filters permettant de filtrer les produits par nom et par categorie et incluez le dans Product.vue

## 3.5
Créez un composant Cart qui permettra d'afficher le panier
Ajoutez un bouton dans Header.vue permettant d'afficher le panier

## 3.6
Créez un service CartService pour gérer le panier (get, increase(productId), decrease(productId))

## 3.7
Ajoutez un bouton dans chacune des Card pour pouvoir modifier le panier

## 3.8
Affichez le panier dans Cart et le nombre d'éléments du panier dans Header.vue

