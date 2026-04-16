import styles from './assets/css/section/contect.module.css';
import intro from './assets/css/section/intro.module.css';
import skill from './assets/css/section/skill.module.css';
import site from './assets/css/section/site.module.css';
import port from './assets/css/section/port.module.css';
import { Swiper,SwiperSlide} from "swiper/react"; // basic
import type { Swiper as SwiperClass } from 'swiper'; 

// Swiper 핵심 스타일
import 'swiper/swiper-bundle.css'; 
import { Navigation } from 'swiper/modules';
import { useState } from "react";


function Content() {

const [, setSwiperIndex] = useState(0); // -> 페이지네이션용
const [swiper, setSwiper] = useState<SwiperClass>(); // -> 슬라이드용

// 2. 슬라이드 이벤트핸들
const handlePrev = () => {
    swiper?.slidePrev()
}
const handleNext = () => {
  swiper?.slideNext()
}
  return (
    <>
    {/* main */}
     <main id="main" className={styles.container}>
      <section id="intro" className={intro.skip}>
        <div className={intro.intro_inner}>
            <h1 className={intro.intro_title}>
             WebDeveloper Portfolio
            </h1>

            <div className={intro.intro_text}>
                <div className={intro.text}>
                    <div>Those who do their best </div>
                    <div>are satisfied with the</div>
                    <div>results.</div>
                </div>
            </div>

        </div>
      </section>
      {/* skill */}
      <section id="skill"  className={skill.skip}>
        <div className={skill.skill_inner}>
            <h2 className={skill.skill_title}><em>보유</em> Skill</h2>
            <div className={skill.skill_desc}>
            
                <div>
                    <span>1.</span>
                    <h3>Frontend</h3>
                    <ul>
                     <li><img src="/img/html5.png" alt="html5"/><span>HTML</span></li>
                     <li><img src="/img/javascript.png" alt="Javascript"/><span>Javascript</span></li>
                     <li><img src="/img/react.png" alt="React"/><span>React.js</span></li>
                    </ul>
                    <ul> 
                     <li><img src="/img/vite.png" alt="Vite"/><span>Vite</span></li>
                     <li><img src="/img/tscript.png" alt="Typescript"/><span>Typescript</span></li>
                     <li><img src="/img/bootstrap.png" alt="Bootstrap"/><span>Bootstrap</span></li>
                    </ul>
                </div>
                <div>
                    <span>2.</span>
                    <h3>Backend</h3>
                    <ul>
                     <li><img src="/img/jsp_icon.png" alt="JSP"/><span>JSP</span></li>
                     <li><img src="/img/php_icon.png" alt="PHP"/><span>PHP</span></li>
                     <li><img src="/img/asp_icon.png" alt="ASP"/><span>ASP</span></li>
                     </ul>
                     <ul>
                     <li><img src="/img/java_icon.png" alt="JAVA"/><span>JAVA</span></li>
                     <li><img src="/img/node_icon.png" alt="NodeJs"/><span>Node.js</span></li>
                    </ul>
                </div>    
                <div>
                    <span>3.</span>
                    <h3>Database</h3>
                    <ul>
                     <li><img src="/img/oracle.png" alt="Oricle"/><span>Oricle</span></li>
                     <li><img src="/img/mysql_icon.png" alt="Mysql"/><span>Mysql</span></li>
                    </ul>
                </div>      
                <div>
                    <span>4.</span>
                    <h3>Tool</h3>
                    <ul>
                     <li><img src="/img/eclips_icon.png" alt="Eclips"/><span>Eclips</span></li>
                     <li><img src="/img/mysql_icon.png" alt="MysqlWorkbench"/><span>MysqlWorkbench</span></li>
                     <li><img src="/img/oracle.png" alt="SQLDeveloper"/><span>SQLDeveloper</span></li>
                    </ul>
                    <ul> 
                     <li><img src="/img/vscode.png" alt="VSCode"/><span>Visual Studio Code</span></li>
                     <li><img src="/img/mssql.png" alt="SQL Server Management Studio"/><span>SQL Server Management Studio</span></li>
                     <li><img src="/img/ultra_icon.png" alt="UltraEdit"/><span>UltraEdit</span></li>
                    </ul>
                </div> 
                                 
            </div>
               
        </div>   

            <div className={skill.info}>
                <span><a href="https://icons8.kr/" target="_blank">Icons by Icons8</a></span>
            </div>               
      </section> 


<section id="skill2"  className={skill.skip}>
        <div className={skill.skill_inner}>
            <h2 className={skill.skill_title}><em>History</em> 근무경력</h2>
            <div className={skill.skill_desc}><div>
                <span>1.</span>
                <h3>하나정보기술 주식회사</h3>
                <ul><li>근무기간 : 2018.10.10 ~ 2025.12.31(7년 2개월)</li></ul>
                <ul><li>직무영역 및 기술 : PHP + Mysql 기반 반응형 웹사이트 구축 및 유지보수</li></ul>
                </div>
                <div><span>2.</span><h3>(주)웹코아</h3>
                <ul><li>근무기간 : 2011.03.01 ~ 2015.03.31(4년)</li></ul>
                <ul><li>직무영역 및 기술 : JSP + Java + Oracle 기반 LMS 웹사이트 구축 및 유지보수</li></ul>
                </div>
                </div>
                </div>
</section>

<section id="site">
    <div className={site.site_inner}>
        <h2 className={site.site_title}>Project experience <em>프로젝트 경력</em></h2>
        <div>
            <article className={`${site.site_item} ${site.s1}`}><span className={site.num}>2025</span>
                <div className={site.text}>
                    <ul>
                        <li className={site.sub_title}>유아교육진흥원 서버 마이그레이션 사업</li>
                        <li><i className="ri-circle-line"></i> 참여기간 : 25.02.01 ~ 25.04.30</li>
                        <li><i className="ri-circle-line"></i> 사용기술 : PHP,MySQL/ OS: RockyLinux</li>
                    </ul>
                    <ul>
                        <li className={site.sub_title}>홈페이지 유지보수</li>
                        <li><i className="ri-circle-line"></i> 참여기간 : 25.01.01 ~ 25.12.30</li>
                        <li><i className="ri-circle-line"></i> 유지보수 사이트 : 인천광역시교육청 유아교육진흥원, 화도진도서관, 노인인력개발센터, 미추홀시니어클럽, 우리미술관, 드림파크문화재단 외 2건 </li>
                        <li><i className="ri-circle-line"></i> 기반기술 : HTML5/CSS,PHP,MySQL,Jquery</li>
                    </ul>
                </div>
            </article>
            <article className={`${site.site_item} ${site.s2}`}><span className={site.num}>2024</span>
                <div className={site.text}>
                    <ul>
                        <li className={site.sub_title}>전기기술인협회 홈페이지 구축</li>
                        <li><i className="ri-circle-line"></i> 참여기간 : 24.11.01 ~ 24.12.30</li>
                        <li><i className="ri-circle-line"></i> 사용기술 : HTML5/CSS,PHP,MySQL,Jquery</li>
                    </ul>
                    <ul>
                        <li className={site.sub_title}>화도진도서관 향토문화자료관 홈페이지 구축</li>
                        <li><i className="ri-circle-line"></i> 참여기간 : 24.04.30 ~ 24.07.31</li>
                        <li><i className="ri-circle-line"></i> 사용기술 : HTML5/CSS,PHP,MySQL,Jquery</li>
                    </ul>
                </div>
            </article>
            <article className={`${site.site_item} ${site.s3}`}><span className={site.num}>2023</span>
                <div className={site.text}>
                    <ul>
                        <li className={site.sub_title}>화도진도서관 향토문화자료관 홈페이지 유지보수</li>
                        <li><i className="ri-circle-line"></i> 참여기간 : 23.01.01 ~ 23.12.31</li>
                        <li><i className="ri-circle-line"></i> 기반기술 : HTML5/CSS,전자정부프레임워크,JSP,Mysql</li>
                    </ul>
                    <ul>
                        <li className={site.sub_title}>홈페이지 유지보수</li>
                        <li><i className="ri-circle-line"></i> 참여기간 : 23.01.01 ~ 23.12.31</li>
                        <li><i className="ri-circle-line"></i> 유지보수 사이트 : 인천광역시교육청 유아교육진흥원, 화도진도서관, 노인인력개발센터, 미추홀시니어클럽, 우리미술관, 드림파크문화재단 외 2건 </li>
                        <li><i className="ri-circle-line"></i> 기반기술 : HTML5/CSS,PHP,MySQL,Jquery / 전자정부프레임워크(화도진도서관)</li>
                    </ul>

                </div>

            </article>
            <article className={`${site.site_item} ${site.s4}`}><span className={site.num}>2022</span>
                <div className={site.text}>
                    <ul>
                        <li className={site.sub_title}>노인인력개발센터 홈페이지 개편사업 </li>
                        <li><i className="ri-circle-line"></i> 참여기간 : 22.11.04 ~ 22.12.31</li>
                        <li><i className="ri-circle-line"></i> 사용기술 : HTML5/CSS,PHP,MySQL,Jquery</li>
                    </ul>
                    <ul>
                        <li className={site.sub_title}>홈페이지 유지보수</li>
                        <li><i className="ri-circle-line"></i>참여기간 : 22.01.01 ~ 22.12.30</li>
                        <li><i className="ri-circle-line"></i>유지보수 사이트 : 인천광역시교육청 유아교육진흥원, 화도진도서관, 노인인력개발센터, 미추홀시니어클럽, 우리미술관, 드림파크문화재단 외 2건 </li>
                        <li><i className="ri-circle-line"></i>기반기술 : HTML5/CSS,PHP,MySQL,Jquery / 전자정부프레임워크(화도진도서관)</li>
                    </ul>
                </div>
            </article>
            <article className={`${site.site_item} ${site.s1}`}><span className={site.num}>2021</span>
                <div className={site.text}>
                    <ul>
                        <li className={site.sub_title}>홈페이지 유지보수</li>
                        <li><i className="ri-circle-line"></i>참여기간 : 21.01.01 ~ 21.12.30</li>
                        <li><i className="ri-circle-line"></i>유지보수 사이트 : 인천광역시교육청 유아교육진흥원, 노인인력개발센터, 미추홀시니어클럽, 우리미술관, 드림파크문화재단 외 2건 </li>
                        <li><i className="ri-circle-line"></i>기반기술 : HTML5/CSS,PHP,MySQL,Jquery</li>
                    </ul>
                </div>
            </article>
            <article className={`${site.site_item} ${site.s2}`}><span className={site.num}>2020</span>
                <div className={site.text}>
                    <ul>
                        <li className={site.sub_title}>노인일자리 정보시스템 구축</li>
                        <li><i className="ri-circle-line"></i>참여기간 : 20.11.23 ~ 20.12.18</li>
                        <li><i className="ri-circle-line"></i>사용기술 : HTML5/CSS,PHP,MySQL,Jquery</li>
                    </ul>
                    <ul>
                        <li className={site.sub_title}>미추홀시니어클럽 홈페이지 구축</li>
                        <li><i className="ri-circle-line"></i>참여기간 : 20.02.01 ~ 20.04.30</li>
                        <li><i className="ri-circle-line"></i>사용기술 : HTML5/CSS,PHP,MySQL,Jquery</li>
                    </ul>
                    <ul>
                        <li className={site.sub_title}>유아교육진흥원 홈페이지 기능개선사업</li>
                        <li><i className="ri-circle-line"></i>참여기간 : 20.02.18 ~ 20.12.31</li>
                        <li><i className="ri-circle-line"></i>사용기술 : HTML5/CSS,PHP,MySQL,Jquery</li>
                    </ul>
                    <ul>
                        <li className={site.sub_title}>홈페이지 유지보수</li>
                        <li><i className="ri-circle-line"></i>참여기간 : 20.01.01 ~ 20.12.30</li>
                        <li><i className="ri-circle-line"></i>유지보수 사이트 : 인천광역시교육청 유아교육진흥원, 노인인력개발센터, 미추홀시니어클럽, 우리미술관, 드림파크문화재단 외 2건 </li>
                        <li><i className="ri-circle-line"></i>기반기술 : HTML5/CSS,PHP,MySQL,Jquery</li>
                    </ul>
                </div>
            </article>
            <article className={`${site.site_item} ${site.s3}`}><span className={site.num}>2018 ~ 2019</span>
                <div className={site.text}>
                    <ul>
                        <li className={site.sub_title}>홈페이지 유지보수</li>
                        <li><i className="ri-circle-line"></i>참여기간 : 18.01.01 ~ 19.12.30</li>
                        <li><i className="ri-circle-line"></i>유지보수 사이트 : 인천광역시교육청 유아교육진흥원, 노인인력개발센터, 우리미술관, 드림파크문화재단 외 2건 </li>
                        <li><i className="ri-circle-line"></i>기반기술 : HTML5/CSS,PHP,MySQL,Jquery</li>
                    </ul>
                </div>
            </article>
        </div>
    </div>
</section>



     {/* port */}
    <section id="port">
        <div className={port.port_inner}>
            <div className={port.port_title}>portfolio <em>개발 및 유지보수 사이트</em></div>
            <div className={port.swiper}>
                <button className={port.btn_left} onClick={handlePrev}><i className="ri-arrow-left-circle-line"></i></button>
                <button className={port.btn_right} onClick={handleNext}><i className="ri-arrow-right-circle-line"></i></button>
                 
                <Swiper
                modules={[Navigation]}
                spaceBetween={25}
                scrollbar={{ draggable: true }}
                navigation={false}
                pagination={{ clickable: true }}
                breakpoints={{
                    1024: {
                    slidesPerView: 3,
                    },
                    850: {
                    slidesPerView: 2,
                    },                                        
                    680: {
                    slidesPerView: 2,
                    },
                    540: {
                    slidesPerView: 1,
                    },                                   
                }}
    onActiveIndexChange={(e)=>setSwiperIndex(e.realIndex)}
    onSwiper={(e) => {setSwiper(e)}}                
                >

                <SwiperSlide>
                                <div className={port.swiper_slide}>
                                    <article id="port_item" className={`${port.port_item} ${port.p1}`}><span className={port.num}>01.</span>
                                        <div><a href="https://child.ice.go.kr/" target="_blank" className={port.img}><img alt="인천광역시교육청 유아교육진흥원" src="/img/port01.jpg"/></a></div>
                                        <h3 className={port.title}>인천광역시교육청 유아교육진흥원</h3>
                                        <p className={port.desc}>반응형 웹 사이트(유지보수 및 리뉴얼)</p><a href="https://child.ice.go.kr/" target="_blank" className={port.site}>사이트 보기</a>
                                    </article>
                                </div>        
                </SwiperSlide>
                <SwiperSlide>
                                <div className={port.swiper_slide}>
                                    <article id="port_item" className={`${port.port_item} ${port.p2}`}><span className={port.num}>02.</span><a href="https://history.ice.go.kr/" target="_blank" className={port.img}><img alt="인천광역시교육청 화도진도서관" src="/img/port02.jpg"/></a>
                                        <h3 className={port.title}>인천광역시교육청 화도진도서관 향토문화자료관</h3>
                                        <p className={port.desc}>반응형 웹 사이트(유지보수 및 재구축)</p><a href="https://history.ice.go.kr/" target="_blank" className={port.site}>사이트 보기</a>
                                    </article>
                                </div>        
                </SwiperSlide>
                <SwiperSlide>
                                <div className={port.swiper_slide}>
                                    <article id="port_item" className={`${port.port_item} ${port.p3}`}><span className={port.num}>03.</span><a href="http://www.innojung.go.kr" target="_blank" className={port.img}><img alt="노인인력개발센터" src="/img/port03.jpg"/></a>
                                        <h3 className={port.title}>노인인력개발센터</h3>
                                        <p className={port.desc}>반응형 웹 사이트(유지보수 및 구축)</p><a href="http://www.innojung.go.kr" target="_blank" className={port.site}>사이트 보기</a>
                                    </article>
                                </div>        
                </SwiperSlide>
                <SwiperSlide>
                                <div className={port.swiper_slide}>
                                    <article id="port_item" className={`${port.port_item} ${port.p4}`}><span className={port.num}>04.</span><a href="http://www.michusc.or.kr" target="_blank" className={port.img}><img alt="미추홀시니어클럽" src="/img/port04.jpg"/></a>
                                        <h3 className={port.title}>미추홀시니어클럽</h3>
                                        <p className={port.desc}>반응형 웹 사이트(유지보수 및 구축)</p><a href="http://www.michusc.or.kr" target="_blank" className={port.site}>사이트 보기</a>
                                    </article>
                                </div>        
                </SwiperSlide>
                <SwiperSlide>
                                <div className={port.swiper_slide}>
                                    <article id="port_item" className={`${port.port_item} ${port.p5}`}><span className={port.num}>05.</span><a href="http://www.dreamparkcf.com/" target="_blank" className={port.img}><img alt="드림파크문화재단" src="/img/port05.jpg"/></a>
                                        <h3 className={port.title}>드림파크문화재단</h3>
                                        <p className={port.desc}>반응형 웹 사이트(유지보수)</p><a href="http://www.dreamparkcf.com/" target="_blank" className={port.site}>사이트 보기</a>
                                    </article>
                                </div>        
                </SwiperSlide>
                <SwiperSlide>
                                <div className={port.swiper_slide}>
                                    <article id="port_item" className={`${port.port_item} ${port.p6}`}><span className={port.num}>06.</span><a href="http://www.wooriart.co.kr/" target="_blank" className={port.img}><img alt="우리미술관" src="/img/port06.jpg"/></a>
                                        <h3 className={port.title}>우리미술관</h3>
                                        <p className={port.desc}>반응형 웹 사이트(유지보수)</p><a href="http://www.wooriart.co.kr/" target="_blank" className={port.site}>사이트 보기</a>
                                    </article>
                                </div>        
                </SwiperSlide>
                <SwiperSlide>
                                <div className={port.swiper_slide}>
                                    <article id="port_item" className={`${port.port_item} ${port.p1}`}><span className={port.num}>07.</span><a href="http://www.keea-news.or.kr/" target="_blank" className={port.img}><img alt="전기기술인협회" src="/img/port07.jpg"/></a>
                                        <h3 className={port.title}>전기기술인협회</h3>
                                        <p className={port.desc}>반응형 웹 사이트(유지보수 및 구축)</p><a href="http://www.keea-news.or.kr/" target="_blank" className={port.site}>사이트 보기</a>
                                    </article>
                                </div>        
                </SwiperSlide>

                </Swiper>
            </div>
        </div>
    </section>           
     </main>
    </>
  )
}

export default Content
