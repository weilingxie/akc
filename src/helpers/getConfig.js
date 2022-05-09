import db from "./firebase";
import { collection, getDocs } from "firebase/firestore";

const getConfig = async () => {
  const querySnapshot = await getDocs(collection(db, "config"));
  let config;
  querySnapshot.forEach((doc) => {
    config = doc.data();
  });
  return config;
};

export default getConfig;
