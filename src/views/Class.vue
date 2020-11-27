<template>
  <v-app style="background-color: #00000000">
    <v-container fluid class="py-0 px-0">
      <v-img
        src="../assets/blackhole_class-page_header.jpg"
        width="100%"
        :height="isMobile ? '100vh' : '100vh'"
        eager
      >
        <v-card height="100%" class="d-flex flex-column" color="#ffffff00">
          <v-container
            class="d-flex flex-column"
            :class="isMobile ? 'px-0 py-0 ' : 'px-8'"
            style="height: 100%;"
          >
            <Header></Header>

            <div class="my-auto mx-auto text-center">
              <div class="white--text h3 gmarket">수업안내</div>
              <div class="white--text mb-10 mb-md-0">HOME > 수업안내</div>
            </div>
          </v-container>

          <div>
            <v-card
              tile
              style="background: linear-gradient(to right, #8a1f7d, #9a63d8)"
              class="d-flex align-center justify-center pa-10"
            >
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    class="nanum d-flex align-center"
                    :class="isMobile ? 'h6' : 'h4'"
                  >
                    <div
                      style="color: #9b63d8"
                      class="nanum text-right"
                      :class="isMobile ? 'h6' : 'h4'"
                    >
                      쌍방향 온라인 수업
                    </div>
                  </v-col>
                  <v-col cols="12" sm="6" :class="isMobile ? 'h6' : 'h4'">
                    <div class="nanum white--text">
                      2명의 외국인 강사가 영어로만 하는 국제학교식 수업,
                    </div>
                    <div
                      class="nanum white--text"
                      :class="isMobile ? 'h6' : 'h4'"
                    >
                      블랙홀 영단어에서만 만날 수 있습니다.
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </div>
        </v-card>
      </v-img>
    </v-container>
    <v-container fluid class="py-0 px-0">
      <div
        class="mt-15 text-center gmarket white--text bordered-text"
        :class="isMobile ? 'h4' : 'h3'"
      >
        블랙홀 학습방법
      </div>
      <v-card flat>
        <v-container>
          <v-row justify="center">
            <v-col cols="12" md="4" lg="3">
              <v-card flat class="d-flex flex-column align-center">
                <v-img
                  src="../assets/forum.png"
                  width="200"
                  class="mb-5"
                  eager
                ></v-img>
                <div class="h4 text-purple gmarket">카카오채널</div>
                <div class="h5 grey--text text-center nanum">
                  브랙홀 채널에서 <br />
                  스케줄을 받습니다.
                </div>
              </v-card>
            </v-col>
            <v-col
              cols="12"
              md="4"
              lg="3"
              class="d-flex flex-column align-center"
            >
              <v-card flat>
                <v-img
                  src="../assets/classcard.png"
                  width="200"
                  class="mb-5 mx-auto"
                  eager
                ></v-img>
                <div class="h4 text-purple text-center gmarket">Class card</div>
                <div class="h5 grey--text text-center nanum">
                  단어 암기를 위한 <br />
                  클래스에 초대됩니다.
                </div>
              </v-card>
            </v-col>
            <v-col
              cols="12"
              md="4"
              lg="3"
              class="d-flex flex-column align-center"
            >
              <v-card flat>
                <v-img
                  src="../assets/email.png"
                  width="200"
                  class="mb-5 mx-auto"
                  eager
                ></v-img>
                <div class="h4 text-purple gmarket">ZOOM 화상수업</div>
                <div class="h5 grey--text text-center nanum">
                  카톡 링크를 통해 접속후 <br />
                  선생님과 수업이 진행됩니다.
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-container>
    <v-container>
      <div class="mt-5 h3 text-purple text-center gmarket">수업규칙</div>
      <div class="text-center">
        기존에 있던 1,2교시를 통합하여<br :class="isMobile ? '' : 'd-none'" />
        <span class="font-weight-black"
          >&nbsp;새로운 수업규칙이 탄생했습니다.</span
        >
      </div>
      <v-card
        flat
        class="pa-5 mt-10 mx-auto rounded-xl h6"
        max-width="700"
        style="border: 1px solid orange"
      >
        <div class="text-center grey--text korean-text">
          수업에 <span class="font-weight-bold">방해가 되는</span> 행동을 가급적
          삼가해 주세요.
        </div>
        <div class="text-center mt-5 grey--text">
          <span style="color: #f2a142">그룹수업</span> 이므로 강사의 안내에
          따르지 않는 경우는
          <br />
          <span class="font-weight-black">
            1차 경고 후 퇴실조치하고, 보호자 단톡으로 안내가 들어갑니다.
          </span>
        </div>
      </v-card>
      <v-card flat class="mt-10 mb-5 mx-auto" max-width="700">
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4" class="d-flex justify-center">
              <v-card
                flat
                class="rounded-circle d-flex align-center justify-center"
                height="200"
                width="200"
                style="border: 10px solid #34163e"
              >
                <div class="text-center" :class="isMobile ? '' : 'h6'">
                  Zoom 수업 <br />
                  <span class="font-weight-black">5분 전까지 접속</span>
                </div>
              </v-card>
            </v-col>

            <v-col cols="12" sm="6" md="4" class="d-flex justify-center">
              <v-card
                flat
                class="rounded-circle d-flex align-center justify-center"
                height="200"
                width="200"
                style="border: 10px solid #34163e"
              >
                <div
                  class="text-center font-weight-black"
                  :class="isMobile ? '' : 'h6'"
                >
                  스피커 ON <br />
                  비디오 ON <br />
                  마이크 OFF!
                </div>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="4" class="d-flex justify-center">
              <v-card
                flat
                class="rounded-circle d-flex align-center justify-center"
                height="200"
                width="200"
                style="border: 10px solid #34163e"
              >
                <div class="text-center" :class="isMobile ? '' : 'h6'">
                  출석 부를때 <br />
                  <span class="font-weight-black"> 손 흔들기 </span>
                </div>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="4" class="d-flex justify-center">
              <v-card
                flat
                class="rounded-circle d-flex align-center justify-center"
                height="200"
                width="200"
                style="border: 10px solid #34163e"
              >
                <div class="text-center">
                  <span class="font-weight-black" :class="isMobile ? '' : 'h6'"
                    >임의로 퇴실 시,</span
                  >
                  <br />
                  보호자에게<br />
                  메시지 전송
                </div>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="4" class="d-flex justify-center">
              <v-card
                flat
                class="rounded-circle d-flex align-center justify-center"
                height="200"
                width="200"
                style="border: 10px solid #34163e"
              >
                <div
                  class="text-center font-weight-black"
                  :class="isMobile ? '' : 'h6'"
                >
                  당일미션 완료 시, <br />
                  손들기로 <br />
                  확인받고 <br />
                  퇴실하기
                </div>
              </v-card>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
              class="d-flex justify-center"
              :class="isMobile ? '' : 'h6'"
            >
              <v-card
                flat
                class="rounded-circle d-flex align-center justify-center"
                height="200"
                width="200"
                style="border: 10px solid #34163e"
              >
                <div class="text-center">
                  <span class="font-weight-black" :class="isMobile ? '' : 'h6'"
                    >학습관리는 카톡!</span
                  >
                  <br />
                  알람이 신경쓰이면 <br />
                  <span class="font-weight-black" :class="isMobile ? '' : 'h6'"
                    >무음모드 설정</span
                  >
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-container>

    <v-container fluid class="px-0 py-0">
      <v-img
        src="../assets/img-bg-pink.png"
        height="auto"
        class="pa-5 pa-md-0"
        eager
      >
        <div
          class="d-flex flex-column justify-center align-self-center"
          style="height:100%"
        >
          <div class="text-center gmarket h3 white--text bordered-text">
            수강료
          </div>

          <div class="mx-auto">
            <div class="mb-2 text-left h5 nanum mt-5">
              <span class="font-weight-black">주 5회</span> 3개월과정(60회)
              <span class="font-weight-black">462,000원</span> (154,000원/월)
            </div>
            <div class="mb-2 text-left h5 nanum">
              <span class="font-weight-black">주 3회</span> 3개월과정(36회)
              <span class="font-weight-black">294,000원</span> (98,000원/월)
            </div>
            <div class="mb-2 text-left h5 nanum">
              <span class="font-weight-black">주 2회</span> 3개월과정(24회)
              <span class="font-weight-black">207,000원</span> (69,000원/월)
            </div>
            <div class="mt-10 text-left mb-10 mb-md-0">
              *1회 수업 : 회당 40분 이상 소요 <br v-if="isMobile" />
              <span v-else>/</span> 한 과정당 3개월~6개월 소요
            </div>
          </div>
          <div class="d-flex d-inline justify-center py-8">
            <v-btn
              x-large
              class="purple nanum rounded-lg"
              dark
              elevation="5"
              href="http://pf.kakao.com/_RgxjSxb/chat"
              target="_blank"
              >카카오톡 상담 받기</v-btn
            >
          </div>
        </div>
      </v-img>
    </v-container>

    <v-container fluid class="px-0 py-0">
      <v-tabs
        grow
        slider-color="#79439f"
        active-class="active-tab"
        height="100"
        centered
      >
        <v-tab
          class="pa-5"
          style="
            background: linear-gradient(to right, #b37acf, #e7c2d8);
            color: #34163e !important;
          "
        >
          <span class="nanum font-weight-black" :class="isMobile ? 'h6' : 'h5'"
            >홀딩 및 보강</span
          >
        </v-tab>
        <v-tab
          class="pa-5"
          style="
            background: linear-gradient(to right, #b37acf, #e7c2d8);
            color: #34163e !important;
          "
        >
          <span class="nanum font-weight-black" :class="isMobile ? 'h6' : 'h5'"
            >환불 규정</span
          >
        </v-tab>
        <v-tab-item>
          <v-container>
            <v-row>
              <v-col cols="12" md="10" offset-md="1">
                <div class="mt-5 font-weight-black text-center text-purple h6">
                  [ 홀딩 및 보강 규정 ]
                </div>

                <div class="grey--text mt-10 pa-3" style="line-height: 220%">
                  <ol>
                    <li>
                      회사의 사정에 의한 홀딩은 단톡으로 날짜를 따로 지정하여
                      100% 보강진행을 하고 보강이 어려운 경우 수강 기간을
                      연장해드립니다.
                    </li>
                    <li>
                      고객의 사정에 의한 홀딩은 단톡으로 날짜를 따로 지정하여
                      연4회 회당1주일에 한하여 보강이 가능(방학이나 주말 보너스
                      수업으로 keep)하며 보강수업을 참석하지 않은 경우의 다시
                      보강은 따로 진행하지 않고 수업일수에서 보강한 것으로
                      간주하고 차감됩니다.
                    </li>
                    <li>
                      전쟁, 천재지변, 전염병등에 의해 수업이 결손이 되는 경우
                      해당수업이 시간표나 강사가 변경될 수 있으며 보강도 장기로
                      연장될 수 있습니다.
                    </li>
                    <li>
                      수업은 3개월 과정으로 진행하고 할인이나 이벤트 상품에
                      대해서는 홀딩 시 보강을 따로 하지 않습니다.
                    </li>
                    <li>
                      환불은 교육청에서 제시한 학원비 환불규정을 사용합니다.
                    </li>
                    <li>
                      홀딩, 보강, 라운드2 추가훈련 등 문의는 모두 다 단톡으로
                      신청을 해주시면 한국직원이 2일내에 연락을 드립니다.
                    </li>
                  </ol>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
        <v-tab-item>
          <v-container>
            <v-row>
              <v-col cols="12" md="10" offset-md="1">
                <div class="mt-5 font-weight-black text-center text-purple h6">
                  [ 환불규정안내 ]
                </div>

                <div class="grey--text mt-10 pa-3" style="line-height: 220%">
                  블랙홀 영단어의 모든 수업에 대한 취소와 환불의 규정은
                  평생교육-평생교육일반, 학원의 설립ㆍ운영 및 과외교습에 관한
                  법률과 공정거래위원회의 소비자분쟁해결 기준을 준수 하며 다음의
                  환불 규정을 운영하고 있습니다.
                  <br /><br />
                  교습 시작 전 : 이미 납부한 교습비등의 전액<br />
                  총 교습시간의 1/3 경과전 : 이미 납부한 교습비등의 2/3에
                  해당하는 금액<br />
                  총 교습시간의 1/2 경과전 : 이미 납부한 교습비등의 1/2에
                  해당하는 금액<br />
                  총 교습시간 1/2 경과 후 : 반환하지 않음<br />
                  <br />
                  총 교습시간은 교습기간 중의 총 교습시간을 말하며, 반환금액의
                  산정은 반환사유가 발생한 날까지 경과된 교습시간을 기준으로
                  한다.<br />
                  원격교습의 경우 반환금액은 교습내용을 실제 수강한
                  부분(인터넷으로 수강하거나 학습기기로 저장한 것을 말한다)에
                  해당하는 금액을 뺀 금액으로 한다.<br />
                  회원이 온라인수업 이용을 중도에 해지하거나 서비스 이용계약이
                  해지되는 경우에는 수강료 환불금액에서 할인된금액, 교재비,
                  배송비, 사은품비, 신용카드수수료등 제비용을 차감한 후 환불하여
                  드립니다.<br />
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
      </v-tabs>
    </v-container>
  </v-app>
</template>

<style scoped>
.bordered-text {
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #5b3690;
}

.v-tab--active {
  background: #fff !important;
}

.active-tab {
  background: #fff;
}
</style>

<style>
.v-slide-group__next,
.v-slide-group__prev {
  display: none !important;
}
</style>

<script>
import Header from "@/components/Header.vue";
export default {
  components: { Header },
  data() {
    return {
      rating: 4.8,
      screenWidth: "",
      isMobile: false
    };
  },

  created() {
    window.addEventListener("resize", this.onWindowResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.onWindowResize);
  },

  mounted() {
    this.screenWidth = screen.width;
    this.isMobile = this.screenWidth <= 960 ? true : false;
  },

  methods: {
    onWindowResize() {
      this.screenWidth = screen.width;
      this.isMobile = this.screenWidth <= 960 ? true : false;
    }
  }
};
</script>
