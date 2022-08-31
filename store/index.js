import { createStore } from 'vuex'
import router from '../router'
import {auth} from '../firebase'
import { createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut } from 'firebase/auth'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    async login ({commit}, details){
      const {email, password} = details
      try{
        await signInWithEmailAndPassword(auth, email, password)
        } catch(error){

          switch(error.code){
            case 'auth/user-not-found':
              alert("User not found")
              break
              case 'auth/wrong-password':
                alert("Wrong password")
                break
              default:
                alert("something went wrong")
          }
          return 

      }
      commit ('SET_USER', auth.currentUser)
      router.push('/')
  },

  async register ({commit}, details){
    const{email,password} =details
    try{
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (error){
      switch(error.code){
        case 'auth/email-already-in-use':
          alert("Email Already in use")
      
          break
          case 'auth/invalid-email':
            alert("invalid Eemail")
            break

            case 'auth/operation-not-allowed':
            alert("operation not allowed")
            break

            case 'auth/weak password':
              alert("weak password")
              break
                
          default:
            alert("something went wrong")
      }
      return 

    }
    commit ('SET_USER', auth.currentUser)
    router.push('/')
  },


  async logout ({commit}) {
    await signOut(auth)
    commit('CLEAR_USER')
    router.push('/login')

  }




}

});
