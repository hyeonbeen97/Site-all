<template>
  <section id="introSection" class="intro__wrap bg-blue section">
    <h3 class="blind">테니스 경기 방법</h3>
    <div class="intro__inner container center">
      <div class="intro__title">
        <span>frontend</span>
        <h3 v-html="title"></h3>
        <p v-html="desc"></p>
      </div>
      <div class="intro__desc">
        <div v-for="(text, index) in texts" v-bind:key="index">
          <h4 :class="'icon-bg' + (index + 1)">{{ text.title }}</h4>
          <p>
            {{ text.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data: function () {
    return {
      title: "테니스<br />경기방법 ",
      desc: "테니스는 두 명의 선수가 서로 맞서 실내<br> 또는 야외 코트에서 플레이하는 스포츠입니다.",
      texts: [
        {
          title: "코트 및 장비",
          desc: "테니스 경기는 테니스 코트에서 진행됩니다. 코트는 실내와 야외로 나뉘며, 각각의 코트에는 네트가 있습니다. 경기를 위해 테니스 라켓과 테니스 공이 필요합니다.",
        },
        {
          title: "서브&레시브",
          desc: "상대방은 서브를 받아야 합니다. 레시브는 서브를 받는 쪽이 상대의 코트에 공을 넘기는 것입니다. 레시브는 서브 박스 내에서 이루어지며, 서브 받는 사람은 네트를 넘어야 합니다.",
        },
        {
          title: "진행&점수",
          desc: "경기는 서브와 레시브를 번갈아가며 진행됩니다. 선수는 최대 세 번의 공을 칠 수 있으며, 공은 네트를 넘어야 합니다. 상대방이 공을 받아낼 수 없거나 코트 밖으로 나갈 경우 점수가 올라갑니다.",
        },
        {
          title: "세트 및 경기",
          desc: "경기는 여러 세트로 구성될 수 있습니다. 일반적으로 세트는 6게임으로 이루어지며, 한 선수가 6게임을 이기면 세트를 가져갑니다. 그러나 6-6이 되면 타이브레이크(편형게임)가 이루어져 추가 게임이 진행됩니다. 경기는 일반적으로 세트를 일정 수 이기는 선수가 이기게 됩니다.",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
// intro__wrap

.intro__inner {
  display: flex;
  justify-content: space-between;
}
.intro__title {
  width: 33%;
  span {
    background-color: #ff3344;
    font-size: 14px;
    padding: 4px 30px 2px;
    color: #fff;
    border-radius: 40px;
    text-transform: uppercase;
    margin-bottom: 10px;
    display: inline-block;
  }
  h3 {
    font-size: 50px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 30px;
  }
  p {
    font-size: 18px;
    line-height: 1.5;
    font-weight: 500;
  }
}
.intro__desc {
  width: 66%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  > div {
    width: 48%;
    margin-bottom: 40px;

    h4 {
      font-size: 24px;
      margin-bottom: 15px;
    }

    &:nth-child(3) {
      margin-bottom: 0;
    }
    &:nth-child(4) {
      margin-bottom: 0;
    }
  }
}
</style>
