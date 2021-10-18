import { getDocs,setDoc,arrayUnion, updateDoc, doc ,collection, query, where} from "firebase/firestore"; 
import firestore from './init-firebase.js'

class Database {
    // getAllData() {
    //   return db;
    // }

    async register(userId){
        await setDoc(doc(firestore, "users",userId), {
            category: [],
            exp: 0
          });
    }
  
    async createCategory(category, userId) {
        await updateDoc(doc(firestore, "users", userId), {
            category: arrayUnion(category)
        });
    }

    async addTask(task,category, userId) {
        const q = query(collection(firestore,"users"), where('category.name', '==', category))
        const querysnap = await getDocs(q)
        querysnap.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
          });
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