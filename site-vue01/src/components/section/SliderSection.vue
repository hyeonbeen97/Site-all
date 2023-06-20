<template>
  <section id="sliderSection" class="slider__wrap section">
    <div class="slider__inner">
      <h2 class="blind">이미지 슬라이드</h2>
      <div class="slider__img">
        <div class="slider s1 container">
          <div class="text">
            <h3>TENNIS</h3>
            <p>
              "테니스, 그라운드를 누비는 그레이스풀한 움직임과 공을 다루는
              <br />순간의 짜릿함이 어우러져 만들어지는 탁월한 스포츠입니다."
            </p>
            <a href="#" class="more button-blue">더 알아보기</a>
          </div>
          <div class="img" aria-label="hidden">
            <img
              src="../../images/slider/slider_tennis__icon.png"
              alt="이미지"
            />
            <img
              src="../../images/slider/slider_tennis__icon.png"
              alt="이미지"
            />
            <img
              src="../../images/slider/slider_tennis__icon.png"
              alt="이미지"
            />
          </div>
          <div class="circle" aria-label="hidden">
            <span class="circle__c1"></span>
            <span class="circle__c2"></span>
            <span class="circle__c3"></span>
            <span class="circle__c4"></span>
            <span class="circle__c5"></span>
          </div>
        </div>
        <!-- <div class="slider s2">
                        <div class="text">
                            <h3>New<br>PORTFOLIO</h3>
                            <p>재능은! 노력 끝에서 발견된다.<br>
                            어떤 일이라도 노력하고 즐기면 그 결과는 빛을 바란다고 생각합니다.
                            </p>
                            <a href="#">더 알아보기</a>
                        </div>
                        <div class="img">
                            <img src="image/icon01.png" alt="이미지">
                            <img src="image/icon02.png" alt="이미지">
                            <img src="image/icon03.png" alt="이미지">
                        </div>
                    </div>
                    <div class="slider s3">
                        <div class="text">
                            <h3>New<br>PORTFOLIO</h3>
                            <p>재능은! 노력 끝에서 발견된다.<br>
                            어떤 일이라도 노력하고 즐기면 그 결과는 빛을 바란다고 생각합니다.
                            </p>
                            <a href="#">더 알아보기</a>
                        </div>
                        <div class="img">
                            <img src="image/icon01.png" alt="이미지">
                            <img src="image/icon02.png" alt="이미지">
                            <img src="image/icon03.png" alt="이미지">
                        </div>
                    </div> -->

        <div class="slider__btn">
          <a href="#" class="left"><span class="ir">이전이미지</span></a>
          <a href="#" class="right"><span class="ir">다음이미지</span></a>
        </div>
        <div class="slider__dot">
          <a href="#" class="dot active"><span class="ir">1번 이미지</span></a>
          <a href="#" class="dot"><span class="ir">2번 이미지</span></a>
          <a href="#" class="dot"><span class="ir">3번 이미지</span></a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
// slider__wrap

.slider__inner {
  position: relative;
  .slider__img {
    .slider {
      .text {
        h3 {
          font-size: 110px;
          font-weight: 800;
          text-transform: uppercase;
          line-height: 1;
          margin-bottom: 40px;
        }
        p {
          font-size: 24px;
          line-height: 1.3;
          margin-bottom: 50px;
        }
        .more {
          font-size: 18px;
        }
      }
      .img {
        position: absolute;
        right: 0;
        top: -120px;
        width: 600px;
        height: 600px;
        background-image: url(../../images/slider/header_gradient.png);
        background-size: cover;

        img {
          &:nth-child(1) {
            position: absolute;
            width: 300px;
          }
          &:nth-child(2) {
            position: absolute;
            width: 300px;
            right: 0;
            top: 200px;
          }
          &:nth-child(3) {
            position: absolute;
            width: 300px;
            bottom: 0;
          }
        }
      }
      .circle {
        span {
          display: block;
          position: absolute;
          left: 50%;
          top: 50%;
          width: 20px;
          height: 20px;
          border-radius: 50%;
        }
        span:nth-child(1) {
          background-color: var(--button_blue);
          left: 50%;
          width: 10px;
          height: 10px;
        }
        span:nth-child(2) {
          background-color: var(--button_red);
          top: 20%;
          left: -10%;
          width: 40px;
          height: 40px;
        }
        span:nth-child(3) {
          background-color: var(--button_green);
          left: 100%;
          top: 10%;
        }
        span:nth-child(4) {
          background-color: var(--button_green);
          left: 17%;
          top: -10%;
          width: 10px;
          height: 10px;
        }
        span:nth-child(5) {
          background-color: var(--button_blue);
          left: 90%;
          top: 80%;
          width: 30px;
          height: 30px;
        }
      }
    }
  }
  .slider__btn {
    > a {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 22px;
      height: 40px;
      transition: opacity 0.3s;

      &:hover {
        opacity: 0.5;
      }
    }
    .left {
      left: 20px;
      background-image: url(../../images/slider/slider__left_icon.png);
    }
    .right {
      right: 20px;
      background-image: url(../../images/slider/slider__right_icon.png);
    }
  }
  .slider__dot {
    position: absolute;
    left: 50%;
    bottom: -80px;
    transform: translateX(-50%);
    a {
      display: inline-block;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      margin: 0 5px;
      border: 4px solid #ff3344;
      background-color: #ff3344;
      box-shadow: 0 0 0 3px transparent;
      &.active {
        box-shadow: 0 0 0 3px #ff3344;
        border-width: 4px;
        background-color: #fff;
      }
    }
  }
}
</style>
