'use client';

import { useState, useEffect, useMemo, useCallback, ReactElement } from 'react';

import P from '@/components/common/P';
import Repository from '@/components/features/Repository/Repository';

import { GITHUB_API, RAULOLIVA_REPO_ID } from '@/constants'

interface ResourceResponse {
  content: string;
  encoding?: string;
}

export interface GithubRepo {
  id: number;
  name: string;
  language: string;
  html_url: string;
  description: string;
}

async function callAPI<T>(uri: string): Promise<T> {
  const res = await fetch(`${GITHUB_API.BASE}${uri}`);
  return await res.json();
}

// fetch Github profile overview
const useProfileOverview = () => {
  const [overviewRaw, setOverviewRaw] = useState<string>('');

  const getProfileOverview = useCallback(async () => {
    const data = await callAPI<ResourceResponse>(GITHUB_API.README);
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

// fetch My Resume from rauloliva repo
const useResumeFile = () => {
  const [fileRaw, setFileRaw] = useState<string>('');

  const getResumeFile = useCallback(async () => {
    try {
      const data = await callAPI<ResourceResponse>(GITHUB_API.RESUME);

      if (data.content && data.encoding === 'base64') {
        const resume = `data:application/pdf;base64,${data.content}`;
        setFileRaw(resume);
        return;
      }

      setFileRaw('');
    } catch (error) {
      console.error('Unable to load resume PDF: ', error);
      setFileRaw('');
    }
  }, []);

  useEffect(() => {
    getResumeFile();
  }, [getResumeFile]);

  return fileRaw;
};

// get my Github repos
const useRepos = () => {
  const [reposRaw, setReposRaw] = useState<GithubRepo[]>([]);

  const getRepos = useCallback(async () => {
    const repositories = await callAPI<GithubRepo[]>(GITHUB_API.REPOS);
    setReposRaw(repositories);
  }, []);

  useEffect(() => {
    getRepos();
  }, [getRepos]);

  const repos = useMemo(() => {
    return reposRaw
      .map(repo => {
        if (repo.id !== RAULOLIVA_REPO_ID)
          return <Repository key={repo.id} repo={repo} />;
        return null;
      })
      .filter((repo): repo is ReactElement => repo !== null);
  }, [reposRaw]);

  return repos;
};

export { useProfileOverview, useRepos, useResumeFile };
