(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"2a5c":function(t,e,s){"use strict";var o=s("6bc0");s.n(o).a},"6bc0":function(t,e,s){},"8aab":function(t,e,s){"use strict";s.r(e);s("a481");var o=s("22b4"),c=s.n(o),l=s("a26a"),n={computed:{fullscreen:{get:function(){return this.$store.state.fullscreen},set:function(t){this.$store.commit("fullscreen",t),t?(localStorage.setItem("fullscreen",!0),document.documentElement.requestFullscreen()):(localStorage.removeItem("fullscreen"),document.exitFullscreen())}},musicVolume:{get:function(){return parseFloat(localStorage.getItem("musicVolume"))},set:function(t){c.a.me.audio.fade("music",parseFloat(localStorage.getItem("musicVolume"))/100,t/100,1e3,this.$store.state.musicTrack),localStorage.setItem("musicVolume",t)}},soundVolume:{get:function(){return this.$store.state.soundVolume},set:function(t){this.$store.commit("soundVolume",t),localStorage.setItem("soundVolume",t)}}},methods:{back:function(){this.$router.replace("/menu")},login:function(){l.a.getInstance().state={search:"?settings"}}}},i=(s("2a5c"),s("2877")),a=Object(i.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-page",{staticClass:"page"},[o("q-list",[o("q-item",[o("q-item-section",{staticClass:"items-center"},[o("img",{staticClass:"logo",attrs:{src:s("5f38")}})])],1),t.$store.state.user?t._e():o("q-item",{attrs:{to:"/login",exact:"",replace:""}},[o("q-item-section",{staticClass:"items-stretch"},[o("q-btn",{attrs:{color:"red-10",glossy:"",push:"",rounded:"","no-caps":""},on:{click:t.login}},[t._v("Login")])],1)],1),t.$q.platform.is.cordova?t._e():o("q-item",[o("q-item-section",{attrs:{side:""}},[o("q-checkbox",{staticClass:"text-white",attrs:{"left-label":"",label:"Fullscreen:","keep-color":"",color:"grey"},model:{value:t.fullscreen,callback:function(e){t.fullscreen=e},expression:"fullscreen"}})],1)],1),o("q-item",[o("q-item-section",{staticClass:"text-white",attrs:{side:""}},[t._v("\n\t\t\t\tMusic volume:\n\t\t\t")]),o("q-item-section",[o("q-slider",{attrs:{min:0,max:100},model:{value:t.musicVolume,callback:function(e){t.musicVolume=t._n(e)},expression:"musicVolume"}})],1)],1),o("q-item",[o("q-item-section",{staticClass:"text-white",attrs:{side:""}},[t._v("\n\t\t\t\tSound volume:\n\t\t\t")]),o("q-item-section",[o("q-slider",{attrs:{min:0,max:100},model:{value:t.soundVolume,callback:function(e){t.soundVolume=t._n(e)},expression:"soundVolume"}})],1)],1),o("q-item",[o("q-item-section",[o("q-item-section",{staticClass:"items-stretch"},[o("q-btn",{attrs:{color:"red-10",glossy:"",push:"",rounded:"","no-caps":""},on:{click:t.back}},[t._v("< Back")])],1)],1)],1)],1)],1)}),[],!1,null,"009b39c8",null);e.default=a.exports}}]);