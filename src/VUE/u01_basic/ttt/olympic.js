img_url = {
    Australia: "australia.png",
    Azerbaijan: "azerbaijan.png",
    Belgium: "belgium.png",
    Brazil: "brazil.png",
    Canada: "canada.png",
    China: "china.png",
    France: "fra.png",
    Germany: "ger.png",
    Great_Britain: "greatbritain.png",
    Hong_Kong: "hong-kong.png",
    India: "india.png",
    Italy: "italy.png",
    Japan: "japan.png",
    Kazakhstan: "kazakhstan.png",
    Moldova: "moldova.png",
    Republic_of_Korea: "skorea.png",
    South_Africa: "south_africa.png",
    Sweden: "sweden.png",
    Turkey: "turkey.png",
    United_States: "usa.png"
}

medals = [
    "United-States 3 8 9",
    "France 5 8 3",
    "Japan 6 2 4",
    "China 5 5 2",
    "Great-Britain 2 5 3",
    "Australia 5 4 0",
    "Republic-of-Korea 5 3 1",
    "Italy 2 3 3",
    "Canada 2 1 2",
    "Hong-Kong 2 0 1",
    "Kazakhstan 1 0 2",
    "South-Africa 1 0 2",
    "Brazil 0 1 2",
    "Sweden 0 1 2",
    "Germany 2 0 0",
    "Belgium 1 0 1",
    "Turkey 0 1 1",
    "India 0 0 2",
    "Moldova 0 0 2",
    "Azerbaijan 1 0 0",
]

country_list = [];
medals.forEach(element => {
    s = element.split(" ");
    country = {};
    country.name = s[0];
    [country.gold, country.silver, country.bronze] = [s[1], s[2], s[3]].map(n => parseInt(n));
    country_list.push(country);
});

// console.log(country_list);

country_list.forEach(element => {
    img_src = element.name.replaceAll('-', '_');
    element.img = img_url[img_src];
});

console.log(country_list);

console.log('=== 依據國家名排序 ===');
country_list.sort((x, y) => x.name.localeCompare(y.name));
console.log(country_list);

console.log('=== 依據金牌數排序 ===');
country_list.sort((x, y) => y.gold - x.gold);
console.log(country_list);

console.log('=== 依據總獎牌數排序 ===');
country_list.sort((x, y) => (y.gold + y.silver + y.xx) - (x.gold + x.silver + x.bronze));
console.log(country_list);
