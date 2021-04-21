import React from 'react';

import PowerStats from './TeamPowerstats';
import AddHero from './AddHero';
import AvgStats from './TeamAvgStats';
import Hero from './Hero';


import '../../style/home.css';

export default function Home() {

    const teamMembers = [
        {
            name: "Iron Man",
            img: 'https://www.superherodb.com/pictures2/portraits/10/100/85.jpg',
            stats: [
                {
                    name: "intelligence",
                    value: 100
                },
                {
                    name: "strength",
                    value: 85
                },
                {
                    name: "speed",
                    value: 58
                },
                {
                    name: "durability",
                    value: 85
                },
                {
                    name: "power",
                    value: 100
                },
                {
                    name: "combat",
                    value: 64
                },
            ],
            link: "/character/346",
            alignment: "good"
        },
        {
            name: "Loki",
            img: 'https://www.superherodb.com/pictures2/portraits/10/100/928.jpg',
            stats: [
                {
                    name: "intelligence",
                    value: 88
                },
                {
                    name: "strength",
                    value: 63
                },
                {
                    name: "speed",
                    value: 46
                },
                {
                    name: "durability",
                    value: 85
                },
                {
                    name: "power",
                    value: 100
                },
                {
                    name: "combat",
                    value: 60
                },
            ],
            link: "/character/414",
            alignment: "bad"
        },
        {
            name: "Loki",
            img: 'https://www.superherodb.com/pictures2/portraits/10/100/928.jpg',
            stats: [
                {
                    name: "intelligence",
                    value: 88
                },
                {
                    name: "strength",
                    value: 63
                },
                {
                    name: "speed",
                    value: 46
                },
                {
                    name: "durability",
                    value: 85
                },
                {
                    name: "power",
                    value: 100
                },
                {
                    name: "combat",
                    value: 60
                },
            ],
            link: "/character/414",
            alignment: "bad"
        },
        {
            name: "Iron Man",
            img: 'https://www.superherodb.com/pictures2/portraits/10/100/85.jpg',
            stats: [
                {
                    name: "intelligence",
                    value: 100
                },
                {
                    name: "strength",
                    value: 85
                },
                {
                    name: "speed",
                    value: 58
                },
                {
                    name: "durability",
                    value: 85
                },
                {
                    name: "power",
                    value: 100
                },
                {
                    name: "combat",
                    value: 64
                },
            ],
            link: "/character/346",
            alignment: "good"
        },
        {
            name: "Loki",
            img: 'https://www.superherodb.com/pictures2/portraits/10/100/928.jpg',
            stats: [
                {
                    name: "intelligence",
                    value: 88
                },
                {
                    name: "strength",
                    value: 63
                },
                {
                    name: "speed",
                    value: 46
                },
                {
                    name: "durability",
                    value: 85
                },
                {
                    name: "power",
                    value: 100
                },
                {
                    name: "combat",
                    value: 60
                },
            ],
            link: "/character/414",
            alignment: "bad"
        },
        {
            name: "Iron Man",
            img: 'https://www.superherodb.com/pictures2/portraits/10/100/85.jpg',
            stats: [
                {
                    name: "intelligence",
                    value: 100
                },
                {
                    name: "strength",
                    value: 85
                },
                {
                    name: "speed",
                    value: 58
                },
                {
                    name: "durability",
                    value: 85
                },
                {
                    name: "power",
                    value: 100
                },
                {
                    name: "combat",
                    value: 64
                },
            ],
            link: "/character/346",
            alignment: "good"
        }
    ]

    return (
        <div className="home">
            <div className="home-top-components">
                <PowerStats />
                <AddHero />
                <AvgStats />
            </div>
            <div className="team-members-div">
                <Hero teamMembers={teamMembers} />
            </div>
        </div>
    )
}
