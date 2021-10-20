import { getDocs,getDoc,setDoc,arrayUnion, updateDoc, doc ,collection, query, where} from "firebase/firestore"; 
import firestore from './init-firebase.js'

class Database {
    async getAllData( userid) {
      return (await getDoc(doc(firestore,"users", userid))).data();
    }

    async register(userId){
        await setDoc(doc(firestore, "users",userId), {
            category: [],
            exp: 0
          });
    }
  
    async createCategory(data, userId) {
        await setDoc(doc(firestore, "users",userId), data);
    }

    async addTask(data, userId) {
        await setDoc(doc(firestore, "users",userId), data);
    }

    createTask(category, userId, newTask){

    }
  
    // update(id, value) {
    //   return db.doc(id).update(value);
    // }
  
    // delete(id) {
    //   return db.doc(id).delete();
    // }
  }
  
  export default new Database();