<template>
  <div class="city">
    <div class="header">
      <div class="title">
        <div class="pure-g">
          <div class="pure-u-1-3"><a href=""><i class="iconfont">&#xe679;</i></a></div>
          <div class="pure-u-1-3"><span class="pure-u-1">选择城市</span></div>
          <div class="pure-u-1-3"><a href="javascript:void(0)"><i class="iconfont"></i></a></div>
        </div>
      </div>
    </div>
    <div class="middle" id="middle">
      <div class="list">
        <div class="index-list-inner" id="index-list-inner">
          <ul class="index-list-view">
            <li class="hot" data-group="热">
              <div class="pure-g">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-22-24">
                  <p class="city-now">定位城市</p>
                  <a href="javascript:void(0)" v-cloak @click="chooseCity(city)">{{city}}</a>
                </div>
                <div class="pure-u-1-24"></div>
              </div>
              <div class="pure-g">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-22-24">
                  <p class="city-hot">热门城市</p>
                  <div class="pure-g">
                    <div class="pure-u-1-4"><a href="javascript:void(0)" @click="chooseCity('北京')">北京</a></div>
                    <div class="pure-u-1-4"><a href="javascript:void(0)" @click="chooseCity('上海')">上海</a></div>
                    <div class="pure-u-1-4"><a href="javascript:void(0)" @click="chooseCity('杭州')">杭州</a></div>
                    <div class="pure-u-1-4"><a href="javascript:void(0)" @click="chooseCity('天津')">天津</a></div>
                    <div class="pure-u-1-4"><a href="javascript:void(0)" @click="chooseCity('深圳')">深圳</a></div>
                    <div class="pure-u-1-4"><a href="javascript:void(0)" @click="chooseCity('广州')">广州</a></div>
                  </div>
                </div>
                <div class="pure-u-1-24"></div>
              </div>
            </li>
            <li class="index-list-group" data-group="A">
              <div class="pure-g letter ">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-23-24">A</div>
              </div>
            </li>
            <li class="index-list-item" v-for="item of citys.A">
              <div class="pure-g" @click="chooseCity(item.name)">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-22-24">
                  <p v-cloak>{{item.name}}</p>
                </div>
                <div class="pure-u-1-24"></div>
              </div>
            </li>
            <li class="index-list-group letter" data-group="B">
              <div class="pure-g">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-23-24">B</div>
              </div>
            </li>
            <li class="index-list-item" v-for="item of citys.B">
              <div class="pure-g" @click="chooseCity(item.name)">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-22-24">
                  <p v-cloak>{{item.name}}</p>
                </div>
                <div class="pure-u-1-24"></div>
              </div>
            </li>
            <li class="index-list-group letter" data-group="C">
              <div class="pure-g">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-23-24">C</div>
              </div>
            </li>
            <li class="index-list-item" v-for="item of citys.C">
              <div class="pure-g" @click="chooseCity(item.name)">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-22-24">
                  <p v-cloak>{{item.name}}</p>
                </div>
                <div class="pure-u-1-24"></div>
              </div>
            </li>
            <li class="index-list-group letter" data-group="D">
              <div class="pure-g">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-23-24">D</div>
              </div>
            </li>
            <li class="index-list-item" v-for="item of citys.D">
              <div class="pure-g" @click="chooseCity(item.name)">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-22-24">
                  <p v-cloak>{{item.name}}</p>
                </div>
                <div class="pure-u-1-24"></div>
              </div>
            </li>
            <li class="index-list-group letter" data-group="E">
              <div class="pure-g">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-23-24">E</div>
              </div>
            </li>
            <li class="index-list-item" v-for="item of citys.E">
              <div class="pure-g" @click="chooseCity(item.name)">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-22-24">
                  <p v-cloak>{{item.name}}</p>
                </div>
                <div class="pure-u-1-24"></div>
              </div>
            </li>
            <li class="index-list-group letter" data-group="F">
              <div class="pure-g">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-23-24">F</div>
              </div>
            </li>
            <li class="index-list-item" v-for="item of citys.F">
              <div class="pure-g" @click="chooseCity(item.name)">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-22-24">
                  <p v-cloak>{{item.name}}</p>
                </div>
                <div class="pure-u-1-24"></div>
              </div>
            </li>
            <li class="index-list-group letter" data-group="G">
              <div class="pure-g">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-23-24">G</div>
              </div>
            </li>
            <li class="index-list-item" v-for="item of citys.G">
              <div class="pure-g" @click="chooseCity(item.name)">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-22-24">
                  <p v-cloak>{{item.name}}</p>
                </div>
                <div class="pure-u-1-24"></div>
              </div>
            </li>
            <li class="index-list-group letter" data-group="H">
              <div class="pure-g">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-23-24">H</div>
              </div>
            </li>
            <li class="index-list-item" v-for="item of citys.H">
              <div class="pure-g" @click="chooseCity(item.name)">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-22-24">
                  <p v-cloak>{{item.name}}</p>
                </div>
                <div class="pure-u-1-24"></div>
              </div>
            </li>
            <li class="index-list-group letter" data-group="I">
              <div class="pure-g">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-23-24">I</div>
              </div>
            </li>
            <li class="index-list-item" v-for="item of citys.I">
              <div class="pure-g" @click="chooseCity(item.name)">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-22-24">
                  <p v-cloak>{{item.name}}</p>
                </div>
                <div class="pure-u-1-24"></div>
              </div>
            </li>
            <li class="index-list-group letter" data-group="J">
              <div class="pure-g">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-23-24">J</div>
              </div>
            </li>
            <li class="index-list-item" v-for="item of citys.J">
              <div class="pure-g" @click="chooseCity(item.name)">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-22-24">
                  <p v-cloak>{{item.name}}</p>
                </div>
                <div class="pure-u-1-24"></div>
              </div>
            </li>
            <li class="index-list-group letter" data-group="K">
              <div class="pure-g">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-23-24">K</div>
              </div>
            </li>
            <li class="index-list-item" v-for="item of citys.K">
              <div class="pure-g" @click="chooseCity(item.name)">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-22-24">
                  <p v-cloak>{{item.name}}</p>
                </div>
                <div class="pure-u-1-24"></div>
              </div>
            </li>
            <li class="index-list-group letter" data-group="L">
              <div class="pure-g">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-23-24">L</div>
              </div>
            </li>
            <li class="index-list-item" v-for="item of citys.L">
              <div class="pure-g" @click="chooseCity(item.name)">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-22-24">
                  <p v-cloak>{{item.name}}</p>
                </div>
                <div class="pure-u-1-24"></div>
              </div>
            </li>
            <li class="index-list-group letter" data-group="M">
              <div class="pure-g">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-23-24">M</div>
              </div>
            </li>
            <li class="index-list-item" v-for="item of citys.M">
              <div class="pure-g" @click="chooseCity(item.name)">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-22-24">
                  <p v-cloak>{{item.name}}</p>
                </div>
                <div class="pure-u-1-24"></div>
              </div>
            </li>
            <li class="index-list-group letter" data-group="N">
              <div class="pure-g">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-23-24">N</div>
              </div>
            </li>
            <li class="index-list-item" v-for="item of citys.N">
              <div class="pure-g" @click="chooseCity(item.name)">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-22-24">
                  <p v-cloak>{{item.name}}</p>
                </div>
                <div class="pure-u-1-24"></div>
              </div>
            </li>
            <li class="index-list-group letter" data-group="O">
              <div class="pure-g">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-23-24">O</div>
              </div>
            </li>
            <li class="index-list-item" v-for="item of citys.O">
              <div class="pure-g" @click="chooseCity(item.name)">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-22-24">
                  <p v-cloak>{{item.name}}</p>
                </div>
                <div class="pure-u-1-24"></div>
              </div>
            </li>
            <li class="index-list-group letter" data-group="P">
              <div class="pure-g">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-23-24">P</div>
              </div>
            </li>
            <li class="index-list-item" v-for="item of citys.P">
              <div class="pure-g" @click="chooseCity(item.name)">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-22-24">
                  <p v-cloak>{{item.name}}</p>
                </div>
                <div class="pure-u-1-24"></div>
              </div>
            </li>
            <li class="index-list-group letter" data-group="Q">
              <div class="pure-g">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-23-24">Q</div>
              </div>
            </li>
            <li class="index-list-item" v-for="item of citys.Q">
              <div class="pure-g" @click="chooseCity(item.name)">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-22-24">
                  <p v-cloak>{{item.name}}</p>
                </div>
                <div class="pure-u-1-24"></div>
              </div>
            </li>
            <li class="index-list-group letter" data-group="R">
              <div class="pure-g">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-23-24">R</div>
              </div>
            </li>
            <li class="index-list-item" v-for="item of citys.R">
              <div class="pure-g" @click="chooseCity(item.name)">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-22-24">
                  <p v-cloak>{{item.name}}</p>
                </div>
                <div class="pure-u-1-24"></div>
              </div>
            </li>
            <li class="index-list-group letter" data-group="S">
              <div class="pure-g">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-23-24">S</div>
              </div>
            </li>
            <li class="index-list-item" v-for="item of citys.S">
              <div class="pure-g" @click="chooseCity(item.name)">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-22-24">
                  <p v-cloak>{{item.name}}</p>
                </div>
                <div class="pure-u-1-24"></div>
              </div>
            </li>
            <li class="index-list-group letter" data-group="T">
              <div class="pure-g">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-23-24">T</div>
              </div>
            </li>
            <li class="index-list-item" v-for="item of citys.T">
              <div class="pure-g" @click="chooseCity(item.name)">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-22-24">
                  <p v-cloak>{{item.name}}</p>
                </div>
                <div class="pure-u-1-24"></div>
              </div>
            </li>
            <li class="index-list-group letter" data-group="U">
              <div class="pure-g">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-23-24">U</div>
              </div>
            </li>
            <li class="index-list-item" v-for="item of citys.U">
              <div class="pure-g" @click="chooseCity(item.name)">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-22-24">
                  <p v-cloak>{{item.name}}</p>
                </div>
                <div class="pure-u-1-24"></div>
              </div>
            </li>
            <!-- <li class="index-list-group letter" data-group="V">
                          <div class="pure-g">
                              <div class="pure-u-1-24"></div>
                              <div class="pure-u-23-24">V</div>
                          </div>
                      </li>
                      <li class="index-list-item">
                          <div class="pure-g">
                              <div class="pure-u-1-24"></div>
                              <div class="pure-u-22-24">
                                  <p>city</p>
                              </div>
                              <div class="pure-u-1-24"></div>
                          </div>
                      </li> -->
            <li class="index-list-group letter" data-group="W">
              <div class="pure-g">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-23-24">W</div>
              </div>
            </li>
            <li class="index-list-item" v-for="item of citys.W">
              <div class="pure-g" @click="chooseCity(item.name)">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-22-24">
                  <p v-cloak>{{item.name}}</p>
                </div>
                <div class="pure-u-1-24"></div>
              </div>
            </li>
            <li class="index-list-group letter" data-group="X">
              <div class="pure-g">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-23-24">X</div>
              </div>
            </li>
            <li class="index-list-item" v-for="item of citys.X">
              <div class="pure-g" @click="chooseCity(item.name)">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-22-24">
                  <p v-cloak>{{item.name}}</p>
                </div>
                <div class="pure-u-1-24"></div>
              </div>
            </li>
            <li class="index-list-group letter" data-group="Y">
              <div class="pure-g">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-23-24">Y</div>
              </div>
            </li>
            <li class="index-list-item" v-for="item of citys.Y">
              <div class="pure-g" @click="chooseCity(item.name)">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-22-24">
                  <p v-cloak>{{item.name}}</p>
                </div>
                <div class="pure-u-1-24"></div>
              </div>
            </li>
            <li class="index-list-group letter" data-group="Z">
              <div class="pure-g">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-23-24">Z</div>
              </div>
            </li>
            <li class="index-list-item" v-for="item of citys.Z">
              <div class="pure-g" @click="chooseCity(item.name)">
                <div class="pure-u-1-24"></div>
                <div class="pure-u-22-24">
                  <p v-cloak>{{item.name}}</p>
                </div>
                <div class="pure-u-1-24"></div>
              </div>
            </li>
          </ul>
        </div>
        <div class="index-list-alert" id="index-list-alert">A</div>
      </div>
      <div class="index-list-bar" id="index-list-bar">
        <!-- <a>热</a> -->
        <a v-for="(value,key) in citys" v-cloak>{{key}}</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:'city',
    data () {
      return{
        citys:'',
        city:''
      }
    }
  }
</script>

<style scoped></style>
