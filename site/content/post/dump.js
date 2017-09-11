const fs = require('fs');
const template = (title) => `
---
title: "${title}"
date: 2016-12-17T15:04:10.000Z
description: The Coffee Taster’s Flavor Wheel, the official resource used by coffee tasters, has been revised for the first time this year.
image: /img/blog/flavor_wheel.jpg
---

The SCAA updated the wheel to reflect the finer nuances needed to describe flavors more precisely. The new descriptions are more detailed and hence allow cuppers to distinguish between more flavors.

While this is going to be a big change for professional coffee tasters, it means a lot to you as a consumer as well. We’ll explain how the wheel came to be, how pros use it and what the flavors actually mean.

## What the updates mean to you

The Specialty Coffee Association of America (SCAA), founded in 1982, is a non-profit trade organization for the specialty coffee industry. With members located in more than 40 countries, SCAA represents every segment of the specialty coffee industry, including:

- producers
- roasters
- importers/exporters
- retailers
- manufacturers
- baristas

For over 30 years, SCAA has been dedicated to creating a vibrant specialty coffee community by recognizing, developing and promoting specialty coffee. SCAA sets and maintains quality standards for the industry, conducts market research, and provides education, training, resources, and business services for its members.

Coffee cupping, or coffee tasting, is the practice of observing the tastes and aromas of brewed coffee. It is a professional practice but can be done informally by anyone or by professionals known as "Q Graders". A standard coffee cupping procedure involves deeply sniffing the coffee, then loudly slurping the coffee so it spreads to the back of the tongue.

The coffee taster attempts to measure aspects of the coffee's taste, specifically the body (the texture or mouthfeel, such as oiliness), sweetness, acidity (a sharp and tangy feeling, like when biting into an orange), flavour (the characters in the cup), and aftertaste. Since coffee beans embody telltale flavours from the region where they were grown, cuppers may attempt to identify the coffee's origin.
`;

const words = `Nunc dictum egestas neque in aliquam. In commodo nisl id dictum mollis. Integer aliquam tellus magna, ut gravida justo viverra ac. Nulla vitae velit a magna lacinia porta in ut leo. Maecenas ultrices elementum justo, quis finibus risus tempor interdum. Maecenas dictum leo ac ipsum auctor, facilisis aliquet urna faucibus. Sed ullamcorper leo non accumsan hendrerit. Phasellus quis lobortis libero, ut volutpat felis. Quisque et suscipit justo. Ut ac tempor ante, id hendrerit ipsum. Fusce vel arcu sem. Donec tincidunt turpis ut tempus varius. In faucibus dignissim metus, ac malesuada ligula faucibus ut. Fusce consectetur tincidunt elit pulvinar lobortis. Proin vehicula erat in efficitur ornare.`
  .replace('.','').toLowerCase().split(/\s/);
const length = words.length;

const getWords = (n) => {
  return Array.from(
    { length: n },
    () => words[Math.floor(Math.random() * length)]
  );
}

for (let i = 0; i < parseInt(process.argv.slice(-1).pop()); i++) {
  let forTitle = getWords(6),
      title = forTitle.map(n => n.charAt(0).toUpperCase() + n.slice(1)).join(' '),
      name = forTitle.join('-') + '.md';
  
  fs.writeFileSync(`./${name}`, template(title));
}