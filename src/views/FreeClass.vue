<template>
  <v-app style="background-color: #00000000">
    <v-container fluid class="py-0 px-0">
      <v-img
        src="../assets/main_header_img.jpg"
        :height="isMobile ? '100vh' : '100vh'"
        eager
      >
        <v-container
          class="d-flex flex-column"
          :class="isMobile ? 'px-0 py-0 ' : 'px-8'"
          style="height: 100%"
        >
          <Header></Header>

          <div class="white--text d-flex flex-column flex-md-row mb-10 mb-md-0">
            <v-container class="py-0">
              <v-row>
                <v-col
                  md="6"
                  cols="12"
                  class="d-md-inline-flex text-center py-0"
                >
                  <span
                    class="mx-auto nanum"
                    :class="isMobile ? 'h6' : 'h5'"
                    :style="
                      isMobile
                        ? ''
                        : 'letter-spacing: 2px; text-shadow: 0 0 20px white'
                    "
                  >
                    국내 최초!
                  </span>
                  <span
                    class="mx-auto nanum"
                    :class="isMobile ? 'h6' : 'h5'"
                    :style="
                      isMobile
                        ? ''
                        : 'letter-spacing: 4px; text-shadow: 0 0 20px white; right:0 '
                    "
                  >
                    초중등
                  </span>
                </v-col>
                <v-col
                  md="6"
                  cols="12"
                  class="d-md-inline-flex text-center py-0"
                >
                  <span
                    class="mx-auto nanum"
                    :class="isMobile ? 'h6' : 'h5'"
                    :style="
                      isMobile
                        ? ''
                        : 'letter-spacing: 1px; text-shadow: 0 0 20px white'
                    "
                  >
                    쌍방향 온라인
                  </span>
                  <span
                    class="mx-auto nanum"
                    :class="isMobile ? 'h6' : 'h5'"
                    :style="
                      isMobile
                        ? ''
                        : 'letter-spacing: 2px; text-shadow: 0 0 20px white'
                    "
                    >영단어 프로그램
                  </span>
                </v-col>
              </v-row>
            </v-container>
          </div>
          <div class="my-auto">
            <div
              class="text-center brb"
              :class="isMobile ? 'h4' : 'h3'"
              style="color: #ca97ea"
            >
              초중등 영어는? 단어부터!
            </div>
            <div
              class="text-center brb white--text mt-5"
              :class="isMobile ? 'h3' : 'h2'"
            >
              블랙홀 영단어
            </div>
          </div>
          <!-- <div class="mt-10 mt-md-0">
              <v-img
                src="../assets/logo.png"
                width="200"
                class="d-flex mx-auto"
              ></v-img>
            </div> -->
          <div class="text-center white--text">
            SHOW MORE
            <div>
              <v-icon small color="white">keyboard_arrow_down</v-icon>
            </div>
          </div>
        </v-container>
      </v-img>
    </v-container>
    <v-container :class="isMobile ? 'px-0 py-5' : 'px-10 py-10 my-8'">
      <div
        class="text-center text-purple mt-5 mb-10 brb korean-text"
        :class="isMobile ? 'h3' : 'h2'"
      >
        국내최초! 쌍방향 온라인 화상강의
      </div>

      <ApplyFreeClassForm @setSnackbar="setSnackbar"></ApplyFreeClassForm>
    </v-container>
    <v-container
      class="px-0 py-0"
      style="background-color: #ece2f3"
      fluid
      v-if="!isMobile"
    >
      <v-card flat color="#ece2f3" tile class="py-5 mx-auto" max-width="1000">
        <v-carousel
          hide-delimiter-background
          show-arrows-on-hover
          hide-delimiters
        >
          <v-carousel-item>
            <div class="d-flex justify-center fill-height">
              <div class="d-flex" v-for="(review, i) in review1" :key="i">
                <v-card
                  max-width="360"
                  class="pa-3 mx-3 rounded-xl d-flex my-auto"
                  style="border: 1px solid #4d2794"
                  light
                  height="400"
                >
                  <div class="d-flex flex-column justify-center">
                    <v-card
                      class="rounded-pill white--text text-center pa-3 mx-auto"
                      color="#4d2794"
                      width="80%"
                    >
                      <div class="text-center white--text font-weight-bold h5">
                        {{ review.title }}
                      </div>
                    </v-card>
                    <div
                      class="grey--text nanum korean-text text-center korean-text subtitle-text-1 my-auto"
                    >
                      {{ review.body }}
                    </div>
                    <div class="text-purple nanum h6 text-center">
                      {{ review.footer }}
                    </div>
                  </div>
                </v-card>
              </div>
            </div>
          </v-carousel-item>
          <v-carousel-item>
            <div class="d-flex justify-center fill-height">
              <div class="d-flex" v-for="(review, i) in review2" :key="i">
                <v-card
                  max-width="360"
                  class="pa-3 mx-3 rounded-xl d-flex my-auto"
                  style="border: 1px solid #4d2794"
                  light
                  height="400"
                >
                  <div class="d-flex flex-column justify-center">
                    <v-card
                      class="rounded-pill white--text text-center pa-3 mx-auto"
                      color="#4d2794"
                      width="80%"
                    >
                      <div class="text-center white--text font-weight-bold h5">
                        {{ review.title }}
                      </div>
                    </v-card>
                    <div
                      class="grey--text nanum korean-text text-center korean-text subtitle-text-1 my-auto"
                    >
                      {{ review.body }}
                    </div>
                    <div class="text-purple nanum h6 text-center">
                      {{ review.footer }}
                    </div>
                  </div>
                </v-card>
              </div>
            </div>
          </v-carousel-item>
          <v-carousel-item>
            <div class="d-flex justify-center fill-height">
              <div class="d-flex" v-for="(review, i) in review3" :key="i">
                <v-card
                  max-width="360"
                  class="pa-3 mx-3 rounded-xl d-flex my-auto"
                  style="border: 1px solid #4d2794"
                  light
                  height="400"
                >
                  <div class="d-flex flex-column justify-center">
                    <v-card
                      class="rounded-pill white--text text-center pa-3 mx-auto"
                      color="#4d2794"
                      width="80%"
                    >
                      <div class="text-center white--text font-weight-bold h5">
                        {{ review.title }}
                      </div>
                    </v-card>
                    <div
                      class="grey--text nanum korean-text text-center korean-text subtitle-text-1 my-auto"
                    >
                      {{ review.body }}
                    </div>
                    <div class="text-purple nanum h6 text-center">
                      {{ review.footer }}
                    </div>
                  </div>
                </v-card>
              </div>
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-card>
    </v-container>
    <v-container v-else>
      <v-card flat color="#ece2f3" tile class="py-5">
        <v-carousel hide-delimiter-background hide-delimiters>
          <v-carousel-item v-for="(review, i) in review1" :key="i">
            <div class="d-flex justify-center fill-height">
              <div class="d-flex fill-height">
                <v-card
                  max-width="360"
                  class="pa-3 mx-3 rounded-xl d-flex my-auto"
                  style="border: 1px solid #4d2794"
                  light
                  height="400"
                >
                  <div class="d-flex flex-column justify-center">
                    <v-card
                      class="rounded-pill white--text text-center pa-3 mx-auto"
                      color="#4d2794"
                      width="80%"
                    >
                      <div class="text-center white--text font-weight-bold h5">
                        {{ review.title }}
                      </div>
                    </v-card>
                    <div
                      class="grey--text nanum korean-text text-center korean-text subtitle-text-1 my-auto"
                    >
                      {{ review.body }}
                    </div>
                    <div class="text-purple nanum h6 text-center">
                      {{ review.footer }}
                    </div>
                  </div>
                </v-card>
              </div>
            </div>
          </v-carousel-item>
          <v-carousel-item v-for="(review, i) in review2" :key="i">
            <div class="d-flex justify-center fill-height">
              <div class="d-flex fill-height">
                <v-card
                  max-width="360"
                  class="pa-3 mx-3 rounded-xl d-flex my-auto"
                  style="border: 1px solid #4d2794"
                  light
                  height="400"
                >
                  <div class="d-flex flex-column justify-center">
                    <v-card
                      class="rounded-pill white--text text-center pa-3 mx-auto"
                      color="#4d2794"
                      width="80%"
                    >
                      <div class="text-center white--text font-weight-bold h5">
                        {{ review.title }}
                      </div>
                    </v-card>
                    <div
                      class="grey--text nanum korean-text text-center korean-text subtitle-text-1 my-auto"
                    >
                      {{ review.body }}
                    </div>
                    <div class="text-purple nanum h6 text-center">
                      {{ review.footer }}
                    </div>
                  </div>
                </v-card>
              </div>
            </div>
          </v-carousel-item>
          <v-carousel-item v-for="(review, i) in review3" :key="i">
            <div class="d-flex justify-center fill-height">
              <div class="d-flex fill-height">
                <v-card
                  max-width="360"
                  class="pa-3 mx-3 rounded-xl d-flex my-auto"
                  style="border: 1px solid #4d2794"
                  light
                  height="400"
                >
                  <div class="d-flex flex-column justify-center">
                    <v-card
                      class="rounded-pill white--text text-center pa-3 mx-auto"
                      color="#4d2794"
                      width="80%"
                    >
                      <div class="text-center white--text font-weight-bold h5">
                        {{ review.title }}
                      </div>
                    </v-card>
                    <div
                      class="grey--text nanum korean-text text-center korean-text subtitle-text-1 my-auto"
                    >
                      {{ review.body }}
                    </div>
                    <div class="text-purple nanum h6 text-center">
                      {{ review.footer }}
                    </div>
                  </div>
                </v-card>
              </div>
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-card>
    </v-container>
    <v-container class="px-0 py-3" fluid>
      <v-card
        flat
        class="ml-auto mb-3"
        :class="isMobile ? 'px-2' : 'px-15'"
        style="background: linear-gradient(to bottom right, #edf1fb, #f7eff5)"
      >
        <v-container>
          <v-row class="py-15">
            <v-col
              cols="12"
              md="4"
              offset-md="2"
              class="d-flex flex-column justify-center align-center"
            >
              <div class="h4 nanum mb-10 korean-text" style="color: #34163e">
                독해단어 <span class="font-weight-bold">10회 인터벌 반복</span>
              </div>
              <div class="grey--text korean-text" style="line-height: 250%">
                클래스카드를 활용하여
                <span class="font-weight-black h5 nanum">암기</span>, 리콜,
                <span class="font-weight-black h5 nanum">스펠</span>과정을
                반복적으로 학습하는 영단어 암기법을 통해 수업시간 내에
                <span class="font-weight-black h5 nanum">100%</span> 암기
                함으로써 학원에서 놓치기 쉬운
                <span class="font-weight-black h5 nanum">발음</span>문제까지
                외국인 선생님이 꼼꼼히 교육합니다.
                <span class="font-weight-black h5 nanum">외우기</span> 싫어하는
                우리 아이도 제대로 학습할 수 있어요. 매일
                <span class="font-weight-black h5 nanum">영자신문</span>의
                단어를 사전
                <span class="font-weight-black h5 nanum">예습</span>`하도록
                카카오로 전송하여 학생의 영어학습이 더욱 자기주도적이고
                <span class="font-weight-black h5 nanum"> 심도있게</span>
                교육합니다.
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <v-img
                class="mx-auto"
                src="../assets/IMG2.png"
                :width="isMobile ? '100%' : '90%'"
                eager
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-card>

      <v-card
        flat
        class="mb-3"
        :class="isMobile ? 'px-2' : 'px-15'"
        style="background: linear-gradient(to bottom right, #e8f7f8, #f9f2f7)"
      >
        <v-container>
          <v-row class="py-15">
            <v-col cols="12" md="4" offset-md="2">
              <v-img
                class="mx-auto"
                src="../assets/IMG3.png"
                :width="isMobile ? '100%' : '90%'"
                eager
              ></v-img>
            </v-col>
            <v-col cols="12" md="4" class="d-flex flex-column justify-center">
              <div class="h4 nanum mb-10 korean-text" style="color: #34163e">
                외국인 선생님과 진행하는 완전학습
              </div>
              <div class="grey--text korean-text" style="line-height: 250%">
                외국인 강사와 함께하는 100%
                <span class="font-weight-black h5 nanum">완전학습</span>을 통해
                <span class="font-weight-black h5 nanum">발음교정</span>부터
                스펠링 교정까지 강사님과 체계적인 수업이 진행됩니다 . 비대면
                그룹과외로 진행되며, 친구들과 함께 공부하여
                <span class="font-weight-black h5 nanum">학습 능률</span>도
                높아집니다.
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-card>

      <v-card
        flat
        :class="isMobile ? 'px-2' : 'px-15'"
        style="background: linear-gradient(to bottom right, #f2f0fc, #ecf3f9)"
      >
        <v-container>
          <v-row class="py-15">
            <v-col
              cols="12"
              md="4"
              offset-md="2"
              class="d-flex flex-column justify-center"
            >
              <div class="h4 nanum mb-10" style="color: #34163e">
                카톡으로
                <span class="font-weight-bold korean-text"
                  >관리하는 자녀 수업 스케줄</span
                >
              </div>
              <div class="grey--text korean-text" style="line-height: 250%">
                클래스<span class="font-weight-black h5 nanum">카드</span>를
                활용하여 쉽고 빠르면서도 반복적으로 외우는데 지루함이 없는
                영단어 암기법을 통해
                <span class="font-weight-black h5 nanum"> 외우기 </span>싫어하는
                학생도 <span class="font-weight-black h5 nanum">재미</span>있게
                공부할 수 있어요. 뜻은 아는데
                <span class="font-weight-black h5 nanum">발음</span>을 틀리게
                하거나 읽을 줄 알지만 스펠링을 제대로 외우지 않는 경우가 많지만
                <span class="font-weight-black h5 nanum">확인</span>하기
                힘들어요.
              </div>
              <div
                class="text-purple korean-text my-3 text-center subtitle-text-1"
              >
                오늘 학생의 단어장을 한번 확인해 보세요.
              </div>
              <div class="grey--text korean-text" style="line-height: 250%">
                블랙홀 영어에서는
                <span class="font-weight-black h5 nanum">카톡</span>을 통해 매일
                공부할 단어를 예습하게 하고 수업시간에 주어진 단어를 100%
                암기하도록 합니다.
                <span class="font-weight-black h5 nanum">영자신문</span>의
                내용으로 공부함으로써
                <span class="font-weight-black h5 nanum">독해</span>실력도 한층
                향상될 것입니다.
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <v-img
                class="mx-auto"
                src="../assets/IMG4.png"
                :width="isMobile ? '100%' : '90%'"
                eager
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-container>
    <v-container>
      <div class="mt-5 text-purple text-center h4 nanum korean-text">
        체험해보세요,
      </div>
      <div
        class="mt-5 text-purple text-center h3 brb font-weight-bold korean-text"
      >
        무료수업 신청하기
      </div>

      <v-card flat>
        <v-row>
          <v-col cols="12" lg="9" md="10" class="mx-auto">
            <!-- <v-img src="../assets/FREECLASS_IMG1.png"></v-img> -->
            <v-card
              tile
              outlined
              round
              class="rounded-xl"
              style="border: 2px solid #f2edfe;"
              eager
            >
              <v-container fluid>
                <v-row class="px-10 py-6">
                  <v-col cols="12" lg="3" md="6" class="d-flex flex-column ">
                    <v-img
                      src="@/assets/schedule_icon.png"
                      contain
                      width="60%"
                      class="mx-auto"
                      eager
                    >
                    </v-img>

                    <div class="pl-5">
                      <p class="h4 mt-5 mb-0" style="color:#b0a0c9">01.</p>
                      <v-row dense>
                        <v-col cols="10">
                          <span class="mt-0 nanum grey--text body-1">
                            스케줄 선택후.<br />
                            상담원과 연결
                          </span>
                        </v-col>
                        <v-col cols="1" class="d-none d-lg-flex">
                          <v-icon height="100%" size="50" color="grey"
                            >mdi-chevron-right</v-icon
                          >
                        </v-col>
                      </v-row>
                    </div>
                  </v-col>
                  <v-col cols="12" lg="3" md="6" class="d-flex flex-column">
                    <v-img
                      src="@/assets/message_icon.png"
                      contain
                      width="50%"
                      class="mx-auto"
                      eager
                    >
                    </v-img>
                    <div class="pl-5">
                      <p class="h4 mt-5 mb-0" style="color:#b0a0c9">02.</p>
                      <v-row dense>
                        <v-col cols="10">
                          <span class="mt-0 nanum grey--text body-1">
                            ZOOM 링크 전송<br />
                            <span class="primary--text font-weight-bold"
                              >비대면 화상 강의</span
                            >
                          </span>
                        </v-col>
                        <v-col cols="1" class="d-none d-lg-flex">
                          <v-icon height="100%" size="50" color="grey" class=""
                            >mdi-chevron-right</v-icon
                          >
                        </v-col>
                      </v-row>
                    </div>
                  </v-col>
                  <v-col cols="12" lg="3" md="6" class="d-flex flex-column">
                    <v-img
                      src="@/assets/card_icon.png"
                      contain
                      width="40%"
                      class="mx-auto"
                      eager
                    >
                    </v-img>
                    <div class="pl-5">
                      <p class="h4 mt-5 mb-0" style="color:#b0a0c9">03.</p>
                      <v-row dense>
                        <v-col cols="10">
                          <span class="mt-0 nanum grey--text body-1">
                            학습결과 리포트<br />
                            <span class="primary--text font-weight-bold"
                              >카카오톡 전송</span
                            >
                          </span>
                        </v-col>
                        <v-col cols="1" class="d-none d-lg-flex">
                          <v-icon height="100%" size="50" color="grey"
                            >mdi-chevron-right</v-icon
                          >
                        </v-col>
                      </v-row>
                    </div>
                  </v-col>
                  <v-col cols="12" lg="3" md="6" class="d-flex flex-column">
                    <v-img
                      src="@/assets/uniform_icon.png"
                      contain
                      width="60%"
                      class="mx-auto"
                      eager
                    >
                    </v-img>
                    <div class="pl-5">
                      <p class="h4 mt-5 mb-0 " style="color:#b0a0c9">04.</p>
                      <v-row dense>
                        <v-col cols="10">
                          <span class="mt-0 nanum grey--text body-1">
                            1:1 학습 컨설팅<br />
                            &nbsp;<br />
                          </span>
                        </v-col>
                        <v-col cols="1" style=""> </v-col>
                      </v-row>
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-container>

    <v-container :class="isMobile ? 'px-2 py-5' : 'px-15 py-5'">
      <div class="text-center text-purple h3 mt-5 mb-10 brb korean-text">
        국내최초! 쌍방향 온라인 화상강의
      </div>

      <ApplyFreeClassForm @setSnackbar="setSnackbar"></ApplyFreeClassForm>
    </v-container>

    <v-snackbar
      :timeout="3000"
      :value="true"
      top
      block
      rounded="pill"
      color="blue-grey"
      elevation="24"
      multiLine
      v-model="snackbar"
    >
      <span class="nanum font-weight-black "
        >블랙홀 무료체험 신청이 완료되었습니다.</span
      >
      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<style scoped>
.marquee-container {
  overflow: hidden;
  position: relative;

  opacity: 1;
}

.marquee-container .marquee-moving {
  width: 100%;
  height: 100%;
  margin: 0;
  text-align: center;
  -moz-transform: translateX(100%);
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
  -moz-animation: scroll-left 2s linear infinite;
  -webkit-animation: scroll-left 2s linear infinite;
  animation: scroll-left 20s linear infinite;
}

@-moz-keyframes scroll-left {
  0% {
    -moz-transform: translateX(0%);
  }
  100% {
    -moz-transform: translateX(-100%);
  }
}

@-webkit-keyframes scroll-left {
  0% {
    -webkit-transform: translateX(0%);
  }
  100% {
    -webkit-transform: translateX(-100%);
  }
}

@keyframes scroll-left {
  0% {
    -moz-transform: translateX(0%);
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
  }
  100% {
    -moz-transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}
</style>

<script>
import Header from "@/components/Header.vue";
import ApplyFreeClassForm from "@/components/ApplyFreeClassForm";
export default {
  components: {
    Header,
    ApplyFreeClassForm
  },
  data() {
    return {
      rating: 4.8,
      screenWidth: "",
      isMobile: false,
      snackbar: false,
      review1: [
        {
          title: "영어발음에 큰 도움",
          body:
            "엄마의 권유로 하게 되어 처음에는 별로 열심히 하지 않았지만 영어단어를 게임을 하듯이 외우다 보니 쉽고 재밌어서 자꾸 하게 되었고 영어학원에서 공부할 때도 블랙홀에서 외운 단어들이 바로바로 생각나서 참 신기했다 그리고 원어민 선생님들이 발음도 매번 이야기 해 주셔서 많은 도움이 되었다.",
          footer: "[중3] 다연학생"
        },
        {
          title: "탁월한 복습량",
          body:
            "전시간에 배운 단어들을 복습하며 암기하다보니 내 단어 실력이 증가했음을 알 수 있었다. 또한 원어민 선생님과의 대화를 통해서 내가 모르는 단어가 있을 때 앞뒤 문맥에 맞추어 단어의 뜻을 추측하는 능력을 기를 수 있게 되었고, 전혀 감이 잡히지 않는 단어의 경우 선생님께 따로 여쭈워보면 내가 아는 쉬운 단어로 바꾸어 말씀해주시거나 그 단어의 뜻을 설명해주셔서 정말 많은 도움이 되었다.",
          footer: "[고1] 다인학생"
        }
      ],

      review2: [
        {
          title: "완벽한 단어암기",
          body:
            "당신은 블랙홀을 경험해 본 적이 있는가? 블랙홀 영어에서는 그날의 단어 미션을 완료하기 위하여2교시에 블랙홀 수업을 하게 된다 말 그대로 미션을 완료할 때까지 절대로 빠져 나올 수 없다. 나는 오늘도 어제수업을 빠진 결과 다른 아이들 보다 블랙홀에서 선생님과 단 둘이 30분을 더 체류 할 수 밖에 없었다.. ㅠㅠ단어를 외우지 않으면 수업이 끝나지 않는다...블랙홀 ㅠㅠ!!",
          footer: "[중1]재민학생"
        },
        {
          title: "적극적인 수업참여",
          body:
            "처음엔 뭐 다 비슷비슷하겠지..했었는데 아이 눈높이에 맞춰 수업하시는 선생님의 질문에 아이가 적극적으로 대답하는 모습을 보였고, 단어 외우는 것도 퀴즈를 풀고 맞추는 기분이라며 내일은 더 잘 할거라고 얘기를 했습니다. 이젠 내일을, 블랙홀을 기대하게 되었습니다..  오늘.. 아이들은 선생님과의 시간을 먼저 체크하고 기다리네요. 블랙홀!! 아이들에게 내일은 더 잘할 수 있다는 자신감을 갖게 해줘서 정말정말 감사합니다!!",
          footer: "[중1] 용인 정인이 부모님"
        }
      ],

      review3: [
        {
          title: "국제학교식 수업",
          body:
            "처음엔 단어량이 적었는데 점차 양이 늘어가면서 단어 실력이 확실히 좋아진 것을 느낀다. 외국인강사와 함께100% 영어로만 소통하는 국제학교식 수업으로 단어를 계속 노출 시키면서 마지막엔 스펠링까지 쓰게 하게끔 하여 결국은 단어를 외우지 않으면 안 되게 끔  하는 시스템이 큰 장점이다. 단어 하나를 가지고도 쓰고 말하고 독해하며 외우게 하는 블랙홀 수업방식에 너무 만족해하며 수업하고 있다.",
          footer: "[중2] 수원 주현 학부모님"
        },
        {
          title: "영자신문 독해까지",
          body:
            "영자신문의 단어들을 3단계에 거쳐 외우게 하고 독해랑 테스트가 끝나면 2교시 블랙홀단계로 가는데 말그대로 테스트를 통과 못하면 블랙홀에서 통과할 때까지 못 빠져 나온다.쉽게 생각하던 울 아들.. 막상 수업에 들어가 한번 블랙홀을 경험하더니 다음 시간부터는 무지 진지해진다. 아무튼 영어학원 몇 년을 다녀도 안 잡히는 단어가 블랙홀에선 잡히고 있어 너무 흐믓하다. 정말 신기하다.",
          footer: "[중3] 동탄 찬규 부모님"
        }
      ]
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
    },
    setSnackbar(data) {
      this.snackbar = data;
    }
  },
  computed: {}
};
</script>
