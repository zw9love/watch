<template>
  <!--<h1>test</h1>-->
  <div class="container" id="container">
    <Tabbar/>
    <Header/>
    <HeaderMobile title="西亨名表维修中心" :showBack="false"/>
    <!--banner-->
    <div class="banner-container">
      <!--<img :src="require('../assets/img/home_banner_bg@2x.png')" alt="" class="banner_pc">-->
      <img :src="require('../assets/img/home_banner_bg@2x.jpg')" class="banner_pc"/>
      <img :src="require('../assets/img/home_banner320_bg@2x.png')" alt="" class="banner_phone">
      <!--<div class="banner-shadow">-->
      <!--<p>维修中心地址：北京市西城区西单北大街甲133号西亨钟表维修中心（西单大悦城旁）</p>-->
      <!--</div>-->
      <div class="banner-shadow320">
        <x-address title="title" v-model="addressValue" :list="addressData" :hide-district="true" class="mytest">
          <template slot="title" slot-scope="props">
            <span class="city">{{cityName}}</span>
            <img :src="require('../assets/img/home_icon_position@2x.png')" alt="" class="arrow"/>
          </template>
        </x-address>
        <!--<popup-picker :data="list1" v-model="value1" :columns="3" ref="picker">-->
        <!--<template slot="title" slot-scope="props">-->
        <!--<span class="city">{{ ($refs.picker && $refs.picker.getNameValues().split(' ')[1]) || '广州'}}</span>-->
        <!--<img src="../assets/img/home_icon_position@2x.png" alt="" class="arrow" />>-->
        <!--</template>-->
        <!--</popup-picker>-->
        <!--<span class="city">北京</span>-->
        <!--<img src="../assets/img/home_icon_position@2x.png" alt="" class="arrow" />>-->
        <div class="line"></div>
        <form action="" @submit.prevent style="flex: 1;display: flex">
          <input class="txt" type="search" placeholder="搜索" @keydown.enter.prevent="searchGlobal">
        </form>
        <img @click="searchGlobal" :src="require('../assets/img/home_top_search@2x.png')" alt="" class="search-btn"/>
      </div>
    </div>
    <!--navigation320-->
    <div class="navigation-container320">
      <ul>
        <li v-for="(item, key) in mobileNavList" :key="key">
          <nuxt-link :to="item.href" @click.stop>
            <x-img :src="item.src" alt=""/>
            <span>{{item.name}}</span>
          </nuxt-link>
        </li>
      </ul>
    </div>

    <!--服务品牌-->
    <div class="brand-container">
      <div>
        <ServiceTitle info="SERVICE BRAND" name="服务品牌" content="汇聚国际顶尖奢华品牌"></ServiceTitle>
        <div class="brand-main">
          <div class="brand-main-wrapper">
            <div class="brand-main-left">
              <ul>
                <li v-for="(item, key) in brandBtnList" :key="key">
                  <span class="brand-main-btn" :class="{active: key === brandIndex}" @click="brandClick(item, key)">{{item.ClassName}}</span>
                </li>
              </ul>
            </div>
            <!--<nuxt-child/>-->
            <div class="brand-main-right">
              <ul>
                <li v-for="(item, key) in brandPCList" :key="key" @click="goService">
                  <x-img :src="item.Img" alt=""/>
                </li>
              </ul>
            </div>
          </div>
          <div class="brand-main-wrapper320">
            <!--<h3>{{msg}}</h3>-->
            <!--<div style="position: relative;: relative">-->
            <div>
              <swiper v-model="brandIndex" @on-index-change="brandIndexChange"
                      :show-dots="false" :show-desc-mask="false" :height="brandMainHeight + 'px'">
                <swiper-item v-for="(item, key) in brandList" :key="key">
                  <ul class="brand-main-img-wrapper" ref="brandMainImgWrapper">
                    <!--<li><img src="../assets/img/home_banner_bg@2x.png" alt="" /></li>-->
                    <li v-for="(entry, index) in item" :key="index" @click="goto('/customerservice')">
                      <img :src="entry.Img" alt=""/>
                      <!--<x-img  :src="entry.src" class="ximg-demo" error-class="ximg-error" :offset="0"></x-img>-->
                    </li>
                  </ul>
                </swiper-item>
              </swiper>
              <Indicators v-model="brandIndex" :indicatorsStyle="{bottom: '-30px'}" :list="brandList"></Indicators>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--广告-->
    <div class="adver-container">
      <div class="adver-wrapper" @click="$router.push({path: '/servicelist'})">
        <x-img :src="require('../assets/img/brand_images9@2x.png')" alt=""/>
      </div>
      <div class="adver-wrapper320">
        <x-img :src="require('../assets/img/home_booking_banner@2x.png')" alt=""/>
      </div>
    </div>
    <!--服务项目-->
    <div class="service-project">
      <ServiceTitle info="SERVICE ITEMS" name="服务项目" content="覆盖各大名表品牌，原厂进口零配件直供"></ServiceTitle>
      <div class="service-project-main">
        <ul>
          <li>
            <div class="service-project-main-cell">
              <x-img :src="require('../assets/img/home_serviceitems_icon1@2x.png')" alt=""/>
              <h3 class="info">计时故障</h3>
              <div class="line"></div>
              <div class="info-container">
                <div class="info-left-container">
                  <p>走慢走快</p>
                  <p>停走偷停</p>
                </div>
                <div class="info-right-container">
                  <p>日历调校</p>
                  <p>走时过响</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="service-project-main-cell">
              <x-img :src="require('../assets/img/home_serviceitems_icon2@2x.png')" alt=""/>
              <h3 class="info">零件损坏</h3>
              <div class="line"></div>
              <div class="info-container">
                <div class="info-left-container">
                  <p>磨损翻新</p>
                  <p>整形修复</p>
                </div>
                <div class="info-right-container">
                  <p>零件调节</p>
                  <p>零件更换</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="service-project-main-cell">
              <x-img :src="require('../assets/img/home_serviceitems_icon3@2x.png')" alt=""/>
              <h3 class="info">清洗保养</h3>
              <div class="line"></div>
              <div class="info-container">
                <div class="info-left-container">
                  <p>清洗外观</p>
                  <p>抛光翻新</p>
                </div>
                <div class="info-right-container">
                  <p>机芯保养</p>
                  <p>全套保养</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="service-project-main-cell">
              <x-img :src="require('../assets/img/home_serviceitems_icon4@2x.png')" alt=""/>
              <h3 class="info">全套保养</h3>
              <div class="line"></div>
              <div class="info-container">
                <div class="info-left-container">
                  <p>故障检测</p>
                  <p>真假鉴定</p>
                </div>
                <div class="info-right-container">
                  <p>订制表带</p>
                  <p>免费wifi</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="service-project-main320">
        <ul class="service-project-main320-cell">
          <li>
            <x-img :src="require('../assets/img/home_serviceitems_icon1@2x.png')" alt=""/>
            <p>走时故障</p>
          </li>
          <li>
            <x-img :src="require('../assets/img/home_serviceitems_icon2@2x.png')" alt=""/>
            <p>零件损坏</p>
          </li>
          <li>
            <x-img :src="require('../assets/img/home_serviceitems_icon3@2x.png')" alt=""/>
            <p>零件翻新</p>
          </li>
        </ul>
        <ul class="service-project-main320-cell">
          <li>
            <x-img :src="require('../assets/img/home_serviceitems_icon4@2x.png')" alt=""/>
            <p>全套保养</p>
          </li>
          <li>
            <x-img :src="require('../assets/img/home_serviceitems_icon5@2x.png')" alt=""/>
            <p>机芯保养</p>
          </li>
          <li>
            <x-img :src="require('../assets/img/home_serviceitems_icon6@2x.png')" alt=""/>
            <p>外观清洗</p>
          </li>
        </ul>
      </div>
    </div>
    <!--服务品质承诺-->
    <div class="service-quality">
      <div class="service-quality-container">
        <x-img :src="require('../assets/img/home_qualitycommitment__bg@2x.png')" alt=""/>
        <div class="service-quality-main">
          <ServiceTitle info="Quality commitment" name="服务品质承诺" content="修表即修行，西亨致力于建立领先行业的可信任的规范"
                        :bgActive="true"></ServiceTitle>
          <ul class="service-quality-main-info">
            <li>
              <div class="imgInfo">
                <x-img :src="require('../assets/img/home_qualitycommitment__bg1@2x.png')" alt=""/>
                <div class="imgInfo-container">
                  <span>
                    <x-img :src="require('../assets/img/home_qualitycommitment__icon1@2x.png')" alt=""/>
                  </span>
                  <span class="showy">
                    实体门店
                  </span>
                  <span class="info">
                    百年坚实口碑
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div class="imgInfo">
                <x-img :src="require('../assets/img/home_qualitycommitment__bg1@2x.png')" alt=""/>
                <div class="imgInfo-container">
                  <span>
                    <x-img :src="require('../assets/img/home_qualitycommitment__icon2@2x.png')" alt=""/>
                  </span>
                  <span class="showy">
                    原厂品质
                  </span>
                  <span class="info">
                    修后同原厂价格
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div class="imgInfo">
                <x-img :src="require('../assets/img/home_qualitycommitment__bg1@2x.png')" alt=""/>
                <div class="imgInfo-container">
                  <span>
                    <x-img :src="require('../assets/img/home_qualitycommitment__icon3@2x.png')" alt=""/>
                  </span>
                  <span class="showy">
                    价格公道
                  </span>
                  <span class="info">
                    实惠透明合理
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div class="imgInfo">
                <x-img :src="require('../assets/img/home_qualitycommitment__bg1@2x.png')" alt=""/>
                <div class="imgInfo-container">
                  <span>
                    <x-img :src="require('../assets/img/home_qualitycommitment__icon4@2x.png')" alt=""/>
                  </span>
                  <span class="showy">
                    质保一年
                  </span>
                  <span class="info">
                    原故障点免费重修
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="service-quality-container320">
        <ServiceTitle info="Quality commitment" name="服务品质承诺" content="修表即修行，西亨致力于建立领先行业的可信任的规范"></ServiceTitle>
        <ul>
          <li>
            <x-img :src="require('../assets/img/home_servicequality_bg1@2x.png')" alt=""/>
            <div class="service-quality-container320-main">
              <x-img :src="require('../assets/img/home_qualitycommitment__icon1@2x.png')" alt=""/>
              <div class="service-quality-container320-maininfo">
                <p>实体门店</p>
                <p>百年坚实口碑</p>
              </div>
            </div>
          </li>
          <li>
            <x-img :src="require('../assets/img/home_servicequality_bg1@2x.png')" alt=""/>
            <div class="service-quality-container320-main">
              <x-img :src="require('../assets/img/home_qualitycommitment__icon2@2x.png')" alt=""/>
              <div class="service-quality-container320-maininfo">
                <p>原厂品质</p>
                <p>修后同原厂规格</p>
              </div>
            </div>
          </li>
          <li>
            <x-img :src="require('../assets/img/home_servicequality_bg1@2x.png')" alt=""/>
            <div class="service-quality-container320-main">
              <x-img :src="require('../assets/img/home_qualitycommitment__icon3@2x.png')" alt=""/>
              <div class="service-quality-container320-maininfo">
                <p>价格公道</p>
                <p>实惠透明合理</p>
              </div>
            </div>
          </li>
          <li>
            <x-img :src="require('../assets/img/home_servicequality_bg1@2x.png')" alt=""/>
            <div class="service-quality-container320-main">
              <x-img :src="require('../assets/img/home_qualitycommitment__icon4@2x.png')" alt=""/>
              <div class="service-quality-container320-maininfo">
                <p>质保一年</p>
                <p>原故障点免费重修</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!--瑞士资格认证技师-->
    <div class="technician-container">
      <ServiceTitle info="certification technician" name="瑞士资格认证技师"
                    content="只录用瑞士SMH认证、国家职业技能认证、中国钟表协会认证技师"></ServiceTitle>
      <div class="certification">
        <span @mouseenter="leftIconEnter" @mouseleave="leftIconLeave" @click="leftIconClick">
          <img :src="require('../assets/img/home_qualitycommitment__lefter_icon_no@2x.png')" alt="" class="left-icon"
               v-if="!leftActive"/>
          <img :src="require('../assets/img/home_qualitycommitment__lefter_icon_yes@2x.png')" alt="" class="left-icon"
               v-else/>
        </span>
        <span @mouseenter="rightIconEnter" @mouseleave="rightIconLeave" @click="rightIconClick">
          <img :src="require('../assets/img/home_qualitycommitment__right_icon_no@2x.png')" alt="" class="right-icon"
               v-if="!rightActive"/>
          <img :src="require('../assets/img/home_qualitycommitment__right_icon_yes@2x.png')" alt="" class="right-icon"
               v-else/>
        </span>
        <el-carousel indicator-position="none" :autoplay="false" arrow="never" height="300px" ref="technicianCarousel">
          <el-carousel-item v-for="(item, key) in technicianCarouselList" :key="key">
            <div class="certification-imgContainer">
              <img :src="item.Icon" alt=""/>
            </div>
            <div class="certification-infoContainer">
              <h1 class="certification-title">{{item.Name}}</h1>
              <p class="certification-info" :title="item.Intro">
                {{item.Intro}}
              </p>
            </div>
          </el-carousel-item>
        </el-carousel>
        <!--<div class="certification-imgContainer">-->
        <!--<img src="../assets/img/home_certificationtechnician__image@2x.png" alt="" />-->
        <!--</div>-->
        <!--<div class="certification-infoContainer">-->
        <!--<h1 class="certification-title">Charlie Peter</h1>-->
        <!--<p class="certification-info">-->
        <!--出生于瑞士日内瓦利瓦兹小镇，从小受钟表文化熏陶，多年来专注钟表工艺与钟表维修技术。<br/>-->
        <!--至今名表品鉴经验颇丰，维修技术更是精益求精。<br/>-->
        <!--现任瑞士国际钟表协会委员、西亨名表维修技术总监、前百达翡丽英才中心技术讲师、<br/>-->
        <!--前瑞士SMH培训讲师。-->
        <!--</p>-->
        <!--</div>-->
      </div>
      <div class="certification320-container">
        <div class="carousel">
          <el-carousel type="card" :height="320 + 'px'" :autoplay="false" arrow="never"
                       indicator-position="none" @change="cerCarouselChange"
          >
            <el-carousel-item v-for="(item, key) in technicianCarouselList" :key="key" :name="key+''">
              <div class="certification320">
                <div class="certification320-img">
                  <!--<x-img :src="require('../assets/img/home_certificationtechnician__image@2x.jpg')" alt=""/>-->
                  <x-img :src="item.Icon" alt=""/>
                </div>
                <strong>{{item.Name}}</strong>
                <span class="level-info">国家高级技师</span>
                <p class="certification320-info">
                  {{item.Intro}}
                </p>
              </div>
            </el-carousel-item>
          </el-carousel>
          <Indicators v-model="cerIndicatorKey" :indicatorsStyle="{bottom: '-10px'}"
                      :list="technicianCarouselList"></Indicators>
        </div>
        <!--<swiper v-model="certificationIndex" @on-index-change="certificationIndexChange" :show-dots="false"-->
        <!--:show-desc-mask="false" height="260px">-->
        <!--<swiper-item v-for="(item, key) in certificationList" :key="key" >-->
        <!--&lt;!&ndash;<div class="certification320" ref="certification320">&ndash;&gt;-->
        <!--&lt;!&ndash;<div class="certification320-imgContainer">&ndash;&gt;-->
        <!--&lt;!&ndash;<img src="../assets/img/home_certificationtechnician__image@2x.png" alt="" />&ndash;&gt;-->
        <!--&lt;!&ndash;</div>&ndash;&gt;-->
        <!--&lt;!&ndash;<div class="certification320-infoContainer">&ndash;&gt;-->
        <!--&lt;!&ndash;<h1 class="certification-title320">Charlie Peter {{key}}</h1>&ndash;&gt;-->
        <!--&lt;!&ndash;<p class="certification-position320">高级技师顾问</p>&ndash;&gt;-->
        <!--&lt;!&ndash;<p class="certification-info320">&ndash;&gt;-->
        <!--&lt;!&ndash;现任瑞士国际钟表协会委员、西亨名表维修技术&ndash;&gt;-->
        <!--&lt;!&ndash;总监、前百达翡丽英才中心技术讲师、前瑞士&ndash;&gt;-->
        <!--&lt;!&ndash;SMH培训讲师。&ndash;&gt;-->
        <!--&lt;!&ndash;</p>&ndash;&gt;-->
        <!--&lt;!&ndash;</div>&ndash;&gt;-->
        <!--&lt;!&ndash;</div>&ndash;&gt;-->
        <!--<div class="certification320" ref="certification320">-->
        <!--<img src="../assets/img/customer_service_logo.png" alt="" />-->
        <!--<strong>Charlie Peter{{key}}</strong>-->
        <!--<span class="level-info">国家高级技师</span>-->
        <!--<p class="certification320-info">-->
        <!--现任瑞士国际钟表协会委员、西亨名表维修技术-->
        <!--总监、前百达翡丽英才中心技术讲师、前瑞士-->
        <!--SMH培训讲师。-->
        <!--</p>-->
        <!--</div>-->
        <!--</swiper-item>-->
        <!--</swiper>-->
        <!--<Indicators v-model="certificationIndex"  :list="certificationList"></Indicators>-->
      </div>
    </div>
    <!--进口维修设备及零件-->
    <div class="equipment">
      <ServiceTitle info="Maintenance equipment" name="进口维修设备及零件"
                    content="只选用瑞士进口维修设备及零配件，原厂品质，维修零损耗"></ServiceTitle>
      <div class="equipment-container">
        <div class="equipment-cell" v-for="(item, key) in envList" :key="key">
          <div class="equipment-cell-container">
            <!--<x-img  :src="item.src" alt="" />-->
            <x-img :src="item.src" alt=""/>
            <div class="equipment-shadow">
              <span>{{item.name}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="equipment-container320">

      </div>
    </div>
    <!--预约流程-->
    <div class="reservation">
      <ServiceTitle info="Reservation process" name="预约流程"
                    content="透明维修，诚信可靠，四重质检"></ServiceTitle>
      <Reservation :completeList="completeList" />
      <div class="reservation-main">
        <div class="reservation-main-left">
          <div class="reservation-main-left-wrapper">
            <div class="reservation-success-title">
              <h1>今日已有<span>89</span>位用户在线预约成功</h1>
            </div>
            <div class="reservation-success-list">
              <div class="reservation-success-list-wrapper">
                <div class="reservation-success-list-scroll" ref="reservationList">
                  <ul v-for="(item, key) in orderList.concat(orderList)" :key="key">
                    <li class="reservation-success-name">
                      <span>{{item.name}}</span>
                    </li>
                    <li class="reservation-success-watch">
                      <span>{{item.brand}}</span>
                    </li>
                    <li class="reservation-success-phone">
                      <span>{{item.phone}}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="reservation-main-right">
          <div class="reservation-main-right-wrapper">
            <div class="reservation-online-title">
              <h1>在线预约</h1>
            </div>
            <div class="reservation-input">
              <div class="reservation-input-cell">
                <span class="reservation-key">手表品牌</span>
                <el-input v-model="form.brand" placeholder="请输入您的手表品牌" resize="both" clearable></el-input>
              </div>

              <div class="reservation-input-cell">
                <span class="reservation-key">手表故障</span>
                <el-select v-model="form.faultType" placeholder="请选择故障类型" clearable>
                  <el-option
                    v-for="item in options"
                    :key="item.Id"
                    :label="item.BaseName"
                    :value="item.Id">
                  </el-option>
                </el-select>
              </div>

              <div class="reservation-input-cell">
                <span class="reservation-key">姓名</span>
                <el-input v-model="form.name" placeholder="请输入您的姓名" resize="both" clearable></el-input>
              </div>

              <div class="reservation-input-cell">
                <span class="reservation-key">手机号</span>
                <el-input v-model="form.phone" placeholder="请输入您的真实手机号，便于查询维修进度" resize="both" clearable maxlength="11"></el-input>
              </div>

              <div class="reservation-input-cell">
                <span class="reservation-key">验证码</span>
                <el-input v-model="form.verification" placeholder="获取验证码" resize="both" maxlength="6" clearable
                          style="width: 237px;"></el-input>
                <!--<div class="verification-container" :class="{'verification-active-container': verificationActive}"-->
                <!--@click="verificationClick">-->
                <!--<span>{{verificationInfo}}</span>-->
                <!--</div>-->
                <Verification :form="form"/>
              </div>

              <div class="reservation-input-cell">
                <span class="reservation-key">预约时间</span>
                <span class="reservation-time-input">
                  <el-col :span="11">
                    <el-date-picker type="date" placeholder="请选择预约日期" v-model="form.date1" style="width: 100%;"
                                    :picker-options="datePickerOption"></el-date-picker>
                  </el-col>
                <span class="split">-</span>
                <el-col :span="11">
                  <!--<el-time-select-->
                  <!--v-model="form.date2"-->
                  <!--:picker-options="{-->
                  <!--start: '10:00',-->
                  <!--step: '00:60',-->
                  <!--end: '20:00'-->
                  <!--}"-->
                  <!--style="width: 100%;"-->
                  <!--placeholder="请选择预约时间">-->
                  <!--</el-time-select>-->

                    <el-select v-model="form.date2" placeholder="请选择预约时间" style="width: 100%;">
                      <el-option :label="item.label" :value="item.label" v-for="(item, key) in reservationTimeList"
                                 :key="key"></el-option>
                    </el-select>

                </el-col>
                </span>
                <!--<el-date-picker-->
                <!--v-model="reservationTime"-->
                <!--type="date"-->
                <!--placeholder="选择日期"-->
                <!--style="width: 180px"-->
                <!--&gt;-->
                <!--</el-date-picker>-->
                <!--<el-time-picker-->
                <!--is-range-->
                <!--v-model="value4"-->
                <!--:picker-options="{-->
                <!--selectableRange: '18:30:00 - 20:30:00',-->
                <!--format: 'HH:mm'-->
                <!--}"-->
                <!--style="width: 190px; margin-left: 5px; height: 50px; line-height: 50px;"-->
                <!--range-separator=""-->
                <!--start-placeholder="开始时间"-->
                <!--end-placeholder="结束时间"-->
                <!--placeholder="选择时间范围">-->
                <!--</el-time-picker>-->
              </div>

              <div class="reservation-btn-container" @click="submitOrder">
                <x-img :src="require('../assets/img/home_reservationprocess_button@2x.png')" alt=""/>
                <span>提交预约</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    <!--服务环境-->
    <div class="environmental">
      <x-img :src="require('../assets/img/home_serviceenvironment_bg@2x.png')" alt=""/>
      <div class="environmental-container">
        <div class="environmental-main">
          <ServiceTitle info="SERVICE ITEMS" name="服务环境" content="提供舒适清爽的一对一服务空间" :bgActive="true"></ServiceTitle>
          <div class="carousel">
            <el-carousel type="card" height="410px" :autoplay="false" arrow="never" indicator-position="none"
                         @change="carouselChange" ref="carousel">
              <!--<el-carousel-item v-for="item in 3" :key="item">-->
              <!--<h3>{{ item }}</h3>-->
              <!--</el-carousel-item>-->
              <el-carousel-item name="0">
                <x-img :src="require('../assets/img/home_serviceenvironment_images@2x.png')" alt=""/>
              </el-carousel-item>
              <el-carousel-item name="1">
                <x-img :src="require('../assets/img/home_serviceenvironment_images1@2x.png')" alt=""/>
              </el-carousel-item>
              <el-carousel-item name="2">
                <x-img :src="require('../assets/img/home_serviceenvironment_images2@2x.png')" alt=""/>
              </el-carousel-item>
            </el-carousel>
            <div class="indicator">
              <span v-for="(item, key) in 3" :key="key" @click="indicatorClick(key)">
                <span class="indicator-active" v-if="key === indicatorKey"></span>
                <img v-else src="../assets/img/home_serviceenvironment_button_no@2x.png" alt=""/>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="environmental-container320">
        <ServiceTitle info="SERVICE ITEMS" name="服务环境" content="提供舒适清爽的一对一服务空间"
                      :containerStyle="{marginTop: '60px'}"></ServiceTitle>
        <div class="carousel">
          <el-carousel type="card" :height="stackHeight + 'px'" :autoplay="false" arrow="never"
                       indicator-position="none"
                       @change="carouselChange">
            <el-carousel-item name="0">
              <x-img :src="require('../assets/img/home_serviceenvironment_images@2x.png')" alt=""/>
            </el-carousel-item>
            <el-carousel-item name="1">
              <x-img :src="require('../assets/img/home_serviceenvironment_images1@2x.png')" alt=""/>
            </el-carousel-item>
            <el-carousel-item name="2">
              <x-img :src="require('../assets/img/home_serviceenvironment_images2@2x.png')" alt=""/>
            </el-carousel-item>
          </el-carousel>
          <Indicators v-model="indicatorKey" :indicatorsStyle="{bottom: '-30px'}" :list="[1,1,1]"></Indicators>
        </div>
      </div>
    </div>

    <!--到店指引-->
    <div class="store">
      <!--<ServiceTitle info="SERVICE ITEMS" name="到店指引" content="400-136-8800"-->
      <!--:containerStyle="{marginTop: '60px'}" ></ServiceTitle>-->
      <!--<ServiceTitle info="store guide" name="到店指引" :content="'提供舒适清爽的一对一服务空间'"-->
      <!--:containerStyle="{marginTop: '60px'}"></ServiceTitle>-->
      <ServiceTitle info="store guide" name="到店指引" content="提供舒适清爽的一对一服务空间">
        <span slot="content" class="store-content">
          <x-img :src="require('../assets/img/home_storeguide_icon@2x.png')" alt=""/>
          <!--<span>400-136-8800</span>-->
          <a href="tel:400-136-8800">400-136-8800</a>
        </span>
      </ServiceTitle>
      <!--<ServiceTitle info="store guide" name="到店指引" content="400-136-8800" />-->
      <!--<div class="title-container">-->
      <!--<p class="title-info">{{('store guide').toUpperCase()}}</p>-->
      <!--<strong class="title-name">到店指引</strong>-->
      <!--<div class="line-container">-->
      <!--<span class="line-wrapper"></span>-->
      <!--</div>-->
      <!--<p>-->
      <!--<span class="store-content">-->
      <!--<x-img  :src="require('../assets/img/home_storeguide_icon@2x.png')" alt="" />-->
      <!--<span>400-136-8800</span>-->
      <!--</span>-->
      <!--</p>-->
      <!--</div>-->
      <div class="store-info">
        <h1>北京名表维修中心</h1>
        <p>营业时间：09:00-19:00（节假日不休）</p>
        <p>店铺地址：北京市西城区西单北大街甲133号西亨钟表维修中心（西单大悦城旁）</p>
        <p>乘车线路： 乘坐3路、130路、132路、133路、658路、659路、858路到莲坂北</p>
        <!--<p><button @click="changePosition">改变位置</button></p>-->
      </div>
      <div id="store-map"></div>
    </div>

    <!--<Footer :friendList="friendList"/>-->
    <Footer/>

    <!--预约遮罩-->
    <div class="reservation-shadow" v-show="reservationActive">
      <img :src="require('../assets/img/home_popup_bg@2x.png')" alt=""/>
      <div class="reservation-shadow-container">
        <!--<nuxt-link class="reservation-online-btn" to="/customerservice">-->
        <span class="reservation-online-btn" @click="goService">
          <img :src="require('../assets/img/home_popup_button@2x.png')" alt=""/>
          <div class="reservation-online-msg">
            <img :src="require('../assets/img/home_popup_button_icon@2x.png')" alt=""/>
            <span>在线咨询</span>
          </div>
        </span>
        <!--</nuxt-link>-->
        <nuxt-link class="reservation-online-btn" to="/servicelist">
          <img :src="require('../assets/img/home_popup_button1@2x.png')" alt=""/>
          <div class="reservation-online-msg">
            <img :src="require('../assets/img/home_popup_button_icon1@2x.png')" alt=""/>
            <span>在线预约</span>
          </div>
        </nuxt-link>
      </div>
      <div class="reservation-shadow-close" @click="reservationClose">
        <img :src="require('../assets/img/close.png')" alt=""/>
      </div>
    </div>

    <div class="reservation-shadow320" v-show="reservationActive">
      <img :src="require('../assets/img/home_popup_bg_mobile.png')" alt=""/>
      <img :src="require('../assets/img/close.png')" alt="" class="close320" @click="closeMobile"/>
      <div class="reservation-shadow320-button">
        <nuxt-link to="/customerservice">在线咨询</nuxt-link>
        <nuxt-link to="/servicelist">在线预约</nuxt-link>
      </div>
    </div>
    <Sidebar/>
  </div>
