import { createStore } from 'vuex'
// import axios from 'axios'
export default createStore({
  state: {
    jobTitle: null,
    about: null,
    education: null,
    workExp: null,
    skill: null,
    projects: null,
    testimonials: null,
    contact: null
   
  },
  getters: {
  },
  mutations: {
    setjobTitle(state, payload) {
      state.jobTitle = payload
    },
    setabout (state, payload) {
      state.about = payload
    },
    seteducation (state, payload) {
      state.education = payload
    },
    setworkExp (state, payload) {
      state.workExp = payload
    },
    setskill (state, payload) {
      state.skill = payload
    },
    setprojects (state, payload) {
      state.projects = payload
    },
    settestimonials (state, payload) {
      state.testimonials = payload
    },
    setcontact (state, payload) {
      state.contact = payload
    },
  },
  actions: {
    async getData({commit}){
      try{
        let fetchInfo = await fetch('https://chany4.github.io/portfolio-vue.js-API/data/data.json')
      let data = await fetchInfo.json()
      console.log(data);
      let { jobTitle,about,education,workExp,skills,projects,testimonials,contact} = data

      commit('setjobTitle',jobTitle)
      commit('setabout',about)
      commit('seteducation',education)
      commit('setworkExp',workExp)
      commit('setskill',skills)
      commit('setprojects',projects)
      commit('settestimonials',testimonials)
      commit('setcontact',contact)
      }
      catch (error){
        console.log(error);
      }
      
      
    }
  },
  modules: {
  }
})