import Image from "next/image";
import Link from "next/link";
import React from "react";

function SliderSection(props) {
    return (
        <section id="sliderSection" className="slider__wrap core3 section   ">
            <div className="slider__inner">
                <h2 className="blind">이미지 슬라이드</h2>
                <div className="slider__img">
                    <div className="slider s1 container">
                        <div className="text">
                            <h3>TENNIS</h3>
                            <p>
                                테니스, 그라운드를 누비는 그레이스풀한 움직임과
                                공을 다루는 <br />
                                순간의 짜릿함이 어우러져 만들어지는 탁월한
                                스포츠입니다.
                            </p>
                            <Link href="/" className="more button-blue ">
                                더 알아보기
                            </Link>
                        </div>
                        <div className="img" aria-label="hidden">
                            <Image
                                width={1000}
                                height={1000}
                                src="/assets/images/slider/slider_tennis__icon.png"
                                alt="이미지"
                            />
                            <Image
                                width={1000}
                                height={1000}
                                src="/assets/images/slider/slider_tennis__icon.png"
                                alt="이미지"
                            />
                            <Image
                                width={1000}
                                height={1000}
                                src="/assets/images/slider/slider_tennis__icon.png"
                                alt="이미지"
                            />
                        </div>
                        <div className="circle" aria-label="hidden">
                            <span className="circle__c1"></span>
                            <span className="circle__c2"></span>
                            <span className="circle__c3"></span>
                            <span className="circle__c4"></span>
                            <span className="circle__c5"></span>
                        </div>
                    </div>

                    <div className="slider__btn">
                        <Link href="/" className="left">
                            <span className="ir">이전이미지</span>
                        </Link>
                        <Link href="/" className="right">
                            <span className="ir">다음이미지</span>
                        </Link>
                    </div>
                    <div className="slider__dot">
                        <Link href="/" className="dot active">
                            <span className="ir">1번 이미지</span>
                        </Link>
                        <Link href="/" className="dot">
                            <span className="ir">2번 이미지</span>
                        </Link>
                        <Link href="/" className="dot">
                            <span className="ir">3번 이미지</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default SliderSection;
