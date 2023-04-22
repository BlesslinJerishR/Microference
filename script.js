const gid = (id) => document.getElementById(id);

const year = gid('year');
const dt = new Date();
year.innerHTML = dt.getFullYear();

const footYear = gid('foot-year');
footYear.innerHTML = dt.getFullYear();

const dataSet = [
  {
    name: 'Yochai Benkler',
    p1: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    p2: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    name: 'Kilnam Chon',
    p1: 'Assistant Professor at Berkley Technical School',
    p2: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
  },
  {
    name: 'SohYeong Noh',
    p1: 'Director of Art Centre Nabi and a board member of CC Korea',
    p2: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
  {
    name: 'Julia Leda',
    p1: 'President of Young Pirates of Europe',
    p2: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
  },
  {
    name: 'Lila tretikov',
    p1: 'Executive Director of the Wikimedia Foundation',
    p2: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available.',
  },
  {
    name: 'Ryan Merkley',
    p1: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
    p2: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment',
  },
];

const dynamic = gid('dynamic');
for (let num = 0; num < dataSet.length; num += 1) {
  dynamic.innerHTML += `<div class='card mb-3 fb' style='max-width: 540px;'>
    <div class='row g-0'>
      <div class='col-md-4'>
        <img src='imgs/${num}.png' class='img-fluid rounded-start' alt='Headshot Photo'>
      </div>
      <div class='col-md-8'>
        <div class='card-body cb'>
          <h5 class='card-title name text-dark'>${dataSet[num].name}</h5>
          <p class='card-text text-danger p1 it'>${dataSet[num].p1}</p>
          <p class='card-text p2 text-grey'>${dataSet[num].p2}</p>
        </div>
      </div>
    </div>
  </div>`;
}

const dynamicMobile = gid('dynamic-mobile');
for (let num = 0; num < dataSet.length; num += 1) {
  dynamicMobile.innerHTML += `
    <div>
      <img src='imgs/${num}.png' class='img-fluid rounded-start img-head-mob' alt='Headshot Photo'>
    </div>
    <div class='con-mob mb-5'>
      <h5 class='card-title name text-dark'>${dataSet[num].name}</h5>
      <p class='card-text text-danger p1 it'>${dataSet[num].p1}</p>
      <p class='card-text p2 text-grey'>${dataSet[num].p2}</p>
    </div>
  `;
}
