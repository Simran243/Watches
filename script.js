const facts = [
    "The first portable timepiece, known as a watch, was created in the 15th century. It was a spring-driven clock that could be worn on the body.",
    "In the 1970s, the introduction of quartz technology revolutionized the watch industry. Quartz watches are powered by a battery and are known for their accuracy and low maintenance.",
    "The first water-resistant watch was the Rolex Oyster, introduced in 1926. It featured a hermetically sealed case that protected the movement from water and dust.",
    "In watchmaking, a 'complication' refers to any feature beyond the simple display of hours and minutes. Examples include calendars, moon phases, and chronographs.",
    "Automatic watches are powered by the movement of the wearer's wrist. They have a rotor that winds the mainspring as the wearer moves, eliminating the need for a battery.",
    "Some of the most prestigious watch brands include Rolex, Patek Philippe, Audemars Piguet, and Omega. These brands are known for their craftsmanship and often have long waiting lists for their timepieces.",
    "The rise of technology has led to the development of smartwatches, which can connect to smartphones and offer features like fitness tracking, notifications, and GPS.",
    "Diving watches are designed to withstand high pressure underwater. They typically have features like rotating bezels, luminescent hands, and water resistance ratings of at least 200 meters.",
    "Watch collecting is a popular hobby, with some collectors investing in rare and vintage timepieces. Certain watches can appreciate significantly in value over time.",
    "There are three main types of watch movements: mechanical (manual and automatic), quartz, and hybrid. Each type has its own advantages and appeals to different types of watch enthusiasts."
];

document.getElementById('factButton').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact').textContent = facts[randomIndex];
});
