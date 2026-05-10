// Created by M.Abdelsamea

document.addEventListener('DOMContentLoaded', () => {
    const players = {
        messi: {
            name: "Lionel Messi",
            position: "Forward | Inter Miami",
            img: "../images/Players/Lionel-Messi.webp",
            bio: "Argentine footballer, considered one of the greatest players in history. He has won a record 8 Ballon d'Or awards and led Argentina to World Cup glory in 2022.",
            stats: { goals: 821, assists: 361, apps: 1047 }
        },
        ronaldo: {
            name: "Cristiano Ronaldo",
            position: "Forward | Al Nassr",
            img: "../images/Players/cristiano.jpg",
            bio: "Portuguese legend known for his incredible work ethic and athleticism. He is the all-time leading goalscorer in official competitions.",
            stats: { goals: 873, assists: 249, apps: 1204 }
        },
        neymar: {
            name: "Neymar Jr",
            position: "Forward | Al Hilal",
            img: "../images/Players/neymar.jpg",
            bio: "Brazilian superstar famous for his elite dribbling and flair. A key player for the Brazilian national team and a Champions League winner.",
            stats: { goals: 436, assists: 248, apps: 709 }
        }
    };

    const params = new URLSearchParams(window.location.search);
    const playerKey = params.get("player");

    if (playerKey && players[playerKey]) {
        const p = players[playerKey];
        
        document.getElementById("name").innerText = p.name;
        document.getElementById("position").innerText = p.position;
        document.getElementById("img").src = p.img;
        document.getElementById("bio").innerText = p.bio;
        
        document.getElementById("stat-goals").innerText = p.stats.goals;
        document.getElementById("stat-assists").innerText = p.stats.assists;
        document.getElementById("stat-apps").innerText = p.stats.apps;
        
        console.log(`Successfully loaded profile for: ${p.name}`);
    } else {
        console.error("Player not found, redirecting...");
        window.location.href = 'players.html';
    }
});