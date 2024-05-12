import akinator_img from '../img/repos/akinator.jpeg';
import blogCreator_img from '../img/repos/blogs_creator.jpeg';
import api_img from '../img/repos/api.jpeg';
import neural_img from '../img/repos/neural_network.jpeg';
import restaurant_img from '../img/repos/resturant_system.jpeg';
import todo_img from '../img/repos/todo_list.jpeg';
import ventasAuto_img from '../img/repos/ventas_automotriz.jpeg';
import where_iss_img from '../img/repos/wheres_iss.jpeg';
import movieSearch_img from '../img/repos/movie_search.jpeg';
import fibonacci_img from '../img/repos/fibonacci.jpeg';
import countryApp_img from '../img/repos/country_app.jpeg';
import portafolio_img from '../img/repos/my_portafolio.jpeg';
import detectText_img from '../img/repos/detect_text.jpeg';
import memorize_img from '../img/repos/memorize.jpeg';

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

export const reposDetails = {
  178989528: akinator_img,
  458660373: blogCreator_img,
  376414013: api_img,
  185407012: neural_img,
  137402067: restaurant_img,
  354601945: api_img,
  185408405: todo_img,
  217957433: ventasAuto_img,
  188945530: where_iss_img,
  378482842: countryApp_img,
  308123515: fibonacci_img,
  286359584: movieSearch_img,
  510070477: portafolio_img,
  418275997: detectText_img,
  356656726: memorize_img,
};
