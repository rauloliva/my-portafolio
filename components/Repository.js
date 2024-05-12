import style from '../styles/modules/repository.module.scss';
import Link from 'next/link';
import { Card, CardHeader, CardBody, Image } from '@nextui-org/react';
import img from '../img/repos/resturant_system.jpeg';
import { reposDetails } from '../js/repos';

const Repository = ({ repo }) => {
  const repoName = repo.name.replace(/-/g, ' ').replace(/_/g, ' ');

  let repoImage = reposDetails['' + repo.id];

  repoImage = repoImage == undefined ? img : repoImage;

  return (
    <Card className={style.flip_card.concat(' py-4')}>
      <div className={style.flip_card_inner}>
        <div className={style.flip_card_front}>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">{repo.full_name}</p>
            <small className="text-default-500">{repo.language}</small>
            <h4 className="font-bold text-large">{repoName}</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={repoImage.src}
              width={270}
            />
          </CardBody>
        </div>
        <div className={style.flip_card_back}>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large">{repoName}</h4>
            <Link href={repo.html_url} passHref={true}>
              <span
                style={{ position: 'block', width: '100%' }}
                className={style.repository__link_icon}
              >
                <Image
                  src="https://logo.clearbit.com/github.com"
                  width="30"
                  height="30"
                  alt="Github Icon"
                />
                Open Repository
              </span>
            </Link>
          </CardHeader>
          <CardBody className=" py-2">
            <p className="text-tiny uppercase font-bold">{repo.description}</p>
          </CardBody>
        </div>
      </div>
    </Card>
  );
};

export default Repository;
