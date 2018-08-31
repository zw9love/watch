<template>
  <div class="container">

    <!--tabbar-->
    <div class="tabbar-container">
      <!--<tabbar>-->
        <!--<tabbar-item selected icon-class="tabbar-icon-class">-->
          <!--<img slot="icon" src="../assets/img/home_behind_icon1_no@2x.png">-->
          <!--<img slot="icon-active" src="../assets/img/home_behind_icon1_yes@2x.png">-->
          <!--<span slot="label">在线客服</span>-->
        <!--</tabbar-item>-->
        <!--<tabbar-item icon-class="tabbar-icon-class">-->
          <!--<img slot="icon" src="../assets/img/home_behind_icon2_no@2x.png">-->
          <!--<img slot="icon-active" src="../assets/img/home_behind_icon1_yes@2x.png">-->
          <!--<span slot="label">预约到店</span>-->
        <!--</tabbar-item>-->
        <!--<tabbar-item icon-class="tabbar-icon-class">-->
          <!--<img slot="icon" src="../assets/img/home_behind_icon3_no@2x.png">-->
          <!--<img slot="icon-active" src="../assets/img/home_behind_icon3_yes@2x.png">-->
          <!--<span slot="label">电话咨询</span>-->
        <!--</tabbar-item>-->
      <!--</tabbar>-->
    </div>

    <Header/>
    <HeaderMobile title="北京名表维修中心" :showBack="false" :showMore="true"/>
    <!--banner-->
    <div class="banner-container">
      <img src="../assets/img/home_banner_bg@2x.png" alt="" class="banner_pc">
      <img src="../assets/img/home_banner320_bg@2x.png" alt="" class="banner_phone">
      <div class="banner-shadow">
        <p>维修中心地址：北京市西城区西单北大街甲133号西亨钟表维修中心（西单大悦城旁）</p>
      </div>
      <div class="banner-shadow320">
        <popup-picker :data="list1" v-model="value1" :columns="3" ref="picker">
          <template slot="title" slot-scope="props">
            <span class="city">{{ ($refs.picker && $refs.picker.getNameValues().split(' ')[1]) || '广州'}}</span>
            <img src="../assets/img/home_icon_position@2x.png" alt="" class="arrow">
          </template>
        </popup-picker>
        <!--<span class="city">北京</span>-->
        <!--<img src="../assets/img/home_icon_position@2x.png" alt="" class="arrow">-->
        <div class="line"></div>
        <input class="txt" type="text" placeholder="搜索">
        <img src="../assets/img/home_top_search@2x.png" alt="" class="search-btn">
      </div>
    </div>
    <!--navigation320-->
    <div class="navigation-container320">
      <ul>
        <li v-for="(item, key) in mobileNavList" :key="key" @click="goto(item)">
          <img src="../assets/img/home_nav_icon1@2x.png" alt="">
          <nuxt-link :to="item.href">{{item.name}}</nuxt-link>
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
                  <span class="brand-main-btn" :class="{active: key === brandIndex}" @click="brandClick(item.url, key)">{{item.name}}</span>
                </li>
              </ul>
            </div>
            <!--<nuxt-child/>-->
            <div class="brand-main-right">
              <ul>
                <li>
                  <img src="../assets/img/home_banner_bg@2x.png" alt="">
                </li>
                <li>
                  <img src="../assets/img/home_banner_bg@2x.png" alt="">
                </li>
                <li>
                  <img src="../assets/img/home_banner_bg@2x.png" alt="">
                </li>
                <li>
                  <img src="../assets/img/home_banner_bg@2x.png" alt="">
                </li>
                <li>
                  <img src="../assets/img/home_banner_bg@2x.png" alt="">
                </li>
                <li>
                  <img src="../assets/img/home_banner_bg@2x.png" alt="">
                </li>
                <li>
                  <img src="../assets/img/home_banner_bg@2x.png" alt="">
                </li>
                <li>
                  <img src="../assets/img/home_banner_bg@2x.png" alt="">
                </li>
                <li>
                  <img src="../assets/img/home_banner_bg@2x.png" alt="">
                </li>
                <li>
                  <img src="../assets/img/home_banner_bg@2x.png" alt="">
                </li>
                <li>
                  <img src="../assets/img/home_banner_bg@2x.png" alt="">
                </li>
                <li>
                  <img src="../assets/img/home_banner_bg@2x.png" alt="">
                </li>
              </ul>
            </div>
          </div>
          <div class="brand-main-wrapper320">
            <div style="position: relative">
              <swiper v-model="brandIndex" @on-index-change="brandIndexChange"
                      :show-dots="false" :show-desc-mask="false" :height="brandMainHeight + 'px'">
                <swiper-item v-for="(item, key) in brandList" :key="key">
                  <ul class="brand-main-img-wrapper" ref="brandMainImgWrapper">
                    <li><img src="../assets/img/home_banner_bg@2x.png" alt=""></li>
                    <li><img src="../assets/img/home_banner_bg@2x.png" alt=""></li>
                    <li><img src="../assets/img/home_banner_bg@2x.png" alt=""></li>
                    <li><img src="../assets/img/home_banner_bg@2x.png" alt=""></li>
                    <li><img src="../assets/img/home_banner_bg@2x.png" alt=""></li>
                    <li><img src="../assets/img/home_banner_bg@2x.png" alt=""></li>
                    <li><img src="../assets/img/home_banner_bg@2x.png" alt=""></li>
                    <li><img src="../assets/img/home_banner_bg@2x.png" alt=""></li>
                    <li><img src="../assets/img/home_banner_bg@2x.png" alt=""></li>
                    <li><img src="../assets/img/home_banner_bg@2x.png" alt=""></li>
                    <li><img src="../assets/img/home_banner_bg@2x.png" alt=""></li>
                    <li><img src="../assets/img/home_banner_bg@2x.png" alt=""></li>
                  </ul>
                </swiper-item>
              </swiper>
              <Indicators v-model="brandIndex" :list="brandList"></Indicators>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--广告-->
    <div class="adver-container">
      <div class="adver-wrapper">
        <img src="../assets/img/home_incentive_bg@2x.png" alt="">
      </div>
      <div class="adver-wrapper320">
        <img src="../assets/img/home_booking_banner@2x.png" alt="">
      </div>
    </div>
    <!--服务项目-->
    <div class="service-project">
      <ServiceTitle info="SERVICE ITEMS" name="服务项目" content="覆盖各大名表品牌，原厂进口零配件直供"></ServiceTitle>
      <div class="service-project-main">
        <ul>
          <li>
            <div class="service-project-main-cell">
              <img src="../assets/img/home_serviceitems_icon1@2x.png" alt="">
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
              <img src="../assets/img/home_serviceitems_icon1@2x.png" alt="">
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
              <img src="../assets/img/home_serviceitems_icon1@2x.png" alt="">
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
              <img src="../assets/img/home_serviceitems_icon1@2x.png" alt="">
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
            <img src="../assets/img/home_serviceitems_icon1@2x.png" alt="">
            <p>走时故障</p>
          </li>
          <li>
            <img src="../assets/img/home_serviceitems_icon1@2x.png" alt="">
            <p>走时故障</p>
          </li>
          <li>
            <img src="../assets/img/home_serviceitems_icon1@2x.png" alt="">
            <p>走时故障</p>
          </li>
        </ul>
        <ul class="service-project-main320-cell">
          <li>
            <img src="../assets/img/home_serviceitems_icon1@2x.png" alt="">
            <p>走时故障</p>
          </li>
          <li>
            <img src="../assets/img/home_serviceitems_icon1@2x.png" alt="">
            <p>走时故障</p>
          </li>
          <li>
            <img src="../assets/img/home_serviceitems_icon1@2x.png" alt="">
            <p>走时故障</p>
          </li>
        </ul>
      </div>
    </div>
    <!--服务品质承诺-->
    <div class="service-quality">
      <div class="service-quality-container">
        <img src="../assets/img/home_qualitycommitment__bg@2x.png" alt="">
        <div class="service-quality-main">
          <ServiceTitle info="Quality commitment" name="服务品质承诺" content="修表即修行，西亨致力于建立领先行业的可信任的规范"
                        :bgActive="true"></ServiceTitle>
          <ul class="service-quality-main-info">
            <li>
              <div class="imgInfo">
                <img src="../assets/img/home_qualitycommitment__bg1@2x.png" alt="">
                <div class="imgInfo-container">
                  <span>
                    <img src="../assets/img/home_qualitycommitment__icon1@2x.png" alt="">
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
                <img src="../assets/img/home_qualitycommitment__bg1@2x.png" alt="">
                <div class="imgInfo-container">
                  <span>
                    <img src="../assets/img/home_qualitycommitment__icon2@2x.png" alt="">
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
                <img src="../assets/img/home_qualitycommitment__bg1@2x.png" alt="">
                <div class="imgInfo-container">
                  <span>
                    <img src="../assets/img/home_qualitycommitment__icon3@2x.png" alt="">
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
                <img src="../assets/img/home_qualitycommitment__bg1@2x.png" alt="">
                <div class="imgInfo-container">
                  <span>
                    <img src="../assets/img/home_qualitycommitment__icon4@2x.png" alt="">
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
            <img src="../assets/img/home_servicequality_bg1@2x.png" alt="">
            <div class="service-quality-container320-main">
              <img src="../assets/img/home_qualitycommitment__icon1@2x.png" alt="">
              <div class="service-quality-container320-maininfo">
                <p>实体门店</p>
                <p>百年坚实口碑</p>
              </div>
            </div>
          </li>
          <li>
            <img src="../assets/img/home_servicequality_bg1@2x.png" alt="">
            <div class="service-quality-container320-main">
              <img src="../assets/img/home_qualitycommitment__icon1@2x.png" alt="">
              <div class="service-quality-container320-maininfo">
                <p>实体门店</p>
                <p>百年坚实口碑</p>
              </div>
            </div>
          </li>
          <li>
            <img src="../assets/img/home_servicequality_bg1@2x.png" alt="">
            <div class="service-quality-container320-main">
              <img src="../assets/img/home_qualitycommitment__icon1@2x.png" alt="">
              <div class="service-quality-container320-maininfo">
                <p>实体门店</p>
                <p>百年坚实口碑</p>
              </div>
            </div>
          </li>
          <li>
            <img src="../assets/img/home_servicequality_bg1@2x.png" alt="">
            <div class="service-quality-container320-main">
              <img src="../assets/img/home_qualitycommitment__icon1@2x.png" alt="">
              <div class="service-quality-container320-maininfo">
                <p>实体门店</p>
                <p>百年坚实口碑</p>
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
          <img src="../assets/img/home_qualitycommitment__lefter_icon_no@2x.png" alt="" class="left-icon"
               v-if="!leftActive">
          <img src="../assets/img/home_qualitycommitment__lefter_icon_yes@2x.png" alt="" class="left-icon" v-else>
        </span>
        <span @mouseenter="rightIconEnter" @mouseleave="rightIconLeave" @click="rightIconClick">
          <img src="../assets/img/home_qualitycommitment__right_icon_no@2x.png" alt="" class="right-icon"
               v-if="!rightActive">
          <img src="../assets/img/home_qualitycommitment__right_icon_yes@2x.png" alt="" class="right-icon" v-else>
        </span>
        <el-carousel indicator-position="none" :autoplay="false" arrow="never" height="300px" ref="technicianCarousel">
          <el-carousel-item v-for="(item, key) in technicianCarouselList" :key="key">
            <div class="certification-imgContainer">
              <img src="../assets/img/home_certificationtechnician__image@2x.png" alt="">
            </div>
            <div class="certification-infoContainer">
              <h1 class="certification-title">Charlie Peter</h1>
              <p class="certification-info">
                出生于瑞士日内瓦利瓦兹小镇，从小受钟表文化熏陶，多年来专注钟表工艺与钟表维修技术。<br/>
                至今名表品鉴经验颇丰，维修技术更是精益求精。<br/>
                现任瑞士国际钟表协会委员、西亨名表维修技术总监、前百达翡丽英才中心技术讲师、<br/>
                前瑞士SMH培训讲师。
              </p>
            </div>
          </el-carousel-item>
        </el-carousel>
        <!--<div class="certification-imgContainer">-->
        <!--<img src="../assets/img/home_certificationtechnician__image@2x.png" alt="">-->
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
        <swiper v-model="certificationIndex" @on-index-change="certificationIndexChange" :show-dots="false"
                :show-desc-mask="false" :height="certificationHeight + 50 + 'px'" :aspect-ratio="0.36">
          <swiper-item v-for="(item, key) in certificationList" :key="key" >
            <div class="certification320" ref="certification320">
              <div class="certification320-imgContainer">
                <img src="../assets/img/home_certificationtechnician__image@2x.png" alt="">
              </div>
              <div class="certification320-infoContainer">
                <h1 class="certification-title320">Charlie Peter {{key}}</h1>
                <p class="certification-position320">高级技师顾问</p>
                <p class="certification-info320">
                  现任瑞士国际钟表协会委员、西亨名表维修技术
                  总监、前百达翡丽英才中心技术讲师、前瑞士
                  SMH培训讲师。
                </p>
              </div>
            </div>
          </swiper-item>
        </swiper>
        <Indicators v-model="certificationIndex" :indicatorsStyle="{bottom: 0}" :list="certificationList"></Indicators>
      </div>
    </div>
    <!--进口维修设备及零件-->
    <div class="equipment">
      <ServiceTitle info="Maintenance equipment" name="进口维修设备及零件"
                    content="只选用瑞士进口维修设备及零配件，原厂品质，维修零损耗"></ServiceTitle>
      <div class="equipment-container">
        <div class="equipment-cell">
          <div class="equipment-cell-container">
            <img v-lazy="require('../assets/img/home_maintenanceequipment__images@2x.png')" alt="">
            <!--<x-img src="../assets/img/home_maintenanceequipment__images@2x.png" :webp-src="`../assets/img/home_maintenanceequipment__images@2x.png?type=webp`" :offset="-100" container="#vux_view_box_body"></x-img>-->
            <div class="equipment-shadow">
              <span>名表测试仪</span>
            </div>
          </div>
        </div>
        <div class="equipment-cell">
          <div class="equipment-cell-container">
            <img v-lazy="require('../assets/img/home_maintenanceequipment__images@2x.png')" alt="">
            <!--<x-img src="../assets/img/home_maintenanceequipment__images@2x.png" :webp-src="`../assets/img/home_maintenanceequipment__images@2x.png?type=webp`" :offset="-100" container="#vux_view_box_body"></x-img>-->
            <div class="equipment-shadow">
              <span>名表测试仪</span>
            </div>
          </div>
        </div>
        <div class="equipment-cell">
          <div class="equipment-cell-container">
            <img v-lazy="require('../assets/img/home_maintenanceequipment__images@2x.png')" alt="">
            <!--<x-img src="../assets/img/home_maintenanceequipment__images@2x.png" :webp-src="`../assets/img/home_maintenanceequipment__images@2x.png?type=webp`" :offset="-100" container="#vux_view_box_body"></x-img>-->
            <div class="equipment-shadow">
              <span>名表测试仪</span>
            </div>
          </div>
        </div>
        <div class="equipment-cell">
          <div class="equipment-cell-container">
            <img v-lazy="require('../assets/img/home_maintenanceequipment__images@2x.png')" alt="">
            <!--<x-img src="../assets/img/home_maintenanceequipment__images@2x.png" :webp-src="`../assets/img/home_maintenanceequipment__images@2x.png?type=webp`" :offset="-100" container="#vux_view_box_body"></x-img>-->
            <div class="equipment-shadow">
              <span>名表测试仪</span>
            </div>
          </div>
        </div>
        <div class="equipment-cell">
          <div class="equipment-cell-container">
            <img v-lazy="require('../assets/img/home_maintenanceequipment__images@2x.png')" alt="">
            <!--<x-img src="../assets/img/home_maintenanceequipment__images@2x.png" :webp-src="`../assets/img/home_maintenanceequipment__images@2x.png?type=webp`" :offset="-100" container="#vux_view_box_body"></x-img>-->
            <div class="equipment-shadow">
              <span>名表测试仪</span>
            </div>
          </div>
        </div>
        <div class="equipment-cell">
          <div class="equipment-cell-container">
            <img v-lazy="require('../assets/img/home_maintenanceequipment__images@2x.png')" alt="">
            <!--<x-img src="../assets/img/home_maintenanceequipment__images@2x.png" :webp-src="`../assets/img/home_maintenanceequipment__images@2x.png?type=webp`" :offset="-100" container="#vux_view_box_body"></x-img>-->
            <div class="equipment-shadow">
              <span>名表测试仪</span>
            </div>
          </div>
        </div>
        <!--<div class="equipment-cell" style="background-color: red;">-->
        <!--<div class="equipment-cell-container" style="background-color: pink;">4</div>-->
        <!--</div>-->
      </div>
      <div class="equipment-container320">

      </div>
    </div>
    <!--预约流程-->
    <div class="reservation">
      <ServiceTitle info="Reservation process" name="预约流程"
                    content="透明维修，诚信可靠，四重质检"></ServiceTitle>
      <Reservation />
      <div class="reservation-main">
        <div class="reservation-main-left">
          <div class="reservation-main-left-wrapper">
            <div class="reservation-success-title">
              <h1>今日已有<span>68</span>位用户在线预约成功</h1>
            </div>
            <div class="reservation-success-list">
              <ul v-for="(item, key) in [1,1,1,1,1,1,1,1,1,1]" :key="key">
                <li class="reservation-success-name">
                  <span>金女士</span>
                </li>
                <li class="reservation-success-watch">
                  <span>劳力士</span>
                </li>
                <li class="reservation-success-phone">
                  <span>180****6539</span>
                </li>
              </ul>
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
                <el-input v-model="brand" placeholder="请输入您的手表品牌" resize="both" clearable></el-input>
              </div>

              <div class="reservation-input-cell">
                <span class="reservation-key">手表故障</span>
                <el-select v-model="faultValue" placeholder="请选择故障类型" clearable>
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>

              <div class="reservation-input-cell">
                <span class="reservation-key">姓名</span>
                <el-input v-model="name" placeholder="请输入您的姓名" resize="both" clearable></el-input>
              </div>

              <div class="reservation-input-cell">
                <span class="reservation-key">手机号</span>
                <el-input v-model="phone" placeholder="请输入您的真实手机号，便于查询维修进度" resize="both" clearable></el-input>
              </div>

              <div class="reservation-input-cell">
                <span class="reservation-key">验证码</span>
                <el-input v-model="verification" placeholder="获取验证码" resize="both" clearable></el-input>
                <div class="verification-container" :class="{'verification-active-container': verificationActive}"
                     @click="verificationClick">
                  <span>{{verificationInfo}}</span>
                </div>
              </div>

              <div class="reservation-input-cell">
                <span class="reservation-key">预约时间</span>
                <el-date-picker
                  v-model="reservationTime"
                  type="date"
                  placeholder="选择日期"
                  style="width: 180px"
                >
                </el-date-picker>
                <el-time-picker
                  is-range
                  v-model="value4"
                  :picker-options="{
                    selectableRange: '18:30:00 - 20:30:00',
                    format: 'HH:mm'
                  }"
                  style="width: 190px; margin-left: 5px; height: 50px; line-height: 50px;"
                  range-separator=""
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                  placeholder="选择时间范围">
                </el-time-picker>
              </div>

              <div class="reservation-btn-container">
                <img src="../assets/img/home_reservationprocess_button@2x.png" alt="">
                <span>提交预约</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    <!--服务环境-->
    <div class="environmental">
      <img src="../assets/img/home_serviceenvironment_bg@2x.png" alt="">
      <div class="environmental-container">
        <div class="environmental-main">
          <ServiceTitle info="SERVICE ITEMS" name="服务环境" content="提供舒适清爽的一对一服务空间" :bgActive="true"></ServiceTitle>
          <div class="carousel">
            <el-carousel type="card" height="340px" :autoplay="false" arrow="never" indicator-position="none"
                         @change="carouselChange" ref="carousel">
              <!--<el-carousel-item v-for="item in 3" :key="item">-->
              <!--<h3>{{ item }}</h3>-->
              <!--</el-carousel-item>-->
              <el-carousel-item name="0">
                <img src="../assets/img/home_serviceenvironment_images@2x.png" alt="">
              </el-carousel-item>
              <el-carousel-item name="1">
                <img src="../assets/img/home_serviceenvironment_images1@2x.png" alt="">
              </el-carousel-item>
              <el-carousel-item name="2">
                <img src="../assets/img/home_serviceenvironment_images2@2x.png" alt="">
              </el-carousel-item>
            </el-carousel>
            <div class="indicator">
              <span v-for="(item, key) in 3" :key="key" @click="indicatorClick(key)">
                <span class="indicator-active" v-if="key === indicatorKey"></span>
                <img v-else src="../assets/img/home_serviceenvironment_button_no@2x.png" alt="">
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
              <img src="../assets/img/home_serviceenvironment_images@2x.png" alt="">
            </el-carousel-item>
            <el-carousel-item name="1">
              <img src="../assets/img/home_serviceenvironment_images1@2x.png" alt="">
            </el-carousel-item>
            <el-carousel-item name="2">
              <img src="../assets/img/home_serviceenvironment_images2@2x.png" alt="">
            </el-carousel-item>
          </el-carousel>
          <Indicators v-model="indicatorKey" :list="[1,1,1]"></Indicators>
        </div>
      </div>
    </div>

    <!--到店指引-->
    <div class="store">
      <ServiceTitle info="store guide" name="到店指引" content="400-960-8888">
        <span slot="content" class="store-content">
          <img src="../assets/img/home_storeguide_icon@2x.png" alt="">
          <span>400-960-8888</span>
        </span>
      </ServiceTitle>
      <div class="store-info">
        <h1>北京名表维修中心</h1>
        <p>营业时间：09:00-19:00（节假日不休）</p>
        <p>店铺地址：北京市西城区西单北大街甲133号西亨钟表维修中心（西单大悦城旁）</p>
        <p>乘车线路： 乘坐3路、130路、132路、133路、658路、659路、858路到莲坂北</p>
      </div>
      <div id="store-map"></div>
    </div>

    <Footer/>

    <!--预约遮罩-->
    <div class="reservation-shadow" v-show="reservationActive">
      <img src="../assets/img/home_popup_bg@2x.png" alt="">
      <div class="reservation-shadow-container">
        <div class="reservation-online-btn">
          <img src="../assets/img/home_popup_button@2x.png" alt="">
          <div class="reservation-online-msg">
            <img src="../assets/img/home_popup_button_icon@2x.png" alt="">
            <span>在线咨询</span>
          </div>
        </div>
        <div class="reservation-online-btn">
          <img src="../assets/img/home_popup_button1@2x.png" alt="">
          <div class="reservation-online-msg">
            <img src="../assets/img/home_popup_button_icon1@2x.png" alt="">
            <span>在线咨询</span>
          </div>
        </div>
      </div>
      <div class="reservation-shadow-close" @click="reservationClose">
        <img src="../assets/img/close.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import ServiceTitle from '../components/ServiceTitle.vue'
  import Indicators from '../components/Indicators.vue'
  import Header from '../components/Header'
  import Footer from '../components/Footer'
  import Reservation from '../components/Reservation'
  import HeaderMobile from '../components/HeaderMobile'
  // import {Swipe, SwipeItem, Picker} from 'mint-ui'
  // import 'mint-ui/lib/style.css'
  // import 'element-ui/lib/theme-chalk/index.css';

  export default {
    head: {
      script: [
        {src: 'http://api.map.baidu.com/api?v=2.0&ak=L2fFIBoizTO5nxe7ypgsV3pHGmYw6tqx'},
        // { src: 'https://c.mipcdn.com/static/v1/mip.js'},
      ],
      link: [
        // { rel: 'stylesheet', href: 'https://c.mipcdn.com/static/v1/mip.css'}
      ]
    },
    components: {
      ServiceTitle,
      Indicators,
      Header,
      Footer,
      Reservation,
      HeaderMobile
    },
    data() {
      return {
        brand: '',
        name: '',
        phone: '',
        verification: '',
        options: [
          {value: '选项1', label: '走快走慢1'},
          {value: '选项2', label: '走快走慢2'},
          {value: '选项3', label: '走快走慢3'},
          {value: '选项4', label: '走快走慢4'}
        ],
        indicatorKey: 0,
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
        value1: [],
        list1: [
          {name: '广东', value: 'gd', parent: 0},
          {name: '广西', value: 'gx', parent: 0},
          {name: '广州', value: 'gz', parent: 'gd'},
          {name: '深圳', value: 'sz', parent: 'gd'},
          {name: '南宁', value: 'nn', parent: 'gx'},
          {name: '桂林', value: 'gl', parent: 'gx'}
        ],
        brandList: [1, 1, 1, 1, 1],
        certificationList: [1, 1, 1, 1, 1],
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
        technicianCarouselList: [1,1,1,1,1],
        mobileNavList: [
          {name: '品牌门店', href: '/brand'},
          {name: '维修案例', href: '/case'},
          {name: '维修进度', href: '/order'},
          {name: '维修地址', href: '/servicelist'},
        ]
      }
    },
    mounted() {
      if (window.BMap) {
        let map = new BMap.Map("store-map");
        let point = new BMap.Point(116.331398, 39.897445);
        map.centerAndZoom(point, 12);
        // 创建地址解析器实例
        let myGeo = new BMap.Geocoder();
        // 将地址解析结果显示在地图上,并调整地图视野
        myGeo.getPoint("北京市西城区西单北大街甲133号西亨钟表维修中心（西单大悦城旁）", function (point) {
          if (point) {
            map.centerAndZoom(point, 16);
            map.addOverlay(new BMap.Marker(point));
          } else {
            alert("您选择地址没有解析到结果!");
          }
        });
      }
      // console.log(window.BMap)
      // console.log(BMap)
      this.stackHeight = parseInt(window.innerWidth * 0.4667)
      this.certificationHeight = this.$refs.certification320[0].clientHeight
      this.brandMainHeight = this.$refs.brandMainImgWrapper[0].clientHeight
    },
    methods: {
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
      leftIconClick(){
        if(this.technicianIndex > 0) this.$refs.technicianCarousel.setActiveItem(--this.technicianIndex)
      },
      rightIconClick(){
        if(this.technicianIndex < this.technicianCarouselList.length - 1) this.$refs.technicianCarousel.setActiveItem(++this.technicianIndex)
      },
      verificationClick() {
        this.verificationActive = true
        this.verificationInfo = '30S'
      },
      certificationIndexChange(index) {
        this.certificationIndex = index
      },
      brandIndexChange(index) {
        this.brandIndex = index
      },
      brandClick(url, key) {
        this.brandIndex = key
        // this.$router.push({path: url})
      },
      goto(item){
        this.$router.push({path: item.href})
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
</style>

