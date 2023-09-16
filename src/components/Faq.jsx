import React from "react";
import fagImg from "../assets/svgs/faq-img.png";
// import {MdOutlineArrowDropDownCircle} from "react-icons/md";
const Faq = () => {
  return (
    <>
      <div className="faq">
        <h1 data-aos="fade-down">Təsvir</h1>
        <div className="faq-main">
          <div className="faq-main-left">
            <p data-aos="fade-right">
              Bizim ev heyvanlarına qulluq xidmətimiz grooming, bağça, veteriner
              və gəzinti də daxil olmaqla, ev heyvanlarına müxtəlif qayğı
              formalarını təqdim edir. Bu xidmət növü ev heyvanı sahibinin
              evində və ya ev heyvanları üçün otel və ya pansionat kimi obyektdə
              göstərilə bilər.Biz pişiklər və itlər kimi müəyyən bir heyvan
              növünə qulluq etməkdə ixtisaslaşırıq. Baxımın səviyyəsi və təklif
              olunan xidmətlərin növü xüsusi ev heyvanlarına qulluq xidmətindən
              asılı olaraq dəyişəcək.Bu ev heyvanlarına qulluq xidmətləri iş və
              ya digər öhdəliklərə görə ev heyvanlarına lazımi qayğı göstərə
              bilməyən məşğul ev heyvanları sahibləri üçün əla seçim ola bilər.
              Onlar həmçinin səyahət edən və ev heyvanlarına baxmağa ehtiyacı
              olan ev heyvanları sahibləri üçün faydalı mənbə ola bilər.
            </p>
          </div>
          <div className="faq-main-right" data-aos="fade-left">
            <img src={fagImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
