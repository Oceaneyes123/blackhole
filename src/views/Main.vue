<template>
  <v-app style="background-color: #00000000">
    <v-container fluid class="px-0 py-0">
      <v-card
        tile
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor-placement="center-bottom"
      >
        <v-img
          src="../assets/main_header_img.jpg"
          :height="isMobile ? '100vh' : '100vh'"
          eager
        >
          <v-card height="100%" style="background: #00000000">
            <v-container
              class="d-flex flex-column"
              :class="isMobile ? 'px-0 py-0 ' : 'px-8'"
              style="height: 100%"
            >
              <Header></Header>
              <div
                class="white--text d-flex flex-column flex-md-row justify-md-space-between"
              >
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

              <v-row class="mx-5">
                <v-col
                  cols="12"
                  md="4"
                  class="text-center align-self-end text-md-left mt-3 mt-md-0"
                >
                  <div
                    class="brb white--text"
                    :class="isMobile ? 'h3' : 'h2'"
                    style="word-break: keep-all; line-break: strict"
                  >
                    초중등 영어는 <br />
                    단어부터
                  </div>
                  <div class="white--text">
                    실시간 외국인 수업,
                    <span class="font-weight-black h6">블랙홀 영어</span>
                  </div>
                </v-col>
                <v-col cols="12" md="6" align-self="start">
                  <v-img
                    :class="[isMobile ? '' : 'mt-15', 'mx-auto', 'mx-md-0']"
                    src="../assets/tab.png"
                    width="70%"
                    eager
                  ></v-img>
                </v-col>
                <v-col
                  cols="12"
                  md="2"
                  class="align-self-end d-flex justify-md-end justify-center"
                >
                  <!-- <div class="d-inline-flex flex-row align-center ml-auto"> -->
                  <div class="d-inline-flex flex-row align-center">
                    <div :class="isMobile ? '' : 'mr-3'">
                      <div class="caption-text white--text text-center">
                        NEXT PAGE
                      </div>
                      <div
                        class="nanum"
                        :class="isMobile ? 'h6 yellow--text' : 'h5 white--text'"
                        @click="$router.push('/free-class')"
                        style="cursor: pointer"
                      >
                        무료수업<br />
                        신청하기
                      </div>
                    </div>
                    <v-icon
                      color="yellow"
                      x-large
                      @click="$router.push('/free-class')"
                      class="d-none d-md-block"
                      >fas fa-arrow-circle-right
                    </v-icon>
                  </div>
                </v-col>
              </v-row>

              <div class="text-center white--text">
                SHOW MORE
                <div>
                  <v-icon small color="white">keyboard_arrow_down</v-icon>
                </div>
              </div>
            </v-container>
          </v-card>
        </v-img>
      </v-card>
    </v-container>

    <v-container fluid class="px-0 py-0">
      <v-img src="../assets/blackhole_main_img2.jpg" eager></v-img>
    </v-container>
    <v-container class="px-0 py-0" fluid>
      <div
        class="text-center brb mt-15"
        style="word-break: keep-all; line-break: strict"
        :class="[isMobile ? 'h4 px-10' : 'h2', '']"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor-placement="center-bottom"
      >
        초중등 관리형 온라인 영단어 <br />
        블랙홀 영단어가 단어습관을 잡는다.
      </div>
      <v-container
        class="pt-10"
        style="max-width: 80%"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor-placement="center-bottom"
      >
        <v-row justify="center">
          <v-col cols="12" sm="3" class="d-flex flex-column align-center mb-10">
            <v-img src="../assets/sticky-note.svg" width="220" eager></v-img>
            <div class="mt-5 h5 nanum">확실한 단어암기</div>
          </v-col>
          <v-col cols="12" sm="3" class="d-flex flex-column align-center mb-10">
            <v-img src="../assets/computer.svg" width="220" eager></v-img>
            <div class="mt-5 h5 nanum">수업 피드백 전송</div>
          </v-col>
          <v-col cols="12" sm="3" class="d-flex flex-column align-center mb-10">
            <v-img src="../assets/school.svg" width="220" eager></v-img>
            <div class="mt-5 h5 nanum">효율적인 시간계산</div>
          </v-col>
        </v-row>
      </v-container>
      <div
        class="text-center mt-10"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor-placement="center-bottom"
      >
        <div
          class="gmarket text-purple mb-5 korean-text"
          :class="[isMobile ? 'h4 px-10' : 'h2', '']"
        >
          블랙홀 완전학습 비결
        </div>
        <div
          class="nanum korean-text"
          :class="[isMobile ? 'h6 ' : 'h4', 'mx-10']"
        >
          외국인 선생님의 국제학교식 영어수업
          <br />
          +
          <br />
          한국인 선생님의 구문해설 !!
        </div>
        <div
          class="nanum mb-10"
          :class="[isMobile ? 'h6 px-10' : 'h4', 'mt-2']"
        >
          블랙홀 영단어에서만 만날 수 있습니다.
        </div>
      </div>
    </v-container>
    <v-divider></v-divider>
    <v-container
      class="py-0 px-3 px-md-0"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-anchor-placement="center-bottom"
    >
      <div class="text-center">
        <div class="brb text-purple mt-10" :class="isMobile ? 'h4' : 'h2'">
          커리큘럼
        </div>
        <div class="nanum" :class="[isMobile ? 'h6' : 'h4', 'mx-10']">
          영단어 암기 블랙홀이 답인 이유!
        </div>
        <div class="nanum" :class="[isMobile ? 'h6' : 'h4', 'mx-10']">
          기존 원어민 화상영어 또는 인강과는 전혀 다른
          <span class="font-weight-black"> 새로운 수업방식 </span>
        </div>
      </div>
      <div
        class="d-flex flex-column flex-md-row justify-center mt-10"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor-placement="center-bottom"
      >
        <v-row
          justify="center"
          align="center"
          class="d-flex flex-md-row flex-column"
        >
          <v-card
            style="border: 10px solid #34163e"
            class="rounded-circle d-flex align-center justify-center text-center mx-auto mx-md-3 my-5 my-md-0 h6"
            width="200"
            height="200"
          >
            <v-progress-circular
              :rotate="360"
              :size="200"
              :width="10"
              value="100"
              color="primary"
            >
              독해단어 10회 <br />
              인터별 반복
            </v-progress-circular>
          </v-card>
          <v-card
            style="border: 10px solid #34163e"
            class="rounded-circle d-flex align-center justify-center text-center mx-auto mx-md-3 my-5 my-md-0 h6"
            width="200"
            height="200"
          >
            <v-progress-circular
              :rotate="360"
              :size="200"
              :width="10"
              value="100"
              color="red"
            >
              스펠링까지 <br />
              완벽점검!
            </v-progress-circular>
          </v-card>
          <v-card
            style="border: 10px solid #34163e"
            class="rounded-circle d-flex align-center justify-center text-center mx-auto mx-md-3 my-5 my-md-0 h6"
            width="200"
            height="200"
          >
            <v-progress-circular
              :rotate="360"
              :size="200"
              :width="10"
              value="100"
              color="teal"
            >
              외국인강사 <br />
              발음교정
            </v-progress-circular>
          </v-card>
          <v-card
            style="border: 10px solid #34163e"
            class="rounded-circle d-flex align-center justify-center text-center mx-auto mx-md-3 my-5 my-md-0 h6"
            width="200"
            height="200"
          >
            <v-progress-circular
              :rotate="360"
              :size="200"
              :width="10"
              value="100"
              color="pink"
            >
              영어100% <br />
              수업진행
            </v-progress-circular>
          </v-card>
          <v-card
            style="border: 10px solid #34163e"
            class="rounded-circle d-flex align-center justify-center text-center mx-auto mx-md-3 my-5 my-md-0 h6"
            width="200"
            height="200"
          >
            <v-progress-circular
              :rotate="360"
              :size="200"
              :width="10"
              value="100"
              color="purple"
            >
              어원단어장 <br />
              매일 푸쉬
            </v-progress-circular>
          </v-card>
        </v-row>
      </div>
      <div class="text-center mt-15 nanum" :class="isMobile ? 'h6' : 'h4'">
        1회 수업 : 회당 40분 이상 소요 <br v-if="isMobile" />
        <span v-else>/</span> 한 과정당 3개월~6개월 소요
      </div>
    </v-container>

    <v-container class="mt-10" :class="isMobile ? 'px-0 py-0 ' : 'px-16'">
      <v-img
        src="../assets/level_bar.png"
        :style="isMobile ? 'max-width:100%' : 'max-width:85%'"
        class="mx-auto"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor-placement="center-bottom"
        eager
      ></v-img>
    </v-container>
    <v-container
      class="d-flex flex-column"
      :class="isMobile ? 'px-0 py-0 ' : 'px-16'"
    >
      <v-row
        justify="space-around"
        class="d-flex"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor-placement="center-bottom"
      >
        <v-col cols="9" md="2">
          <div>
            <div style="color: #7de314" class="font-weight-black">1 LEVEL</div>
            <div
              class="mt-5 font-weight-black grey--text korean-text"
              :class="isMobile ? '' : 'h6'"
            >
              미취학, 초등저학년 <br />
              /이미지 연상법
            </div>
            <div
              class="mt-5 grey--text"
              :class="isMobile ? 'caption-text' : ''"
            >
              * 주요 기본단어 10개씩 암기 <br />
              * 듣기. 말하기 수업
            </div>
          </div>
        </v-col>
        <v-col cols="9" md="2">
          <div style="color: #01cc9b" class="font-weight-black">2 LEVEL</div>
          <div
            class="mt-5 font-weight-black grey--text korean-text"
            :class="isMobile ? '' : 'h6'"
          >
            초등 1~2학년
          </div>
          <div
            class="mt-5 grey--text korean-text"
            :class="isMobile ? 'caption-text' : ''"
          >
            * 주요 기본단어 20개씩 암기 * 듣기. 말하기 수업
          </div>
        </v-col>
        <v-col cols="9" md="2">
          <div style="color: #14a0c0" class="font-weight-black">3 LEVEL</div>
          <div
            class="mt-5 font-weight-black grey--text korean-text"
            :class="isMobile ? '' : 'h6'"
          >
            초등 5~ 중등 2학년 <br />
            /영어로 습득하는 배경지식
          </div>
          <div
            class="mt-5 grey--text korean-text"
            :class="isMobile ? 'caption-text' : ''"
          >
            * 주요 기본단어 30개씩 암기 <br />
            * 논리적인 사고를 유도하는 독해훈련
          </div>
        </v-col>
        <v-col cols="9" md="2">
          <div style="color: #5059ab" class="font-weight-black">4 LEVEL</div>
          <div
            class="mt-5 font-weight-black grey--text korean-text"
            :class="isMobile ? '' : 'h6'"
          >
            중등 1~ 고등 1학년 <br />
            /영어교과서 기반
          </div>
          <div
            class="mt-5 grey--text korean-text"
            :class="isMobile ? 'caption-text' : ''"
          >
            * 하루 단어 40개씩 <br />
            * 발음교정과 독해훈련 <br />
            * 문장구조 이해력 강화
          </div>
        </v-col>
        <v-col cols="9" md="2">
          <div style="color: #9052a9" class="font-weight-black">5 LEVEL</div>
          <div
            class="mt-5 font-weight-black grey--text korean-text"
            :class="isMobile ? '' : 'h6'"
          >
            고등 1~3학년 /수능독해를 위한 문제
          </div>
          <div
            class="mt-5 grey--text korean-text"
            :class="isMobile ? 'caption-text' : ''"
          >
            * 하루 단어 50개씩 <br />
            * 암기 발음교정과 듣기연습 <br />
            * 영어로 습득하는 최신시사 <br />
            (경제 / 국제사회 뉴스 활용) <br />
            ▶ 배경 지식 확장
          </div>
        </v-col>
      </v-row>
    </v-container>

    <div class="d-flex mx-auto">
      <v-btn
        class="mx-auto mt-5 px-10 rounded-tl-xl rounded-tr-xl rounded-bl-xl white--text mb-10"
        x-large
        depressed
        color="#34163e"
        @click="$router.push('/free-class')"
      >
        <span class="h5 nanum">블랙홀 무료체험</span>
      </v-btn>
    </div>

    <v-divider></v-divider>

    <v-container class="pb-16" style="max-width: 75%">
      <v-row justify="center" style="height: 100%">
        <v-col
          cols="12"
          md="5"
          class="d-flex flex-column grey--text"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-anchor-placement="center-bottom"
        >
          <div
            class="brb text-center text-purple"
            :class="isMobile ? 'h4' : 'h3'"
          >
            영자신문 활용
          </div>
          <v-img src="../assets/img-news.jpg" eager contain></v-img>
          <div class="mt-10 h6">
            * 문장을 통해
            <span class="primary--text lighten-2 font-weight-bold"
              >중요단어</span
            >
            파악 <br />
            * 문장속에서
            <span class="primary--text lighten-2 font-weight-bold">의미</span>
            파악 <br />
            * 외국인 강사
            <span class="primary--text lighten-2 font-weight-bold">액센트</span>
            지도
          </div>
        </v-col>

        <v-divider vertical v-if="!isMobile"></v-divider>

        <v-col
          cols="12"
          md="5"
          class="d-flex flex-column grey--text"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-anchor-placement="center-bottom"
        >
          <div
            class="brb text-center text-purple"
            :class="isMobile ? 'h4' : 'h3'"
          >
            효과적인 암기법
          </div>
          <div class="text-center mt-5 h6">
            영어학습에서 가장 중요한건? <br v-if="isMobile" />
            <span class="primary--text lighten-2 font-weight-bold"
              >단어암기!</span
            >
          </div>
          <v-img
            src="../assets/img-graph.png"
            class="mt-15 mb-10"
            eager
            contain
          ></v-img>
          <div class="mt-10 h6">
            <span class="text-purple font-weight-black"> 암기 3단계 :</span>
            <br v-if="isMobile" />
            <span class="subtitle-1">암기 – 기억인출 – 철자확인</span> <br />
            <span class="text-purple font-weight-black">확인 2단계 :</span>
            <br v-if="isMobile" />
            <span class="subtitle-1">테스트 , 스피드퀴즈</span> <br />
            <span class="text-purple font-weight-black">복습 5단계 :</span>
            <br v-if="isMobile" />
            <span class="subtitle-1">3일, 4일, 5일, 7일, 30일 반복테스트</span>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="px-0 py-0">
      <v-card tile color="#e6ddf8" class="pt-10">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-anchor-placement="center-bottom"
        >
          <div
            class="text-center brb"
            :class="isMobile ? 'h4' : 'h2'"
            style="color: #3e3b44"
          >
            많은 학부모님들이 <br />
            <span class="text-purple">인정</span>한
          </div>
          <div
            class="text-center brb"
            :class="isMobile ? 'h4' : 'h2'"
            style="color: #3e3b44"
          >
            <span style="background-color: #c16ec2"> 단어암기 끝장 솔루션!</span
            ><br />
            <span class="text-purple">"블랙홀"</span>과 함께해요~
          </div>
        </div>

        <v-card
          v-if="!isMobile"
          color="#e6ddf8"
          max-width="1000"
          flat
          class="mx-auto"
        >
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
                        <div
                          class="text-center white--text font-weight-bold h5"
                        >
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
                        <div
                          class="text-center white--text font-weight-bold h5"
                        >
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
                        <div
                          class="text-center white--text font-weight-bold h5"
                        >
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

        <v-carousel hide-delimiter-background hide-delimiters v-else>
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
    <v-container class="px-0 py-0" fluid>
      <v-card
        tile
        color="rgba(202,206,209, 0.5)"
        class="text-center pa-10"
        style="position: relative"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-anchor-placement="center-bottom"
      >
        <div class="d-flex flex-column flex-md-row">
          <v-card class="mx-auto ml-md-auto mr-5 mb-5 mb-md-0" flat>
            <v-img
              src="../assets/img-copyright.png"
              :width="isMobile ? '100%' : '250'"
              contain
              eager
            >
              <v-card
                style="background-color: #caced10a"
                width="100%"
                height="100%"
              >
              </v-card>
            </v-img>
          </v-card>
          <v-card class="mx-auto mr-md-auto mx-auto" flat>
            <v-img
              src="../assets/img-patent.png"
              :width="isMobile ? '100%' : '250'"
              contain
              eager
            >
              <v-card
                style="background-color: #caced1a1"
                width="100%"
                height="100%"
              >
              </v-card>
            </v-img>
          </v-card>
        </div>
        <v-card
          width="70%"
          class="mx-auto nanum pa-10 rounded-xl"
          :class="isMobile ? 'h6' : 'h5'"
          style="
            position: absolute;
            bottom: 20px;
            transform: translateX(-50%);
            left: 50%;
          "
          color="#FFFFFF2a"
        >
          블랙홀영어의 컨텐츠 및 도구들을 이용한 <br />
          쌍방향 온라인 수업방식을 유에듀케이션의 승인을 받지않고 <br />
          <span class="font-weight-bold">사용하는 행위는 불법</span> 임을
          인지해주시기 바랍니다.
        </v-card>
      </v-card>
    </v-container>
  </v-app>
</template>

<style scoped>
.mobile-flex {
  flex: 0 0 100%; /* flex-grow, flex-shrink, flex-basis */
}
</style>

<script>
import Header from "@/components/Header.vue";
import AOS from "aos";
export default {
  components: {
    Header
  },

  data() {
    return {
      rating: 4.8,
      screenWidth: "",
      screenHeight: "",
      isMobile: false,
      offsetTop: false,

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
    AOS.init();
    AOS.refresh();

    // document.getElementById("scroll").scrollIntoView();
  },

  methods: {
    onScroll(e) {
      this.offsetTop = e.target.scrollTop;
      console.log(e.target.scrollTop);
    },
    onWindowResize() {
      this.screenWidth = screen.width;
      this.isMobile = this.screenWidth <= 960 ? true : false;
    }
  }
};
</script>