</template>

<script>
  import ServiceTitle from '../components/ServiceTitle.vue'
  import Indicators from '../components/Indicators.vue'
  import Header from '../components/Header'
  import Footer from '../components/Footer'
  import Reservation from '../components/Reservation'
  import HeaderMobile from '../components/HeaderMobile'
  import Sidebar from '../components/Sidebar'
  import Tabbar from '../components/Tabbar'
  import Verification from '../components/Verification'

  import {ChinaAddressV4Data} from 'vux'
  import address from '../assets/json/address'
  // 14.2857114

  export default {
    // head: {
    //   script: [
    //     {src: 'http://api.map.baidu.com/api?v=2.0&ak=L2fFIBoizTO5nxe7ypgsV3pHGmYw6tqx'},
    //     // { src: 'https://c.mipcdn.com/static/v1/mip.js'},
    //   ],
    //   link: [
    //     // { rel: 'stylesheet', href: 'https://c.mipcdn.com/static/v1/mip.css'}
    //   ]
    // },
    head() {
      return {
        title: '西亨名表维修中心-世界名表维修连锁品牌在线预约维修手表',
        meta: [
          {name: 'keywords', content: '名表维修,手表维修,手表维修中心,维修手表'},
          {
            name: 'description',
            content: '西亨名表维修中心官方授权维修点：百达翡丽、江诗丹顿、积家、欧米茄、劳力士、芝柏、宝珀等世界名表在线预约到店维修服务，预约电话:4009608888，现场维修，保证安全和品质。'
          },
        ]
      }
    },
    components: {
      ServiceTitle,
      Indicators,
      Header,
      Footer,
      Reservation,
      HeaderMobile,
      Sidebar,
      Tabbar,
      Verification
    },
    // validate({ params, query }) {
    //   return false // 参数无效，Nuxt.js 停止渲染当前页面并显示错误页面
    // },
    // async asyncData({app}) {
    //   let url = `/api`
    //   let option = {
    //     method: 'get',
    //     url: url,
    //     // headers: {'content-type': 'application/json', token: 'debug' }
    //   }
    //   let {data} = await app.$axios(option)
    //   return {msg: JSON.stringify(data)}
    // },
    async asyncData({app, store}) {

      // 友情链接
      // let friendOption = {
      //   url: '/api/FriendshipLink',
      //   method: 'GET',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // }
      // let {data} = await app.$axios(friendOption)
      // // console.log(data)
      // return { friendList: data }

      let siteId = store.state.siteId

      // 品牌封面
      let brandCategoryOption = {
        url: '/api/BrandCover/GetCategory',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
      let brandCategoryRes = await app.$axios(brandCategoryOption)

      // 品牌封面
      let brandOption = {
        url: '/api/BrandCover/%7BId%7D?SiteID=' + siteId + '&Category=' + brandCategoryRes.data[0].OptionClassID,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
      let brandRes = await app.$axios(brandOption)
      // console.log(brandRes.data)

      // 认证技师
      let cerTechOption = {
        url: '/api/CerTechnician/%7BId%7D?SiteID=' + siteId,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
      let cerTechRes = await app.$axios(cerTechOption)

      // 故障类型
      let faultOption = {
        url: '/api/AptList/GetFaultList',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
      let faultRes = await app.$axios(faultOption)

      return { technicianCarouselList: cerTechRes.data, brandBtnList: brandCategoryRes.data, brandList: [brandRes.data, [], [], [], [], []], options: faultRes.data}
    },
    data() {
      return {
        brand: '',
        name: '',
        phone: '',
        verification: '',
        completeList: [true, false, false, false, false, false],
        options: [
          // {value: '选项1', label: '时计故障'},
          // {value: '选项2', label: '零件损坏'},
          // {value: '选项3', label: '清洗保养'},
          // {value: '选项4', label: '真假鉴定'},
          // {value: '选项5', label: '订制表带'},
          // {value: '选项6', label: '其他服务'},
        ],
        indicatorKey: 0,
        cerIndicatorKey: 0,
        value: '',
        reservationTime: '',
        faultValue: '选项1',
        reservationActive: false,
        leftActive: false,
        rightActive: false,
        verificationActive: false,
        verificationInfo: '获取验证码',
        certificationHeight: 0,
        brandMainHeight: 0,
        stackHeight: 0,
        brandIndex: 0,
        certificationIndex: 0,
        addressValue: [],
        list1: [
          {name: '广东', value: 'gd', parent: 0},
          {name: '广西', value: 'gx', parent: 0},
          {name: '广州', value: 'gz', parent: 'gd'},
          {name: '深圳', value: 'sz', parent: 'gd'},
          {name: '南宁', value: 'nn', parent: 'gx'},
          {name: '桂林', value: 'gl', parent: 'gx'}
        ],
        brandList: [],
        brandPCList: [],
        certificationList: [],
        value4: [new Date(), new Date()],
        brandBtnList: [
          {name: '常见品牌', url: '/'},
          {name: '顶级品牌', url: 'top'},
          {name: '奢华品牌', url: 'luxury'},
          {name: '豪华品牌', url: 'expensive'},
          {name: '亲民品牌', url: 'people'},
          {name: '时尚品牌', url: 'fashion'},
        ],
        technicianIndex: 0,
        technicianCarouselList: [1, 1, 1, 1, 1],
        mobileNavList: [
          {name: '品牌门店', href: '/brand', src: require('../assets/img/home_nav_icon1@2x.png')},
          {name: '维修案例', href: '/case', src: require('../assets/img/home_nav_icon2@2x.png')},
          {name: '维修进度', href: '/process', src: require('../assets/img/home_nav_icon3@2x.png')},
          {name: '维修地址', href: '/servicelist', src: require('../assets/img/home_nav_icon4@2x.png')},
        ],
        form: {
          brand: '',
          name: '',
          verification: '',
          phone: '',
          time: '',
          faultType: '',
          date1: '',
          date2: '',
        },
        reservationTimeList: [
          {label: '10:00 - 11:00', value: '10:00 - 11:00'},
          {label: '11:00 - 12:00', value: '11:00 - 12:00'},
          {label: '12:00 - 13:00', value: '12:00 - 13:00'},
          {label: '13:00 - 14:00', value: '13:00 - 14:00'},
          {label: '14:00 - 15:00', value: '14:00 - 15:00'},
          {label: '15:00 - 16:00', value: '15:00 - 16:00'},
          {label: '16:00 - 17:00', value: '16:00 - 17:00'},
          {label: '17:00 - 18:00', value: '17:00 - 18:00'},
          {label: '18:00 - 19:00', value: '18:00 - 19:00'},
          {label: '19:00 - 20:00', value: '19:00 - 20:00'},
        ],
        phoneShadowActive: false,
        orderList: [
          {name: '钟女士', brand: '百达翡丽', phone: '153*****882'},
          {name: '文先生', brand: '劳力士', phone: '137*****888'},
          {name: '梁女士', brand: '浪琴', phone: '158*****200'},
          {name: '阳先生', brand: '欧米茄', phone: '187*****999'},
          {name: '王女士', brand: '宝玑', phone: '131*****296'},
          {name: '黄先生', brand: '劳力士', phone: '187*****758'},
          {name: '李先生', brand: '卡地亚', phone: '181*****876'},
          {name: '林先生', brand: '积家', phone: '188*****199'},
          {name: '刘先生', brand: '真力时', phone: '139*****620'},
          {name: '郝先生', brand: '万国', phone: '138*****513'},
          {name: '包先生', brand: '江斯丹顿', phone: '138*****522'},
          {name: '李女士', brand: '宝玑', phone: '183*****588'},
          {name: '陈先生', brand: '劳力士', phone: '132*****915'},
          {name: '曾先生', brand: '欧米茄', phone: '187*****245'},
          {name: '于先生', brand: '沛纳海', phone: '183*****599'},
          {name: '徐先生', brand: '劳力士', phone: '183*****522'},
          {name: '李女士', brand: '朗格', phone: '132*****586'},
          {name: '高先生', brand: '真力时', phone: '187*****254'},
          {name: '马先生', brand: '欧米茄', phone: '183*****587'},
          {name: '王女士', brand: '爱彼', phone: '187*****523'},
        ],
        addressData: ChinaAddressV4Data,
        cityName: '北京',
        envList: [
          {name: '名表测试仪', src: require('../assets/img/home_maintenanceequipment__images@2x.jpg')},
          {name: '真空试水机', src: require('../assets/img/home_maintenanceequipment__images1@2x.jpg')},
          {name: '隔尘抛光机', src: require('../assets/img/home_maintenanceequipment__images2@2x.jpg')},
          {name: '超声波清洗机', src: require('../assets/img/home_maintenanceequipment__images3@2x.jpg')},
          {name: '双咀工作台吸尘器', src: require('../assets/img/home_maintenanceequipment__images4@2x.jpg')},
          {name: '手表自转仪', src: require('../assets/img/home_maintenanceequipment__images5@2x.jpg')},
        ],
        timer: null,
        datePickerOption: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7
          },
        },
        center: {lng: 116.40387397, lat: 39.91488908},
        countDownTimer: null
      }
    },
    created() {
      this.brandPCList = this.brandList[this.brandIndex]
    },
    mounted() {
      if (window.BMap) {
        console.log('BMap加载完成。')
        // 创建地址解析器实例
        let map = new BMap.Map("store-map");
        let mapType = new BMap.MapTypeControl({anchor: BMAP_ANCHOR_TOP_RIGHT});
        map.addControl(mapType);
        let myGeo = new BMap.Geocoder();
        // 将地址解析结果显示在地图上,并调整地图视野
        // myGeo.getPoint("北京市西城区西单北大街甲133号西亨钟表维修中心（西单大悦城旁）", function (point) {
        myGeo.getPoint("深圳凯旋城", function (point) {
          if (point) {
            // console.log(point)
            map.centerAndZoom(point, 16);
            map.addOverlay(new BMap.Marker(point));
          } else {
            alert("您选择地址没有解析到结果!");
          }
        })
      }
      this.stackHeight = parseInt(window.innerWidth * 0.3203125)
      // // this.certificationHeight = this.$refs.certification320[0].clientHeight
      this.brandMainHeight = this.$refs.brandMainImgWrapper[0].clientHeight

      // 预约遮罩定时器
      setTimeout(o => {
        this.reservationActive = true
      }, 5000)

      // this.reservationListScroll()
    },
    destroyed() {
      clearInterval(this.timer)
    },
    watch: {
      addressValue: function (newVal) {
        let provinceName = address['86'][newVal[0]]
        let cityName = address[newVal[0]][newVal[1]]
        this.$router.push({path: '/servicelist/city', query: {province: provinceName, city: cityName, area: ''}})
      },
      reservationActive: function (newVal) {
        if (!newVal) {
          // console.log('预约遮罩被关闭.')
          setTimeout(o => {
            this.reservationActive = true
          }, 60 * 1000)
        }
      }
      // '$route': function(newVal){
      //   this.cityName = newVal.query.city ? newVal.query.city : '请选择'
      //   this.txtVal = this.$route.query.address ? this.$route.query.address : ''
      // }
    },
    methods: {
      getDouble(val){
        val = val + ''
        if(val.length > 1){
          return val
        }else{
          return '0' + val
        }
      },
      reservationListScroll() {
        let reservationList = this.$refs.reservationList
        let parentHeight = reservationList.clientHeight / 2
        let n = 0
        this.timer = setInterval(o => {
          if (n === -parentHeight) {
            reservationList.style.top = '0px'
            n = 0
          } else {
            reservationList.style.top = --n + 'px'
          }
        }, 10)
      },
      changePosition() {
        let map = new BMap.Map('store-map')
        let mapType = new BMap.MapTypeControl({anchor: BMAP_ANCHOR_TOP_RIGHT});
        let point = new BMap.Point(this.center.lng, this.center.lat)
        map.addControl(mapType);
        map.centerAndZoom(point, 10)
        map.enableScrollWheelZoom(true)
        map.enableDoubleClickZoom(true)
        var geolocation = new BMap.Geolocation()
        geolocation.getCurrentPosition((r) => {
          if (r.point) {
            this.center.lng = r.longitude
            this.center.lat = r.latitude
            let markers = new BMap.Marker(r.point)
            map.addOverlay(markers)
            map.panTo(r.point)
            map.centerAndZoom(r.point, 16)
          }
        }, {enableHighAccuracy: true})
      },
      cerCarouselChange(nowIndex) {
        this.cerIndicatorKey = nowIndex
      },
      carouselChange(nowIndex, useIndex) {
        this.indicatorKey = nowIndex
      },
      indicatorClick(key) {
        this.indicatorKey = key
        this.$refs.carousel.setActiveItem(key)
      },
      reservationClose() {
        this.reservationActive = false
      },
      leftIconEnter() {
        this.leftActive = true
      },
      leftIconLeave() {
        this.leftActive = false
      },
      rightIconEnter() {
        this.rightActive = true
      },
      rightIconLeave() {
        this.rightActive = false
      },
      leftIconClick() {
        if (this.technicianIndex > 0) this.$refs.technicianCarousel.setActiveItem(--this.technicianIndex)
      },
      rightIconClick() {
        if (this.technicianIndex < this.technicianCarouselList.length - 1) this.$refs.technicianCarousel.setActiveItem(++this.technicianIndex)
      },
      verificationClick() {
        if (!this.verificationActive) {
          this.verificationActive = true
          let count = 30
          this.verificationInfo = count-- + 'S'
          this.countDownTimer = setInterval(o => {
            this.verificationInfo = count-- + 'S'
            if (count < 0) {
              // this.count = 30
              this.verificationActive = false
              this.verificationInfo = '获取验证码'
              clearInterval(this.countDownTimer)
            }
          }, 1000)
        }
      },
      certificationIndexChange(index) {
        this.certificationIndex = index
      },
      async brandIndexChange(index) {
        this.brandIndex = index
        let {data} = await this.$axios('/api/BrandCover/%7BId%7D?SiteID=' + this.$store.state.siteId + '&Category=' + this.brandBtnList[index].OptionClassID, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        //this.brandList[index] = data
        this.$set(this.brandList, index, data)
        // console.log(this.brandList)
      },
      brandClick(item, key) {
        if(this.brandIndex === key) return
        this.brandIndex = key
        this.brandPCList = []
        this.$nextTick(function(){
          this.$axios('/api/BrandCover/%7BId%7D?SiteID=' + this.$store.state.siteId + '&Category=' + item.OptionClassID, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          })
            .then((res) => {
              this.brandPCList = res.data
            })
          // this.brandPCList = this.brandList[this.brandIndex]
         // this.brandPCList = data
        })
        // this.$set(this.brandPCList, 0)
        // console.log(this.brandIndex)
        // console.log(this.brandList[this.brandIndex])
        // this.$router.push({path: url})
      },
      goto(path) {
        this.$router.push({path})
      },
      closeMobile() {
        this.reservationActive = false
      },
      addressChange(ids, name) {
        this.cityName = name[0].indexOf('市') !== -1 ? name[0].slice(0, name[0].length - 1) : name[1].slice(0, name[1].length - 1)
      },
      backTop() {
        document.documentElement.scrollTop = document.body.scrollTop = 0;
      },
      phoneCall() {
        this.phoneShadowActive = true
      },
      cancelShadow() {
        this.phoneShadowActive = false
      },
      searchGlobal() {
        this.$router.push({path: '/customerservice'})
      },
      submitOrder() {
        let {date1, date2, brand, name, faultType, phone, verification} = this.form

        if (!brand.trim()) {
          this.$store.dispatch({type: 'setModalInfo', val: '请输入手表品牌！'})
          this.$store.dispatch({type: 'setSuccessActive', val: false})
          this.$store.dispatch({type: 'setModalActive', val: true})
          return;
        }

        if (!faultType) {
          this.$store.dispatch({type: 'setModalInfo', val: '请选择手表故障类型！'})
          this.$store.dispatch({type: 'setSuccessActive', val: false})
          this.$store.dispatch({type: 'setModalActive', val: true})
          return;
        }

        if (!name.trim()) {
          this.$store.dispatch({type: 'setModalInfo', val: '请输入您的姓名！'})
          this.$store.dispatch({type: 'setSuccessActive', val: false})
          this.$store.dispatch({type: 'setModalActive', val: true})
          return;
        }

        if (!(/(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/.test(phone.trim()))) {
          this.$store.dispatch({type: 'setModalInfo', val: '请输入正确的手机号码！'})
          this.$store.dispatch({type: 'setSuccessActive', val: false})
          this.$store.dispatch({type: 'setModalActive', val: true})
          return;
        }

        if (!verification.trim()) {
          this.$store.dispatch({type: 'setModalInfo', val: '请输入正确的验证码！'})
          this.$store.dispatch({type: 'setSuccessActive', val: false})
          this.$store.dispatch({type: 'setModalActive', val: true})
          return;
        }

        let tempDate = ''
        if (!date1) {
          this.$store.dispatch({type: 'setModalInfo', val: '请选择预约日期！'})
          this.$store.dispatch({type: 'setSuccessActive', val: false})
          this.$store.dispatch({type: 'setModalActive', val: true})
          return;
        }  else{
          let date = new Date(date1)
          tempDate = date.getFullYear() + '-' + this.getDouble(date.getMonth() + 1) + '-' + this.getDouble(date.getDate())
        }

        if (!date2) {
          this.$store.dispatch({type: 'setModalInfo', val: '请选择预约时间！'})
          this.$store.dispatch({type: 'setSuccessActive', val: false})
          this.$store.dispatch({type: 'setModalActive', val: true})
          return;
        }

        let url = `/api/AptList/SaveAppointment?SiteId=${this.$store.state.siteId}&StoresId=%7BStoresId%7D&Remakr=${brand}&TroubleNo=${faultType}&UserName=${name}&Mobile=${phone}&Code=${verification}&AptDate=${tempDate}&AptTime=${date2}`
        this.$axios(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(res => {
            // this.$store.dispatch({type: 'setModalInfo', val: '预约成功！'})
            // this.$store.dispatch({type: 'setSuccessActive', val: true})
            // this.$store.dispatch({type: 'setModalActive', val: true})
            // console.log(res.data)
            let {code, id, msg} = res.data
            switch (code) {
              case 0:
                this.$store.dispatch({type: 'setModalInfo', val: msg})
                this.$store.dispatch({type: 'setSuccessActive', val: false})
                this.$store.dispatch({type: 'setModalActive', val: true})
                break;
              case 1:
                this.$store.dispatch('login', {
                  username: 'demo',
                  password: 'demo',
                  axios: this.$axios,
                  self: this,
                  jumpPath: '/successorderfast/' + id
                })
                break

            }
          })
          .catch(error => {
            this.$store.dispatch({type: 'setModalInfo', val: '预约失败！'})
            this.$store.dispatch({type: 'setSuccessActive', val: false})
            this.$store.dispatch({type: 'setModalActive', val: true})
          })


        // this.$store.dispatch('login', {
        //   username: 'demo',
        //   password: 'demo',
        //   axios: this.$axios,
        //   self: this,
        //   jumpPath: '/successorderfast'
        // })

      },
      goService() {
        window.open('/customerservice')
      }
    }
  }
</script>

<!--<style scoped src="../assets/css/index.css">-->
<style scoped>
  @import "../assets/css/index.css";
  @import "../assets/css/index320_767.css";

  .el-input, .el-select {
    width: calc(100% - 170px)
  }

  .el-select .el-input {
    width: 130px;
  }

  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>

<!--<template>-->
<!--<div class="container">-->
<!--<h1>Please login to see the secret content</h1>-->
<!--<form v-if="!$store.state.authUser" @submit.prevent="login">-->
<!--<p v-if="formError" class="error">{{ formError }}</p>-->
<!--<p><i>To login, use <b>demo</b> as username and <b>demo</b> as password.</i></p>-->
<!--<p>Username: <input v-model="formUsername" type="text" name="username"></p>-->
<!--<p>Password: <input v-model="formPassword" type="password" name="password"></p>-->
<!--<button type="submit">Login</button>-->
<!--</form>-->
<!--<div v-else>-->
<!--Hello {{ $store.state.authUser.username }}!-->
<!--<pre>I am the secret content, I am shown only when the use is connected.</pre>-->
<!--<p><i>You can also refresh this page, you'll still be connected!</i></p>-->
<!--<button @click="logout">Logout</button>-->
<!--</div>-->
<!--<p>-->
<!--<nuxt-link to="/secret">Super secret page</nuxt-link>-->
<!--</p>-->
<!--<group title="vux demo">-->
<!--<cell title="cell" value="click me" is-link @click.native="alert"/>-->
<!--<button @click="getMyData">自己的接口</button>-->
<!--<button @click="getBgData" style="margin-left: 20px">后台的接口</button>-->
<!--</group>-->
<!--</div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--data() {-->
<!--return {-->
<!--formError: null,-->
<!--formUsername: '',-->
<!--formPassword: ''-->
<!--}-->
<!--},-->
<!--methods: {-->
<!--async login() {-->
<!--try {-->
<!--await this.$store.dispatch('login', {-->
<!--username: this.formUsername,-->
<!--password: this.formPassword,-->
<!--axios: this.$axios,-->
<!--self: this-->
<!--})-->
<!--this.formUsername = ''-->
<!--this.formPassword = ''-->
<!--this.formError = null-->
<!--} catch (e) {-->
<!--this.formError = e.message-->
<!--}-->
<!--},-->
<!--async logout() {-->
<!--try {-->
<!--await this.$store.dispatch('logout', { axios: this.$axios, self: this})-->
<!--} catch (e) {-->
<!--this.formError = e.message-->
<!--}-->
<!--},-->
<!--alert() {-->
<!--this.$vux.alert.show('This is a Alert example.')-->
<!--},-->
<!--getMyData(){-->
<!--this.$axios('/login', {-->
<!--// 发送客户端 cookies 到服务端-->
<!--credentials: 'same-origin',-->
<!--method: 'POST',-->
<!--headers: {-->
<!--'Content-Type': 'application/json'-->
<!--},-->
<!--data: JSON.stringify({-->
<!--username: 'test',-->
<!--password: 'test'-->
<!--})-->
<!--})-->
<!--},-->
<!--getBgData(){-->
<!--this.$axios('/test', {-->
<!--method: 'POST',-->
<!--headers: {-->
<!--'Content-Type': 'application/json'-->
<!--}-->
<!--})-->
<!--}-->
<!--}-->
<!--}-->
<!--</script>-->

<!--<style>-->
<!--.container {-->
<!--padding: 100px;-->
<!--}-->

<!--.error {-->
<!--color: red;-->
<!--}-->
<!--</style>-->
