export default async function (request, response) {

    const base_url = "http://localhost/";

    response.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
    response.json({
        "episodes": [
            {
                "id": "jinjer-pisces-live-session",
                "title": "JINJER | Pisces (Live Session)",
                "members": "Tatiana Shmailyuk, Roman Ibramkha, Max Fatullaev, Eugene Kostyuk e Vladislav Ulasevish",
                "published_at": "2021-03-17 00:00:00",
                "thumbnail": base_url + "music/jinjer.jpg",
                "description": "<p>Jinjer (dʒɪndʒər/djindjer) é uma banda ucraniana de metalcore  formada em 2009. O seu estilo músical incorpora elementos do death metal, rock progressivo e nu-metal. Ao explicar suas influências, a banda tem relacionado seu som ao de outras bandas de metal como Opeth, Karnivool e Textures, além de grupos de outros gêneros como R&B, soul e hip-hop. Um exemplo citado pela banda é o Cypress Hill.</p>",
                "file": {
                    "url": base_url + "music/Jinjer_pisces.webm",
                    "type": "audio/x-m4a",
                    "duration": 305
                }
            },
            {
                "id": "metalica-st-anger",
                "title": "Metallica - St. Anger",
                "members": "Diego Fernandes, Higo Ribeiro e Guilherme Pellizzetti",
                "published_at": "2020-04-09 20:00:00",
                "thumbnail": base_url + "music/metallica.jpg",
                "description": "<p>Metallica é uma banda norte-americana de heavy metal originária de Los Angeles, mas com base em San Francisco. O seu repertório inclui tempos rápidos, pesados, melódicos, instrumentais e musicalidade agressiva, a qual os colocou no lugar de pioneiros do thrash metal e uma das bandas fundadoras do Big Four of Thrash, conjuntamente com Slayer, Megadeth e Anthrax. Os Metallica formaram-se em 1981, após James Hetfield responder a um anúncio que Lars Ulrich colocou no jornal local. A sua formação atual apresenta os fundadores Ulrich (bateria) e Hetfield (vocal e guitarra base), o guitarrista Kirk Hammett (que se juntou à banda em 1983), e o baixista Robert Trujillo (membro desde 2003). Antes de chegarem à sua formação atual, a banda teve outros integrantes, sendo eles: Dave Mustaine (guitarra), Ron McGovney, Cliff Burton e Jason Newsted (baixo). </p>",
                "file": {
                    "url": base_url + "music/Metallica_st_anger.webm",
                    "type": "audio/x-m4a",
                    "duration": 348
                }
            },
            {
                "id": "metalica-mama-said",
                "title": "Metallica - Mama Said",
                "members": "Diego Fernandes, Higo Ribeiro e Guilherme Pellizzetti",
                "published_at": "2020-04-09 20:00:00",
                "thumbnail": base_url + "music/metallica.jpg",
                "description": "<p>Metallica é uma banda norte-americana de heavy metal originária de Los Angeles, mas com base em San Francisco. O seu repertório inclui tempos rápidos, pesados, melódicos, instrumentais e musicalidade agressiva, a qual os colocou no lugar de pioneiros do thrash metal e uma das bandas fundadoras do Big Four of Thrash, conjuntamente com Slayer, Megadeth e Anthrax. Os Metallica formaram-se em 1981, após James Hetfield responder a um anúncio que Lars Ulrich colocou no jornal local. A sua formação atual apresenta os fundadores Ulrich (bateria) e Hetfield (vocal e guitarra base), o guitarrista Kirk Hammett (que se juntou à banda em 1983), e o baixista Robert Trujillo (membro desde 2003). Antes de chegarem à sua formação atual, a banda teve outros integrantes, sendo eles: Dave Mustaine (guitarra), Ron McGovney, Cliff Burton e Jason Newsted (baixo). </p>",
                "file": {
                    "url": base_url + "music/Metallica_mama_said.webm",
                    "type": "audio/x-m4a",
                    "duration": 295
                }
            },
            {
                "id": "rhcp-dark-necessities",
                "title": "RHCP - Dark Necessities",
                "members": " Anthony Kiedis, Flea, Chad Smith e John Frusciante",
                "published_at": "2020-04-09 20:00:00",
                "thumbnail": base_url + "music/RHCP.png",
                "description": "<p>Red Hot Chili Peppers (também conhecido como Red Hot ou RHCP) é uma banda de rock dos Estados Unidos formada em Los Angeles, Califórnia, em 13 de fevereiro de 1983, considerada uma das maiores bandas da história do rock. O estilo musical do grupo consiste principalmente no funk rock, bem como elementos de outros gêneros, tais como punk, rock alternativo, rap rock e rock psicodélico.[1] A banda é constituída pelos membros fundadores Anthony Kiedis (vocais) e Flea (baixo), juntamente com o baterista de longa data Chad Smith e o guitarrista John Frusciante.</p>",
                "file": {
                    "url": base_url + "music/RHCP_dark_necessities.webm",
                    "type": "audio/x-m4a",
                    "duration": 304
                }
            }
        ]
    })
}
