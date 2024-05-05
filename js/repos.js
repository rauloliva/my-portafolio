export async function getRepos() {
  const res = await fetch('https://api.github.com/users/rauloliva/repos');
  const repositories = await res.json();

  const reposArray = [];
  repositories.forEach(repo => {
    if (repo.id != 355990194) {
      reposArray.push(repo);
    }
  });

  return reposArray;
}
