const fs = require('fs');
const path = require('path');

const locations = ['Lalpur', 'Kanke Road', 'Doranda', 'Hinoo', 'Katatoli', 'Bariatu', 'Morabadi', 'Namkum', 'Kokar', 'Harmu', 'Ratu Road', 'Piska More', 'Argora', 'Tatisilwai', 'Tupudana'];
const types = ['Boys', 'Girls', 'Co-ed'];
const tags_pool = ['WiFi', 'Food', 'AC', 'Laundry', 'Security', 'Library', 'Gym', 'Parking', 'Power Backup', 'Cleaning'];
const name_prefixes = ['Premium', 'Comfort', 'Elite', 'Sunrise', 'Royal', 'Modern', 'Classic', 'Galaxy', 'Star', 'Urban', 'Harmony', 'Nest'];
const name_suffixes = ['PG', 'Hostel', 'Co-Living', 'Residency', 'Homes'];
const images = ['/images/room_1.png', '/images/room_2.png', '/images/login_bg.png'];

const data = [];

for (let i = 1; i <= 100; i++) {
    const loc = locations[Math.floor(Math.random() * locations.length)];
    const type = types[Math.floor(Math.random() * types.length)];
    const prices = [4000, 4500, 5000, 5500, 6000, 6500, 7000, 8000, 9000, 10000, 12000];
    const price = prices[Math.floor(Math.random() * prices.length)];
    const rating = (Math.random() * (5 - 3.5) + 3.5).toFixed(1);
    const reviews = Math.floor(Math.random() * (300 - 10) + 10);
    const image = images[Math.floor(Math.random() * images.length)];
    
    // Pick 3-4 random tags
    const numTags = Math.floor(Math.random() * 2) + 3;
    const shuffledTags = [...tags_pool].sort(() => 0.5 - Math.random());
    const tags = shuffledTags.slice(0, numTags);
    
    const prefix = name_prefixes[Math.floor(Math.random() * name_prefixes.length)];
    const suffix = name_suffixes[Math.floor(Math.random() * name_suffixes.length)];
    
    const name = `${loc} ${prefix} ${type} ${suffix}`;
    
    data.push({
      id: i,
      name: name,
      location: loc + ", Ranchi",
      type: type,
      price: price.toLocaleString(),
      rating: parseFloat(rating),
      reviews: reviews,
      image: image,
      tags: tags,
      mapUrl: "https://maps.google.com/?q=" + encodeURIComponent(loc + ", Ranchi")
    });
}

const fileContent = `export const pgsData = ${JSON.stringify(data, null, 2)};\n`;
const dir = path.join(__dirname, 'src/data');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}
fs.writeFileSync(path.join(dir, 'pgs.ts'), fileContent, 'utf-8');
console.log('Successfully generated src/data/pgs.ts');
