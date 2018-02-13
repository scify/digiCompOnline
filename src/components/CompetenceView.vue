<template>
  <div id="competence-breakdown" :class="{['comp-area-'+competenceArea.id]:true, open:menuIsOpened}">
    <header class="mdc-toolbar mdc-elevation--z4 bg">
      <div class="mdc-toolbar__row">
        <section class="mdc-toolbar__section mdc-toolbar__section--align-start">
          <button @click="clickMenu()" class="demo-menu material-icons mdc-toolbar__menu-icon">menu</button>
          <span class="mdc-toolbar__title catalog-title">{{competenceArea.name}}</span>
        </section>

      </div>
    </header>
    <main class="competence-main">
      <h1 class="mdc-typography--display1 color ">{{competence.name}}</h1>
      <h2 class="mdc-typography--title ">{{competence.hint}}</h2>


      <div class="mdc-layout-grid skills-container">
        <div class="mdc-layout-grid__inner">
          <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
            <div style="color:#757575;" class="mdc-typography--body1">
              Mastering each level for the skill will give you the ability to:<br><br>
              <!-- {{ competence }} -->

       <!-- TABS BEGIN -->
<!-- <tabs> -->
<!-- <tab v&#45;for="descr in competence.descriptors" :descr="descr" class="mdc&#45;typography&#45;&#45;body1" :name="'Level&#45;' + descr.id"  :key="descr.id"> -->
<!-- <li v&#45;for="items in descr.descriptors"> -->
<!-- {{ items }} -->
<!-- </li> -->
<!-- </tab> -->
<!-- </tabs> -->
       <!-- TABS END -->

       <!-- timeline begin -->

           <section id="cd-timeline" class="cd-container">
             <div v-for="descr in competence.descriptors" :descr="descr" class="cd-timeline-block mdc-typography--body1" :name="'Level-' + descr.id"  :key="descr.id">
               <div class="cd-timeline-img cd-picture">
		       <em class="cd-timeline-img-level">{{ descr.id }}</em>
               </div>
	       <div class="cd-timeline-content">
		       <ul>
		       <li v-for="items in descr.descriptors">
		       {{ items }}
		       </li>
		       </ul>
	       </div>
             </div>


             <!-- timeline block -->
             <!-- cd-timeline-img -->
             <!-- level -->
             <!-- cd-timeline-content -->
             <!-- level text -->

           </section>
       <!-- timeline end -->

            </div>
            <!-- <a id="assess&#45;tool" href="javascript:void(0)" class="mdc&#45;button mdc&#45;button&#45;&#45;unelevated mdc&#45;ripple&#45;upgraded"> -->
              <!-- Assess yourself -->
<!-- </a> -->
          </div>
          <br class="chart-separator">
          <div id="competences-chart-container" class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12"></div>
        </div>
      </div>

      <aside id="mdc-dialog"
             class="mdc-dialog"
             role="alertdialog"
             aria-labelledby="mdc-dialog-with-list-label"
             aria-describedby="mdc-dialog-with-list-description">
        <div class="mdc-dialog__surface">
          <header class="mdc-dialog__header">
            <h2 id="mdc-dialog-default-label" class="mdc-dialog__header__title">
              Coming Soon!
            </h2>
          </header>
          <section id="mdc-dialog-default-description" class="mdc-dialog__body">
            Thanks for your patience.


          </section>
          <footer class="mdc-dialog__footer">
            <button type="button"
                    class="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--cancel mdc-ripple-upgraded"
                    style="--mdc-ripple-fg-size:53.03999633789062px; --mdc-ripple-fg-scale:1.9881081289759257;">Close


            </button>
          </footer>
        </div>
        <div class="mdc-dialog__backdrop"></div>
      </aside>


    </main>
    <comp-footer v-bind:competence="competence" v-bind:competence-area="competenceArea"></comp-footer>
  </div>
</template>

<script>
  import eventBus from '../eventBus/eventBus.js'
  import extractCompetencesFromUrlMixin from '../mixIns/extractCompetencesFromUrlMixin.js'
  import footer from './CompetencesFooter.vue'
  import CirclesChart from '../circles-chart.js'
  import {MDCDialog} from '@material/dialog';

  let circlesChart = new CirclesChart('competences-chart-container');

  export default {
    mixins: [extractCompetencesFromUrlMixin],
    components: {
      "comp-footer": footer
    },
    data () {
      return {
        competence: null,
        competenceArea: null,
        menuIsOpened: true
      }
    },
    methods: {
      clickMenu()
      {
        eventBus.$emit('toggle-menu');
      }
    },
    mounted(){
      console.log("view is mounted");
      circlesChart.drawChart();
      circlesChart.select(this.competence.id, 'competence'); // select only competences and not areas

      const dialog = new MDCDialog(document.querySelector('#mdc-dialog'));
      document.querySelector('#assess-tool').addEventListener('click', function (evt) {
        dialog.lastFocusedTarget = evt.target;
        dialog.show();
      });
    },
    created()
    {
      let urlInfo = this.findCompetenceFromUrl();
      this.competence = urlInfo.competence;
      this.competenceArea = urlInfo.competenceArea;

      eventBus.$on("MDCPersistentDrawer:open", () => {
        this.menuIsOpened = true;
        setTimeout(function() {
          circlesChart.resizeChart()
        }, 50)
      });
      eventBus.$on("MDCPersistentDrawer:close", () => {
        this.menuIsOpened = false;
        setTimeout(function() {
          circlesChart.resizeChart()
        }, 50)
      });
      eventBus.$on("competence-changed", (comp) => {
        this.competence = comp;
        this.competenceArea = this.findCompetenceAreaByCompetence(comp);
        circlesChart.select(comp.id, 'competence'); // select only competences and not areas
      });
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../scss/config/colors";
  @import "../../node_modules/vue-tabs-component/docs/resources/tabs-component.css";

  .skills-container {
    padding: 0;
  }

  #assess-tool {
    margin-top: 40px;
  }
  .mdc-toolbar, .mdc-toolbar__row {
    min-height: 56px;
  }



  .skills {
    border-left: 5px solid;
    padding-left: 20px;
    margin-top: 20px;
    margin-bottom: 30px;

    h1 {
      margin: 0;
      font-size: 15px;
      line-height: 16px;
      padding-bottom: 12px;
      font-weight: 400;
      color: #757575;
    }

    ul {
      list-style: none;
      margin-top: 0;
      padding-left: 0;
    }

    li {
      font-size: 20px;
      line-height: 40px;
    }
  }

  .mdc-toolbar__title {
    font-weight: 400;
  }

  .mdc-typography--title {
    font-weight: 400;
  }

  .comp-area-1 {
    .bg {
      background-color: $dark-blue;
    }
    .color {
      color: $dark-blue;
    }
    .bl-color {
      border-left-color: $dark-blue;
    }

  }

  .comp-area-2 {
    .bg {
      background-color: $crimson;
    }
    .color {
      color: $crimson;
    }
    .bl-color {
      border-left-color: $crimson;
    }
  }

  .comp-area-3 {
    .bg {
      background-color: $blue;
    }
    .color {
      color: $blue;
    }
    .bl-color {
      border-left-color: $blue;
    }
  }

  .comp-area-4 {
    .bg {
      background-color: $safetyColor;
    }
    .color {
      color: $safetyColor;
    }
    .bl-color {
      border-left-color: $safetyColor;
    }
  }

  .comp-area-5 {
    .bg {
      background-color: $problemSolvingColor;
    }
    .color {
      color: $problemSolvingColor;
    }
    .bl-color {
      border-left-color: $problemSolvingColor;
    }
  }
</style>
