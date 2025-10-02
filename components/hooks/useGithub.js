import { useState, useEffect, useMemo, useCallback } from 'react';
import P from '../DOM/P';
import Repository from '../Repository';

async function callAPI(uri) {
  const res = await fetch(`https://api.github.com/${uri}`);
  return await res.json();
}

// fetch Github profile overview
const useProfileOverview = () => {
  const [overviewRaw, setOverviewRaw] = useState('');

  const getProfileOverview = useCallback(async () => {
    const data = await callAPI('repos/rauloliva/rauloliva/readme');
    const data_base64 = data.content;
    let overview = atob(data_base64);
    overview = overview.split('##')[0];
    setOverviewRaw(overview);
  }, []);

  useEffect(() => {
    getProfileOverview();
  }, [getProfileOverview]);

  const paragraphs = useMemo(() => {
    const ps = overviewRaw.split('\n');
    return ps.map((p, k) => {
      if (p !== '') return <P key={k}>{p}</P>;
      return null;
    });
  }, [overviewRaw]);

  return paragraphs;
};

// get my Github repos
const useRepos = () => {
  const [reposRaw, setReposRaw] = useState([]);

  const getRepos = useCallback(async () => {
    const repositories = await callAPI('users/rauloliva/repos');
    setReposRaw(repositories);
  }, []);

  useEffect(() => {
    getRepos();
  }, [getRepos]);

  const repos = useMemo(() => {
    return reposRaw
      .map(repo => {
        if (repo.id !== 355990194 && repo.id !== 908044452)
          return <Repository key={repo.id} repo={repo} />;
        return null;
      })
      .filter(Boolean);
  }, [reposRaw]);

  return repos;
};

export { useProfileOverview, useRepos };
