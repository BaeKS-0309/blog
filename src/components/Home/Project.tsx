import { Link } from "react-router-dom";
import ElectronRecipe from "../../img/electronRecipe.png";
import { FaArrowRight } from "react-icons/fa6";

export default function HomeProject() {
  return (
    <>
      <section className='home__section home__project'>
        <div className='inner_wrap'>
          <div className='title_wrap'>
            <h2 className='home__title'>Project</h2>
            <Link to='/project' className='more--btn'>
              더보기
              <FaArrowRight />
            </Link>
          </div>
          <div className='home__project__list'>
            <ul className='list__area'>
              <li className='project__card'>
                <Link to={"/project"}>
                  <img src={ElectronRecipe} alt='Project List Image01' className='card__img' />
                  <div className='card__desc__wrap'>
                    <ul className='hash'>
                      <li className='hash__list'>#HTML</li>
                      <li className='hash__list'>#CSS</li>
                      <li className='hash__list'>#JavaScript</li>
                      <li className='hash__list'>#JavaScript</li>
                      <li className='hash__list'>#JavaScript</li>
                    </ul>
                    <h3 className='card__title'>Electron APP 만들기</h3>
                    <p className='card__desc'>웹앱 퍼블리싱</p>
                  </div>
                </Link>
              </li>
              <li className='project__card'>
                <Link to={"/project"}>
                  <img src={ElectronRecipe} alt='Project List Image01' className='card__img' />
                  <div className='card__desc__wrap'>
                    <ul className='hash'>
                      <li className='hash__list'>#HTML</li>
                      <li className='hash__list'>#CSS</li>
                      <li className='hash__list'>#JavaScript</li>
                      <li className='hash__list'>#JavaScript</li>
                      <li className='hash__list'>#JavaScript</li>
                    </ul>
                    <h3 className='card__title'>Electron APP 만들기</h3>
                    <p className='card__desc'>웹앱 퍼블리싱</p>
                  </div>
                </Link>
              </li>
              <li className='project__card'>
                <Link to={"/project"}>
                  <img src={ElectronRecipe} alt='Project List Image01' className='card__img' />
                  <div className='card__desc__wrap'>
                    <ul className='hash'>
                      <li className='hash__list'>#HTML</li>
                      <li className='hash__list'>#CSS</li>
                      <li className='hash__list'>#JavaScript</li>
                      <li className='hash__list'>#JavaScript</li>
                      <li className='hash__list'>#JavaScript</li>
                    </ul>
                    <h3 className='card__title'>Electron APP 만들기</h3>
                    <p className='card__desc'>웹앱 퍼블리싱</p>
                  </div>
                </Link>
              </li>
              <li className='project__card'>
                <Link to={"/project"}>
                  <img src={ElectronRecipe} alt='Project List Image01' className='card__img' />
                  <div className='card__desc__wrap'>
                    <ul className='hash'>
                      <li className='hash__list'>#HTML</li>
                      <li className='hash__list'>#CSS</li>
                      <li className='hash__list'>#JavaScript</li>
                      <li className='hash__list'>#JavaScript</li>
                      <li className='hash__list'>#JavaScript</li>
                    </ul>
                    <h3 className='card__title'>Electron APP 만들기</h3>
                    <p className='card__desc'>웹앱 퍼블리싱</p>
                  </div>
                </Link>
              </li>
              <li className='project__card'>
                <Link to={"/project"}>
                  <img src={ElectronRecipe} alt='Project List Image01' className='card__img' />
                  <div className='card__desc__wrap'>
                    <ul className='hash'>
                      <li className='hash__list'>#HTML</li>
                      <li className='hash__list'>#CSS</li>
                      <li className='hash__list'>#JavaScript</li>
                      <li className='hash__list'>#JavaScript</li>
                      <li className='hash__list'>#JavaScript</li>
                    </ul>
                    <h3 className='card__title'>Electron APP 만들기</h3>
                    <p className='card__desc'>웹앱 퍼블리싱</p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
