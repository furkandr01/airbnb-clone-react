const myData = [
    {
        id: 1,
        title: "Life Lessons with Katie Zaferes",
        description: "I will share with you what I call \"Positively Impactful Moments of Disappointment.\" Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.",
        price: 136,
        coverImg: "katie-zaferes.png",
        stats: {
            rating: 5.0
        },
        location: "Online",
        openSpots: 0,
        comments: [
            { id: 1, name: "John Smith", text: "This event was fantastic!" },
            { id: 2, name: "Emma Johnson", text: "I really enjoyed it a lot." },
            { id: 3, name: "Sophia Brown", text: "I would love to experience this again." },
            { id: 4, name: "Liam Williams", text: "It was an amazing organization!" },
            { id: 5, name: "Olivia Jones", text: "Incredible, highly recommended!" }
        ]
    },
    {
        id: 2,
        title: "Learn Wedding Photography",
        description: "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
        price: 125,
        coverImg: "wedding-photography.png",
        stats: {
            rating: 5.0
        },
        location: "Online",
        openSpots: 27,
        comments: [
            { id: 1, name: "Noah Miller", text: "Had a fun day, thank you!" },
            { id: 2, name: "James Davis", text: "The team was highly professional." }
        ]
    },
    {
        id: 3,
        title: "Group Mountain Biking",
        description: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
        price: 50,
        coverImg: "mountain-bike.png",
        stats: {
            rating: 4.8
        },
        location: "Norway",
        openSpots: 3,
        comments: [
            { id: 1, name: "Ava Wilson", text: "The service exceeded my expectations." },
            { id: 2, name: "Mason Moore", text: "It was a great experience." },
            { id: 3, name: "Mia Taylor", text: "I am very satisfied, thank you!" },
            { id: 4, name: "Ethan Anderson", text: "It was a wonderful experience, I recommend it." }
        ]
    },
    {
        id: 4,
        title: "Drift off in the Up house",
        description: "Take a look around. But don’t touch anything, I just straightened up! Pretty nice, eh? This place used to be a dump but we fixed it up, my wonderful Ellie and me. Decorated it with stuff from all the trips we planned to take. I’m a bit old for adventure nowadays, but I know it’s still out there, especially if you stay here—but just for one night, don't get too comfy. Say, if you are lucky enough to stay here, you could start your own collection of badges, travel mementos, trinkets…you know, stuff to remind you of your own adventures. I suppose I could help you with that. Ellie was the best adventurer, so you’ve got big shoes to fill.",
        price: 5000,
        coverImg: "balloon-house.png",
        stats: {
            rating: 5.0
        },
        location: "New Mexico",
        openSpots: 0,
        comments: [
            { id: 1, name: "Isabella Thomas", text: "The organization was very well thought out." },
            { id: 2, name: "Logan Martin", text: "It was much better than I expected." },
            { id: 3, name: "Amelia Jackson", text: "The staff was very helpful." }
        ]
    },
    {
        id: 5,
        title: "Spend the night in the Ferrari Museum",
        description: "As a professional driver, Ferrari tester, and lifelong Ferrari fan, I can of course tell you both these places are where legends live: Sala delle Vittorie in the heart of the Ferrari Museum in Maranello, and the picturesque region of Emilia-Romagna, where one of the world’s most premier racing events is held.",
        price: 3850,
        coverImg: "ferrari.png",
        stats: {
            rating: 4.3
        },
        location: "Maranello, Italy",
        openSpots: 5,
        comments: [
            { id: 1, name: "Lucas Thompson", text: "I plan to participate again." }
        ]
    },
    {
        id: 6,
        title: "Göreme Hot Air Balloon Flight Cheapest&Safety",
        description: "We go to the balloon take-off area, watch the preparation of the hot air balloon and after everything is ready, we start our breathtaking 1-hour balloon flight. After completing our 1-hour flight with the magnificent view of Cappadocia, we offer you a certificate and champagne.",
        price: 350,
        coverImg: "balonturkey.png",
        stats: {
            rating: 5.0
        },
        location: "Turkey",
        openSpots: 3,
        comments: [
            { id: 1, name: "Harper White", text: "I will definitely recommend this to my friends." },
            { id: 2, name: "Benjamin Harris", text: "I didn't expect it to be this enjoyable." },
            { id: 3, name: "Evelyn Clark", text: "The event was beautifully organized." },
            { id: 4, name: "Alexander Lewis", text: "I left the day feeling very happy." },
            { id: 5, name: "Charlotte Walker", text: "It was an incredible experience." },
            { id: 6, name: "Henry Hall", text: "I had so much fun, it was awesome!" },
            { id: 7, name: "Ella Young", text: "I will never forget this event." }
        ]
    },
    {
        id: 7,
        title: "Atv Tour in Cappadocia Valleys",
        description: "With these prices per ATV, You can use 1 ATV with 2 Persons, ATV Quad bike tour is one of the most amazing and full of adrenaline tours in Cappadocia. Our tour usually takes 1-2-3 hours and with every added hour your tour route will be changed and will be added more valleys and stops. ATV Quad Bike tour includes adrenaline but if you have a problem with adrenaline and excitement or it's your first time riding an ATV Bike, it's also okay we can do a tour proper for you :)",
        price: 37,
        coverImg: "atvtour.png",
        stats: {
            rating: 4.8
        },
        location: "Ürgüp,Turkey",
        openSpots: 11,
        comments: [
            { id: 1, name: "Sebastian King", text: "I can't wait to attend again." },
            { id: 2, name: "Abigail Wright", text: "Everything was perfect!" }
        ]
    },
    {
        id: 8,
        title: "Hand-made Carpet Culture",
        description: "We will pick you up from your hotel and drive you to the hand-made carpet workshop. There are many carpet shops in Turkey but we take you to the place where it is made and you can see all the steps of making a hand made carpet. You can watch the weavers, see how silk comes from cocoon and finally you see the collection and learn about designs and their meanings in our culture.",
        price: 13,
        coverImg: "carpetculture.png",
        stats: {
            rating: 3.8
        },
        location: "Göreme, Turkey",
        openSpots: 0,
        comments: [
            { id: 1, name: "Jack Scott", text: "It was my first time attending and I loved it." },
            { id: 2, name: "Scarlett Adams", text: "I highly recommend this event to everyone." },
            { id: 3, name: "Owen Green", text: "The staff was very friendly and welcoming." },
            { id: 4, name: "Grace Baker", text: "I had an incredible time." }
        ]
    },
    {
        id: 9,
        title: "Turkish Mosaic Lamp Workshop",
        description: "Let's meet at the most EASILY accessible, COLORFUL, fun, and UNIQUE workshop in Istanbul. Maximize your limited time in our air-conditioned workshop, which provides a spacious and open area with every corner perfect for taking amazing photos.",
        price: 27,
        coverImg: "mosaiclamp.png",
        stats: {
            rating: 4.9
        },
        location: "Beyoglu,Turkey",
        openSpots: 17,
        comments: [
            { id: 1, name: "Samuel Nelson", text: "We had a great time, thank you." },
            { id: 2, name: "Aria Carter", text: "The event met all my expectations." }
        ]
    }
]

export default myData