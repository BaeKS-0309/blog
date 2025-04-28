import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function HomeBlog() {
  return (
    <>
      <section className='home__section home__blog'>
        <div className='inner_wrap'>
          <div className='title_wrap'>
            <h2 className='home__title'>Blog</h2>
            <Link to='/blog' className='more--btn'>
              더보기
              <FaArrowRight />
            </Link>
          </div>
          <div className='home__blog__list'>
            <ul className='list__area'>
              <li className='blog__card'>
                <Link to={"/blog/title"}>
                  <div className='card__desc__wrap'>
                    <ul className='hash'>
                      <li className='hash__list'>#HTML</li>
                    </ul>
                    <h3 className='card__title'>HTML 태그에 대해 알아보자</h3>
                    <p className='card__desc'>
                      HTML(하이퍼텍스트 마크업 언어)에서 태그(tag)는 웹 페이지의 구조와 콘텐츠를
                      정의하는 데 사용되는 마크업 언어의 기본 구성 요소입니다. HTML 태그는
                      요소(element)를 감싸거나 특정한 형태로 표시하기 위해 사용되며, 일반적으로
                      꺾쇠괄호(&lt;&gt;)로 둘러싸여 있습니다.
                    </p>
                  </div>
                </Link>
              </li>
              <li className='blog__card'>
                <Link to={"/blog/title"}>
                  <div className='card__desc__wrap'>
                    <ul className='hash'>
                      <li className='hash__list'>#HTML</li>
                    </ul>
                    <h3 className='card__title'>HTML 태그에 대해 알아보자</h3>
                    <p className='card__desc'>
                      HTML(하이퍼텍스트 마크업 언어)에서 태그(tag)는 웹 페이지의 구조와 콘텐츠를
                      정의하는 데 사용되는 마크업 언어의 기본 구성 요소입니다. HTML 태그는
                      요소(element)를 감싸거나 특정한 형태로 표시하기 위해 사용되며, 일반적으로
                      꺾쇠괄호(&lt;&gt;)로 둘러싸여 있습니다.
                    </p>
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
