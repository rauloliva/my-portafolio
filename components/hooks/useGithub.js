import { useState, useEffect } from 'react';
import P from '../DOM/P';
import Repository from '../Repository';

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

    const githubRepos = repositories.map(repo => (
      <Repository key={repo.id} repo={repo} />
    ));

    setRepos(githubRepos);
  };

  useEffect(() => {
    getRepos();
  });

  return repos
};

export { useProfileOverview, useRepos };
