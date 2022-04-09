const project = '/images/project_thumnails/'
const people = '/images/people/'

const projects = [
  {
    // id: '1',
    url: 'https://proshop-alpha.herokuapp.com/',
    image: `${project}proshop.png`,
    title: 'PROSHOP',
    desc: 'power of MERN stack Ecommerce site: a code-along with trav-sensei',
  },
  {
    url: 'https://racial-winter.surge.sh/',
    image: `${project}to_do_list.png`,
    title: 'to do list',
    desc: 'code along with the net ninja using super duper array methods'
  },
  {
    url: 'https://classy-brother.surge.sh/',
    image: `${project}rippling_button.png`,
    title: 'rippling button',
    desc: 'vanilla power: e.clientXY and offsetTop/Left animate a button'
  },
  {
    // id: '1',
    url: 'https://unused-steam.surge.sh/',
    image: `${project}theme_clock.png`,
    title: 'cool theme clock',
    desc: 'a code-along with Trav renders the time in light and dark mode',
  },
  {
    // id: '1',
    url: 'http://roasted-wing.surge.sh/',
    image: `${project}background_slider.png`,
    title: 'background slider',
    desc: 'querySelectorAll takes you through the magical land of Nippon',
  },
  {
    // id: '1',
    url: 'https://rough-farmer.surge.sh/',
    image: `${project}movie_app.png`,
    title: 'cool movie app',
    desc: 'the TMDB api and forEach let you troll the digital archives of cinema',
  },
  {
    // id: '1',
    url: 'https://typical-step.surge.sh/',
    image: `${project}drink_water.png`,
    title: 'drink water!',
    desc: 'Stay hydrated with this holy trin exercise is managing water intake, my friend.',
  },
  {
    // id: '1',
    url: 'https://small-size.surge.sh/',
    image: `${project}increment_counter.png`,
    title: 'increment counter',
    desc: 'forEach and setTimeout make for a social media follower flex...',
  },
  {
    // id: '1',
    url: 'http://flashy-soap.surge.sh/',
    image: `${project}animated_nav.png`,
    title: 'animated nav',
    desc: 'JS toggle, transition and transform enhance the navbar concept.',
  },
  {
    // id: '1',
    url: 'https://acceptable-stew.surge.sh/',
    image: `${project}the_decider.jpg`,
    title: 'the decider',
    desc: 'Enter your choices and watch JS pseudo-randomly decide for you!',
  },
  {
    // id: '1',
    url: 'https://heady-smash.surge.sh/',
    image: `${project}faq_collapse.png`,
    title: 'faq collapse',
    desc: 'forEach, classList and parentNode bring this faq experience to life',
  },
  {
    // id: '1',
    url: 'http://combative-mask.surge.sh/',
    image: `${project}centered_div.png`,
    title: 'centered div',
    desc: 'we have masted the art of moving a box to the center of the page',
  },
  {
    // id: '1',
    url: 'http://sedate-building.surge.sh/',
    image: `${project}dad_joke.png`,
    title: 'Dad Jokes',
    desc: 'Trav and I use async await to request dad jokes from a 3rd party API',
  },
  {
    // id: '2',
    url: 'http://filthy-nose.surge.sh/',
    image: `${project}sound_board.png`,
    title: 'Sound Board',
    desc: 'forEach(), play(), pause(), and createElement() bring you sound clips',
  },
  {
    // id: '3,
    url: 'http://flawless-brake.surge.sh/?',
    image: `${project}form_wave.png`,
    title: 'Form Wave Animation',
    desc: 'Travodyssey!!. The power of forEach() and map() make this form less boring',
  },
  {
    // id: '4',
    url: 'http://hushed-meeting.surge.sh/',
    image: `${project}split_screen.png`,
    title: 'Split Screen Landing',
    desc: 'code with Trav. This odyssey in CSS captures the essence of the console wars',
  },
  {
    // id: '5',
    url: 'http://pointless-anger.surge.sh/',
    image: `${project}search_bar.png`,
    title: 'Search the Web...',
    desc: 'a google search widget that lets you explore the world wide web ',
  },
  {
    // id: '6',
    url: 'http://aquatic-seashore.surge.sh/',
    image: `${project}burger.png`,
    title: 'The Rotating Nav',
    desc: 'code-along with Trav. A Navbar rotating open and closed like a boss',
  },
  {
    // id: '7',
    url: 'http://hateful-trains.surge.sh/',
    image: `${project}child_of_god.png`,
    title: 'Image Rolex',
    desc: 'Trav: Click on an image, watch it grow. Japan is カッコイイね。',
  },
  {
    // id: '8',
    url: 'http://aggressive-fork.surge.sh/',
    image: `${project}progress_steps.png`,
    title: 'Clicking Progress',
    desc: 'super progess bar: a code-along with Traversy in the land of vanilla',
  },
  {
    // id: '9',
    url: 'http://purring-beef.surge.sh/',
    image: `${project}currency_converter.png`,
    title: 'forex calculator',
    desc: 'Traversy code-along. My first forex calculator with Fetch API! and more',
  },
  {
    // id: '10'
    url: 'https://manchester-city-46483.web.app/',
    image: `${project}man_city.png`,
    title: 'Man City',
    desc: 'FERN stack homepage for the famous football club I know nothing about',
  },
  {
    // id: '11',
    url: 'http://thoughtful-match.surge.sh/',
    image: `${project}movie_booker.png`,
    title: '映画を予約しよう！',
    desc: 'vanilla power: JS code-along with Trav creates a ticket reservation system',
  },

  {
    // id: '12',
    url: 'http://curved-value.surge.sh/',
    image: `${project}array_methods.png`,
    title: 'Array Methods',
    desc: 'code with Trav-sensei: DOM manipulation with array methods in Vanilla JS',
  },
  {
    // id: '13',
    url: 'http://silent-credit.surge.sh/',
    image: `${project}blurry_loader.png`,
    title: 'Blurry Loader',
    desc: 'watch the opacity fade as the page loads; Image: Hamamatsu Castle, Shizuoka ',
  },
  {
    // id: '14',
    url: 'http://gabby-mark.surge.sh/',
    image: `${project}the_venue.png`,
    title: 'The Venue',
    desc: 'first ever React Project with Coding Revolution. 2.0 will be Britpop related.',
  },
  {
    // id: '15',
    url: 'http://unused-doll.surge.sh/',
    image: `${project}video_player.png`,
    title: 'Video Player',
    desc: 'super video/audio API code-along with Traversy. This is me in Nagasaki!',
  },
  {
    // id: '16',
    url: 'http://nondescript-comfort.surge.sh/',
    image: `${project}form_validator_2.jpg`,
    title: 'form validator',
    desc: 'a code-along with Traversy Media, JS forms on html and css canvas',
  },
  {
    // id: '17',
    url: 'http://milky-thunder.surge.sh/',
    image: `${project}div_spawn.png`,
    title: 'div Spawner',
    desc: 'code with Trav: scroll down and watch divs materialize right and left',
  },
]

export default projects
