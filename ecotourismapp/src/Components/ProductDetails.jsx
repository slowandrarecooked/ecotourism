import "../Styles/ProductDetails.css";
export const ProductDetails = () => {
  const data = {
    id: 1,
    image_url: "https://source.unsplash.com/random/300Xx1200/?Travel",
    destination_title: "Narkanda",
    location: "Sri Lanka",
    grade: "4 stars",
    fees: "$1113",
    description:
      "Narkanda is a tiny town in Shimla in the Indian hill state of Himachal Pradesh. Seated on the Hindustan-Tibet Road, Narkanda is encircled by the green cover of the Himalayas and hence, renowned for its apple orchards, treks and scenic beauty.",
  };

  const dataDetails = [
    {
      id: 1,
      name: "Paris, France",
      activities: [
        {
          name: "Visit the Eiffel Tower",
          description:
            "Marvel at the iconic iron structure and enjoy breathtaking views of the city from its observation decks.",
        },
        {
          name: "Explore the Louvre Museum",
          description:
            "Immerse yourself in art and history as you explore one of the world's largest and most famous museums.",
        },
        {
          name: "Stroll along the Seine River",
          description:
            "Enjoy a leisurely walk along the riverbanks, passing by charming bridges and landmarks.",
        },
        {
          name: "Enjoy a croissant at a local café",
          description:
            "Indulge in a quintessential Parisian experience with freshly baked croissants and coffee at a charming café.",
        },
      ],
    },
    {
      id: 2,
      name: "Tokyo, Japan",
      activities: [
        {
          name: "Experience Shibuya Crossing",
          description:
            "Cross the famous pedestrian scramble at Shibuya, surrounded by neon lights and bustling energy.",
        },
        {
          name: "Visit the Meiji Shrine",
          description:
            "Find tranquility in the midst of the city by exploring the serene Meiji Shrine and its lush surroundings.",
        },
        {
          name: "Explore Akihabara for electronics and anime",
          description:
            "Discover the heart of Japan's pop culture, filled with electronics, anime, manga, and themed cafes.",
        },
        {
          name: "Try authentic sushi at Tsukiji Fish Market",
          description:
            "Savor the freshest sushi at the world-famous Tsukiji Fish Market, a paradise for seafood enthusiasts.",
        },
      ],
    },
    {
      id: 3,
      name: "New York City, USA",
      activities: [
        {
          name: "Walk through Central Park",
          description:
            "Escape the urban hustle and enjoy the green oasis of Central Park, complete with lakes, paths, and attractions.",
        },
        {
          name: "See a Broadway show",
          description:
            "Experience the magic of live theater with a Broadway performance in the renowned Theater District.",
        },
        {
          name: "Visit the Statue of Liberty",
          description:
            "Take a ferry to Liberty Island and get up close to the iconic symbol of freedom and democracy.",
        },
        {
          name: "Explore Times Square",
          description:
            "Immerse yourself in the bright lights and vibrant atmosphere of Times Square, a bustling hub of entertainment.",
        },
      ],
    },
    {
      id: 4,
      name: "Cape Town, South Africa",
      activities: [
        {
          name: "Go to the top of Table Mountain",
          description:
            "Take a cable car or hike to the summit of Table Mountain for panoramic views of the city and ocean.",
        },
        {
          name: "Visit Robben Island",
          description:
            "Learn about the history of apartheid by visiting the former prison where Nelson Mandela was held.",
        },
        {
          name: "Explore the Victoria & Alfred Waterfront",
          description:
            "Shop, dine, and enjoy the waterfront's vibrant atmosphere, surrounded by shops, restaurants, and attractions.",
        },
        {
          name: "Take a drive along the Cape Peninsula",
          description:
            "Embark on a scenic drive along the stunning coastline, passing by beaches, cliffs, and charming towns.",
        },
      ],
    },
    {
      id: 5,
      name: "Sydney, Australia",
      activities: [
        {
          name: "Climb the Sydney Harbour Bridge",
          description:
            "Experience the thrill of climbing one of the world's most iconic bridges while enjoying breathtaking views.",
        },
        {
          name: "Relax at Bondi Beach",
          description:
            "Soak up the sun and surf at the famous Bondi Beach, known for its golden sands and vibrant atmosphere.",
        },
        {
          name: "Visit the Sydney Opera House",
          description:
            "Admire the architectural masterpiece and, if possible, catch a performance in this globally recognized venue.",
        },
        {
          name: "Explore the Royal Botanic Garden",
          description:
            "Stroll through beautifully landscaped gardens, showcasing a diverse collection of plants from around the world.",
        },
      ],
    },
    {
      id: 6,
      name: "Rome, Italy",
      activities: [
        {
          name: "Visit the Colosseum",
          description:
            "Step back in time as you explore the ancient Colosseum, an iconic symbol of Rome's history.",
        },
        {
          name: "Throw a coin into the Trevi Fountain",
          description:
            "Follow the tradition and toss a coin into the Trevi Fountain, believed to ensure a return to Rome.",
        },
        {
          name: "Explore the Vatican City",
          description:
            "Discover the art, history, and spirituality of the Vatican, including the magnificent St. Peter's Basilica.",
        },
        {
          name: "Indulge in authentic Italian gelato",
          description:
            "Satisfy your sweet tooth with creamy and flavorful gelato from local gelaterias.",
        },
      ],
    },
    {
      id: 7,
      name: "Rio de Janeiro, Brazil",
      activities: [
        {
          name: "Relax on Copacabana Beach",
          description:
            "Unwind on the sandy shores of Copacabana Beach, known for its vibrant atmosphere and beautiful coastline.",
        },
        {
          name: "Visit Christ the Redeemer statue",
          description:
            "Marvel at the iconic Christ the Redeemer statue atop Corcovado Mountain, offering panoramic city views.",
        },
        {
          name: "Experience the vibrant samba culture",
          description:
            "Immerse yourself in Brazil's lively music and dance scene by attending a samba performance or joining a local dance class.",
        },
        {
          name: "Take a cable car to Sugarloaf Mountain",
          description:
            "Ride a cable car to the summit of Sugarloaf Mountain for stunning vistas of Rio's skyline and surrounding landscapes.",
        },
      ],
    },
    {
      id: 8,
      name: "Bangkok, Thailand",
      activities: [
        {
          name: "Explore the Grand Palace",
          description:
            "Admire the intricate architecture and rich history of the Grand Palace, home to stunning temples and royal residences.",
        },
        {
          name: "Experience the bustling Chatuchak Market",
          description:
            "Shop for unique souvenirs, clothes, handicrafts, and more at one of the world's largest weekend markets.",
        },
        {
          name: "Visit Wat Arun",
          description:
            "Explore the stunning Wat Arun temple, known for its intricate porcelain and seashell decorations.",
        },
        {
          name: "Indulge in delicious street food",
          description:
            "Savor a variety of flavorful street food dishes, from spicy curries to refreshing tropical fruits.",
        },
      ],
    },
    {
      id: 9,
      name: "Barcelona, Spain",
      activities: [
        {
          name: "Marvel at the architecture of Sagrada Familia",
          description:
            "Be awed by Antoni Gaudí's masterpiece, the Sagrada Familia, a stunning basilica with intricate facades and unique design.",
        },
        {
          name: "Stroll down La Rambla",
          description:
            "Walk along the bustling La Rambla, lined with shops, street performers, and a lively atmosphere.",
        },
        {
          name: "Explore the Gothic Quarter",
          description:
            "Get lost in the medieval streets of the Gothic Quarter, filled with history, charming cafes, and hidden treasures.",
        },
        {
          name: "Relax on Barceloneta Beach",
          description:
            "Enjoy the sun and sea at Barceloneta Beach, a popular urban beach offering relaxation and vibrant beachfront dining.",
        },
      ],
    },
    {
      id: 10,
      name: "Cairo, Egypt",
      activities: [
        {
          name: "Visit the Pyramids of Giza",
          description:
            "Witness the awe-inspiring Pyramids of Giza, marveling at their ancient engineering and historical significance.",
        },
        {
          name: "Explore the Egyptian Museum",
          description:
            "Discover artifacts and treasures from ancient Egypt at the Egyptian Museum, home to the iconic King Tutankhamun exhibit.",
        },
        {
          name: "Take a cruise on the Nile River",
          description:
            "Relax on a traditional felucca or luxury cruise along the Nile River, passing by historical sites and scenic landscapes.",
        },
        {
          name: "Experience a traditional bazaar",
          description:
            "Immerse yourself in the vibrant atmosphere of Cairo's bazaars, haggling for spices, textiles, and handicrafts.",
        },
      ],
    },
    {
      id: 11,
      name: "Kyoto, Japan",
      activities: [
        {
          name: "Visit Kinkaku-ji (Golden Pavilion)",
          description:
            "Admire the stunning Kinkaku-ji covered in gold leaf, surrounded by peaceful gardens and a reflective pond.",
        },
        {
          name: "Experience a traditional tea ceremony",
          description:
            "Participate in a serene tea ceremony, a quintessential Japanese cultural experience steeped in tradition and mindfulness.",
        },
        {
          name: "Explore Fushimi Inari Shrine",
          description:
            "Walk through the iconic torii gates of Fushimi Inari Shrine, dedicated to the Shinto god of rice and prosperity.",
        },
        {
          name: "Stroll through Arashiyama Bamboo Grove",
          description:
            "Find serenity in the enchanting bamboo forest of Arashiyama, a picturesque destination for nature lovers.",
        },
      ],
    },
    {
      id: 12,
      name: "Machu Picchu, Peru",
      activities: [
        {
          name: "Explore the ancient Incan ruins",
          description:
            "Embark on a journey through the mystique of Machu Picchu, discovering the history and beauty of the Inca civilization.",
        },
        {
          name: "Hike the Inca Trail",
          description:
            "Challenge yourself with a trek along the legendary Inca Trail, passing through diverse landscapes and breathtaking vistas.",
        },
        {
          name: "Witness the stunning sunrise over the ruins",
          description:
            "Wake up early to witness the mesmerizing sunrise over Machu Picchu, casting a golden glow on the ancient stones.",
        },
        {
          name: "Learn about Incan history and culture",
          description:
            "Engage with local guides to deepen your understanding of the Inca heritage and the significance of Machu Picchu.",
        },
      ],
    },
    {
      id: 13,
      name: "Dubai, UAE",
      activities: [
        {
          name: "Visit the Burj Khalifa",
          description:
            "Reach new heights by visiting the world's tallest building, the Burj Khalifa, and enjoying panoramic city views.",
        },
        {
          name: "Explore the Dubai Mall",
          description:
            "Shop, dine, and be entertained at the extravagant Dubai Mall, home to luxury brands and captivating attractions.",
        },
        {
          name: "Experience a desert safari",
          description:
            "Embark on a thrilling desert safari, including dune bashing, camel riding, and a mesmerizing desert sunset.",
        },
        {
          name: "Relax on Jumeirah Beach",
          description:
            "Unwind on the pristine shores of Jumeirah Beach, with clear blue waters and stunning views of the city's skyline.",
        },
      ],
    },
    {
      id: 14,
      name: "Venice, Italy",
      activities: [
        {
          name: "Take a gondola ride along the canals",
          description:
            "Experience the romance of Venice as you glide along its picturesque canals in a traditional gondola.",
        },
        {
          name: "Explore St. Mark's Square and Basilica",
          description:
            "Discover the grandeur of St. Mark's Square and its stunning Basilica, adorned with intricate mosaics and architecture.",
        },
        {
          name: "Visit the Doge's Palace",
          description:
            "Step inside the opulent Doge's Palace, once the seat of Venetian power, and admire its art and history.",
        },
        {
          name: "Get lost in the charming streets",
          description:
            "Wander through Venice's labyrinthine streets, crossing arched bridges and discovering hidden squares and local shops.",
        },
      ],
    },
    {
      id: 15,
      name: "Santorini, Greece",
      activities: [
        {
          name: "Admire the stunning sunset views",
          description:
            "Witness the magical sunset over the caldera, painting the sky with hues of orange and pink in Oia or Fira.",
        },
        {
          name: "Explore the white-washed villages",
          description:
            "Stroll through the charming villages of Santorini, known for their white-washed buildings and blue-domed churches.",
        },
        {
          name: "Relax on Red Beach",
          description:
            "Spend a leisurely day sunbathing on the unique Red Beach, surrounded by towering red cliffs and clear waters.",
        },
        {
          name: "Visit ancient ruins of Akrotiri",
          description:
            "Discover the well-preserved ruins of the ancient Minoan settlement of Akrotiri, buried under volcanic ash.",
        },
      ],
    },
    {
      id: 16,
      name: "Hong Kong",
      activities: [
        {
          name: "Take the Peak Tram for panoramic views",
          description:
            "Ride the historic Peak Tram to Victoria Peak for stunning panoramic views of Hong Kong's skyline and harbor.",
        },
        {
          name: "Explore bustling street markets",
          description:
            "Shop and bargain at vibrant street markets like the Temple Street Night Market and the Ladies' Market.",
        },
        {
          name: "Visit Victoria Harbour",
          description:
            "Admire the dazzling cityscape along Victoria Harbour, especially during the Symphony of Lights show.",
        },
        {
          name: "Experience Hong Kong Disneyland",
          description:
            "Have a magical day at Hong Kong Disneyland, enjoying its themed lands, attractions, and enchanting experiences.",
        },
      ],
    },
    {
      id: 17,
      name: "Amsterdam, Netherlands",
      activities: [
        {
          name: "Cruise along the picturesque canals",
          description:
            "Embark on a canal cruise to admire Amsterdam's charming architecture, historic bridges, and picturesque waterways.",
        },
        {
          name: "Visit Anne Frank House",
          description:
            "Reflect on history at the Anne Frank House, where Anne Frank and her family hid during World War II.",
        },
        {
          name: "Explore Van Gogh Museum",
          description:
            "Immerse yourself in the world of art at the Van Gogh Museum, showcasing the works of the renowned artist.",
        },
        {
          name: "Rent a bike and explore the city",
          description:
            "Discover Amsterdam like a local by renting a bike and exploring its streets, canals, and iconic landmarks.",
        },
      ],
    },
    {
      id: 18,
      name: "Bali, Indonesia",
      activities: [
        {
          name: "Relax on pristine beaches",
          description:
            "Unwind on Bali's stunning beaches, from the popular Kuta Beach to the serene shores of Nusa Dua.",
        },
        {
          name: "Visit ancient temples like Uluwatu",
          description:
            "Explore Bali's rich spiritual heritage by visiting ancient temples like Uluwatu, known for its cliffside location.",
        },
        {
          name: "Experience a traditional Balinese dance",
          description:
            "Attend a captivating Balinese dance performance, showcasing the island's vibrant culture and artistic traditions.",
        },
        {
          name: "Explore Ubud's art and culture",
          description:
            "Immerse yourself in Ubud's artistic community, discovering art galleries, workshops, and traditional craft markets.",
        },
      ],
    },
    {
      id: 19,
      name: "Moscow, Russia",
      activities: [
        {
          name: "Visit Red Square and St. Basil's Cathedral",
          description:
            "Explore the historic Red Square and admire the vibrant domes of St. Basil's Cathedral, an iconic symbol of Russia.",
        },
        {
          name: "Explore the Kremlin and its museums",
          description:
            "Discover the political and cultural heart of Russia by visiting the Kremlin and its fascinating museums.",
        },
        {
          name: "Experience the Moscow Metro's stunning architecture",
          description:
            "Take a ride on the Moscow Metro and marvel at its ornate architecture, often referred to as 'the people's palace.'",
        },
        {
          name: "Enjoy traditional Russian cuisine",
          description:
            "Savor classic Russian dishes such as borscht, blini, and hearty stews in traditional restaurants across Moscow.",
        },
      ],
    },
    {
      id: 20,
      name: "Cusco, Peru",
      activities: [
        {
          name: "Explore the historic city center",
          description:
            "Wander through Cusco's charming streets, discovering its well-preserved colonial architecture and vibrant markets.",
        },
        {
          name: "Visit Qorikancha Temple",
          description:
            "Learn about Inca history and spirituality by visiting the Qorikancha Temple, once the center of Inca religious life.",
        },
        {
          name: "Learn about Inca history at the Museo Inka",
          description:
            "Immerse yourself in the history of the Inca civilization through artifacts and exhibits at the Museo Inka.",
        },
        {
          name: "Experience local Andean cuisine",
          description:
            "Taste traditional Andean dishes like alpaca meat and quinoa-based meals at local restaurants in Cusco.",
        },
      ],
    },
  ];

  let [{ ...target }] = dataDetails.filter((item) => {
    return item.id === 2;
  });
  let activites = target.activities;
  console.log(activites);
  return (
    <div className="main">
      <div className="mainImage">
        <img src={data.image_url} alt="" />
      </div>
      <div className="mainDesc">
        <h1>{data.destination_title}</h1>

        <h3>DESCRIPTION</h3>
        <hr />
        <p>{data.description}</p>

        <h3>THINGS TO DO IN {data.destination_title}</h3>
        <hr />
        <div className="thingstodo">
          {activites.map((item) => (
            <div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <h2>{data.fees}</h2>
        <button>Book my trip</button>
      </div>
    </div>
  );
};
