import React from 'react';

const MainsubExplain = ({direction, subImg, subTitle, children}) => {
  return (
    <div className={`MainsubExplain MainsubExplain--${direction}`} style={{width:window.screen.width}}>
      <div className="MainsubExplain__wrapper">
        { direction==="left"? 
        <div className={`MainsubExplain__wrapper__imgwrapper`}>
          <img src={subImg} alt="Main페이지 Sub Explain용 이미지" className="MainsubExplain__wrapper__imgwrapper__img"/>
        </div> : ''
        }
        <div className="MainsubExplain__wrapper__contents">
          <span className="MainsubExplain__wrapper__contents__title">{subTitle}</span>
          <p className="MainsubExplain__wrapper__contents__text">{children}</p>
        </div>
        { direction==="right"? 
        <div className={`MainsubExplain__wrapper__img`}>
          {this.props.subImg}
        </div> : ''
        }
      </div>
    </div>
  )
}

 
export default MainsubExplain;