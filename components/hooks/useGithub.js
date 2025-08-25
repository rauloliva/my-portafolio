import { useState, useEffect } from 'react';
import P from '../DOM/P';
import Repository from '../Repository';

const languages = {
  java: 'https://cdn-icons-png.flaticon.com/512/226/226777.png',
  js: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
  python: 'https://cdn-icons-png.flaticon.com/512/1822/1822899.png',
  php: 'https://cdn-icons-png.flaticon.com/512/5968/5968332.png',
  html: 'https://cdn-icons-png.flaticon.com/512/732/732212.png',
};

async function callAPI(uri) {
  const res = await fetch(`https://api.github.com/${uri}`);
  return await res.json();
}

// fetch Github profile overview
const useProfileOverview = () => {
  const [paragraphs, setParagrahs] = useState([]);

  const getProfileOverview = async () => {
    const data = await callAPI('repos/rauloliva/rauloliva/readme');

    const data_base64 = data.content;

    // convert base64 data to readable data
    let overview = atob(data_base64);

    // removing 'My Github Stats' from the content
    overview = overview.split('##')[0];

    const ps = overview.split('\n');

    const profileOverview = ps.map((p, k) => {
      if (p != '') return <P key={k}>{p}</P>;
    });

    setParagrahs(profileOverview);
  };

  useEffect(() => {
    getProfileOverview();
  }, []);

  return paragraphs;
};

// get my Github repos
const useRepos = () => {
  const [repos, setRepos] = useState([]);

  const getRepos = async () => {
    const repositories = await callAPI('users/rauloliva/repos');

    const githubRepos = repositories.map(repo => {
      // ignore empty repos
      if (repo.id !== 355990194 && repo.id !== 908044452)
        return <Repository key={repo.id} repo={repo} />;
    });

    setRepos(githubRepos);
  };

  useEffect(() => {
    getRepos();
  });

  return repos;
};

const reposLangs = {
  178989528: languages.java, // Akinator
  458660373: languages.js, // Blog Creator
  376414013: languages.js, // Country App API
  185407012: languages.python, // Neural Network
  137402067: languages.php, // Restaurant Manager
  354601945: languages.html, // To do API
  185408405: languages.js, // To do App
  217957433: languages.java, // Ventas Automtriz
  188945530: languages.js, // Where is ISS
  378482842: languages.js, // Country App
  308123515: languages.js, // Fibonacci
  286359584: languages.php, // Movie Search
  510070477: languages.js, // My Portafolio
  418275997: languages.js, // Text Detector
  356656726: languages.js, // Memorize
  908015609: languages.python, // Coffee Machine
};

export { useProfileOverview, useRepos, reposLangs };
